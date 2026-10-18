# PMP Field Trainer

A gamified PMP exam-prep app built on the **2026 PMI Examination Content Outline** (the exam PMI
launched 9 July 2026: People 33% / Process 41% / Business Environment 26%, 180 questions /
240 minutes, PMBOK 8, ~40% predictive / 60% agile-hybrid).

**Live:** https://fshah90-web.github.io/pmp-field-trainer/web/
(On iPhone: open in Safari → Share → Add to Home Screen. Works offline.)

## What's in it
- **300** original, scenario-style questions, each with an explanation.
- **Mock Exam** — 40 questions sampled at true exam weighting (13 People / 16 Process / 11 Business).
- **Quick 10** and **practice by domain** (People, Process, Business, Agile & Hybrid, Formulas).
- **Lightning Round** — 60-second game mode with combo multipliers, lives, and a high score.
- **Review Misses** — spaced repetition (Leitner boxes) that resurfaces questions you got wrong
  until they stick.
- **Retention layer** — daily goal, streaks with a streak-freeze, XP/levels, and an Awards screen
  with 18 badges.
- **Unseen-first rotation** — back-to-back sets don't repeat; answer options shuffle every view.
- Progress is saved per-device in the browser (no account yet — see the roadmap).

## Repo layout
- `web/` — the PWA that's deployed on GitHub Pages. Service worker handles offline + a
  "new version available" update prompt. Deploy: see `web/DEPLOY.md`.
- `capacitor/` — Capacitor scaffold to wrap the app for the Apple App Store. Steps in
  `capacitor/SETUP.md`.
- `docs/PLATFORM.md` — **architecture & roadmap** for turning this into an accounts-based
  platform (sync, leaderboards, push, cohorts, monetization). Read this before building the backend.

## Updating
Edit files and `git push` → GitHub Pages redeploys. When you change `web/index.html`, bump the
cache name in `web/service-worker.js` (e.g. `pmpft-v4` → `v5`) so installed devices pick up the
new version.

---
Built from *The PMP Field Guide* — Professor Farooq A. Shah, MPM, PMP, ACP, PCT, LSSBB.
