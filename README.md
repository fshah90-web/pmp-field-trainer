# PM Professor

A self-paced PMP study app with an animated professor, a guided daily routine, project missions, and a detailed mistake review. No account or backend is required. The web app is installable and works offline after its first complete visit.

## Study with the professor

- **Seven animations:** welcome, thinking, hint, explanation, celebration, encouragement, and a distinct **Great job!** applause. Motion can be disabled; the device's reduced-motion preference takes priority.
- **A flexible plan:** choose 5, 10, 15, or 25 minutes a day and an optional exam target date. Home recommends a mission, scheduled review, and mixed practice.
- **Ten original missions:** real lessons, worked examples, and 20 contextual project decisions across People, Process, and Business Environment. All missions stay open.
- **Correction before completion:** missed mission decisions return after the other questions. Every decision must be answered correctly to clear a mission. Corrections never replace the original first answers or inflate their score.
- **Specific coaching:** every mission option and all 300 practice questions explain the selected choice, the deciding clue, and the better action.
- **Mistakes:** domain filters, topic breakdowns, original selected answers, misconception feedback, and targeted practice. Corrected mistakes remain available for later review.
- **Spaced review:** extra practice before a due date cannot accelerate retention. Scheduled successes advance through 1-, 3-, and 7-day intervals.
- **Saving:** missions and normal question sets resume after reloading. Opening another mission preserves an unfinished run. Export and restore backups in Study settings.
- **Learning rewards:** first mission completion earns 30 XP; mission-answer XP is capped per question per day. XP represents activity, not qualification.

Quick 10, the 40-question **Mini Mock**, practice categories, Lightning Round, streaks, and awards remain available. The Guide now contains ten actual lessons in addition to the companion book's outline.

Practice scores and mission completion do not predict an official exam result. Ten core missions provide a foundation, not complete coverage of every PMP topic. The Mini Mock provides immediate feedback; it is not a full-length exam simulation.

## Run and check

```sh
npm start
# Open http://127.0.0.1:8080
npm test
npm run sync:native
npm run package:web
```

No npm installation or frontend build is needed. The start command uses Python 3; tests and native-asset synchronization use Node.js. `web/` is the canonical client. The sync command copies it into `capacitor/www/` for the existing iOS wrapper. See `capacitor/SETUP.md` for native packaging.

For the downloadable web bundle, extract the ZIP and open `index.html` with its scripts, styles, and assets alongside it. A local server or HTTPS host is needed for service-worker installation; the study experience also runs directly from the extracted files in a modern browser.

## Install and deploy

- iPhone/iPad: open the hosted app in Safari, then **Share → Add to Home Screen**.
- Android/desktop: use the browser's **Install app** option when offered.
- Study settings includes installation instructions and an offline-ready status.
- Deployment remains a static upload of `web/`; see `web/DEPLOY.md`. Bump the service-worker cache version with every release that changes cached app files.

The previously documented hosted address is `https://fshah90-web.github.io/pmp-field-trainer/web/`. Local changes do not publish that deployment automatically.

## Files and content

- `web/index.html`: question bank, existing practice engine, and app shell.
- `web/study.js`: guided plan, missions, professor feedback, mistake history, backups, and resume.
- `web/study.css`: responsive learning UI and four-frame sprite animation.
- `web/study-content.js`: original lessons and missions, option feedback, and source references.
- `web/quiz-insights.js`: stable question IDs and 1,200 option rationales. Indices follow original option order before display shuffling.
- `web/assets/professor/`: seven ImageGen-created transparent 2×2 atlases, each 1254×1254 with four 627×627 frames. Exact prompts are in `prompts.txt` and `base-prompts.txt`. The approved identity reference is preserved in `docs/art/professor-reference.png`.
- `tests/study.test.cjs`: regression checks for first answers, retries, resume, review timing, backups, and offline caching.
- `tests/mobile-preview.html`: development-only responsive layout harness, excluded from the downloadable web bundle.

Historical practice totals remain under the existing `pmpft` browser key. Detailed mistake history starts with answers recorded in this version: older releases did not save selected-answer history. The recent detailed log is bounded to 2,000 attempts; first misses and mission results remain separately available. Progress is per browser/device. Export a backup before clearing browser data.

Built from *The PMP Field Guide* — Professor Farooq A. Shah, MPM, PMP, ACP.
