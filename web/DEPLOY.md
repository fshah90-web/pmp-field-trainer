# PM Professor — installable app (PWA)

This folder is a complete, self-contained web app. Drop it on any static host and
it installs to a phone or desktop home screen, runs full-screen, and works offline
after the first visit. No build step, no dependencies.

## What's in here
- `index.html` — the whole app (300 questions, mock exam, study map)
- `manifest.webmanifest` — app name, colors, icons
- `service-worker.js` — caches the app so it works offline and is installable
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `apple-touch-icon.png`, `favicon-64.png`

## Put it online (pick one)

**Easiest — Netlify Drop (no account math, ~1 min)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live URL like `https://your-name.netlify.app`. Share that with Faraz.

**GitHub Pages**
1. Create a repo, upload these files to the root (or a `/docs` folder).
2. Settings → Pages → deploy from branch → `main` / root.
3. Your URL is `https://<user>.github.io/<repo>/`. The app uses relative paths, so a subfolder is fine.

**Cloudflare Pages / Vercel** — same idea: upload the folder as a static site.

> It must be served over **https** (all the hosts above are). Opening `index.html`
> directly from your disk won't register the service worker.

## Install on a phone
- **iPhone/iPad (Safari):** open the URL → tap **Share** → **Add to Home Screen**.
- **Android (Chrome):** open the URL → menu **⋮** → **Install app** (or the "Install" prompt).

It then launches like a native app, full-screen, and works offline. Progress
(XP, streak, badges, which questions you've seen) is saved on that device.

## Updating the app later
Re-upload the changed files. When you change `index.html`, bump the cache name in
`service-worker.js` (e.g. `pmpft-v1` → `pmpft-v2`) so installed devices pick up the
new version on next launch.

## Going to the Apple App Store (optional next step)
A PWA covers "install it and use it" with no store. For an actual App Store listing,
wrap this same folder with **Capacitor** in Xcode:
```
npm create @capacitor/app   # or add Capacitor to a project
# copy these files into the web assets folder, then:
npx cap add ios
npx cap open ios            # builds in Xcode
```
You'll need an **Apple Developer account ($99/yr)**. A pure quiz wrapper can be
flagged under App Store rule 4.2 ("minimum functionality"), so add push
notifications, account sync, or richer offline content before submitting.

---
Built from *The PMP Field Guide* (Professor Farooq A. Shah, MPM, PMP, ACP, PCT, LSSBB).
Aligned to the PMI 2026 Examination Content Outline (exam of 9 July 2026).
