"""Package the complete static study app without development files or prompt logs."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
web = root / "web"
output = root / "output"
output.mkdir(exist_ok=True)
target = output / "PM-Professor.zip"
with ZipFile(target, "w", ZIP_DEFLATED) as bundle:
    for item in sorted(web.rglob("*")):
        if not item.is_file() or item.name.startswith("."):
            continue
        if item.name in {"DEPLOY.md", "prompts.txt", "base-prompts.txt"}:
            continue
        bundle.write(item, item.relative_to(web))
    bundle.writestr("START-HERE.txt", """PM Professor — solo study with the professor

Extract this entire ZIP, then open index.html in a modern browser.
Keep the scripts, styles, and assets beside it.

Start a mission from Home. Read the lesson, make your decisions, and
correct missed decisions to clear the mission. Mistakes preserves
your first answers and explains what to work on next.

Study settings lets you change your routine, turn animations off,
and export or restore a progress backup. Progress is stored per
browser and device. These practice scores do not predict exam results.

For phone installation, serve these files from an HTTPS static host.
Safari: Share > Add to Home Screen. Android/desktop: Install app.
The installed app works offline after the first complete visit.
""")
print(f"Packaged {target.name}: {target.stat().st_size / 1024 / 1024:.1f} MiB")
