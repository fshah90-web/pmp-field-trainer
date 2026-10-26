# PM Professor — iOS / App Store build (Capacitor)

This wraps the same web app as a native iOS app you can submit to the App Store.
You run these steps on a Mac with Xcode installed.

## Prerequisites
- macOS with **Xcode** (from the Mac App Store)
- **Node.js** 18+ (https://nodejs.org)
- An **Apple Developer account** ($99/yr) to submit to the store (not needed to test on your own device via Xcode)

## First-time setup
From inside this `capacitor/` folder:

```bash
npm install                 # installs Capacitor
npx cap add ios             # creates the native ios/ project (uses www/ as the web assets)
npx cap sync                # copies www/ into the iOS app
npx cap open ios            # opens the project in Xcode
```

In Xcode:
1. Select the project → **Signing & Capabilities** → pick your Team (your Apple ID). Xcode will create a provisioning profile.
2. Pick a simulator or your plugged-in iPhone and press **Run** to test.
3. **App icon:** drag `icon-1024.png` (one folder up) into Xcode's `Assets.xcassets` → `AppIcon`, or install `@capacitor/assets` and run `npx capacitor-assets generate --ios` with `icon-1024.png` as the source.

## Before you change `appId`
`capacitor.config.json` uses the placeholder **`com.farooqshah.pmptrainer`**. Change it to a
reverse-domain identifier you control (e.g. `com.yourbusiness.pmptrainer`) *before* `npx cap add ios`.
It must match the Bundle ID you register in App Store Connect.

## Updating the app after editing the web files
```bash
# replace the files in www/ with your new web build, then:
npx cap sync
npx cap open ios   # Run / Archive again
```

## Submitting to the App Store
1. In Xcode: **Product → Archive**, then **Distribute App → App Store Connect**.
2. In App Store Connect (https://appstoreconnect.apple.com): create the app record (same Bundle ID), add screenshots, description, privacy details, then submit for review.

### Heads-up on App Review
A pure quiz wrapper can be rejected under **Guideline 4.2 (minimum functionality)**. Strengthen it
first with things native apps are expected to have: push notifications/reminders, progress sync
across devices, downloadable content, or Sign in with Apple. The web app already works fully offline,
which helps.
