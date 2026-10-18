# PMP Field Trainer

A gamified PMP exam-prep app: 300 current (2026-outline) questions, a weighted mock
exam, practice by domain, a study map, and progress tracking. Two ways to ship it:

## `web/` — install it on phones now (no App Store)
A complete Progressive Web App. Put it on any static https host and anyone can "Add to
Home Screen" and run it full-screen, offline.
- **Fastest:** drag the `web/` folder onto https://app.netlify.com/drop → you get a live link.
- iPhone: open the link in Safari → **Share → Add to Home Screen**.
- Android: Chrome → **Install app**.
- It now **auto-checks for updates**: when you redeploy, installed devices show a
  "New version available — Refresh" bar. (When you change `index.html`, bump `pmpft-v2`
  to `pmpft-v3` in `service-worker.js` so devices fetch the new files.)
- Full details: `web/DEPLOY.md`.

## `capacitor/` — build it for the Apple App Store
Wraps the same app as a native iOS app via Capacitor, to submit to the App Store.
Needs a Mac with Xcode and an Apple Developer account. Step-by-step: `capacitor/SETUP.md`.
A 1024×1024 app icon is included (`capacitor/icon-1024.png`).

---
Built from *The PMP Field Guide* — Professor Farooq A. Shah, MPM, PMP, ACP, PCT, LSSBB.
Aligned to the PMI 2026 Examination Content Outline (exam of 9 July 2026).
