# Morning checklist

The site is built and published to GitHub Pages. It goes live at https://riverguard.solutions the moment DNS points at GitHub.

## 1. DNS change at Squarespace Domains — the only required step

Log in to Squarespace Domains → `riverguard.solutions` → DNS settings.

**Delete** the existing records that point at Google Sites (the CNAME/A records for `@` and `www` that reference `ghs.googlehosted.com` or Google IPs). Leave MX / mail records alone.

**Add** these records:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 1 hr |
| A | @ | 185.199.109.153 | 1 hr |
| A | @ | 185.199.110.153 | 1 hr |
| A | @ | 185.199.111.153 | 1 hr |
| CNAME | www | bradleytech25.github.io | 1 hr |

Give it 10–30 minutes. Check with: `dig +short riverguard.solutions` — you should see the four 185.199.x.x addresses.

GitHub then issues an SSL certificate automatically (usually 15 minutes to an hour). Once https://riverguard.solutions loads with a padlock, tell Claude "enforce HTTPS" or tick **Enforce HTTPS** at
https://github.com/bradleytech25/riverguard-site/settings/pages.

Google Sites keeps working right up until DNS switches; nothing to turn off there first.

## 2. Optional — contact form (5 minutes)

1. Create a free account at https://formspree.io and add a new form.
2. Copy the form ID (the part after `/f/` in the endpoint, e.g. `xabcdefg`).
3. Put it in `src/data/business.ts` → `formspreeId: 'xabcdefg'`.
4. Commit, then `npm run deploy`.

Until then the Contact page shows phone and email instead of a form.

## 3. Optional — fill in the placeholders

Open `src/data/business.ts`. Everything in `[SQUARE BRACKETS]` is a placeholder and is highlighted amber on the live site: phone, email, hours, street address, average response time, client count, certifications. Replace, commit, `npm run deploy`. Or just tell Claude the values.

Also worth a read: `src/data/services.ts` (`wontDo` list) and `src/data/industries.ts` — all copy is a first draft in your voice; change anything that doesn't sound like you.

## 4. Optional — auto-deploy on push

Right now publishing is `npm run deploy`. To have GitHub build and publish automatically whenever `main` changes, run `gh auth refresh -s workflow` once (it opens a browser) and tell Claude to add the GitHub Actions workflow.

## Things Claude assumed — say so if any is wrong

- The site repo `bradleytech25/riverguard-site` is **public** (required for free GitHub Pages). It contains only site code, brand tokens, and logo SVGs. The brand repo stays private.
- "Peekaboo" was written as **Picabo** (the town's spelling).
- Services listed: managed IT & monitoring, managed security, help desk, on-site service. Backup, Microsoft 365 management, and networking are mentioned inside those but not as headline services.
- No vendor names anywhere; capabilities only.
