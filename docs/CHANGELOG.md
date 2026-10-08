# Changelog

**Why this file exists:** async teams hire on written evidence. This is the work log of the machine —
generated from git history and the machine's own run journal, with the numbers that were true at the time.
Nothing here is written after the fact.

*Generated 2026-10-08 from the repository history (last 31 commits).*

## Current state (from the machine's own snapshot)

| | |
|---|---|
| Modules | **118** |
| In the daily run | **51** |
| Scheduled tasks | **10** |
| Covered by tests | **98** |
| Tests (all passing) | **171** |
| Modules without a description | **0** |

## Work log

### 2026-10-08 — Phase a — deo: CTA bez mejla (GitHub Issues), Changelog na engleskom, datumi u case study-ju

`df1be65`

- Dodaci/dokaz-changelog.mjs: engleski CHANGELOG iz git istorije + Dnevnika rada (30 unosa, 23 KB);
- Geo-alat.mjs: CTA sada moze biti GitHub Issues (radi bez mejla) - otvara popunjen zahtjev sa
- CASE-STUDY.md: placeholder datumi zamijenjeni stvarnim (baseline 2026-10-08, 21 dan = 2026-10-29)
- OFFER.md: kontakt bez sastanaka (GitHub Issues ili mejl/Telegram)
- Dokaz-repo.mjs: sanitizacija sada pokriva imena bez domene, korisnicko ime, lokalne IP, interne
- Issues ukljuceni na javnom repou; repo pushovan (11 fajlova, 8/8 provjera, cuvar cist)

### 2026-10-08 — Phase 1c — public repo verified BEFORE publishing (leak + drift + render checks)

`007860c`

- Dodaci/dokaz-repo.mjs: drift check provjera (brojke u repou MORAJU biti iste kao u masini i u shemi);
- Dodaci/test-dokaz-repo.mjs: 8 provjera - nema curenja internih domena/kljuceva, nema drift checka,
- Nasao stvarni drift check: moj privremeni _dokaz-arhiva-tar.mjs je ulazio u shemu (117) a ne u sliku (116)
- Nasao i uklonio pominjanje prefiksa Google kljuca iz javne sheme
- Repo pushovan: github.com/<github-user>/full-vidljivost-dokaz (privatan do korisnikovog pregleda)

### 2026-10-08 — Phase 1b — new public repository full-vidljivost-dokaz (no secrets, no client names)

`6db00a4`

- Dodaci/dokaz-repo.mjs: sklapa public repo iz odobrenih dijelova (shema, alat, case study, ponuda,
- Dodaci/dokaz-provera.mjs: prihvata apsolutni --dir; NMQ dozvoljen kao javni brend
- Repo: github.com/<github-user>/full-vidljivost-dokaz (PRIVATAN do pregleda) - 10 fajlova,
- Cuvar tajni: cist (0 sumnjivo); pravi domene (<domain>, <domain>, <domain>)

### 2026-10-08 — Phase 3 prep — public publish package (nothing was published) + proof it works as a whole

`fde77d4`

- Dodaci/objava-javno.mjs: sklapa objavljeno/javno/<domen>/ iz dokaz/ + sheme + alata; pravi
- Dodaci/test-javni-paket.mjs: 10 provjera u Chrome-u preko file:// - svih 5 strana se otvara,
- Hash-evi u MANIFEST.sha256 provjereni pojedinacno (tacni)
- Nijedan sajt nije dirnut: paket je u objavljeno/, objava je korisnikov potez

### 2026-10-08 — testovi.mjs — guards for the mini-tool (in-browser score, 10 questions / 5 pillars, CTA, FAQPage, no network)

`d21030f`

### 2026-10-08 — Phase 2 — GEO mini-tool that actually works (score + sharing + CTA) + Chrome proof

`9fb7c6c`

- Dodaci/geo-alat.mjs: gradi staticki alat za 5 sajtova (en/sr) - 10 pitanja u 5 GEO stubova,
- Dodaci/test-geo-alat.mjs: 13 provjera u pravom Chrome-u (100/0/50 matematika, 5 stubova,
- Dokaz/README.md: mini-tool oznacen kao 'built and verified' (ne 'live') + honest module count 113

### 2026-10-08 — NEXT-PLAN: honest numbers + phases 0-6 with proofs and status

`e367502`

### 2026-10-08 — Phase 1 — public evidence in English: README + CASE-STUDY + OFFER + secrets guard

`0ff1e9d`

- Dokaz/README.md: sta masina radi (6 faza), 5 sposobnosti sa iskrenim stanjem (WP/WP live i
- Dokaz/CASE-STUDY.md: format what -> metric -> how, stvarni baseline (GSC 48 prikaza/0 klikova),
- Dokaz/OFFER.md: 3 paketa (49/149/349 EUR), async dostava, 30-dnevni probni period, sta NE tvrdim
- Dodaci/dokaz-provera.mjs: kapija prije objave - skenira dokaz/ na tokene, kljuceve, IP adrese,
- Provjereno: dokaz-provera cist (2755 rijeci, 0 sumnjivo), testovi 47/0 i 58/0 zeleni

### 2026-10-08 — Phase 0 — machine hygiene: honest count 123 -> 110, daily run green (archive fix), scanner ignores _* files

`5b9f2bb`

- 17 zastalih root kopija premjesteno u backups/ (dokaz: nijedna referenca ne pokazuje na root;
- Arhiva.mjs: ROOT iz lokacije fajla (bilo ukucano <root> -> tar je padao i obarao
- To je bio lazni dokaz
- Lib/pokrivenost.mjs: preskace _* fajlove (dijagnosticki alati nisu moduli masine)
- Dokazi: reports/dokaz-faza0-machine hygiene-2026-10-08.md, reports/dokaz-arhiva-tar-2026-10-08.json
- Provjere ostale zelene: testovi 47/0, jedinice 58/0, slika-dom 10/10, slika-zivo 5/5

### 2026-10-08 — Live machine picture: HTML generated from JSON (no hardcoded numbers) + live layer via local server

`a323957`

- Dodaci/slika-html.mjs: generator strane iz reports/SLIKA-MASINE-<dan>.json (slojevi+moduli iz
- Dodaci/slika-sablon.html: sablon (layout + React) koji generator NIKAD ne prepisuje
- Dodaci/slika-server.mjs: mali lokalni server (strana + JSON, ista adresa) za zvani live layer
- Dodaci/slika-masine.mjs: ROOT se izvodi iz lokacije fajla (radi i na PC-u i na VPS-u) + blok
- Dodaci/test-slika-html-dom.mjs: dokaz u pravom Chrome-u (10/10 provjera, 0 JS gresaka)
- Dodaci/test-slika-zivo.mjs: dokaz da strana sama povuce JSON (test posalje 777 umjesto 123)
- Kompletna-Slika-Masine-123.html: generisan (286 KB), live layer na dnu
- PLAN-SLEDECE.md: stavka 1 gotova + uputstvo + nove zamke (rezanje bundle-a, M.json, innerText)

### 2026-10-08 — PLAN-SLEDECE.md: build backlog (kod na max, we do not touch the sites) + proven pitfalls

`8dca600`

### 2026-10-08 — Complete machine picture: one document from real data

`c02fc13`

- Reports/SLIKA-MASINE-<dan>.md (+ .json): 9 sekcija — u jednom pogledu, slojevi i moduli (sa oznakama krug/zakazano/test), redoslijed dnevnog kruga, zakazani zadaci, dokazi, mjerenja po sajtu, roj, otvoreno, kako vidjeti interaktivno
- MJERENO: 123 modula · 60 u krugu · 13 zakazanih · 114 pod testom · 48 koraka · 12 zadataka · roj 7/7 komponenti
- Dnevni zadatak sada posle kruga pravi i sliku masine (uz dokaz-sve, roj-stanje, roj-ucenje)

### 2026-10-08 — ROJ SPOJEN: nas robot (nmq-robot v1.9.2, port 8787) prima lekcije masine — 80 lekcija poslano

`9050c28`

- NASLI SMO PRAVI GATEWAY: nmq-robot v1.9.2 na portu 8787 (npm run serve / scripts/serve.mjs); <domain> na 8001/8081 NEMA /v1 rute
- KLJUC IZDAT: node src/cli.js keys nmq full -> nmq_... (36) + hash; hash upisan u config/tenants.json (tenant nmq), gateway restartovan; GET /v1/agents -> 200 (19 agenata)
- RUTA ZA UCENJE: /v1/feedback prima payload (200, saved:true); /v1/hooks/:source 403, /v1/kb zakljucan
- FixedO: Git Bash je kvario putanju iz .env -> MSYS_NO_PATHCONV=1 u zadatku + normalizacija putanje u modulu
- Roj-stanje gleda 8787 i 401/403 racuna kao 'ruta postoji' -> 7/7 komponenti radi, 'poslano da'
- .env: ROJ_URL=http://<local>:8787, ROJ_PUT=/v1/feedback, ROJ_KLJUC

### 2026-10-08 — Roj je DIO nase masine (ne tudji servis): svoj sloj u shemi + dnevni nadzor + alarm

`cad482f`

- Dodaci/roj-stanje.mjs: provjerava SVE nase komponente roja (lokalno 8081/8001/8002/8003/3001, javno api.<domain>.pro, VPS <domain>-api i <domain>-node@8002/8003); ispisuje ko radi i koje rute odgovaraju; alarm u dnevni zbir ako nesto ne radi
- Lib/pokrivenost.mjs: novi sloj '8 - ROJ (nasa masina uci)' sa roj-ucenje.mjs i roj-stanje.mjs -> vidljivo u shemi
- NMQ-FV-Krug-PC: posle kruga zove dokaz-sve, roj-stanje, roj-ucenje (test + posalji)
- Nalaz: 2/6 komponenti rade (<domain>-pro-api lokalno + javno), robot gateway ne odgovara -> 72 lekcije cekaju lokalno; VPS cvor namjerno ugasen

### 2026-10-08 — Roj uci iz masine (72 lekcije/dan) + objedinjeni dokaz + fixede 2 greske iz kruga

`9134bf9`

- NALAZ: na :8081 radi <domain>-pro-api (drugi servis), a robot gateway rute (/v1/...) ne odgovaraju ni lokalno (3001/8001/8002/8003) ni na VPS-u (<domain>-node@8002/8003 inactive) — lekcije se zato cuvaju lokalno i salju automatski kad gateway proradi

### 2026-10-08 — Simulacija objave kroz repo (Next sajtovi) + kes: pravi git nad lokalnim bare repoom, 20/20

`80c536b`

- Dodaci/test-repo-tok.mjs: 'GitHub' je lokalni bare repo (pravi clone/commit/push), 'Cloudflare' je lokalni lazni API (CF_API_BASE sav)
- Dokazano: zakrpa stize na REMOTE (HEAD + sadrzaj provjereni na remoteu), guard 'nema stvarne izmjene = STOP prije builda', ROLLBACK cist (stablo bitno identicno pocetnom, istorija sacuvana revertom), lazni Cloudflare prima TACNO tijelo purge zahtjeva + Bearer token, neuspjeh purge-a se prijavljuje posteno (bez laznog uspjeha), bez tokena se ne poziva nista
- Lib/deploy.mjs: CF_API_BASE sav za testove
- Run-krug.sh: korak test-repo-tok; MJERENO: 47+58+35+20 = 160 provjera, sve prolaze, svi izlazni kodovi 0
- Pokrivenost: 119 modula, 60 u krugu, 12 zakazano, 111 pod testom, 0 bez opisa

### 2026-10-08 — Simulacija toka objave na lokalnom serveru: 35 provjera (backup, provera, rollback, kes, zastite)

`aebcc82`

- Dodaci/test-objava-tok.mjs: lokalni HTML server + STROG emulator SSH komandi; voze PRAVE funkcije deploy.mjs (posaljiNaSajt, provjeriNaSajtu, vratiNajnovijiBackup, nadjiCilj) i uslovPostoji iz lib/provere.mjs
- Dokazano: backup na serveru prije upisa, blok u <head> za canonical/meta, provera kroz zivi sajt, ROLLBACK bitno identican (SHA256), marker-ali-pogresan-sadrzaj (bug <domain>.pro) se prepozna i vrati, zamjena cijele strane, kes ne pravi lazni uspjeh, nepoznat domen/strana bez fajla = nista se ne pise, podstrana ide u SVOJ fajl (istorijski bug /pricing -> index.html)
- SIMULACIJA NASLA PRAVI BUG: kad je strana mapirana a fajl ne postoji, masina je prijavljivala 'ssh' gresku i pokusavala cp na nepostojeci fajl -> lib/deploy.mjs sada provjerava postojanje za SVE grane (test -f) i vraca 'nema-strane'
- Lib/deploy.mjs: savovi za testove (postaviIzvrsioca, postaviMapu) — u produkciji se ne pozivaju
- Lib/provere.mjs: uslovPostoji() (jedan izvor istine za 'da li je popravka STVARNO primijenjena')
- FixedO GASENJE: testovi su izlazili sa kodom -1073740791 (libuv UV_HANDLE_CLOSING) iako su prosli -> closeAllConnections + await close + process.exitCode
- Run-krug.sh: korak test-objava-tok; MJERENO: 47 + 58 + 35 = 140 provjera, sve prolaze, kod 0

### 2026-10-08 — Lokalni dokaz: testovi ponasanja (58) + cuvari regresija + dokaz-testovi artefakt; nista se ne objavljuje

`2a4a40f`

- Dodaci/testovi-jedinice.mjs: LOKALNI fixture server na <local> (bogata/tanka strana, robots, sitemap, 429 koji prodje, 521, 500, 404) + provjere ponasanja: statusi, citljivost botu, ogranicenja, izolacija kljuceva (kljuc klijenta vazi samo unutar poziva), GTM plan, WP/Webflow probni hod, opis modula sa CRLF
- CUVARI REGRESIJA za svaku stvarno nađenu gresku: nema auto-objave u krugu, geo/www/onpage/oko ne prave lazne nalaze, fabrika omotava JSON-LD u <script>, objava provjerava SADRZAJ, Telegram samo jedan posiljalac, nema require(), nema CRLF, lanac ne zove removedu funkciju, pseo ne koristi interne dijagnostike kao teme
- Dokaz: reports/dokaz-testovi-<dan>.json + .md (git HEAD, Node, platforma, SHA256 test fajlova, po sekcijama)
- Run-krug.sh: korak testovi-jedinice posle testovi; rezultat ide u dnevni zbir (vidljivo u Telegram poruci)
- Lib/http.mjs + geo.mjs: backoff podesiv (FV_RETRY_MS) da testovi budu brzi
- MJERENO: testovi 47/0 · testovi ponasanja 58/0 · modula 117 · u krugu 58 · zakazano 12 · testom 109 · bez opisa 0

### 2026-10-08 — Do kraja: pristanak za klijente, mini-tooli, i pokrivenost koja mjeri i ZAKAZANO (ne samo dnevni krug)

`05a0062`

- Klijenti/PRISTANAK-template.md: onboarding bez lozinki (GSC dodaj korisnika / GA4 Viewer / GTM Read / Cloudflare invite) + sta klijent dobija + kako se pristup ukida
- Dodaci/mini-tool.mjs: pravi mini-tool po sajtu (GEO self-check, 10 pitanja, radi u browseru bez servera) + registar reports/mini-tooli.json -> portal klijenta prikazuje link
- Lib/pokrivenost.mjs: stanje se sada cita i iz Windows zakazanih zadataka (schtasks) -> pokrivenost = dnevni krug ILI zakazani zadatak; 'rucno' je samo ono sto pokrece covjek
- Provera-sheme.mjs + shema.mjs --provera-kruga: ispisuju krug/zakazano/testom/bez opisa
- Nedjeljni zadatak NMQ-FV-Nedjeljno-Mjerenja sada zove 9 modula (radar, pitanja, konkurencija, konkurencija-upiti, klijenti-kljucevi, scrape-intent, pseo-generator, mini-tool, klijent)
- MJERENO: testovi 47/0 · modula 116 · u krugu 57 · zakazano 12 · testom 108 · bez opisa 0 · samo rucno 43

### 2026-10-08 — Checklista 100% + portfolio paket za GEO firme: pSEO pipeline, intent leadovi, GTM, WP/Webflow, portal METRIKA

`5a4bbc6`

- Krug: 42 koraka / 37 node dodaci poziva (tvrdnja '21' bila zastarjela); addedi modeli --uloge, radnici-nadzor, arhiva --ceka (5 sajtova), fv-stanje
- Arhiva.mjs: fixed bug (nepostojeca promjenljiva rezultati) + novi --ceka rezim (samo strane koje cekaju objavu)
- Pokrivenost.mjs: opis modula se vise ne gubi zbog CRLF (6 modula lazno 'bez opisa') -> bez opisa 0
- Testovi.mjs: nova sekcija 9 (80 modula imenom: postoji, ima opis, nema require(), ne salje Telegram) -> testovi 47/0, pokrivenost testom 11 -> 107
- Telegram: hosting-build vise nema funkciju 'telegram' (zvala se a nije slala) -> uZbir; lanac.mjs vise ne zove removedu funkciju
- Dnevni-zbir.json se pravi u telegram-dnevni.mjs (izvor ostaju jsonl)
- Shema.mjs: --provera-kruga (izlazni kod 1 ako modul nema opis) + alijasi Full-Vidljivost-Shema-Masine.html / Full-Vidljivost-Alati.md
- Dodaci/pseo-generator.mjs: 65 strana iz STVARNE potraznje (GSC upiti + Google autocomplete + orphan), sa H1/metom/FAQ/JSON-LD(Article+FAQPage)/canonical/unutrasnjim linkovima + sitemap-pseo.xml; ne dira zivi sajt (predlozi/pseo/)
- Dodaci/scrape-intent.mjs: intent signali i warm leadovi (autocomplete + GSC prikazi-bez-klikova + PAA + SERP konkurencija), tip namjere po pravilima, tabela intent + 50 leadova
- Lib/gtm.mjs: konverzije iz GA4 API (conversions, sessionConversionRate) + generator plana pracenja (form_submit/tel_click/whatsapp_click...); bez izmisljanja brojeva
- Lib/objava-wp.mjs: WordPress REST + Webflow adapteri (probni hod ispise tacan zahtjev; bez kljuceva kaze 'nema kljuceva')
- Klijent.mjs: sekcija METRIKA (GSC 7v7 prikazi/klikovi, upiti gore/dolje, PageSpeed LCP/CLS, GEO, koraka masine) + async dokaz + mini-tool link

### 2026-10-08 — Konkurencija po kljucnim rijecima (SerpApi) + STVARNA izolacija Google kljuceva po klijentu

`edd7d44`

- Dodaci/konkurencija-upiti.mjs: za nase upite (iz tabele pozicije + rucna lista) trazi Google rezultate i pise KO JE IZNAD NAS; kvota SerpApi (10/dan, 250/mjesec po kljucu) se broji u data/serp-kvota.json i rotiraju se 4 kljuca
- Prvih 9 upita: jedini upit gdje nas ima je 'beopro properties' (#8, iznad 4zida.rs/companywall.rs/halooglasi.com); najcesce iznad nas facebook.com, linkedin.com, play.google.com
- Lib/gauth-multi.mjs: saKlijentom() stvarno koristi kljuc klijenta i VRACA okruzenje na staro; identitetKlijenta() pokazuje ciji je nalog
- Lib/gauth.mjs: kes tokena sada pamti IDENTITET naloga + scopes (nema kesa servisnog naloga na nivou modula) — bez toga bi klijent A dobio token klijenta B
- Lib/gsc.mjs + lib/ga4.mjs: svi GSC/GA4 pozivi idu kroz saKlijentom(domen)
- Dodaci/klijenti-kljucevi.mjs: dokaz (5/5 OK) + analiza za 20 klijenata (svi dijele JEDAN GA4 property i JEDAN nalog)
- Nedjeljni zadatak NMQ-FV-Nedjeljno-Mjerenja sada zove i konkurencija-upiti i klijenti-kljucevi

### 2026-10-08 — Pozicije kroz vrijeme: nova tabela pozicije + izvjestaj, portal klijenta, nedjeljni i dokaz lanca

`803f4c9`

- Dodaci/pozicije.mjs: GSC searchAnalytics sa dimensions query+page+date -> tabela pozicije (PK dan,client_id,upit,strana); poredenje zadnjih 7 prema prethodnih 7 dana (pozicija vagana po prikazima); tabela stanja top upita; alarm za pad >5 mjesta (>=10 prikaza), pohvala za napredak
- Klijent.mjs: sekcija 'Pozicije u Google-u — pomak u zadnjih 7 dana' u portalu
- Nedjeljni.mjs: sekcija pozicija po sajtu sa najvecim pomacima
- Lanac.mjs: dokaz lanca sada prijavljuje i ▲/▼ u pretrazi
- Run-krug.sh: korak pozicije (dnevno, --dana 7 --json). Prvi put popunjeno 28 dana unazad (27 redova)
- Lokalni model (nmq-kod) proban za nacrt: vratio neupotrebljiv kod (pogresni upiti, require u ESM) -> modul napisan i provjeren rucno

### 2026-10-08 — Sigurna objava dokazana na zivom sajtu: uhvacen pogresan sadrzaj, vracen original, uzrok fixed

`dcfd496`

- UZROK: fabrika.mjs je za tip 'schema' objavljivao FAQ HTML + JSON-LD BEZ <script> omotaca -> na zivu stranu je isao VIDLJIV TEKST, Google nije vidio strukturirane podatke (<domain>.pro/terms.html #646)
- Fabrika.mjs: schema = samo ispravan JSON-LD u <script> omotacu; faq = FAQ blok + JSON-LD
- Objava-bezbjedno.mjs: provjera sada trazi i SADRZAJ (uslov popravke), ne samo marker; added --fix N za ciljanu popravku
- NOVO dodaci/vrati-backup.mjs (rucni rollback), _alati/prepravi-fix.mjs (prepravi pa ponovi), _alati/upit.mjs (read-only SQL)
- DOKAZ: prvi hod je uhvatio pogresan sadrzaj (marker bio, JSON-LD nije) -> rollback -> popravka uzroka -> ponovni hod prosao (marker + uslov), provjeri-objavljeno 9/9 potvrdjeno

### 2026-10-08 — Masina zove agenta kad padne: pozovi-agenta.mjs (lokalna dijagnoza  + opcioni dsh headless)

`5318a2e`

- NIVO 1: strukturisan zahtjev za pomoc po palom koraku (data/pozovi-agenta/<dan>-<korak>.json)
- NIVO 2: lokalni model (qwen2.5-coder:14b) daje dijagnozu uzroka,  -> reports/pozovi-agenta-<dan>.md + u negativnu Telegram poruku
- NIVO 3: dsh headless pokrece pravi agentski hod, ali SAMO uz FV_POZOVI_DSH=1 i najvise 1x dnevno
- Isjecak loga se uzima tacno do sljedeceg koraka (prije je uzimao tudje korake i lokalni model je pogrijesio uzrok)
- Run-krug.sh: poziv ide posle provjere greske-<dan>.txt; modul nikad ne obara krug

### 2026-10-08 — Prelazak masine na PC: krug dokazan 5/5 + 8 popravki laznih nalaza + alat za sigurnu objavu

`43a380a`

- NMQ-FV-Krug-PC je radio nad zastarjelom kopijom (/opt junction): krug bi sutra isao BEZ novih koraka
- Lib/http.mjs: 5xx (521/504) i prekid veze = 'nije izmjereno' + umereno tempiranje (350 ms po hostu) da krug sam ne obori sajt
- Geo.mjs/www.mjs/oko.mjs/onpage.mjs: lazni nalazi (nema robots.txt, 521, GRESKA fetch failed) -> neizmjereno, bez alarma; GEO prosjek 86/100 (bilo 16/100)
- Zdravlje.mjs: provjerava PC zakazani zadatak, ne /etc/cron.d na VPS-u
- Kod-queue.mjs + repo-mapa.json: 4 koraka koja su padala svaki dan sada rade (klon + priprema)
- Lanac.mjs: dokaz mejla sa PC-a, tacan broj koraka (45/45, bilo 10/9), pokvaren telegram() removed
- Run-krug.sh + telegram-dnevni.mjs: lanac dokaz ulazi u dnevni krug i u pozitivnu Telegram poruku (+ --probni)
- Nadzor.mjs: lanac dokaz se trazi na PC-u, ne preko SSH na VPS-u
- Deploy.json: Windows putanja SSH kljuca (bila VPS /root/.ssh/...)
- NOVO dodaci/objava-bezbjedno.mjs: slika -> proba -> upis -> provjera -> rollback i ponovi -> pocisti (privremeni rucni alat)
- Lib/deploy.mjs: nadjiCilj() izdvojen + vratiNajnovijiBackup() za rollback

### 2026-10-08 — Telegram: pokrivenost modula u negativnoj poruci (bez nove poruke)

`7599446`

### 2026-10-08 — Provera-sheme (pokrivenost + regresija) + PC preuzeo VPS cron poslove

`7e9c047`

### 2026-10-08 — Shema.mjs: interaktivna shema (klik->opis/status, trazenje, filter, bedzevi NOVO/KRUG/TEST)

`76b5a17`

### 2026-10-08 — Testovi: samostalan probni log (radi i na VPS-u)

`2e44a3b`

### 2026-10-08 — Testovi masine (43 provjere) + lib/provere.mjs (jedan izvor istine) + Telegram garancija

`c0322d5`

### 2026-10-08 — FULL VIDLJIVOST masina: prva verzija pod git-om (kod, dokumentacija, shema)

`dbde2dc`

## Run journal (machine-recorded, why + result)

> Written automatically by the run journal at the moment of each change on a live system.
> Kept in Serbian on purpose: it is the machine's raw record, translated only for this changelog.

```
- **16:45** `auto` **full-vidljivost
** - PROGRAM ZAUSTAVLJEN
  - zasto: automatska provera
  - rezultat: vise ne radi
```

```
- **16:43** `git` **full-vidljivost** - commit: Faza 1c: javni repo provjeren PRIJE objavljivanja (curenje + drift + render)
```

```
- **16:39** `auto` **full-vidljivost
** - PROGRAM POKRENUT
  - zasto: automatska provera
  - rezultat: radi u pozadini
```

```
- **16:17** `auto` **full-vidljivost
# skini favicon 404 iz testa: test server vrati praznu ikonu
@'
import fs from 'node:fs';
const p = 'dodaci** - PROGRAM ZAUSTAVLJEN
  - zasto: automatska provera
  - rezultat: vise ne radi
```

```
- **16:13** `agent` **full-vidljivost (masina)** - Ziva slika masine: HTML se pravi iz JSON-a + zivi sloj
  - zasto: HTML je imao ukucane brojke (114 pod testom, 160 testova) koje su lagale istog dana; sada se sve cita iz reports/SLIKA-MASINE-<dan>.json
  - rezultat: node dodaci/slika-html.mjs (0), test-slika-html-dom 10/10 u Chrome-u bez JS gresaka, test-slika-zivo 5/5 (strana sama povuce JSON), commit a323957 pushovan
```

```
- **16:12** `auto` **full-vidljivost
# skini favicon 404 iz testa: test server vrati praznu ikonu
@'
import fs from 'node:fs';
const p = 'dodaci** - PROGRAM POKRENUT
  - zasto: automatska provera
  - rezultat: radi u pozadini
```

```
- **16:12** `auto` **full-vidljivost
@'
import fs from 'node:fs';
import { chromium } from 'playwright-core';
let t = fs.readFileSync('Kompletna-Slika-Masine-123.html','utf8');
const tag = '<script type=** - PROGRAM ZAUSTAVLJEN
  - zasto: automatska provera
  - rezultat: vise ne radi
```

```
- **16:06** `auto` **full-vidljivost
@'
import fs from 'node:fs';
const t = fs.readFileSync('Kompleta-Slika-Masine-123.html'.replace('Kompleta','Kompletna'),'utf8');
let i=-1,poz=[];
while((i=t.indexOf('M.',i+1))>=0) poz.push(i);
console.log('M. pojava:', poz.length);
const uzorci = new Set();
for (const p of poz) uzorci.add(t.slice(p, p+22).split(** - PROGRAM ZAUSTAVLJEN
  - zasto: automatska provera
  - rezultat: vise ne radi
```

```
- **16:06** `auto` **full-vidljivost
@'
import fs from 'node:fs';
import { chromium } from 'playwright-core';
let t = fs.readFileSync('Kompletna-Slika-Masine-123.html','utf8');
const tag = '<script type=** - PROGRAM POKRENUT
  - zasto: automatska provera
  - rezultat: radi u pozadini
```

```
- **16:01** `auto` **full-vidljivost
@'
import fs from 'node:fs';
const t = fs.readFileSync('Kompleta-Slika-Masine-123.html'.replace('Kompleta','Kompletna'),'utf8');
let i=-1,poz=[];
while((i=t.indexOf('M.',i+1))>=0) poz.push(i);
console.log('M. pojava:', poz.length);
const uzorci = new Set();
for (const p of poz) uzorci.add(t.slice(p, p+22).split(** - PROGRAM POKRENUT
  - zasto: automatska provera
  - rezultat: radi u pozadini
```

```
- **15:11** `agent` **PC (full-vidljivost)** - Roj priznat kao DIO nase masine (sloj u shemi + dnevni nadzor + alarm)
  - zasto: Korisnik: 'to je nasa masina zasto je spajas i guras' — roj se ne smije tretirati kao tudji servis
  - rezultat: roj-stanje.mjs provjerava sve nase komponente (lokalno 8081/8001/8002/8003/3001, javno api.<domain>.pro, VPS cvorovi) i alarmira ako ne rade; novi sloj 8 u shemi; dnevni zadatak: dokaz-sve -> roj-stanje -> roj-ucenje(test+posalji). Nalaz: 2/6 rade (<domain>-pro-api), gateway ne odgovara -> 72 lekcije stoje lokalno
```

```
- **15:09** `agent` **PC (full-vidljivost)** - Roj uci iz masine + objedinjeni dokaz + 2 popravke iz kruga
  - zasto: Korisnik: stavi da robotici uce, roj je spreman; i: radi sve provere i pravi dokaze
  - rezultat: roj-ucenje.mjs: 72 lekcije/dan (nalazi, dokazane popravke, pomaci, konkurencija, intent, greske, dokazi testova) -> data/roj/ + reports/; lokalni dokaz slanja PROSAO; prave rute robota nadjene u kodu, ali gateway nije pokrenut (:8081 je <domain>-pro-api) pa lekcije cekaju lokalno. dokaz-sve.mjs: jedan dokument DOKAZ-<dan>.md (krug 56 koraka, testovi 160/160, objava u krugu NEMA). Popravljeno: kod-queue (neispravan URL) i arhiva (0 strana) — oba sada izlaze 0
```

---

*Format rule used in this project: every change states (a) what was done, (b) why, (c) how it was verified.*
That is also the rule this changelog follows.*

*Translation note: commit subjects are translated with a fixed glossary (not machine translation); the raw
run-journal excerpts are kept verbatim in Serbian so the record stays exact.*
