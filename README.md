# Full Visibility — an SEO/GEO machine that proves itself

**What this is:** a working, self-running SEO/GEO system — measurement → decision → fix → publish →
proof → report — running on a daily schedule. This repository is the **evidence layer**: the
machine's own schema, one of its tools, the measured case study, and the exact numbers it produced.

**What this is not:** a client portfolio (yet), a library, or a marketing page. The system runs on my
own domains. The first measured before/after window is running now; numbers are added as they are
measured — including the ones that do not move.

## The numbers (from the machine's own snapshot)

| | |
|---|---|
| Modules in the machine | **122** |
| Steps in the daily run | **54** |
| Scheduled tasks | **10** |
| Modules covered by tests | **96** |
| Tests (all passing) | **171** in 4 suites |
| Modules without a description | **0** |
| Last daily run | 21 min |

Source: [`machine/snapshot.json`](machine/snapshot.json) — regenerated on every daily run. The
counts are computed from the code and the scheduler, never typed by hand. Method in one line: each
module carries a one-line description in code; a scanner collects every module from the code, checks
which ones appear in the daily run script, which are in the scheduler, and which are referenced by
the test suite, then writes the totals into this snapshot.

## Verify it yourself in 60 seconds

No meeting, no call, no request to me. Four steps:

1. **Read the numbers** — [`machine/snapshot.json`](machine/snapshot.json): 122 modules,
   54 in the daily run, 96 covered by tests, 171 tests passing.
2. **See them** — open [`machine/schema.html`](machine/schema.html) in a browser: every module is listed,
   searchable and filterable, marked as daily-run / scheduled / tested. The pill count matches the JSON.
3. **Use a tool** — open [`tools/geo-self-check-en.html`](tools/geo-self-check-en.html): tick the boxes,
   get a score out of 100, change one answer and watch it move, then copy the result link and reopen it —
   the score comes back. It runs entirely in the browser.
4. **Check the record** — [`docs/CHANGELOG.md`](docs/CHANGELOG.md) is generated from git history and the
   machine's own run journal; every entry states what was done, why, and how it was verified.

If any of the four does not hold, the claim is wrong and I want to know.

## Look at these three things

| Where | What it proves |
|---|---|
| [`machine/schema.html`](machine/schema.html) | 122 modules, searchable, filterable, each marked as daily-run / scheduled / tested. Open it in a browser — no server needed. |
| [`tools/geo-self-check-en.html`](tools/geo-self-check-en.html) | A mini-tool that **actually computes**: 10 GEO checks in 5 pillars → score out of 100, per-pillar breakdown, top fixes, and a **shareable result link**. Runs in the browser only — no server, no API key, no network. Serbian version next to it. |
| [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) | Programmatic pages built from real search demand, in the format most roles ask for: **what was done → which metric moved → how**, with the baseline measured from Search Console and GA4. |
| [`docs/CASE-STUDY-2.md`](docs/CASE-STUDY-2.md) | **A finished fix, verified on production:** 25 canonical tags added, missing on 16 of 20 pages before, present on every page checked after — including the incident that caused a 403 and what changed because of it. |

## How the machine is put together

```
measure → decide → fix → publish → prove → report
   │         │        │       │         │        │
 GSC/GA4   impact   patches  preflight  hash-   Telegram
 PSI/CF    ranking  + links  + rollback stamped  2×/day
 logs      (not by           + "is it   artifact + weekly
 schema    DB order)          live?"             + monthly
```

**Design rules that shaped it**

1. **Evidence over narration.** Every step leaves a dated artifact: JSON data, a Markdown report, an
   HTML+archive with a SHA256, a before/after screenshot. If a number has no artifact, it does not
   go in a report.
2. **Publishing is off by default.** There is a content preflight, a rollback point, and a
   "did it really go live" check after every publish.
3. **Safe to be wrong.** A failing step records its exit code and output, and the machine
   self-diagnoses (local LLM) before escalating.
4. **Async by design.** Two Telegram messages a day, weekly and monthly reports, and a per-domain
     evidence page whose numbers are read from the snapshot. Nobody needs a meeting to know what happened.

## Honest limits

- **Live WordPress / Webflow / Shopify deployments:** the CMS adapters are integration-tested against
  the WordPress REST API, **not** field-tested on a live client site. I do not claim otherwise.
- **Prompt-based AI citation measurement** (does ChatGPT/Perplexity actually name you) is **not**
  implemented. What is measured instead: AI crawler hits (GPTBot, ClaudeBot, PerplexityBot via
  Cloudflare) and AI referral sessions (GA4). Prompt measurement needs a protocol with confidence
  intervals — AI answers vary with wording.
- **Growth at scale:** the case study window is running on low-traffic domains. Any movement is
  attributable, but it is not yet a track record.

## Work with me

[`docs/OFFER.md`](docs/OFFER.md) — three packages (€49 audit / €149 full / €349 full+), delivered
asynchronously: artifacts, reports and a per-domain evidence page. No meetings required.

---
*Everything in this repository is generated from the running system. Numbers come from
`machine/snapshot.json`; nothing here is typed by hand.*
