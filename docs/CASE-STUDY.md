# Case study — programmatic pages from real search demand

**Status: RUNNING.** Baseline measured. Pages built. Window open. Numbers below are filled in
automatically from the machine's own JSON snapshots — nothing here is typed by hand.

> Format requested by most SEO/GEO roles: **what you did → which metric you moved → how you achieved it.**
> This document is written in that order on purpose.

---

## 0) Baseline (measured, not estimated)

Source: `reports/analitika-<day>.json`, `reports/pozicije-<day>.json` — produced by the daily run from
Search Console and GA4 APIs. Date of baseline: **2026-10-08** (measured).

| Domain | GSC impressions | GSC clicks | GA4 sessions | Position movement (7d) |
|---|---|---|---|---|
| <domain>.pro *(main case)* | **48** | 0 | 4 | ▲0 / ▼0 |
| <domain>.pro *(secondary)* | 0 | 0 | 2 | ▲0 / ▼0 |
| <domain>.com *(control)* | **2** | 0 | 0 | ▲1 / ▼1 |
| <domain>.com *(control)* | 0 | 0 | 0 | ▲0 / ▼0 |
| <domain>.com *(control)* | 0 | 0 | 0 | ▲0 / ▼0 |

Two domains carry the published experiment and are named (they are my own and the artifacts are
public). The other three are listed as controls with names withheld; their raw numbers are
included so the table stays verifiable inside the reports.

**Read this honestly:** these are near-zero-traffic domains. There is no impressive number to hide
behind — which is exactly why it is a clean experiment: any movement is attributable.

---

## 1) What I did

Built a programmatic page pipeline driven by *real* demand data instead of keyword guesses:

1. **Demand extraction** — *correction (2026-10-08): the first version of this line oversold it.*
   Search Console gave the two domains that actually got pages (`<domain>.com`, `<domain>.com`)
   **zero queries** — the `pozicije` table holds 25 queries for `<domain>.pro` and 2 for
   `<domain>.com`, and **none** for those two. So the pages could not have come from GSC data.
   What they actually came from:
   - a **hand-written seed list** — two queries per domain, declared by the site owner
     (`reports/konkurencija-upiti.json`: `<domain>.com` → "auto magistar", "polovni automobili beograd";
     `<domain>.com` → "beopro properties", "izdavanje stanova beograd");
   - **Google autocomplete expansion** of those seeds (`dodaci/pseo-generator.mjs`, queried with
     `hl=sr&gl=rs` — Serbian language, Serbia region), plus People-Also-Ask harvesting
     (`dodaci/pitanja.mjs`) and orphan-page detection.
   *Second correction (2026-10-08):* the 22 published pages were **not in the measurement rotation** at
   all — `pages`, `indeks` and `onpage` held zero of them. A "21-day measurement" would have reported
   nothing for these pages and looked like "no effect" instead of "not measured". They are now added,
   and the baseline is recorded: **all 22 report "URL is unknown to Google"** in Search Console, with
   canonical 11/11 and JSON-LD 11/11 on both domains.
   That is still real demand data — but it is **autocomplete + a human-declared seed**, not "queries
   pulled from Search Console", and there was **no paid keyword tool** involved.
   *Second correction (2026-10-08):* the 22 published pages were **not in the measurement rotation** at
   all — the `pages`, `indeks` and `onpage` tables held **zero** of them. A "21-day measurement" would
   have reported nothing for these pages and looked like "no effect" instead of "not measured". They are
   now registered, and the baseline is recorded: **all 22 report "URL is unknown to Google"** in Search
   Console, with canonical 11/11 and JSON-LD 11/11 on both domains.
2. **Template generation** — `dodaci/pseo-generator.mjs` produced complete pages from that demand:
   unique H1, FAQ block, FAQPage JSON-LD, canonical, internal links **between the generated pages**,
   and a dedicated sitemap (`sitemap-pseo.xml`).
   *Honest limit:* the pages link to each other, **not** into the domain's pre-existing pages. Verified
   2026-10-08 on the published pages: 3–6 links per page, all of them `/pseo/…`.
3. **Batch quality gate before publishing** — this is the publishing guard inside
   `dodaci/objavi-pseo.mjs`, which refuses to publish a page unless it has: a canonical pointing at
   **its own** domain, JSON-LD, an H1, and a **language that matches the live site's `html lang`**
   (the site's language is read from the live page, not typed into the code). After the upload, every
   page is re-fetched and must return HTTP 200, and the package is verified with SHA256 on the server.
   *Correction (2026-10-08):* an earlier version of this document credited `preflight.mjs` and
   `objava-bezbjedno.mjs` here. Those are real modules, but they serve a **different** job — `preflight.mjs`
   decides which queued *fixes* can be published and which need a code change. They did **not** gate this
   pSEO batch. The gate described above is the one that actually ran.
4. **Indexing push** — the pSEO sitemap is declared in the site's `robots.txt`, and the URLs are pushed
   to Bing/Yandex via IndexNow. *Correction (2026-10-08):* the first version of this page implied this had
   happened; it had **not** — a `break` in `indexnow.mjs` stopped it from reading the pSEO sitemap, so the
   tool reported "no change" while 22 pages were never submitted. Fixed and verified: the URL list went
   **58 → 69** (<domain>.com) and **13 → 24** (<domain>.com). The **Google** side had the
   same defect in a different file: `sitemap.mjs` returned only the **first** sitemap from `robots.txt`,
   so neither pSEO sitemap was ever submitted to Search Console. Fixed — submissions went from 4 to **7**,
   including both pSEO sitemaps (0 errors). Two tools, same mistake, both reporting success.
5. **Measurement** — the same daily run records impressions, clicks, positions, AI crawler hits and
   AI referral traffic per domain, so the before/after is computed by the machine, not by me.

**Pages built — language measured, not assumed (checked 2026-10-08):**

| Domain | Pages generated | Site's actual language (`html lang`) | Page language | Live? |
|---|---|---|---|---|
| <domain>.com | 11 | `sr` (Serbian) | SR | **yes — 11/11 HTTP 200** |
| <domain>.com | 11 | `sr` (Serbian) | SR | **yes — 11/11 HTTP 200** |
| <domain>.pro *(main case)* | 17 | `en` (English) | SR | no — held back |
| <domain>.pro *(secondary)* | 12 | `en` (English) | SR | no — held back |
| <domain>.com *(control)* | 0 | `sr-RS` (Serbian-first, with an SR/EN/RU/TR/AR/中文 switcher) | — | nothing to publish |
| 14 misfiled pages (were in `<domain>.com`) | 14 | — | SR about a different company | **no — moved aside** |

**Correction made during review — twice, and both are the point:**

1. The first batch contained pages for the wrong company in the wrong folder: 14 Serbian pages about a
   concrete/construction business were sitting in the `<domain>.com` folder. The publishing guard
   (`dodaci/objavi-pseo.mjs`) **refused to publish them**. They were moved to
   `predlozi/_pogresno-smjesteno/`, not deleted.
2. This document previously described `<domain>.com` and `<domain>.pro` as "English" and
   `<domain>.pro` as "mixed (EN + FR)" **without measuring**. When the language check was made
   automatic (it now reads the `html lang` attribute from each live site instead of trusting a
   hardcoded list), the real picture was: `<domain>.pro` and `<domain>.pro` are `en`, and
   `<domain>.com` is `sr-RS` (Serbian default, despite the language switcher). The earlier
   "French pages" claim did not hold up and is withdrawn.

**Why this belongs in a case study:** the first version of the guard had three domain names typed into
the code. That is exactly the kind of hardcoded assumption that produces language mismatches at scale.
It was replaced with a measurement of the live site. The machine now cannot publish a page whose
language does not match the site it is going onto — and it says so instead of guessing.

---

## 2) Which metric I expect to move (and the exact source)

| Metric | Source of truth | Baseline | Day 21 | Change |
|---|---|---|---|---|
| GSC impressions (per domain) | Search Console API via `analitika-<day>.json` | 48 / 0 / 2 / 0 / 0 | *pending* | *pending* |
| GSC clicks | same | 0 | *pending* | *pending* |
| Indexed pages (site: count / URL Inspection API) | `dodaci/indeks.mjs` | *pending* | *pending* | *pending* |
| Average position for target queries | `dodaci/pozicije.mjs` (7-day windows) | ▲0 / ▼0 | *pending* | *pending* |
| AI crawler hits (GPTBot, ClaudeBot, PerplexityBot) | Cloudflare analytics via `dodaci/cf-analitika.mjs` | *pending* | *pending* | *pending* |
| AI referral sessions | GA4 via `analitika-<day>.json` | 4 | *pending* | *pending* |
| GEO score per page | `dodaci/geo.mjs` | *pending* | *pending* | *pending* |
| PageSpeed / Core Web Vitals | PSI API via `dodaci/brzina.mjs` | *pending* | *pending* | *pending* |

**Rule for this document:** if the numbers do not move, this table will say so. A case study that
only contains wins is marketing, not evidence.

---

## 3) How I achieved it (the pipeline, concretely)

```
GSC queries + autocomplete
        │
        ▼
  demand → template  ──►  page (H1, FAQ, FAQPage JSON-LD, canonical, internal links)
        │
        ▼
  preflight + objava-bezbjedno   (content verified BEFORE publishing, rollback point kept)
        │
        ▼
  sitemap-pseo.xml + IndexNow    (discovery push)
        │
        ▼
  daily run measures: impressions, clicks, positions, AI crawlers, AI referrals, GEO score
        │
        ▼
  before/after written to dated artifacts (JSON + Markdown), not to a slide by hand
```

Every arrow is a module in the machine with a one-line description in code, a test where it makes
sense, and a dated artifact when it runs.

---

## 4) What this proves (and what it does not)

**Proves:** demand-driven generation, a real quality gate before publishing, and measurement that
comes from the platforms rather than from my own reporting.

**Does not prove (yet):** organic growth at scale. One window on five low-traffic domains is a
starting point, not a track record. The next iteration will run on a domain with existing traffic.

---

## 5) Timeline

| Date | Event |
|---|---|
| 2026-10-08 | Baseline measured (this document) |
| 2026-10-09 | Pages published to production (static, no application rebuild) |
| 2026-10-11 | Indexing check + first impressions |
| 2026-10-29 | Full before/after, added to this document (21 days) |
| 2027-01-06 | Trend + which queries drive clicks (90 days) |

*This document is regenerated from the machine's JSON; the links above point to the raw artifacts.*
