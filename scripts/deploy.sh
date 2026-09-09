#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
# Usage: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -n "$(git status --porcelain)" ]; then
  echo "You have uncommitted changes. Commit them first so the deploy matches the code in main." >&2
  exit 1
fi

npm run build

SHA="$(git rev-parse --short HEAD)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# Fresh orphan history each deploy: the built files are derived output, not source.
git -C "$WORK" init -q -b gh-pages
cp -R dist/. "$WORK/"
git -C "$WORK" add -A
git -C "$WORK" -c user.name="riverguard-deploy" -c user.email="deploy@riverguard.solutions" commit -q -m "Deploy site from $SHA"
git -C "$WORK" push -f "$(git remote get-url origin)" gh-pages:gh-pages
echo "Deployed $SHA to gh-pages."
