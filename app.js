/* ============================================================
   APLICAȚIE GRILE LICENȚĂ — logică
   9 grile per materie, extrase aleator la fiecare set nou.
   Mod "Examen complet" = 9 + 9 + 9 = 27 de grile din toate materiile.
   ============================================================ */
"use strict";

const MATERII = {
  rdlc: { nume: "Radiolocație", desc: "principii, radar, monoimpuls, Doppler", banca: () => window.BANCA_RDLC },
  re:   { nume: "Război Electronic", desc: "ECM, ECCM, bruiaj, SIGINT", banca: () => window.BANCA_RE },
  tc:   { nume: "Teoria Comunicării", desc: "semne, coduri, funcții — în cheie militară", banca: () => window.BANCA_TC },
  carte:{ nume: "📖 Grile carte", desc: "din culegerea de grile TC, cu baremul cărții", banca: () => window.BANCA_CARTE },
  brdlc:{ nume: "📡 Grile Bazele RDLC", desc: "60 de grile din quiz-ul de bazele radiolocației", banca: () => window.BANCA_BRDLC },
};
const ORDINE_COMPLET = ["rdlc", "re", "tc"];
const NR_GRILE = 9;          // 9 grile per materie (cerință)
const LITERE = ["A", "B", "C", "D"];

let stare = {
  materie: "rdlc",           // "rdlc" | "re" | "tc" | "complet"
  mod: "examen",            // "examen" | "invatare"
  setCurent: [],
  raspunsuri: [],
  verificat: false,
};

/* ---------- utilitare ---------- */
function amesteca(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// construiește un obiect de întrebare randabil, cu opțiunile amestecate
function construiesteIntrebare(q, materieNume) {
  const indici = amesteca(q.o.map((_, i) => i));
  return {
    text: q.t,
    optiuni: indici.map((i) => q.o[i]),
    corect: indici.indexOf(q.c),
    explicatie: q.e,
    tema: q.tema,
    ref: q.ref,
    materieNume: materieNume,
  };
}

function extrageDinBanca(cheie) {
  const banca = MATERII[cheie].banca() || [];
  return amesteca(banca).slice(0, Math.min(NR_GRILE, banca.length))
    .map((q) => construiesteIntrebare(q, MATERII[cheie].nume));
}

// generează setul curent în funcție de materia selectată
function genereazaSet(cheieMaterie) {
  if (cheieMaterie === "complet") {
    let tot = [];
    ORDINE_COMPLET.forEach((c) => { tot = tot.concat(extrageDinBanca(c)); });
    return tot; // 27 de grile, grupate pe materii
  }
  return extrageDinBanca(cheieMaterie);
}

/* ---------- randare controale ---------- */
function randeazaControale() {
  const cont = document.getElementById("materii");
  cont.innerHTML = "";
  Object.entries(MATERII).forEach(([cheie, m]) => {
    const b = document.createElement("button");
    b.className = "materie-btn" + (cheie === stare.materie ? " activ" : "");
    b.innerHTML = `${m.nume}<small>${m.desc}</small>`;
    b.onclick = () => { stare.materie = cheie; setNou(); };
    cont.appendChild(b);
  });
  // butonul special "Examen complet"
  const bc = document.createElement("button");
  bc.className = "materie-btn complet-btn" + (stare.materie === "complet" ? " activ" : "");
  bc.innerHTML = `🎖️ Examen complet<small>9 + 9 + 9 = 27 de grile din toate materiile</small>`;
  bc.onclick = () => { stare.materie = "complet"; setNou(); };
  cont.appendChild(bc);

  document.querySelectorAll(".mod-switch button").forEach((btn) => {
    btn.classList.toggle("activ", btn.dataset.mod === stare.mod);
    btn.onclick = () => { stare.mod = btn.dataset.mod; setNou(); };
  });
}

/* ---------- randare set ---------- */
function randeazaSet() {
  const zona = document.getElementById("grile");
  zona.innerHTML = "";

  const eComplet = stare.materie === "complet";
  document.getElementById("titlu-set").textContent = eComplet
    ? "Examen complet — 27 de grile (9 per materie)"
    : "Set de 9 grile — " + MATERII[stare.materie].nume;
  document.getElementById("contor-banca").textContent = eComplet
    ? "9 Radiolocație + 9 Război Electronic + 9 Teoria Comunicării · se schimbă la fiecare set nou"
    : "extrase aleator din " + (MATERII[stare.materie].banca() || []).length + " întrebări • se schimbă la fiecare set nou";

  let materieAnterioara = null;
  stare.setCurent.forEach((q, idx) => {
    // separator de materie (doar în examen complet)
    if (eComplet && q.materieNume !== materieAnterioara) {
      const sep = document.createElement("div");
      sep.className = "sectiune-materie";
      sep.textContent = "📘 " + q.materieNume;
      zona.appendChild(sep);
      materieAnterioara = q.materieNume;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card-" + idx;

    const antet = `<span class="tema-tag">${q.tema}</span>
      <div class="intrebare"><span class="q-nr">${idx + 1}</span>${q.text}</div>`;
    const opts = q.optiuni.map((txt, i) => `
      <div class="optiune" data-q="${idx}" data-i="${i}">
        <div class="litera">${LITERE[i]}</div>
        <div class="txt">${txt}</div>
      </div>`).join("");
    card.innerHTML = antet + opts + `<div class="explicatie" id="exp-${idx}"></div>`;
    zona.appendChild(card);
  });

  zona.querySelectorAll(".optiune").forEach((el) => {
    el.onclick = () => alegeOptiune(+el.dataset.q, +el.dataset.i);
  });

  document.getElementById("bara-actiune").style.display = "flex";
  document.getElementById("btn-verifica").style.display =
    stare.mod === "examen" ? "inline-block" : "none";
  document.getElementById("btn-verifica").textContent = eComplet
    ? "✅ Verifică cele 27 de răspunsuri"
    : "✅ Verifică cele 9 răspunsuri";
  document.getElementById("rezultat").innerHTML = "";
}

function alegeOptiune(qi, oi) {
  if (stare.verificat) return;
  if (stare.mod === "invatare" && stare.raspunsuri[qi] != null) return;

  stare.raspunsuri[qi] = oi;
  const card = document.getElementById("card-" + qi);
  card.querySelectorAll(".optiune").forEach((el) => {
    el.classList.toggle("selectat", +el.dataset.i === oi);
  });

  if (stare.mod === "invatare") {
    verificaIntrebare(qi);
    if (stare.raspunsuri.filter((r) => r != null).length === stare.setCurent.length) {
      afiseazaRezultat();
    }
  }
}

function verificaIntrebare(qi) {
  const q = stare.setCurent[qi];
  const ales = stare.raspunsuri[qi];
  const corect = ales === q.corect;
  const card = document.getElementById("card-" + qi);
  card.classList.add(corect ? "corect" : "gresit");

  card.querySelectorAll(".optiune").forEach((el) => {
    const i = +el.dataset.i;
    el.classList.add("blocat");
    if (i === q.corect) el.classList.add("raspuns-corect");
    else if (i === ales) el.classList.add("raspuns-gresit");
  });

  const exp = document.getElementById("exp-" + qi);
  exp.className = "explicatie vizibil " + (corect ? "ok" : "nu");
  const titlu = corect
    ? `✔ Răspuns corect — ${LITERE[q.corect]}`
    : `✘ Greșit — ai ales ${ales != null ? LITERE[ales] : "—"}, corect era ${LITERE[q.corect]}`;
  exp.innerHTML = `<div class="titlu">${titlu}</div>${q.explicatie}
    <div style="margin-top:8px;font-size:.8rem;opacity:.7">📖 Reper: ${q.ref}</div>`;
}

function verificaTot() {
  stare.setCurent.forEach((_, qi) => verificaIntrebare(qi));
  stare.verificat = true;
  document.getElementById("btn-verifica").style.display = "none";
  afiseazaRezultat();
  document.getElementById("rezultat").scrollIntoView({ behavior: "smooth", block: "start" });
}

function afiseazaRezultat() {
  stare.verificat = true;
  let corecte = 0;
  const gresiteTeme = {};
  const peMaterii = {}; // { materieNume: {corecte, total} }

  stare.setCurent.forEach((q, qi) => {
    const m = q.materieNume;
    if (!peMaterii[m]) peMaterii[m] = { corecte: 0, total: 0 };
    peMaterii[m].total++;
    if (stare.raspunsuri[qi] === q.corect) {
      corecte++;
      peMaterii[m].corecte++;
    } else {
      gresiteTeme[q.tema] = (gresiteTeme[q.tema] || 0) + 1;
    }
  });

  const total = stare.setCurent.length;
  const proc = Math.round((corecte / total) * 100);
  const eComplet = stare.materie === "complet";

  let mesaj, emoji;
  if (proc === 100) { mesaj = "Perfect! Ai stăpânit complet acest set."; emoji = "🎖️"; }
  else if (proc >= 78) { mesaj = "Foarte bine — ești pe drumul cel bun."; emoji = "✅"; }
  else if (proc >= 56) { mesaj = "Acceptabil, dar mai repetă temele de mai jos."; emoji = "📘"; }
  else { mesaj = "Reia materia la temele marcate și încearcă un set nou."; emoji = "📌"; }

  // defalcare pe materii (doar la examen complet)
  let defalcareHTML = "";
  if (eComplet) {
    defalcareHTML = `<div class="defalcare">` +
      ORDINE_COMPLET.map((c) => {
        const m = MATERII[c].nume;
        const d = peMaterii[m] || { corecte: 0, total: 0 };
        const p = d.total ? Math.round((d.corecte / d.total) * 100) : 0;
        return `<div class="defalcare-item">
          <div class="defalcare-nume">${m}</div>
          <div class="defalcare-scor">${d.corecte}/${d.total}</div>
          <div class="defalcare-bara"><div style="width:${p}%"></div></div>
        </div>`;
      }).join("") + `</div>`;
  }

  // teme de repetat
  let temeHTML;
  const temeList = Object.entries(gresiteTeme).sort((a, b) => b[1] - a[1]);
  if (temeList.length === 0) {
    temeHTML = `<p class="felicitari">🎯 Niciun subiect de repetat — set rezolvat complet corect!</p>`;
  } else {
    temeHTML = `<p>Pentru un studiu eficient, concentrează-te pe temele unde ai greșit:</p><ul>` +
      temeList.map(([t, n]) => `<li><b>${t}</b> — ${n} ${n === 1 ? "greșeală" : "greșeli"}</li>`).join("") +
      `</ul>`;
  }

  const etichetaSet = eComplet ? "🎖️ Examen complet nou (3×9)" : "🔄 Set nou de 9 grile";

  document.getElementById("rezultat").innerHTML = `
    <div class="scor-card">
      <div style="font-size:1.6rem">${emoji}</div>
      <div class="nota">${corecte}<small>/${total}</small></div>
      <div class="mesaj">${mesaj} (${proc}%)</div>
      <div class="bara-scor"><div style="width:${proc}%"></div></div>
      ${defalcareHTML}
    </div>
    <div class="teme-repetat">
      <h3>📚 Recomandare de studiu</h3>
      ${temeHTML}
    </div>
    <div class="actiuni-jos">
      <button class="btn-principal" onclick="setNou()">${etichetaSet}</button>
      <button class="btn-secundar" onclick="reiaGresite()">↻ Reia doar greșelile</button>
      <button class="btn-secundar" onclick="window.scrollTo({top:0,behavior:'smooth'})">⬆ Sus</button>
    </div>`;
}

/* reia doar întrebările greșite (din aceleași teme) */
function reiaGresite() {
  const gresiteTeme = new Set(
    stare.setCurent.filter((q, qi) => stare.raspunsuri[qi] !== q.corect).map((q) => q.tema)
  );
  if (gresiteTeme.size === 0) { setNou(); return; }

  const cheiBanci = stare.materie === "complet" ? ORDINE_COMPLET : [stare.materie];
  let pool = [];
  cheiBanci.forEach((c) => {
    (MATERII[c].banca() || []).forEach((q) => {
      if (gresiteTeme.has(q.tema)) pool.push(construiesteIntrebare(q, MATERII[c].nume));
    });
  });
  if (pool.length === 0) { setNou(); return; }

  stare.setCurent = amesteca(pool);
  stare.raspunsuri = new Array(stare.setCurent.length).fill(null);
  stare.verificat = false;
  // în acest mod nu mai grupăm pe materii (e o recapitulare țintită)
  const materieReal = stare.materie;
  stare.materie = "recap";
  randeazaControale();
  stare.materie = materieReal; // păstrează butonul activ corect
  randeazaControaleRecap();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// randare simplă pentru recapitulare (fără separatoare de materie)
function randeazaControaleRecap() {
  const zona = document.getElementById("grile");
  zona.innerHTML = "";
  document.getElementById("titlu-set").textContent = "Recapitulare țintită — doar temele greșite";
  document.getElementById("contor-banca").textContent = stare.setCurent.length + " întrebări din temele la care ai greșit";
  stare.setCurent.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card-" + idx;
    const antet = `<span class="tema-tag">${q.tema}</span>
      <div class="intrebare"><span class="q-nr">${idx + 1}</span>${q.text}</div>`;
    const opts = q.optiuni.map((txt, i) => `
      <div class="optiune" data-q="${idx}" data-i="${i}">
        <div class="litera">${LITERE[i]}</div><div class="txt">${txt}</div>
      </div>`).join("");
    card.innerHTML = antet + opts + `<div class="explicatie" id="exp-${idx}"></div>`;
    zona.appendChild(card);
  });
  zona.querySelectorAll(".optiune").forEach((el) => {
    el.onclick = () => alegeOptiune(+el.dataset.q, +el.dataset.i);
  });
  document.getElementById("bara-actiune").style.display = "flex";
  document.getElementById("btn-verifica").style.display = stare.mod === "examen" ? "inline-block" : "none";
  document.getElementById("btn-verifica").textContent = "✅ Verifică răspunsurile";
  document.getElementById("rezultat").innerHTML = "";
}

function setNou() {
  stare.setCurent = genereazaSet(stare.materie);
  stare.raspunsuri = new Array(stare.setCurent.length).fill(null);
  stare.verificat = false;
  randeazaControale();
  randeazaSet();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-verifica").onclick = verificaTot;
  setNou();
});
window.setNou = setNou;
window.reiaGresite = reiaGresite;
