# Solo-study architecture

The app serves an individual preparing independently for the PMP exam. Its learning loop is **lesson → decision → specific feedback → correction → spaced review**.

## Current runtime

The dependency-free client lives in `web/` and is mirrored to `capacitor/www/` by `npm run sync:native`. It runs as a static site, installed PWA, extracted web bundle, or the existing Capacitor iOS wrapper. No account, live AI service, payment, or backend is required for study.

The professor uses seven original ImageGen-created 2×2 PNG atlases and brief CSS frame animations. Reduced motion and the in-app preference show a still frame instead.

## Local state

| Browser key | Purpose |
|---|---|
| `pmpft` | Existing totals, XP, streaks, legacy review boxes, badges |
| `pmpft-study-v1` | Preferences, completed/suspended missions, recent attempts, first misses, scheduled reviews |
| `pmpft-active-quiz-v1` | Stable question IDs, shuffled option order, answers, position, elapsed active time |
| `pmpft-theme` | Existing appearance preference |

New practice IDs derive from normalized question stems. Reordering the bank therefore does not remap the new log; substantive stem changes create new IDs. Keep mission and step IDs stable. Restoration verifies content compatibility.

Mission retries retain the first choice. A run completes only when every distinct step is resolved. First completion awards 30 XP once; answer XP is capped once per mission question per local day. Scores and XP do not claim exam readiness.

The detailed log retains 2,000 recent records. First misses are stored separately, so corrections do not erase them. Practice-backed scheduled reviews synchronize both the new review record and the legacy box. Promotion requires the due date to have arrived.

Older releases stored aggregate totals and boxes without selected-answer history. Preserve those totals; never fabricate historical attempts from aggregates.

## Backups and offline operation

Study settings exports versioned JSON containing both stores and the unfinished quiz. Restore validates and sanitizes data, reconstructs known review content, and asks before replacing current progress. Storage failures are visible to learners.

The service worker precaches all runtime scripts, styles, icons, and seven professor atlases. Activation deletes only this app's older cache names. Installed clients receive a refresh prompt for a new release. Bump the cache name when cached files change, then synchronize native assets.

## Future additions

Optional account sync can be added later if requested. A genuine attempt event log should drive cross-device progress; older aggregates require a labeled migration snapshot. Any future readiness model needs representative independent assessments and validation before it makes passing claims.
