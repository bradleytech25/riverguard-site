# riverguard.solutions

Marketing site for RiverGuard Solutions — managed IT for small businesses in Idaho's Wood River Valley.
Static site built with [Astro](https://astro.build), hosted free on GitHub Pages.

## Everyday tasks

| I want to… | Do this |
|---|---|
| See the site locally | `npm run dev` → open http://localhost:4321 |
| Change a phone number, hours, stats, certifications | edit `src/data/business.ts` |
| Change what a service says | edit `src/data/services.ts` |
| Change an industry page | edit `src/data/industries.ts` |
| Change page copy or layout | edit the page in `src/pages/` or a component in `src/components/` |
| Publish my changes | commit, then `npm run deploy` |
| Pull in updated brand tokens or logos | `npm run sync-brand` (copies from `~/Documents/RiverGuard Solutions/brand`) |

Anything in `[SQUARE BRACKETS]` in `business.ts` is a placeholder and shows on the site with an amber highlight until you replace it.

## How publishing works

`npm run deploy` builds the site into `dist/` and pushes that folder to the `gh-pages` branch. GitHub Pages serves whatever is on that branch at https://riverguard.solutions. The `main` branch holds the source; `gh-pages` holds only generated output and is overwritten on every deploy.

## Brand

Design values come from the RiverGuard brand kit. `src/styles/tokens.css` is a copy of the kit's token file — do not edit it here; edit the kit and run `npm run sync-brand`. Rules that matter most: Fira Sans only, Signal amber on one element per page, never teal-700 on navy, ridgeline is the only motif.

## Structure

```
public/            static files served as-is (logo SVGs, favicon, robots.txt, CNAME)
src/data/          all copy and facts as plain TypeScript objects
src/components/    reusable pieces (Header, Hero, ContactForm, …)
src/layouts/       Base.astro — the <head>, header and footer every page shares
src/pages/         one file per URL; industries/[slug].astro builds one page per industry
scripts/           sync-brand.sh, deploy.sh
```
