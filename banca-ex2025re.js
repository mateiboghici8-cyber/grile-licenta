/* ============================================================
   BANCĂ DE GRILE — EXAMEN 2025 RĂZBOI ELECTRONIC
   Construită 100% din subiectul scris de la examenul de licență
   2025, Subiectul 3 „Protecție împotriva bruiajului; Război
   Electronic” — Varianta 1 (cele 13 cerințe + baremul oficial).
   Formate diverse: completarea propoziției (cu formularea EXACTĂ
   din barem), alegerea variantei, „care NU”, răspunsuri multiple
   la cerințele de enumerare.
   ============================================================ */
window.BANCA_EX2025RE = [
  /* ---------- Cerința 1 — definiția și scopul ECM ---------- */
  {
    t: "Completați definiția din barem: „Contramăsurile electronice (ECM) reprezintă măsurile desfășurate în scopul ______ sistemului electronic al adversarului.”",
    o: ["destabilizării", "distrugerii", "neutralizării", "monitorizării"],
    c: 0,
    e: "✓ Corect: „destabilizării” — cuvântul EXACT din definiția punctată la examen. ⚠ Capcane: „distrugerii” și „neutralizării” sună aproape la fel, dar distrugerea fizică e doar O COMPONENTĂ a ECM, nu scopul definitoriu; „monitorizarea” ține de supraveghere. 📌 ECM = destabilizarea sistemului electronic advers — formularea exactă contează la punctaj.",
    tema: "ECM — definiție și scop", ref: "Examen 2025 RE, cerința 1"
  },
  {
    t: "Completați: „Acest lucru presupune un set de acțiuni îndreptate spre prevenirea sau reducerea utilizării efective de către adversar a ______.”",
    o: ["spectrului electromagnetic", "sistemelor radar proprii", "mijloacelor de comunicații", "spațiului aerian propriu"],
    c: 0,
    e: "✓ Corect: „spectrului electromagnetic” — scopul ECM, conform baremului: prevenirea/reducerea utilizării efective de către adversar a SPECTRULUI ELECTROMAGNETIC. ⚠ Capcane: radarul și comunicațiile sunt doar utilizatori ai spectrului; miza ECM e spectrul în ansamblu. 📌 Scopul ECM = să-i iei adversarului folosirea spectrului.",
    tema: "ECM — definiție și scop", ref: "Examen 2025 RE, cerința 1"
  },

  /* ---------- Cerința 2 — componentele ECM ---------- */
  {
    t: "Care sunt componentele ECM enumerate în barem? (bifează toate variantele corecte)",
    o: ["bruiajul", "dezinformarea electronică", "distrugerea fizică a sistemelor și echipamentelor electronice ale adversarului", "cercetarea electronică a emisiilor adversarului"],
    c: [0, 1, 2],
    e: "✓ Barem: bruiajul + dezinformarea electronică + distrugerea fizică — exact cele trei componente. ⚠ Capcană: „cercetarea electronică” ține de SUPRAVEGHERE (ESM/SIGINT), nu e componentă ECM. 📌 ECM = bruiaj + dezinformare + distrugere fizică (cerință de enumerare la examen!).",
    tema: "ECM — componente", ref: "Examen 2025 RE, cerința 2"
  },
  {
    t: "Care dintre următoarele NU este o componentă a contramăsurilor electronice (ECM)?",
    o: ["supravegherea electronică", "bruiajul", "dezinformarea electronică", "distrugerea fizică a sistemelor adversarului"],
    c: 0,
    e: "✓ Corect: supravegherea electronică NU e componentă ECM — ea e una dintre cele trei CATEGORII de acțiuni ale războiului electronic (cerința 11). Componentele ECM: bruiaj, dezinformare electronică, distrugere fizică. 📌 Nu amesteca lista ECM (cerința 2) cu categoriile RE (cerința 11) — ambele au fost cerute la examen!",
    tema: "ECM — componente", ref: "Examen 2025 RE, cerința 2"
  },

  /* ---------- Cerința 3 — bruiajul pasiv ---------- */
  {
    t: "Completați din barem: „Bruiajul pasiv se bazează pe utilizarea unor materiale sau dispozitive care ______ energia electromagnetică, fără a emite semnale proprii.”",
    o: ["reflectă sau absorb", "amplifică sau retransmit", "modulează sau codifică", "generează sau dirijează"],
    c: 0,
    e: "✓ Corect: „reflectă sau absorb” — formularea exactă din barem. Esența bruiajului pasiv: NU emite semnale proprii, doar reflectă (chaff) sau absoarbe (absorbanții) energia. ⚠ Capcane: amplificarea/retransmiterea/generarea presupun EMISIE — adică bruiaj activ. 📌 Pasiv = reflectă/absoarbe, fără emisie proprie.",
    tema: "Bruiaj pasiv", ref: "Examen 2025 RE, cerința 3"
  },
  {
    t: "Conform baremului, comparativ cu bruiajul activ, bruiajul pasiv este:",
    o: ["mai puțin eficient, dar mai dificil de detectat", "mai eficient, dar mai ușor de detectat", "la fel de eficient, dar mult mai costisitor", "mai eficient și mai dificil de detectat"],
    c: 0,
    e: "✓ Corect: baremul spune textual — bruiajul pasiv este MAI PUȚIN EFICIENT decât cel activ, dar are avantajul de a fi MAI DIFICIL DE DETECTAT. ⚠ Capcană: intuiția zice „dacă e mai greu de detectat, e mai eficient” — examenul cere exact combinația inversă: eficiență mai mică + detectabilitate mai mică. 📌 Pasiv: −eficiență, +discreție.",
    tema: "Bruiaj pasiv", ref: "Examen 2025 RE, cerința 3"
  },

  /* ---------- Cerința 4 — echipamente cu bruiaj pasiv ---------- */
  {
    t: "Care echipamente/sisteme utilizează bruiajul pasiv, conform celor trei exemple din barem? (bifează toate variantele corecte)",
    o: ["reflectoarele radar („chaff”)", "absorbanții radar", "capcanele termice („flares”)", "emițătoarele de bruiaj de tip „barrage”"],
    c: [0, 1, 2],
    e: "✓ Barem: chaff + absorbanți radar + capcane termice (flares) — cele trei exemple cerute la examen (0,9p!). ⚠ Capcană: emițătorul de bruiaj barrage EMITE semnale proprii ⇒ bruiaj ACTIV. 📌 Cele 3 exemple de pasiv: chaff (reflectă), absorbanți (absorb), flares (IR pentru rachete).",
    tema: "Bruiaj pasiv — echipamente", ref: "Examen 2025 RE, cerința 4"
  },
  {
    t: "Conform baremului, reflectoarele radar („chaff”) sunt:",
    o: ["benzi subțiri de material conductor care reflectă undele radar, creând ecouri false", "benzi subțiri de material absorbant care rețin energia undelor radar", "dispozitive care emit radiații în infraroșu pentru a dezorienta rachetele", "materiale utilizate în construcția aeronavelor de tip „stealth”"],
    c: 0,
    e: "✓ Corect: chaff = benzi subțiri de material CONDUCTOR care REFLECTĂ undele radar, creând ECOURI FALSE pe ecrane — definiția exactă din barem. ⚠ Capcane: varianta b amestecă chaff cu absorbanții (conductor ≠ absorbant!); c = flares; d = absorbanții (stealth). 📌 Chaff: conductor + reflectă + ecouri false.",
    tema: "Bruiaj pasiv — echipamente", ref: "Examen 2025 RE, cerința 4"
  },
  {
    t: "„Sunt utilizate în construcția aeronavelor de tip «stealth» pentru a le face mai dificil de detectat.” Despre ce echipament din barem este vorba?",
    o: ["absorbanții radar", "reflectoarele radar („chaff”)", "capcanele termice („flares”)", "rețelele de antene adaptive"],
    c: 0,
    e: "✓ Corect: ABSORBANȚII RADAR = materiale care absorb energia undelor, reducând semnalul reflectat de țintă; baremul precizează exact utilizarea lor la aeronavele stealth. ⚠ Capcane: chaff reflectă (nu absoarbe), flares emit IR, antenele adaptive sunt modalitate ECCM (cerința 10). 📌 Stealth ⇒ absorbanți radar.",
    tema: "Bruiaj pasiv — echipamente", ref: "Examen 2025 RE, cerința 4"
  },
  {
    t: "Conform baremului, capcanele termice („flares”) emit radiații în infraroșu pentru a dezorienta:",
    o: ["rachetele cu ghidare în infraroșu", "rachetele cu ghidare radar semi-activă", "sistemele de navigație prin satelit", "radarele de supraveghere aeriană"],
    c: 0,
    e: "✓ Corect: flares = dispozitive care emit radiații în INFRAROȘU pentru a dezorienta RACHETELE CU GHIDARE ÎN INFRAROȘU — definiția exactă din barem. ⚠ Capcane: rachetele cu ghidare radar nu „văd” infraroșul; GNSS și radarele se bruiază electronic, nu termic. 📌 Flares → doar contra ghidării IR.",
    tema: "Bruiaj pasiv — echipamente", ref: "Examen 2025 RE, cerința 4"
  },

  /* ---------- Cerința 5 — definiția dezinformării electronice ---------- */
  {
    t: "Completați definiția din barem: „Dezinformarea electronică reprezintă radiația intenționată, alterarea, ______ sau reflexia energiei electromagnetice...”",
    o: ["absorbția", "amplificarea", "modularea", "dispersia"],
    c: 0,
    e: "✓ Corect: „absorbția” — enumerarea exactă din barem: radiația intenționată, alterarea, ABSORBȚIA sau reflexia energiei electromagnetice. ⚠ Capcane: amplificarea/modularea/dispersia sună tehnic plauzibil, dar nu apar în definiție. 📌 Cele 4 verbe ale dezinformării: radiație intenționată – alterare – absorbție – reflexie.",
    tema: "Dezinformare electronică", ref: "Examen 2025 RE, cerința 5"
  },
  {
    t: "Completați scopul din barem: „...în scopul de a induce în eroare adversarul în procesul de ______ sau în utilizarea informațiilor recepționate de sistemele sale electronice.”",
    o: ["interpretare", "decodificare", "recepție", "transmitere"],
    c: 0,
    e: "✓ Corect: „interpretare” — scopul dezinformării: inducerea în eroare a adversarului în procesul de INTERPRETARE sau în UTILIZAREA informațiilor recepționate. ⚠ Capcane: decodificarea/recepția/transmiterea sunt etape tehnice — dezinformarea lovește în judecata adversarului, nu în aparatură. 📌 Dezinformarea atacă interpretarea + utilizarea informațiilor.",
    tema: "Dezinformare electronică", ref: "Examen 2025 RE, cerința 5"
  },

  /* ---------- Cerința 6 — tipurile de dezinformare ---------- */
  {
    t: "Conform baremului, dezinformarea electronică poate fi de două tipuri:",
    o: ["manipulativă și imitativă", "manipulativă și simulativă", "imitativă și disimulativă", "activă și pasivă"],
    c: 0,
    e: "✓ Corect: MANIPULATIVĂ + IMITATIVĂ — exact cele două tipuri din barem. ⚠ Capcane: „simulativă” și „disimulativă” sunt cuvinte-momeală aproape identice cu cele corecte; „activă/pasivă” e clasificarea BRUIAJULUI, nu a dezinformării. 📌 Dezinformare: manipulativă (canalele proprii) + imitativă (canalele adversarului).",
    tema: "Dezinformare electronică", ref: "Examen 2025 RE, cerința 6"
  },
  {
    t: "„Introducerea radiațiilor care imită o emisie ostilă în interiorul canalelor de recepție ale adversarului” definește, conform baremului, dezinformarea:",
    o: ["imitativă", "manipulativă", "simulativă", "reflexivă"],
    c: 0,
    e: "✓ Corect: IMITATIVĂ — introduce radiații care imită o emisie ostilă în canalele de recepție ALE ADVERSARULUI. ⚠ Capcana principală: manipulativa lucrează pe canalele PROPRII (alterare/simulare pentru a obține înșelarea) — direcția canalelor face diferența dintre cele două. 📌 Imitativă = mă bag în canalele LUI; manipulativă = trucez canalele MELE.",
    tema: "Dezinformare electronică", ref: "Examen 2025 RE, cerința 6"
  },
  {
    t: "Conform baremului, dezinformarea manipulativă implică alterarea sau simularea semnalelor electromagnetice din:",
    o: ["canalele proprii", "canalele de recepție ale adversarului", "canalele de comandă ale UAV-urilor", "rețelele de comunicații civile"],
    c: 0,
    e: "✓ Corect: din CANALELE PROPRII, „în scopul de a obține înșelarea” — definiția exactă din barem. ⚠ Capcana simetrică: introducerea în canalele ADVERSARULUI = dezinformarea imitativă. Cele două tipuri se deosebesc DOAR prin ale cui canale sunt vizate. 📌 Manipulativă = propriile canale; imitativă = canalele adversarului.",
    tema: "Dezinformare electronică", ref: "Examen 2025 RE, cerința 6"
  },

  /* ---------- Cerința 7 — definiția ECCM ---------- */
  {
    t: "Completați definiția din barem: „Contra-contramăsurile electronice (ECCM) reprezintă un ansamblu de ______ utilizate pentru a proteja sistemele radar de efectele bruiajului activ și de alte forme de interferență electromagnetică.”",
    o: ["tehnici și strategii", "echipamente și dispozitive", "măsuri și proceduri", "metode și mijloace"],
    c: 0,
    e: "✓ Corect: „tehnici și strategii” — formularea exactă din barem. ⚠ Capcane: toate perechile sună birocratic-plauzibil, dar la definițiile punctate se cere formularea fidelă. 📌 ECCM = ansamblu de TEHNICI și STRATEGII de protecție a radarului contra bruiajului activ.",
    tema: "ECCM — definiție și scop", ref: "Examen 2025 RE, cerința 7"
  },

  /* ---------- Cerința 8 — scopul ECCM ---------- */
  {
    t: "Completați scopul din barem: „...ECCM se aplică pentru a asigura ______ semnalului radar, prevenind compromiterea capacității de detecție și urmărire a țintelor de către bruiajul inamic.”",
    o: ["integritatea", "amplificarea", "stabilitatea", "continuitatea"],
    c: 0,
    e: "✓ Corect: „integritatea” — ECCM asigură INTEGRITATEA semnalului radar în medii complexe și de mare risc. ⚠ Capcane: „stabilitatea” și „continuitatea” sună la fel de oficial, dar baremul folosește „integritatea”; amplificarea e funcție de receptor, nu scop ECCM. 📌 Scopul ECCM = integritatea semnalului + protejarea detecției și urmăririi.",
    tema: "ECCM — definiție și scop", ref: "Examen 2025 RE, cerința 8"
  },

  /* ---------- Cerința 9 — tipurile de măsuri ECCM ---------- */
  {
    t: "Care sunt tipurile de măsuri cuprinse în ECCM, conform baremului? (bifează toate variantele corecte)",
    o: ["măsuri organizatorice", "măsuri tehnice", "măsuri de exploatare", "măsuri de contracarare"],
    c: [0, 1, 2],
    e: "✓ Barem: măsuri ORGANIZATORICE + TEHNICE + DE EXPLOATARE — exact tripleta cerută la examen (0,6p). ⚠ Capcană: „măsuri de contracarare” sună perfect în context (doar vorbim de contra-contramăsuri!), dar nu face parte din tripletă. 📌 ECCM cuprinde: organizatorice – tehnice – de exploatare.",
    tema: "ECCM — tipuri de măsuri", ref: "Examen 2025 RE, cerința 9"
  },

  /* ---------- Cerința 10 — modalitățile de protecție (6) ---------- */
  {
    t: "Printre cele șase modalități de protecție contra ECM ale adversarului, enumerate în barem, se numără: (bifează toate variantele corecte)",
    o: ["utilizarea unui sistem de antene cu nivel foarte redus al lobilor laterali", "utilizarea compensării coerente pe lobii laterali", "selecția țintelor mobile", "creșterea frecvenței de repetiție a impulsurilor"],
    c: [0, 1, 2],
    e: "✓ Barem: lobii laterali reduși + compensarea coerentă pe lobii laterali + selecția țintelor mobile — trei dintre cele șase modalități (alături de antene adaptive, LPI și gestionarea spațio-temporală a puterii). ⚠ Capcană: creșterea PRF e un parametru tehnic real, dar NU apare pe lista celor șase din barem. 📌 Cerința valora 1,2p — 0,2p pe fiecare modalitate; enumerarea exactă contează.",
    tema: "Modalități de protecție contra ECM", ref: "Examen 2025 RE, cerința 10"
  },
  {
    t: "Care dintre următoarele NU se numără printre cele șase modalități de protecție contra ECM din barem?",
    o: ["mărirea puterii de emisie a radarului", "rețelele de antene adaptive", "utilizarea sistemelor radar cu probabilitate de interceptare mică (LPI)", "gestionarea spațio-temporală a puterii radarului"],
    c: 0,
    e: "✓ Corect: „mărirea puterii de emisie” NU e pe listă — puterea mai mare te face mai ușor de interceptat, exact opusul filosofiei LPI! Cele șase din barem: lobi laterali reduși, compensare coerentă, antene adaptive, selecția țintelor mobile, LPI, gestionarea spațio-temporală a puterii. ⚠ Observă nuanța: „GESTIONAREA” puterii e pe listă, „MĂRIREA” ei nu. 📌 Protecția = emisie deșteaptă, nu emisie mai tare.",
    tema: "Modalități de protecție contra ECM", ref: "Examen 2025 RE, cerința 10"
  },
  {
    t: "Completați modalitatea din barem: „utilizarea sistemelor radar cu probabilitate de ______ mică (LPI, Low Probability of Intercept)”",
    o: ["interceptare", "detecție", "eroare", "bruiere"],
    c: 0,
    e: "✓ Corect: „interceptare” — LPI = Low Probability of INTERCEPT: radarul emite astfel încât adversarul să nu-i intercepteze emisia. ⚠ Capcană: „probabilitate de detecție mică” ar însemna un radar SLAB (care nu detectează ținte) — sens complet diferit! LPI e greu de interceptat, nu slab în detecție. 📌 LPI = interceptare (a emisiei tale), nu detecție (a țintelor).",
    tema: "Modalități de protecție contra ECM", ref: "Examen 2025 RE, cerința 10"
  },

  /* ---------- Cerința 11 — componentele (categoriile) RE ---------- */
  {
    t: "Conform baremului, acțiunile de război electronic se împart în trei categorii distincte:",
    o: ["de atac electronic, de apărare electronică și de supraveghere electronică", "de atac electronic, de protecție electronică și de cercetare electronică", "de bruiaj, de dezinformare electronică și de distrugere fizică", "de sprijin electronic, de contramăsuri și de contra-contramăsuri"],
    c: 0,
    e: "✓ Corect: ATAC electronic (bruiaj de diferite tipuri) + APĂRARE electronică + SUPRAVEGHERE electronică — formularea exactă din barem. ⚠ Capcane: „protecție/cercetare” = parafrază; „bruiaj/dezinformare/distrugere” = componentele ECM (cerința 2!); „sprijin/contramăsuri/contra-contramăsuri” = transpunerea în măsuri (cerința 12!). Examenul le-a cerut pe toate trei — nu le amesteca. 📌 Categoriile RE: atac – apărare – supraveghere.",
    tema: "Categoriile războiului electronic", ref: "Examen 2025 RE, cerința 11"
  },
  {
    t: "În enumerarea din barem a categoriilor războiului electronic, bruiajul de diferite tipuri este dat ca exemplu pentru:",
    o: ["atacul electronic", "apărarea electronică", "supravegherea electronică", "sprijinul electronic"],
    c: 0,
    e: "✓ Corect: baremul scrie textual „de atac electronic (bruiaj de diferite tipuri)” — bruiajul e forma concretă a ATACULUI electronic. ⚠ Capcane: apărarea = protecția propriilor sisteme (ECCM); supravegherea = monitorizarea spectrului; „sprijinul” (ESM) apare la transpunerea în măsuri, nu la categorii. 📌 Bruiaj = brațul ofensiv = atacul electronic.",
    tema: "Categoriile războiului electronic", ref: "Examen 2025 RE, cerința 11"
  },

  /* ---------- Cerința 12 — transpunerea în măsuri ---------- */
  {
    t: "Conform baremului, componentele majore ale războiului electronic se transpun în:",
    o: ["măsuri de sprijin electronic (ESM), contramăsuri electronice (ECM) și contra-contramăsuri electronice (ECCM)", "informații electronice (ELINT), informații din comunicații (COMINT) și informații din semnale (SIGINT)", "acțiuni de atac electronic, de apărare electronică și de supraveghere electronică", "contramăsuri electronice (ECM), contra-contramăsuri (ECCM) și informații din semnale (SIGINT)"],
    c: 0,
    e: "✓ Corect: ESM + ECM + ECCM — transpunerea exactă din barem. ⚠ Capcane: ELINT/COMINT/SIGINT țin de cerința 13 (intelligence); „atac/apărare/supraveghere” sunt CATEGORIILE de acțiuni (cerința 11) — aici se cer MĂSURILE; ultima variantă strecoară SIGINT în locul ESM. 📌 Măsurile RE: ESM (sprijin) – ECM – ECCM.",
    tema: "Măsurile războiului electronic", ref: "Examen 2025 RE, cerința 12"
  },

  /* ---------- Cerința 13 — SIGINT, ELINT, COMINT ---------- */
  {
    t: "Completați definiția din barem: „SIGINT (Signal Intelligence) presupune obținerea de date și informații din ______.”",
    o: ["prelucrarea semnalelor", "interceptarea comunicațiilor", "cercetarea radioelectronică", "analiza spectrului electromagnetic"],
    c: 0,
    e: "✓ Corect: „prelucrarea semnalelor” — definiția exactă din barem. ⚠ Capcane: interceptarea comunicațiilor descrie doar COMINT (o componentă); „cercetarea radioelectronică” și „analiza spectrului” sună tehnic corect, dar nu sunt formularea punctată. 📌 SIGINT = date + informații din PRELUCRAREA SEMNALELOR.",
    tema: "SIGINT — definiție și componente", ref: "Examen 2025 RE, cerința 13"
  },
  {
    t: "Conform baremului, ELINT (Electronic Intelligence) presupune culegerea datelor din:",
    o: ["echipamentele altele decât cele de comunicații", "semnalele de comunicații care transmit un mesaj", "sursele umane de informații din teren", "imaginile de cercetare prin satelit"],
    c: 0,
    e: "✓ Corect: ELINT = culegerea datelor din ECHIPAMENTELE ALTELE DECÂT CELE DE COMUNICAȚII (radare etc.) — formularea exactă din barem. ⚠ Capcana simetrică: semnalele DE COMUNICAȚII = COMINT; sursele umane = HUMINT; imaginile = IMINT — discipline diferite. 📌 ELINT = tot ce NU e comunicație (în primul rând radare).",
    tema: "SIGINT — definiție și componente", ref: "Examen 2025 RE, cerința 13"
  },
  {
    t: "Completați din barem: „COMINT (Communications Intelligence) înseamnă obținerea de date și informații din prelucrarea semnalelor de comunicații, care transmit un mesaj care poate fi recepționat de ______.”",
    o: ["factorul uman", "sistemele automate", "echipamentele ESM", "centrele de comandă"],
    c: 0,
    e: "✓ Corect: „factorul uman” — detaliul-cheie din barem: COMINT vizează semnalele de comunicații care transmit un mesaj recepționabil de FACTORUL UMAN. Exact acest criteriu desparte COMINT de ELINT (semnale de la echipamente, fără mesaj pentru om). 📌 Mesaj pentru om = COMINT; semnal de echipament = ELINT.",
    tema: "SIGINT — definiție și componente", ref: "Examen 2025 RE, cerința 13"
  },
  {
    t: "Care sunt cele două componente importante ale SIGINT, conform baremului?",
    o: ["ELINT și COMINT", "ESM și ECM", "ELINT și HUMINT", "COMINT și IMINT"],
    c: 0,
    e: "✓ Corect: ELINT (Electronic Intelligence) + COMINT (Communications Intelligence) — cele două componente cerute explicit la examen (0,9p). ⚠ Capcane: ESM/ECM sunt măsuri RE (cerința 12); HUMINT (surse umane) și IMINT (imagini) sunt alte discipline de intelligence, nu componente SIGINT. 📌 SIGINT = ELINT + COMINT, exact această pereche.",
    tema: "SIGINT — definiție și componente", ref: "Examen 2025 RE, cerința 13"
  }
];
