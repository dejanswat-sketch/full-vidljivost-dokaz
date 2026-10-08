# SEO/GEO AUDIT — <domain>.pro

**Datum:** 2026-10-08 · **Izvori:** 8 (fajlovi mjerenja + mjerenje na zahtjev) · **Izvještaj generisan:** 2026-10-08T17:30:21.175Z

> Ovaj dokument je generisan iz stvarnih mjerenja. Svaka brojka ima naveden izvor; ako nešto nije
> mjereno, tako i piše. Audit ne obećava popravke — on pokazuje stanje i šta bi se prvo radilo.

## 1) Šta je izmjereno

| Mjera | Vrijednost | Izvor | Ocjena |
|---|---|---|---|
| Search Console — prikazi | **48** | `reports/analitika-2026-10-08.json` | ✓ |
| Search Console — klikovi | **0** | `reports/analitika-2026-10-08.json` | ⚠ |
| GA4 — sesije | **4** | `reports/analitika-2026-10-08.json` | ✓ |
| Pozicije (7 dana) | **▲0 / ▼0** | `reports/pozicije-2026-10-08.json` | ✓ |
| GEO skor | **55/100** | `reports/geo-2026-10-08.json` | ⚠ |
| PageSpeed (performance) | **nije mjereno** | `reports/brzina-2026-10-08.md` | ? |
| Validacija strukturiranih podataka | **nije mjereno** | `reports/schema-valid-2026-10-08.json` | ? |
| On-page (canonical, H1, meta, JSON-LD) | **nije mjereno** | `reports/onpage-2026-10-08.json` | ? |
| Indeksiranje (URL Inspection) | **nije mjereno** | `reports/indeks-2026-10-08.json` | ? |
| AI botovi (Cloudflare) | **nije mjereno** | `reports/cf-analitika-2026-10-08.json` | ? |

## 2) Mjereno sada na sajtu (bez pristupa)

*Ovaj domen je naš klijent — podaci dolaze iz mjerenja koja mašina već radi.*

## 3) Nalazi (po prioritetu)

**🟡 Prikazi bez klikova**

Strana se prikazuje (48), ali nema klikova — naslov i meta opis ne odgovaraju namjeri upita.

**🟡 GEO skor ispod 70**

Struktura za AI asistente je djelimična (55/100) — nedostaju dijelovi koje model mora razumjeti (entitet, činjenice, oznake).

**🟡 Strukturirani podaci nisu validirani**

Nema zapisa validacije — ne zna se da li su JSON-LD oznake ispravne (prisustvo ≠ ispravnost).

## 4) Šta bi se radilo prvo (prijedlog, ne obećanje)

1. Prikazi bez klikova
2. GEO skor ispod 70
3. Strukturirani podaci nisu validirani

## 4) Kako se ovo provjerava

- Svaka brojka u tabeli ima izvor u `reports/` — možete otvoriti isti fajl i vidjeti isto.
- Mjerenje se ponavlja svaki dan u 05:10; trend (gore/dolje) se vidi u `reports/pozicije-*.json`.
- Ako se brojka ne promijeni, izvještaj to kaže — nema „poboljšanja" bez mjerenja.

---

*Generisano iz mjerenja mašine (5/10 mjera ima podatke).*
