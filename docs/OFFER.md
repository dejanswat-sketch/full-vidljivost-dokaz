# Work with me — SEO/GEO automation, async only

I build and run the system described in [README.md](README.md): measurement → decision → fix →
publish → proof → report, running daily on a schedule, with dated artifacts for everything.

**How I work:** asynchronous, in writing. You get artifacts — JSON, Markdown, dated proof documents,
a per-domain evidence page — not status meetings. If something needs a call, that is a signal that the
reporting is not good enough yet, and I will fix the reporting.

---

## Packages

| | **AUDIT** | **FULL** | **FULL+** |
|---|---|---|---|
| **Price** | **€49** one-off | **€149 / month** | **€349 / month** |
| **See the actual format** | [PRIMJER-AUDIT-<domain>.pro.md](PRIMJER-AUDIT-<domain>.pro.md) — real audit generated from measured data; every number cites its source file (and says "not measured" where nothing was measured) | same format, daily | same format, daily |
| Delivery | File by email | Daily run + evidence page + 2 Telegram messages/day | FULL + programmatic pages + live mini-tool |
| Domains | 1 | 1 | 1 (each extra domain €99/mo) |
| Technical SEO audit (canonical, meta, H1, JSON-LD, internal links, crawl) | ✅ | ✅ | ✅ |
| GEO readiness score + structured-data validation | ✅ | ✅ | ✅ |
| Search Console + GA4 + PageSpeed + Cloudflare measurement | baseline only | daily, with trend alarms | daily, with trend alarms |
| Fixes prepared with preflight + rollback, published per change | — | ✅ | ✅ |
| Dated proof artifact for every change — **before** publication (archive + SHA256) and **after** it (published snapshot + SHA256) | sample | ✅ | ✅ |
| Weekly + monthly report | — | ✅ | ✅ |
| Public evidence page per domain (numbers pulled from the machine snapshot) | — | ✅ | ✅ |
| Programmatic pages from real demand | — | — | 10 pages/month |
| Mini-tool built and deployed on your domain | — | — | ✅ |
| **No meetings required** | ✅ | ✅ | ✅ |

**Keys:** for AUDIT I need no access at all — you send me the domain, I send back a file.
What is **measured live** in that file (opening the site, nothing else needed): availability, title,
meta description, H1, canonical (and whether it is inside `<head>`, where Google actually reads it),
JSON-LD structured data, word count, `robots.txt`, sitemap.
What is **not** in an AUDIT — because it cannot be read without access or is not mine to see: Search
Console impressions/clicks, GA4 sessions, rankings. Those say "not measured" in the file rather than
being guessed. If you want them, the daily run does that once access is set up.
For FULL I need read access to Search Console + GA4 (service-account invite) and a deploy path.
You keep ownership of everything.

---

## What you get every day (FULL and above)

1. **Two Telegram messages** — one positive (what improved), one negative (what broke or went down).
   Hard commitment: silence is a bug, and it is treated as one.
2. **A dated proof artifact** — every publish leaves HTML + SHA256 + archive, plus a "is it really
   live?" check. If a change did not land, the report says so.
3. **Trend alarms** — the machine watches for drops and tells you before you notice.
4. **Your evidence page** — one page per domain, no login needed. The numbers are read from the machine's own snapshot, so they match the JSON exactly. It refreshes when the daily run republishes it — **it is a dated snapshot, not a live dashboard**, and it says the date on it.

---

## How to start (async)

1. Send: domain + what you want measured (impressions, clicks, conversions, AI visibility).
2. I reply with the **AUDIT** file within 48 h (€49) — factual, with the raw numbers and where each
   one came from.
3. If it is useful, we move to FULL: you invite the service account to Search Console + GA4, and the
   daily run starts the next morning at 05:10.

**Trial:** 30 days at FULL. If the reports do not show measurable movement in your baseline metrics
by day 30, you stop — no lock-in, no cancellation fee.

---

## What I will not claim

- **AI citations.** I measure AI *crawler hits* and AI *referral traffic*. Prompt-based "are we
  cited by ChatGPT" measurement needs a protocol with confidence intervals; until that exists I do
  not sell it.
- **Live WordPress/Webflow deployments.** My adapters are integration-tested against the WordPress
  REST API and Webflow, but I have not yet shipped to a live WP/Webflow site. I will say so in
  writing rather than learn it on your domain.
- **Growth without data.** Every number in my reports comes from a platform API and is written to a
  dated artifact. If a number does not move, the report says that too.

---

## Contact

Async only — no meetings, no calls. Two ways that work:

1. **Open an issue on the public repository** (fastest, nothing else needed):
   `https://github.com/<github-user>/full-vidljivost-dokaz/issues/new`
   Write the domain and what you want measured; you get a written reply with artifacts.
2. **Email or Telegram** — you get the same thing in writing, with artifacts attached.

**What happens next:** within 48 h you receive the AUDIT file (€49) — factual, with raw numbers and
the source of each one. If it is useful, the daily run starts the next morning at 05:10.
