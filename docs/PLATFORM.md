# PMP Field Trainer — Platform Architecture & Roadmap

*Working doc for Farooq + Faraz. The question isn't "can we build more features" — it's
how this becomes a product people pay for and come back to, rather than a nice quiz anyone
could approximate by asking an LLM. This is the plan for that.*

---

## 1. The thesis

Content is not the moat. Anyone can ask Claude or ChatGPT for a PMP question, and there are
a dozen free banks. If the product's only value is "here are questions," it loses.

The defensible value is the **system around the questions**:

- **Adaptive progression** — the app knows what *you* specifically are weak on and drills it.
- **Spaced repetition** — your misses come back on a schedule until they stick (shipped in v3).
- **A trustworthy readiness signal** — "you are 82% ready, weakest in Business Environment,
  book in ~2 weeks." That judgment is the thing a candidate actually wants and an LLM chat
  can't give them over time.
- **Accountability + habit** — streaks, daily goals, reminders, leagues. This is why Duolingo
  retains; it's the hardest thing to copy and the easiest to monetize.
- **A channel** — Farooq already teaches (Elmhurst, workshops). Cohorts and a teacher view
  make the app part of a course, not a standalone download.

Everything below exists to deliver those five things.

---

## 2. Where we are today (v1–v3)

- A self-contained **PWA** (installable, offline) plus a **Capacitor** shell for the App Store.
- 300 current (2026-outline) questions; Mock Exam, Quick 10, practice by domain.
- **Lightning Round** game mode; **badges/XP/levels**; **daily goal**; **streak + streak-freeze**;
  **spaced-repetition review** of missed questions.
- All state lives in **`localStorage`** — per-device, per-browser. No account, no server.

**What that cannot do (the reason for this doc):**

- No cross-device continuity (practice on your phone, nothing on your laptop).
- No leaderboards or social — the single biggest retention lever we're leaving on the table.
- No reminders when the app is closed (localStorage can't push you anything).
- No cohort / teacher dashboard.
- No analytics *for us* — we can't see what's working or what questions are broken.

---

## 3. Target architecture

Keep the frontend exactly as it is — the PWA stays the client. Add a **thin backend** so state
lives in the cloud and can be shared, pushed, and analyzed.

**Recommended stack: Supabase.**

- Postgres + **Auth** + **Row-Level Security** + **Realtime** + Edge Functions, usable directly
  from a static PWA via the JS SDK — no separate API server to write or host.
- SQL is the right shape for leaderboards, cohorts, and analytics (a NoSQL store makes those
  painful).
- RLS gives secure multi-tenant data ("a user can only read/write their own rows") declared in
  the database, not in hand-written middleware.
- Free tier covers launch; ~$25/mo when it grows.

*Alternative:* Firebase — nicer native mobile SDKs, but Firestore (NoSQL) makes leaderboards and
cohort analytics harder, and you'll fight aggregation queries. Pick Supabase unless Faraz has a
strong Firebase preference from past apps.

**Auth:** email magic link (Supabase built-in) + **Sign in with Apple** (expected by App Review
when you offer any third-party login) + Google.

**Offline-first sync:** the client keeps working offline against `localStorage` as it does now,
and syncs when online. The clean model is an **append-only `attempts` log** — every answer is an
immutable event. Streak, readiness, and review state are *derived* from attempts, so two devices
never "conflict"; they just both append, and the server recomputes. This avoids last-write-wins
headaches entirely.

---

## 4. Data model (Postgres sketch)

```sql
-- identity
users           (id uuid pk, email, display_name, exam_date date, plan text default 'free', created_at)

-- the source of truth: one immutable row per answered question
attempts        (id uuid pk, user_id fk, question_id int, mode text,     -- 'mock'|'quick'|'lightning'|'review'|domain
                 correct bool, chosen int, answered_at timestamptz)

-- derived / mutable per-user state (can be rebuilt from attempts)
review_state    (user_id fk, question_id int, box int, due_at timestamptz, primary key(user_id,question_id))
streaks         (user_id pk fk, current int, longest int, last_active date, freezes int)
daily_progress  (user_id fk, day date, answered int, goal int, primary key(user_id,day))

-- leaderboard is a query/materialized view over attempts (XP in the last 7 days), not a table
```

RLS: every table filters `user_id = auth.uid()`. The leaderboard view exposes only
`display_name` + score, nothing private.

**Question bank:** ship it as a **versioned static JSON** with the app for now (zero latency,
works offline). Move to a `questions` table later when you want to edit/add questions without a
release and run a content-admin screen.

---

## 5. Sync contract (keep it dumb and robust)

1. On answer → write locally (instant UX) **and** enqueue an `attempt`.
2. On reconnect → flush the queue to Supabase (`insert into attempts`). Idempotent via a
   client-generated `id`, so retries are safe.
3. Server (or a scheduled function) recomputes `review_state`, `streaks`, readiness.
4. On login on a new device → pull the user's derived state; the UI is identical.
5. **Migration:** on first login, replay the existing `localStorage` history as seed attempts so
   nobody loses progress.

---

## 6. What this unlocks — in priority order

1. **Accounts + cross-device sync** (Phase 1). Table stakes for everything else.
2. **Weekly leaderboards / leagues** (Phase 2). Duolingo's highest-retention mechanic. Cheap on
   top of the attempts log.
3. **Reminders / push** (Phase 3). The biggest lever for people who close the app: daily nudge,
   "streak at risk," "12 questions due in review," league results.
4. **Cohorts + teacher dashboard** (Phase 4+). Farooq's classes get a join code; he sees class
   readiness and weak areas. Turns the app into courseware and a referral engine.
5. **Adaptive difficulty / weakness targeting.** With the data server-side, serve each user more
   of what they miss and fewer gimmes.
6. **Content pipeline.** Edit questions and ship fixes without an app release.

---

## 7. Notifications

- **PWA / web push:** VAPID + the existing service worker. Works on Android and desktop; iOS
  Safari supports web push **only for installed PWAs on 16.4+**.
- **Native iOS:** APNs via the Capacitor Push Notifications plugin.
- **Triggers:** daily reminder at a user-chosen time, streak-at-risk (before midnight local),
  review items due, weekly league standings.

---

## 8. Monetization

- **Freemium.** Free: daily practice, limited mocks, basic stats. **Pro:** unlimited mocks, full
  analytics + readiness model, adaptive review, leagues.
- **Price:** one-time **$29–49** or **$7–12/mo**. For reference, PMI Study Hall runs roughly
  $49–149 — undercut on both price and UX.
- **Payments:** Stripe on the web. iOS in-app purchases must use StoreKit (Apple takes 15–30%).
  Strong option: sell **web-first** (keep the margin), and let the iOS app be a login to the same
  Pro account — common and allowed when the app doesn't itself pitch the external purchase.

---

## 9. Phased plan (rough effort for one experienced dev)

| Phase | Scope | Effort |
|------|-------|--------|
| 0 | Client PWA + iOS shell | ✅ done |
| 1 | Supabase auth + attempts sync + local-state migration → **cross-device** | 1–2 weeks |
| 2 | Weekly leaderboard + leagues | ~1 week |
| 3 | Web push + iOS push reminders | ~1 week |
| 4 | Stripe paywall + Pro gating | 1–2 weeks |
| 5 | Content admin, cohorts/teacher dashboard, adaptive engine | ongoing |

Ship Phase 1 and **watch whether retention actually moves** before building leagues. Don't build
all five on faith.

---

## 10. Costs & risks

**Costs:** Supabase free → ~$25/mo at scale · Stripe ~2.9% + 30¢ · Apple Developer $99/yr (+15–30%
on any IAP) · domain ~$12/yr · transactional email on a free tier (Supabase/Resend).

**Risks:**
- **App Review 4.2 (minimum functionality).** A bare quiz wrapper gets rejected. Accounts, push,
  offline content, and leagues are exactly the "real app" signals that clear it.
- **Scope creep.** The plan is deliberately phased; validate before expanding.
- **Privacy.** RLS + minimal PII, plus a privacy policy and account deletion — both required for
  the App Store anyway.

---

## 11. Decisions I'd want Faraz to weigh in on

1. **Supabase vs Firebase** — I'm recommending Supabase for the SQL/leaderboard/analytics story.
   Agree, or does your past App Store work push you to Firebase?
2. **Append-only attempts** as the sync model vs syncing mutable state. I think append-only is the
   robust choice; sanity-check that.
3. **Monetization: web-first Stripe vs iOS IAP.** Margin vs friction.
4. **Sequencing: leagues before push, or push first?** Both are Phase 2–3; which moves retention
   more for this audience (adult professionals, not kids)?

---

*Current build: 300 questions on the 2026 PMI outline · PWA + Capacitor · live at
`https://fshah90-web.github.io/pmp-field-trainer/web/`. This doc lives in the repo at
`docs/PLATFORM.md`.*
