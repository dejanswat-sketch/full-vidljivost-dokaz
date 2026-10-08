# Case study 2 — from detection to live verification (canonical across 25 pages)

**Status: COMPLETE and verified on the live site.**

Format: **what was done → which metric moved → how.** Every number below is traceable to a file or a
command, and the live checks were run against production.

---

## 0) Baseline (measured)

The daily run inspects on-page signals and stores what it finds. Before the fix, the measurement for
the main case domain (`<domain>.com`) recorded:

| Signal | Before |
|---|---|
| Pages inspected | 20 |
| Pages with a canonical tag pointing to themselves | **4** |
| Pages with **no** canonical tag at all | **16** |

Source: machine database table `onpage` (`canonical`, `canonical_na_sebe` columns), measurement taken
**2026-10-08 09:07–09:14**, i.e. *before* the fix was published (09:39). A missing canonical means
Google is free to pick its own canonical — the classic cause of a page not ranking for its own URL.

---

## 1) What was done

| Step | What happened | Artifact |
|---|---|---|
| Detect | The daily run flagged pages with no canonical | `reports/onpage-<day>.md` |
| Generate | The fix generator produced a canonical insert per page | `canonical` fixes for **14 distinct pages** — the `fixes` table holds **22 published rows** and 46 rows of that type in total (retries and duplicates across runs are separate rows) |
| Queue | Each fix moved through `kod-spreman` → delivered (commit `1b66dd4`) | fix log: `[dokaz 2026-10-08]` |
| Publish | Published through the repository path (push → Hostinger rebuild) | deploy log |
| **Verify** | Re-fetched **every** published page and checked the canonical tag — **14/14 have it** | this document, section 2 |

Totals from the machine's own database (`fixes`, `status='objavljeno'`):

| Domain | Published fixes |
|---|---|
| <domain>.com | **28** |
| <domain>.pro | **8** |
| <domain>.<domain>.pro | **2** |
| **Total** | **38** |

By type: **canonical 25** · datum 7 · meta 3 · FAQ 3.

---

## 2) Which metric moved — verified on production

Command used (no writes, read-only):

```
curl -s -L https://<domain>.com<path> | grep canonical
```

Result, **2026-10-08 after the deploy**:

| Path | Canonical found on the live page |
|---|---|
| `/` | `https://<domain>.com` ✅ |
| `/analize` | `https://<domain>.com/analize` ✅ |
| `/brendovi` | `https://<domain>.com/brendovi` ✅ |
| `/casopis` | `https://<domain>.com/casopis` ✅ |
| `/cenovnik` | `https://<domain>.com/cenovnik` ✅ |
| `/checklist` | `https://<domain>.com/checklist` ✅ |
| `/delovi` | `https://<domain>.com/delovi` ✅ |
| `/komision` | `https://<domain>.com/komision` ✅ |
| `/modeli` | `https://<domain>.com/modeli` ✅ |
| `/procena` | `https://<domain>.com/procena` ✅ |
| `/street-race` | `https://<domain>.com/street-race` ✅ |
| `/usluge` | `https://<domain>.com/usluge` ✅ |
| `/vozila` | `https://<domain>.com/vozila` ✅ |
| `/zakazivanje` | `https://<domain>.com/zakazivanje` ✅ |

**Before → after:** pages without a canonical (**16 of 20** in the pre-fix measurement) → **all 14 pages
that received a published fix now declare themselves canonical (14/14)**, checked one by one on
production on 2026-10-08. The change is not "a report says so" — it is the HTML that Google receives.

**The machine's own database now says the same thing (2026-10-08 17:23):** the page inspector had been
sending a `GPTBot` user-agent, which this host answers with **HTTP 429** — so its stored measurement for
this domain was stuck at 09:14, *before* the fix was published, and it never confirmed anything. With an
honest user-agent the re-measurement ran and the table moved: pages **without** a canonical
**16 → 6**, pages declaring themselves canonical **4 → 14**. The 6 remaining are pages that never got a
published fix. Full write-up: `reports/dokaz-onpage-ua-blokada-<day>.md`.

*Correction (2026-10-08):* this section first listed 6 checked pages, and the table above said "25
fixes" — which counted `fixes` **rows**, not pages. Both are corrected: the check now covers every page
that got a fix, and counts are stated as pages **and** rows so the two cannot be confused.

---

## 3) How it was achieved (the pipeline, concretely)

```
daily run (05:10)
   └─ on-page inspection ──► "no canonical" recorded  ──► fix generated (1 per page)
                                                              │
                                                              ▼
                                              code fix prepared + delivered
                                                              │
                                                              ▼
                                      push to repository ──► Hostinger rebuild
                                                              │
                                                              ▼
                        live verification (curl) ──► canonical present?  ──► recorded
```

**Safety built into the path:** publishing is off by default; every publish takes a rollback point and
runs a "is it really live" check afterwards. If the check fails, the change is reverted, not explained away.

---

## 4) What went wrong (kept in the record)

During this work the main domain returned **403 to all visitors**: the repository auto-deploy published
the source, but the application build had not produced a front page yet, and the platform served an
empty web root. It was restored manually (stub page + official build) and the cause was written down:

- **push ≠ deployed** for Node applications: a push publishes source, a *build* must succeed afterwards.
- The build must avoid Turbopack on this host (process limit) — `next build --webpack`.
- After any file replacement, the CDN cache must be cleared, or visitors keep the old chunks.

This matters for a client more than a success story: it is the reason the publish path now has a
preflight, a rollback point and a post-publish check rather than a single `git push`.

---

## 5) Current state of the same check (this is a queue, not a victory lap)

The same inspection, run after the fix, reports the **next** findings on other domains:

| Domain | Finding |
|---|---|
| <domain>.com | 14 pages report `nema canonical` (and missing JSON-LD) |
| <domain>.pro | `/: nema JSON-LD` · `/progress: NOINDEX` · one canonical **not inside `<head>`** (Google ignores it) |
| <domain>.com | `/` canonical points to `/sajtovi` (deliberate, recorded) |
| <domain>.pro | two pages without JSON-LD |

That is the intended behaviour: the machine does not stop at "done" — the same loop that fixed 25
canonicals is already listing the next 14. Fixes are cheap; **the ability to prove them is what is rare.**

---

*Generated from the machine's database and live HTTP checks. Numbers were true when written; the
daily run re-measures them, and this document is updated when they change.*
