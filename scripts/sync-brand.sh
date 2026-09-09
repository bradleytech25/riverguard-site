#!/usr/bin/env bash
# Copy the brand kit files this site uses from the master brand repo.
# Run after any change to the tokens or logo files:  npm run sync-brand
set -euo pipefail
BRAND="${RG_BRAND_DIR:-$HOME/Documents/RiverGuard Solutions/brand}"
HERE="$(cd "$(dirname "$0")/.." && pwd)"

cp "$BRAND/tokens/riverguard-tokens.css" "$HERE/src/styles/tokens.css"
for f in riverguard-logo-horizontal.svg riverguard-logo-horizontal-reversed.svg riverguard-shield.svg favicon.svg favicon-16.svg; do
  cp "$BRAND/logo/svg/$f" "$HERE/public/brand/$f"
done
cp "$BRAND/logo/png/favicon-180.png" "$HERE/public/brand/favicon-180.png"
echo "brand synced from $BRAND"
