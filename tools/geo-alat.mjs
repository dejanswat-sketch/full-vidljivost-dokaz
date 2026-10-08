// geo-alat.mjs — GRADNJA MINI-ALATA „GEO self-check" (statički HTML, radi bez servera i bez ključa)
//
// ZAŠTO (Faza 2 cilja): postojeći `predlozi/mini-alati/*/geo-self-check.html` je bio ČEK-LISTA —
// 10 polja, bez skora, bez dijeljenja, bez CTA. Alat koji ne računa ništa i nigdje ne vodi ne može
// biti „mini-tool koji donosi saobraćaj" (a to je ono što async firme traže).
//
// Šta ovaj alat pravi (za svaki sajt i svaki jezik):
//   predlozi/mini-alati/<domen>/<ime>-<jezik>.html
//   - 10 pitanja u 5 stubova GEO-a (2 pitanja × 10 bodova = 100)
//   - skor se računa U BROWSERU (nema servera, nema ključa, radi i sa `file://`)
//   - rezultat ide u URL (`#s=<bitovi>`), pa se link može poslati/dijeliti
//   - pokaže 3 najvažnije popravke za konkretan rezultat
//   - CTA (zakazivanje nije potrebno — ponuda je pisana)
//
// Upotreba:
//   node dodaci/geo-alat.mjs                          # svi sajtovi, jezici po domenu
//   node dodaci/geo-alat.mjs --domen <domain>.pro --jezik en
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (n, d = null) => {
  const i = process.argv.findIndex((x) => x === '--' + n || x.startsWith('--' + n + '='));
  if (i < 0) return d;
  const a = process.argv[i];
  if (a.includes('=')) return a.split('=')[1];
  const v = process.argv[i + 1];
  return v && !v.startsWith('--') ? v : true;
};

// ── pitanja: 5 stubova GEO-a, po 2 pitanja (10 bodova svako) ────────────────
const PITANJA = {
  sr: [
    { stub: 'Čitljivost za mašine', t: 'Stranica ima tačno jedan H1 i jasan naslov teme' },
    { stub: 'Čitljivost za mašine', t: 'Canonical pokazuje na samu sebe (nema duplih adresa)' },
    { stub: 'Strukturirani podaci', t: 'Postoji JSON-LD i on je VALIDAN (ne samo prisutan)' },
    { stub: 'Strukturirani podaci', t: 'FAQ ili HowTo blok je označen kao structured data' },
    { stub: 'Jasnoća entiteta', t: 'Ime firme, grad i djelatnost su eksplicitno napisani na strani' },
    { stub: 'Jasnoća entiteta', t: 'Postoji sameAs veza (Google Business, LinkedIn, itd.)' },
    { stub: 'Gustina činjenica', t: 'Stranica daje konkretne brojke: cijene, rokovi, rezultati' },
    { stub: 'Gustina činjenica', t: 'Sadržaj je originalan (nije prepisan sa drugog sajta)' },
    { stub: 'AI pristup i vidljivost', t: 'AI botovi (GPTBot, ClaudeBot, PerplexityBot) NISU blokirani u robots.txt' },
    { stub: 'AI pristup i vidljivost', t: 'Mjeriš AI dolaske (GA4) i AI botove (Cloudflare) — znaš da li te čitaju' },
  ],
  en: [
    { stub: 'Machine readability', t: 'The page has exactly one H1 and a clear topic title' },
    { stub: 'Machine readability', t: 'Canonical points to the page itself (no duplicate URLs)' },
    { stub: 'Structured data', t: 'JSON-LD exists AND is valid (not merely present)' },
    { stub: 'Structured data', t: 'An FAQ or HowTo block is marked up as structured data' },
    { stub: 'Entity clarity', t: 'Company name, city and what you do are stated explicitly on the page' },
    { stub: 'Entity clarity', t: 'There is a sameAs link (Google Business, LinkedIn, etc.)' },
    { stub: 'Fact density', t: 'The page states concrete numbers: prices, timelines, results' },
    { stub: 'Fact density', t: 'The content is original (not copied from another site)' },
    { stub: 'AI access & visibility', t: 'AI crawlers (GPTBot, ClaudeBot, PerplexityBot) are NOT blocked in robots.txt' },
    { stub: 'AI access & visibility', t: 'You measure AI arrivals (GA4) and AI crawlers (Cloudflare)' },
  ],
};

const TEKST = {
  sr: {
    naslov: 'GEO self-check',
    podnaslov: 'Da li vas AI asistenti (ChatGPT, Gemini, Perplexity) mogu pročitati, razumjeti i citirati?',
    uvod: '10 pitanja, oko 60 sekundi. Odgovorite iskreno — alat računa skor i pokazuje šta prvo popraviti. Ništa se ne šalje na server: sve radi u vašem browseru.',
    dugme: 'Izračunaj skor',
    reset: 'Počni ponovo',
    skor: 'Vaš GEO skor',
    kopiraj: 'Kopiraj link sa rezultatom',
    kopirano: 'Kopirano ✓',
    staPrvo: 'Šta prvo popraviti',
    sveOk: 'Sve je pokriveno — sljedeći korak je mjerenje AI citata kroz promptove.',
    cta: 'Želite da ovo popravim za vas?',
    ctaTekst: 'Pošaljite domen i dobijate audit u 48 h (49 €). Bez sastanaka — sve pisano, sa dokazima.',
    ctaDugme: 'Zatraži audit',
  },
  en: {
    naslov: 'GEO self-check',
    podnaslov: 'Can AI assistants (ChatGPT, Gemini, Perplexity) read, understand and cite you?',
    uvod: '10 questions, about 60 seconds. Answer honestly — the tool scores you and shows what to fix first. Nothing is sent to a server: it all runs in your browser.',
    dugme: 'Calculate score',
    reset: 'Start over',
    skor: 'Your GEO score',
    kopiraj: 'Copy result link',
    kopirano: 'Copied ✓',
    staPrvo: 'What to fix first',
    sveOk: 'Everything is covered — the next step is measuring AI citations through prompts.',
    cta: 'Want me to fix this for you?',
    ctaTekst: 'Send your domain and get an audit within 48 h (€49). No meetings — everything in writing, with artifacts.',
    ctaDugme: 'Request audit',
  },
};

const POPRAVKE = {
  sr: {
    naslov: 'Dodaj jedan jasan H1 koji kaže šta strana nudi',
    canonical: 'Usmjeri canonical na tačnu adresu te strane',
    jsonld: 'Dodaj validan JSON-LD (Organization + WebSite)',
    faq: 'Dodaj FAQ blok sa FAQPage oznakom',
    entitet: 'Napiši ime firme, grad i djelatnost punom rečenicom',
    sameas: 'Poveži profile (sameAs: Google Business, LinkedIn)',
    brojke: 'Ubaci konkretne brojke: cijene, rokovi, rezultati',
    original: 'Zamijeni prepisan sadržaj originalnim',
    robots: 'Otključaj AI botove u robots.txt (GPTBot, ClaudeBot, PerplexityBot)',
    mjerenje: 'Uvedi mjerenje: GA4 AI dolasci + Cloudflare AI botovi',
  },
  en: {
    naslov: 'Add one clear H1 that states what the page offers',
    canonical: 'Point canonical at the page’s own exact URL',
    jsonld: 'Add valid JSON-LD (Organization + WebSite)',
    faq: 'Add an FAQ block marked up as FAQPage',
    entitet: 'State company name, city and what you do in a full sentence',
    sameas: 'Link your profiles (sameAs: Google Business, LinkedIn)',
    brojke: 'Add concrete numbers: prices, timelines, results',
    original: 'Replace copied content with original content',
    robots: 'Unblock AI crawlers in robots.txt (GPTBot, ClaudeBot, PerplexityBot)',
    mjerenje: 'Start measuring: GA4 AI arrivals + Cloudflare AI crawlers',
  },
};

// koje pitanje (indeks) rješava koji ključ popravke
const KLJUC_POPRAVKE = ['naslov', 'canonical', 'jsonld', 'faq', 'entitet', 'sameas', 'brojke', 'original', 'robots', 'mjerenje'];

function html(domen, jezik, { ctaMejl, ctaIssues }) {
  const P = PITANJA[jezik];
  const T = TEKST[jezik];
  const R = POPRAVKE[jezik];
  const stubs = [...new Set(P.map((p) => p.stub))];
  return `<!DOCTYPE html>
<html lang="${jezik}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${T.naslov} — ${domen}</title>
<link rel="canonical" href="https://${domen}/full-vidljivost/geo-self-check-${jezik}.html">
<meta name="description" content="${T.podnaslov}">
<style>
:root{--bg:#0b0b0d;--surf:#141417;--surf2:#1c1c21;--bord:#2a2a31;--txt:#ededf0;--mut:#9a9aa5;--ok:#10b981;--bad:#ef4444;--mid:#eab308;--acc:#2563eb}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--txt);font:15px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
.wrap{max-width:760px;margin:0 auto;padding:28px 20px 64px}
h1{font-size:22px;margin:0 0 6px}
.sub{color:var(--mut);margin:0 0 18px}
.uvod{background:var(--surf);border:1px solid var(--bord);border-radius:12px;padding:14px;color:var(--mut);font-size:13px;margin-bottom:18px}
.q{display:flex;gap:12px;align-items:flex-start;background:var(--surf);border:1px solid var(--bord);border-radius:12px;padding:13px 14px;margin-bottom:8px;cursor:pointer}
.q:hover{border-color:#3a3a46}
.q input{margin-top:3px;width:18px;height:18px;accent-color:var(--acc);flex:none;cursor:pointer}
.q .stub{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:var(--mut);margin-bottom:2px}
.q span.txt{display:block}
button{font:inherit;border-radius:10px;border:1px solid var(--bord);background:var(--surf2);color:var(--txt);padding:11px 16px;cursor:pointer}
button.prim{background:#fff;color:#000;border-color:#fff;font-weight:600}
button:hover{opacity:.92}
.row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
#rezultat{display:none;margin-top:24px}
.skor{font-size:46px;font-weight:700;line-height:1;letter-spacing:-.03em}
.skok{color:var(--ok)}.slosije{color:var(--bad)}.sosrednji{color:var(--mid)}
.card{background:var(--surf);border:1px solid var(--bord);border-radius:14px;padding:16px;margin-top:14px}
.bar{height:8px;border-radius:99px;background:var(--surf2);overflow:hidden;margin-top:6px}
.bar i{display:block;height:100%;background:var(--acc)}
.stubrow{display:flex;justify-content:space-between;font-size:12px;color:var(--mut);margin-top:12px}
ul{margin:8px 0 0;padding-left:20px}
li{margin-bottom:6px}
.cta{background:linear-gradient(180deg,#12233f,#0d1526);border:1px solid #234;border-radius:14px;padding:18px;margin-top:20px}
.cta h2{margin:0 0 6px;font-size:17px}
.cta p{color:#c7d2e0;font-size:13px;margin:0 0 12px}
a.dugme{display:inline-block;background:#fff;color:#000;font-weight:600;text-decoration:none;padding:11px 16px;border-radius:10px}
.foot{color:var(--mut);font-size:11px;margin-top:22px;text-align:center}
</style>
</head>
<body>
<div class="wrap">
  <h1>${T.naslov} — ${domen}</h1>
  <p class="sub">${T.podnaslov}</p>
  <div class="uvod">${T.uvod}</div>
  <form id="forma"></form>
  <div class="row">
    <button class="prim" id="dugme" type="button">${T.dugme}</button>
    <button id="reset" type="button" style="display:none">${T.reset}</button>
  </div>

  <div id="rezultat">
    <div class="card">
      <div style="color:var(--mut);font-size:12px;text-transform:uppercase;letter-spacing:.07em">${T.skor}</div>
      <div class="skor" id="skorBroj">0</div>
      <div style="color:var(--mut);font-size:12px;margin-top:2px">/ 100</div>
      <div id="stubovi"></div>
    </div>
    <div class="card">
      <strong>${T.staPrvo}</strong>
      <ul id="popravke"></ul>
    </div>
    <div class="row">
      <button id="kopiraj" type="button">${T.kopiraj}</button>
      <span id="kopirano" style="display:none;color:var(--ok);align-self:center;font-size:13px">${T.kopirano}</span>
    </div>
    <div class="cta">
      <h2>${T.cta}</h2>
      <p>${T.ctaTekst}</p>
      <a class="dugme" id="ctaLink" href="#">${T.ctaDugme}</a>
    </div>
  </div>

  <div class="foot">${domen} · ${T.naslov} · ${jezik.toUpperCase()} · radi bez servera i bez ključa</div>
</div>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":${JSON.stringify(T.podnaslov)}, "acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(T.uvod)}}},
 {"@type":"Question","name":${JSON.stringify(jezik === 'sr' ? 'Kako se mjeri da li nas AI citira?' : 'How do you measure whether AI cites you?')}, "acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(jezik === 'sr'
      ? 'Kroz tri mjerljive stvari: dolasci sa AI izvora (GA4), dolasci AI robota (Cloudflare: GPTBot, ClaudeBot, PerplexityBot) i strukturirani podaci koje model može da pročita. Prompt-mjerenje citata je poseban protokol.'
      : 'Through three measurable things: traffic from AI sources (GA4), AI crawler hits (Cloudflare: GPTBot, ClaudeBot, PerplexityBot) and structured data a model can parse. Prompt-based citation measurement is a separate protocol.')}}]}
]}
</script>
<script>
(function(){
  var PITANJA = ${JSON.stringify(P.map((p) => ({ stub: p.stub, t: p.t })))};
  var POPRAVKE = ${JSON.stringify(KLJUC_POPRAVKE.map((k) => R[k]))};
  var STUBOVI = ${JSON.stringify(stubs)};
  var forma = document.getElementById('forma');
  PITANJA.forEach(function(p, i){
    var l = document.createElement('label');
    l.className = 'q';
    l.innerHTML = '<input type="checkbox" data-i="' + i + '"><span><span class="stub">' + p.stub + '</span><span class="txt">' + p.t + '</span></span>';
    forma.appendChild(l);
  });

  function bitovi(){ return Array.prototype.map.call(forma.querySelectorAll('input'), function(x){ return x.checked ? '1' : '0'; }).join(''); }
  function skor(izbori){
    var bodovi = izbori.split('').map(function(b){ return b === '1' ? 10 : 0; });
    var ukupno = bodovi.reduce(function(a,b){ return a+b; }, 0);
    var poStubu = {};
    STUBOVI.forEach(function(s){ poStubu[s] = { ima: 0, max: 0 }; });
    PITANJA.forEach(function(p, i){ poStubu[p.stub].max += 10; if (bodovi[i]) poStubu[p.stub].ima += 10; });
    return { ukupno: ukupno, poStubu: poStubu, bodovi: bodovi };
  }
  function prikazi(izbori){
    var r = skor(izbori);
    document.getElementById('rezultat').style.display = 'block';
    var el = document.getElementById('skorBroj');
    el.textContent = String(r.ukupno);
    el.className = 'skor ' + (r.ukupno >= 80 ? 'skok' : (r.ukupno >= 50 ? 'sosrednji' : 'slosije'));
    var htmlStub = '';
    STUBOVI.forEach(function(s){
      var v = r.poStubu[s];
      var proc = v.max ? Math.round(v.ima / v.max * 100) : 0;
      htmlStub += '<div class="stubrow"><span>' + s + '</span><span>' + v.ima + ' / ' + v.max + '</span></div><div class="bar"><i style="width:' + proc + '%"></i></div>';
    });
    document.getElementById('stubovi').innerHTML = htmlStub;
    var fale = [];
    r.bodovi.forEach(function(b, i){ if (!b) fale.push(POPRAVKE[i]); });
    document.getElementById('popravke').innerHTML = fale.length
      ? fale.slice(0, 5).map(function(x){ return '<li>' + x + '</li>'; }).join('')
      : '<li>' + ${JSON.stringify(T.sveOk)} + '</li>';
    var link = location.origin + location.pathname + '#s=' + izbori;
    var naslov = 'GEO audit — ' + ${JSON.stringify(domen)} + ' (score ' + r.ukupno + '/100)';
    // \\n u izlazu mora biti DVA znaka (escape), inače je novi red u JS stringu = sintaksna greška
    var telo = 'Score: ' + r.ukupno + '/100\\n\\nResult link: ' + link + '\\n\\nFailing checks:\\n' + fale.map(function(x){ return '- ' + x; }).join('\\n');
    var cta = ${JSON.stringify(ctaIssues || (ctaMejl ? 'mailto:' + ctaMejl : ''))};
    document.getElementById('ctaLink').href = cta
      ? (cta.indexOf('mailto:') === 0
        ? cta + '?subject=' + encodeURIComponent(naslov) + '&body=' + encodeURIComponent(telo)
        : cta + '?title=' + encodeURIComponent(naslov) + '&body=' + encodeURIComponent(telo))
      : '#';
    document.getElementById('dugme').style.display = 'none';
    document.getElementById('reset').style.display = '';
  }
  document.getElementById('dugme').addEventListener('click', function(){
    var b = bitovi();
    history.replaceState(null, '', '#s=' + b);
    prikazi(b);
  });
  document.getElementById('reset').addEventListener('click', function(){
    forma.reset();
    document.getElementById('rezultat').style.display = 'none';
    document.getElementById('dugme').style.display = '';
    document.getElementById('reset').style.display = 'none';
    history.replaceState(null, '', location.pathname);
  });
  document.getElementById('kopiraj').addEventListener('click', function(){
    var polje = document.createElement('input');
    polje.value = location.href;
    document.body.appendChild(polje);
    polje.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(polje);
    document.getElementById('kopirano').style.display = '';
  });

  // dijeljeni link: ako u adresi postoji #s=<bitovi>, odmah pokaži isti rezultat
  var m = (location.hash || '').match(/s=([01]{10})/);
  if (m) {
    var polja = forma.querySelectorAll('input');
    m[1].split('').forEach(function(b, i){ if (polja[i]) polja[i].checked = b === '1'; });
    prikazi(m[1]);
  }
  window.__GEO_ALAT = { skor: skor, PITANJA: PITANJA.length };
})();
</script>
</body>
</html>
`;
}

// ── koji jezik za koji domen ────────────────────────────────────────────────
const JEZICI = {
  '<domain>.pro': ['en'],
  '<domain>.pro': ['en'],
  '<domain>.com': ['sr'],
  '<domain>.com': ['sr'],
  '<domain>.com': ['en'],
};
// CTA (kontakt). POPRAVLJENO 08.10.2026: `audit@example.com` je bio PODRAZUMIJEVANA vrijednost —
// i otišao je na živi sajt (`<domain>.pro/full-vidljivost/geo-self-check-sr.html`).
// Placeholder je gori od praznog polja: kupac klikne i piše na tuđu/adresu koja ne postoji.
// Sada: ako nema ni Issues linka ni pravog mejla, alat STANE. Placeholder se odbija imenom.
const PLACEHOLDER_MEJLOVI = ['audit@example.com', 'example.com', 'test@test.com', 'your@email.com'];
const CTA_MEJL = String(arg('mejl', ''));
const CTA_ISSUES = String(arg('issues', ''));
if (CTA_MEJL && (PLACEHOLDER_MEJLOVI.some((p) => CTA_MEJL.includes(p)) || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(CTA_MEJL))) {
  console.error(`[geo-alat] ⛔ CTA mejl je placeholder ili nije validan: "${CTA_MEJL}". Daj pravi mejl (--mejl) ili Issues link (--issues).`);
  process.exit(1);
}
if (!CTA_MEJL && !CTA_ISSUES) {
  console.error('[geo-alat] ⛔ nema načina da te kupac kontaktira: daj --issues <url> ili --mejl <adresa>.');
  console.error('           (prije je podrazumijevano bio placeholder `audit@example.com` — to je otišlo na sajt)');
  process.exit(1);
}
// (CTA_ISSUES je definisan gore, uz provjeru da postoji kontakt)

const domenArg = arg('domen', null);
const jezikArg = arg('jezik', null);
const domeni = domenArg ? [String(domenArg)] : Object.keys(JEZICI);

let napravljeno = 0;
for (const domen of domeni) {
  const jezici = jezikArg ? [String(jezikArg)] : (JEZICI[domen] || ['en']);
  const dir = path.join(ROOT, 'predlozi', 'mini-alati', domen);
  fs.mkdirSync(dir, { recursive: true });
  for (const jezik of jezici) {
    const ime = `geo-self-check-${jezik}.html`;
    const put = path.join(dir, ime);
    fs.writeFileSync(put, html(domen, jezik, { ctaMejl: CTA_MEJL, ctaIssues: CTA_ISSUES }), 'utf8');
    napravljeno++;
    console.log(`[geo-alat] ${path.relative(ROOT, put)} (${Math.round(fs.statSync(put).size / 1024)} KB)`);
  }
  // UKLONI ZASTARJELE KOPIJE BEZ SUFIksa (popravka 08.10.2026): ostajali su `geo-self-check.html` iz
  // starijeg rasporeda imena, sa STARIM sadržajem (uključujući placeholder mejl). Nijedan ih paket više
  // ne koristi (`objava-javno.mjs` traži `-en`/`-sr`), ali su zbunjivali i držali stari kontakt na disku.
  const stari = path.join(dir, 'geo-self-check.html');
  if (fs.existsSync(stari)) { fs.rmSync(stari, { force: true }); console.log(`[geo-alat]   (uklonjen zastarjeli ${path.basename(stari)} — stariji raspored imena)`); }
}
console.log(`[geo-alat] napravljeno: ${napravljeno} · pitanja: 10 (5 stubova × 2) · skor u browseru, rezultat u linku`);
