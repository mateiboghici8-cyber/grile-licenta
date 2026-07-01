/* ============================================================
   BANCĂ DE GRILE — RADIOLOCAȚIE
   Academia Forțelor Aeriene "Henri Coandă" — pregătire licență
   Redactare exigentă: cele 4 variante au lungime comparabilă (corectul
   NU este sistematic cel mai lung); distractorii sunt plauzibili,
   construiți din concepte reale din materie (confuzii tipice).
   Notă: anul acesta NU se mai dă problema de calcul cu ecuația radarului.
   ============================================================ */
window.BANCA_RDLC = [
  /* ---------- 2.1.3 PRINCIPII FUNDAMENTALE ---------- */
  {
    t: "Care dintre următoarele NU este un principiu fundamental al radiolocației?",
    o: ["Amplificarea spontană a undelor în atmosferă", "Reflexia undelor pe suprafețele de separație", "Propagarea rectilinie a undelor prin mediu", "Interferența constructivă și cea distructivă"],
    c: 0,
    e: "✓ Corect: principiile fundamentale sunt reflexia, propagarea rectilinie, interferența și viteza constantă a luminii (c). Amplificarea spontană în atmosferă nu există — atmosfera atenuează semnalul. 📌 Reflexie + propagare rectilinie + interferență + viteza c.",
    tema: "Principii fundamentale", ref: "2.1.3"
  },
  {
    t: "Viteza de propagare a undelor electromagnetice în vid este aproximativ:",
    o: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
    c: 0,
    e: "✓ Corect: c ≈ 3 × 10⁸ m/s (300.000 km/s), folosită pentru a calcula distanța din timpul de zbor al impulsului. 📌 10⁶ ar fi prea mic; 10¹⁰ prea mare.",
    tema: "Principii fundamentale", ref: "2.1.3"
  },
  {
    t: "Cantitatea de energie reflectată de un obiect depinde, printre altele, de:",
    o: ["Unghiul de incidență și proprietățile electrice ale materialului", "Culoarea vizibilă și textura suprafeței exterioare a țintei", "Temperatura aerului și umiditatea relativă din zona țintei", "Ora din zi și poziția soarelui în momentul măsurării"],
    c: 0,
    e: "✓ Corect: energia reflectată depinde de unghiul de incidență, proprietățile electrice ale materialului, forma și dimensiunea obiectului. Culoarea, temperatura aerului și ora nu intervin. 📌 Reflexia are loc la separația a două medii cu proprietăți electrice diferite.",
    tema: "Principii fundamentale", ref: "2.1.3"
  },
  {
    t: "Propagarea rectilinie a undelor radio poate fi modificată de:",
    o: ["Fenomenele de refracție, difracție și reflexie multiplă", "Rotația mecanică și viteza de baleiere a antenei", "Efectul Doppler produs de mișcarea radială a țintei", "Factorul de umplere și durata impulsului emis"],
    c: 0,
    e: "✓ Corect: în condiții ideale undele se propagă în linie dreaptă, dar traiectoria e influențată de refracție, difracție și reflexie multiplă. Rotația antenei, Doppler și duty cycle nu curbează traiectoria. 📌 Propagarea rectilinie stă la baza determinării direcției.",
    tema: "Principii fundamentale", ref: "2.1.3"
  },
  {
    t: "Interferența a două unde este CONSTRUCTIVĂ atunci când undele sunt:",
    o: ["În fază (undă rezultată cu amplitudine mai mare)", "În antifază (amplitudine mai mică sau chiar nulă)", "De frecvențe complet diferite una față de cealaltă", "Reflectate de ținte diferite, aflate la distanțe egale"],
    c: 0,
    e: "✓ Corect: în fază → interferență constructivă (amplitudine mai mare); în antifază → distructivă (amplitudine mai mică/nulă). 📌 Se folosește pentru a întări semnalul util sau a elimina semnale nedorite.",
    tema: "Principii fundamentale", ref: "2.1.3"
  },

  /* ---------- TIPURI DE RADIOLOCAȚIE ---------- */
  {
    t: "Prin ce se deosebește radarul PASIV de cel ACTIV?",
    o: ["Nu emite semnale proprii, ci le detectează pe cele existente", "Emite semnale de putere mai mare decât radarul activ", "Folosește obligatoriu un transponder montat pe fiecare țintă", "Funcționează numai pe timp de noapte și vizibilitate redusă"],
    c: 0,
    e: "✓ Corect: radarul pasiv nu emite; detectează semnale emise de alte surse (radare/comunicații inamice), deci e invizibil pentru inamic. Radarul activ emite și analizează ecoul. 📌 Pasiv = tăcut, discret.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },
  {
    t: "Care este principala LIMITARE a radarului pasiv?",
    o: ["Depinde de semnalele deja existente în mediul electromagnetic", "Poate fi detectat cu ușurință de sistemele adversarului", "Consumă o cantitate foarte mare de energie la emisie", "Necesită rotația continuă și rapidă a antenei directive"],
    c: 0,
    e: "✓ Corect: radarul pasiv nu poate detecta o țintă care nu emite radiație — depinde de semnalele existente. Nu e ușor de detectat (asta e chiar avantajul lui). 📌 Avantaj = discreție; limitare = dependența de semnale externe.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },
  {
    t: "Radarul PRIMAR (PSR) se caracterizează prin faptul că:",
    o: ["Detectează orice obiect reflectant, fără un răspuns al țintei", "Necesită un transponder funcțional montat pe ținta detectată", "Oferă automat identitatea, altitudinea și viteza fiecărei ținte", "Funcționează exclusiv cu ținte cooperative, dotate cu emițător"],
    c: 0,
    e: "✓ Corect: PSR nu depinde de răspunsul țintei — detectează orice obiect reflectant, dar nu oferă identitate/altitudine. Transponderul și identificarea sunt specifice radarului secundar. 📌 PSR = ecou brut; SSR = dialog cu transponder.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },
  {
    t: "Radarul SECUNDAR (SSR) și sistemul IFF se bazează pe:",
    o: ["Un transponder de pe țintă care răspunde cu informații suplimentare", "Reflexia pură a undelor de la țintă, fără niciun răspuns al acesteia", "Detectarea și analiza radiației infraroșii emise natural de țintă", "Absorbția undelor radar de către materialul din care e făcută ținta"],
    c: 0,
    e: "✓ Corect: SSR interacționează cu un transponder ce dă identitate, altitudine, viteză; IFF e o formă specializată de SSR (prieten/inamic). Reflexia pură fără răspuns = radar primar. 📌 IFF = caz special de radar secundar.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },
  {
    t: "Radarul IFF (Identification Friend or Foe) servește la:",
    o: ["Distingerea țintelor prietene de cele inamice, prin cod de răspuns", "Mărirea puterii de emisie a radarului pentru distanțe mai mari", "Înlocuirea completă a radarului primar în supravegherea aeriană", "Măsurarea temperaturii și a presiunii atmosferice pe traiectorie"],
    c: 0,
    e: "✓ Corect: IFF emite un semnal la care ținta răspunde cu un cod (prieten/inamic), prevenind atacul asupra propriilor aeronave. 📌 IFF = „cine ești?” — prieten sau dușman.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },
  {
    t: "Un avantaj strategic al radarului pasiv de supraveghere este:",
    o: ["Discreția — nefiind emițător, nu poate fi detectat de inamic", "Puterea de emisie foarte mare, cu rază de acțiune extinsă", "Montarea sa obligatorie pe aeronavele de tip stealth moderne", "Funcționarea sa exclusiv cu ținte fixe, aflate la sol sau pe apă"],
    c: 0,
    e: "✓ Corect: nefiind emițător, radarul pasiv e discret și sigur, eficient acolo unde radarele active și-ar dezvălui poziția. 📌 Ideal pentru supraveghere discreționară și război electronic.",
    tema: "Tipuri de radar", ref: "Tipuri de Radiolocație"
  },

  /* ---------- 2.1.5.1 SER / ȚINTE ---------- */
  {
    t: "Suprafața efectivă de reflexie (SER / RCS), notată σ, se măsoară în:",
    o: ["Metri pătrați (m²)", "Wați (W)", "Hertzi (Hz)", "Decibeli (dB)"],
    c: 0,
    e: "✓ Corect: σ se exprimă în m² și cuantifică capacitatea de reflexie a obiectului. Nu e putere (W) sau frecvență (Hz). 📌 σ depinde de formă, dimensiune, material, unghi și frecvență.",
    tema: "SER / RCS", ref: "2.1.5.1"
  },
  {
    t: "SER (suprafața efectivă de reflexie) reprezintă, prin definiție:",
    o: ["Aria echivalentă care reflectă aceeași energie ca ținta reală", "Suprafața fizică reală, măsurată direct pe conturul țintei", "Viteza radială a țintei raportată la poziția stației radar", "Numărul de impulsuri reflectate de țintă într-o singură secundă"],
    c: 0,
    e: "✓ Corect: SER = aria unei suprafețe fictive, perpendiculare pe unda incidentă, care creează în antenă aceeași densitate de putere ca ținta reală. NU este suprafața fizică reală. 📌 SER ≠ dimensiunea fizică a țintei.",
    tema: "SER / RCS", ref: "2.1.5.1"
  },
  {
    t: "Care factor NU influențează valoarea SER a unui obiect?",
    o: ["Distanța dintre radar și țintă în momentul iluminării", "Forma și dimensiunea geometrică a obiectului detectat", "Materialul din care este fabricat obiectul (conductor sau nu)", "Unghiul de incidență și frecvența undelor radar folosite"],
    c: 0,
    e: "✓ Corect: SER depinde de formă, dimensiune, material, unghi de incidență și frecvență — NU de distanță (distanța afectează puterea recepționată, nu SER-ul intrinsec). 📌 Materiale conductoare → SER mare; absorbante → SER mic.",
    tema: "SER / RCS", ref: "2.1.5.1"
  },
  {
    t: "Tehnologiile „stealth” urmăresc, în esență:",
    o: ["Reducerea SER a țintei prin formă și materiale absorbante", "Creșterea puterii de emisie a propriilor sisteme de bord", "Mărirea SER a țintei pentru o vizibilitate radar sporită", "Emiterea permanentă de semnale IFF către toate radarele"],
    c: 0,
    e: "✓ Corect: stealth = reducerea SER prin forme speciale și materiale absorbante. Mărirea SER ar face aeronava mai ușor de detectat. 📌 SER mic = detecție la distanță mică = supraviețuire mai bună.",
    tema: "SER / RCS", ref: "2.1.5.1"
  },
  {
    t: "După modul de interacțiune cu radarul, țintele se împart în:",
    o: ["Cooperative și non-cooperative", "Fixe și metalice", "Lente și rapide", "Reflectante și transparente"],
    c: 0,
    e: "✓ Corect: cooperative (răspund la interogare, ex. transponder) și non-cooperative (detectate doar prin reflexie). După mișcare, țintele mai pot fi fixe sau mobile. 📌 Cooperativ = răspunde; non-cooperativ = doar reflectă.",
    tema: "Ținte", ref: "2.1.5.1"
  },

  /* ---------- 2.1.5.2 ECUAȚIA RADIOLOCAȚIEI (conceptual) ---------- */
  {
    t: "Conform ecuației radiolocației, puterea recepționată Pr este invers proporțională cu:",
    o: ["R⁴ (puterea a patra a distanței)", "R (distanța simplă până la țintă)", "R² (pătratul distanței măsurate)", "√R (rădăcina pătrată a distanței)"],
    c: 0,
    e: "✓ Corect: semnalul se atenuează cu R² la ducere și R² la întoarcere ⇒ Pr ∝ 1/R⁴. De aceea se aplică radicalul de ordin 4 pentru a izola distanța. 📌 R⁴ = „semnătura” ecuației (drum dus-întors).",
    tema: "Ecuația radiolocației", ref: "2.1.5.2"
  },
  {
    t: "Puterea recepționată Pr este DIRECT proporțională cu:",
    o: ["Puterea transmisă, câștigul antenelor și SER a țintei", "Distanța până la țintă ridicată la puterea a patra", "Durata perioadei de repetiție și factorul de umplere", "Temperatura de lucru și zgomotul termic al receptorului"],
    c: 0,
    e: "✓ Corect: Pr crește cu Pt, câștigul G și SER (σ), și scade cu R⁴. 📌 Mai multă putere/câștig/SER = ecou mai puternic.",
    tema: "Ecuația radiolocației", ref: "2.1.5.2"
  },
  {
    t: "La un radar MONOSTATIC, câștigul de emisie Gt și cel de recepție Gr:",
    o: ["Sunt egale, fiind aceeași antenă la emisie și recepție", "Sunt întotdeauna diferite, folosind antene separate", "Au ambele valoarea zero în ecuația radiolocației", "Nu intervin deloc în calculul distanței de acțiune"],
    c: 0,
    e: "✓ Corect: la radarul monostatic aceeași antenă emite și recepționează, deci Gt = Gr. 📌 Monostatic = emisie și recepție din același loc, aceeași antenă.",
    tema: "Ecuația radiolocației", ref: "2.1.5.2"
  },
  {
    t: "Pentru a DUBLA distanța de descoperire, puterea de emisie trebuie mărită de:",
    o: ["16 ori", "2 ori", "4 ori", "8 ori"],
    c: 0,
    e: "✓ Corect: R ∝ ⁴√Pt, deci pentru dublarea distanței Pt crește de 2⁴ = 16 ori. Alternativ, se mărește de 4 ori câștigul antenei sau lungimea de undă. 📌 Dublarea razei ⇒ ×16 putere (sau ×4 câștig/λ).",
    tema: "Ecuația radiolocației", ref: "2.1.5.2"
  },

  /* ---------- 2.1.5.3 DISTANȚA DE DESCOPERIRE ---------- */
  {
    t: "Care factor NU limitează distanța de descoperire a radarului?",
    o: ["Creșterea sensibilității receptorului radar", "Curbura Pământului și orizontul radar", "Absorbția undelor radar în atmosferă", "Refracția undelor la variația altitudinii"],
    c: 0,
    e: "✓ Corect: creșterea sensibilității MĂREȘTE distanța (detectează semnale slabe). Factorii limitativi: atmosfera (atenuare, refracție, difuzie), curbura Pământului, absorbția. 📌 Sensibilitate/putere/SER mari = distanță mai mare.",
    tema: "Distanța de descoperire", ref: "2.1.5.3"
  },
  {
    t: "Influența atmosferei asupra propagării undelor radar se manifestă prin:",
    o: ["Atenuare, refracție și difuzie a undelor radar", "Amplificarea semnalului recepționat de antenă", "Mărirea suprafeței efective de reflexie a țintei", "Accelerarea rotației și baleierii antenei radar"],
    c: 0,
    e: "✓ Corect: atmosfera produce atenuare (absorbție, mai mare la frecvențe înalte/precipitații), refracție (curbarea traiectoriei) și difuzie (reducerea puterii). Toate trei afectează negativ semnalul. 📌 Atmosfera slăbește, nu întărește semnalul.",
    tema: "Distanța de descoperire", ref: "2.1.5.3"
  },
  {
    t: "Pentru a depăși limitarea impusă de curbura Pământului se folosesc:",
    o: ["Radare cu vedere peste orizont (reflexie în ionosferă)", "Radare cu putere de emisie redusă până aproape de zero", "Radare care emit exclusiv în banda de infraroșu apropiat", "Radare montate subacvatic pentru detecția sub suprafață"],
    c: 0,
    e: "✓ Corect: radarele „over-the-horizon” exploatează reflexia undelor în ionosferă pentru a ocoli curbura Pământului. 📌 Undele se propagă aproape rectiliniu ⇒ orizontul radar limitează raza fără această tehnică.",
    tema: "Distanța de descoperire", ref: "2.1.5.3"
  },
  {
    t: "Față de distanța de descoperire, frecvențele JOASE au avantajul că:",
    o: ["Sunt mai puțin atenuate și absorbite pe traseul de propagare", "Oferă cea mai bună rezoluție unghiulară în azimut și elevație", "Nu se propagă deloc prin straturile inferioare ale atmosferei", "Necesită antene de dimensiuni foarte mici și ușor de deplasat"],
    c: 0,
    e: "✓ Corect: frecvențele joase, mai puțin atenuate/absorbite, permit distanțe mai mari; cele înalte dau rezoluție și precizie mai bune, dar sunt mai atenuate. 📌 Joase = rază; înalte = rezoluție.",
    tema: "Distanța de descoperire", ref: "2.1.5.3"
  },

  /* ---------- 2.2.1 PARAMETRI TEHNICI ȘI TACTICI ---------- */
  {
    t: "Care dintre următorii este un parametru TACTIC (nu tehnic)?",
    o: ["Distanța de descoperire", "Frecvența de operare", "Lățimea de bandă", "Durata impulsului"],
    c: 0,
    e: "✓ Corect: parametrii tactici descriu performanța operațională (distanță de descoperire, precizie, rezoluție, mobilitate, cost). Frecvența, banda, durata impulsului sunt tehnici. 📌 Tehnic = „cum e construit”; tactic = „ce poate face”.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "Câștigul antenei radar exprimă capacitatea acesteia de a:",
    o: ["Concentra energia radiată pe o anumită direcție", "Reduce puterea de emisie a semnalului transmis", "Prelungi durata fiecărui impuls radar emis", "Micșora frecvența de operare a sistemului radar"],
    c: 0,
    e: "✓ Corect: un câștig mai mare = concentrare mai eficientă a energiei ⇒ rază mai mare și rezoluție unghiulară mai bună. 📌 Câștig mare = fascicul „strâns” și puternic.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "Lățimea fasciculului antenei (la scăderea de 3 dB) influențează:",
    o: ["Rezoluția unghiulară, în azimut și elevație", "Durata impulsului emis de către radar", "Frecvența de repetiție a impulsurilor (PRF)", "Factorul de umplere al ciclului de emisie"],
    c: 0,
    e: "✓ Corect: un fascicul mai îngust = rezoluție unghiulară mai bună; cei 3 dB = punctul unde puterea scade la jumătate. NU influențează rezoluția în distanță (aceea depinde de durata impulsului/bandă). 📌 Fascicul îngust = rezoluție unghiulară bună.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "Costul LCC (Life Cycle Cost) al unui radar cuprinde:",
    o: ["Achiziția, operarea, mentenanța și scoaterea din uz", "Doar prețul de achiziție al antenei principale", "Doar consumul de energie electrică pe o oră", "Doar salariul lunar al operatorului de radar"],
    c: 0,
    e: "✓ Corect: LCC = costul total pe întreg ciclul de viață (achiziție + operare + mentenanță + retragere + reutilizare). 📌 LCC ≠ doar prețul de cumpărare.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },

  /* ---------- 2.2.2 STAȚII ÎN IMPULS ---------- */
  {
    t: "Rolul COMUTATORULUI DE ANTENĂ într-o stație radar în impuls este de a:",
    o: ["Dirija emisia spre antenă și recepția spre receptor, protejându-l", "Amplifica semnalul de frecvență intermediară în lanțul de recepție", "Afișa datele despre țintă pe ecranul indicatorului pentru operator", "Stabili durata și frecvența de repetiție a impulsurilor emise"],
    c: 0,
    e: "✓ Corect: comutatorul dirijează emisia spre antenă / recepția spre receptor și protejează receptorul de puterea mare a emisiei. Afișarea = indicatorul; durata/repetiția = modulatorul. 📌 Fără comutator, emisia ar distruge receptorul.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "MODULATORUL dintr-o stație radar în impuls controlează:",
    o: ["Durata și frecvența de repetiție a impulsurilor emise", "Luminozitatea și contrastul ecranului indicatorului radar", "Numărul total de antene folosite de sistemul radar", "Temperatura de lucru și răcirea blocului receptor"],
    c: 0,
    e: "✓ Corect: modulatorul controlează durata impulsului (→ rezoluția în distanță) și frecvența de repetiție (→ distanța maximă neambiguă). 📌 Modulator = „ritmul” emisiei; emițător = „forța” emisiei.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "În receptorul radar, MIXER-ul are rolul de a:",
    o: ["Transforma înalta frecvență într-o frecvență intermediară (FI)", "Emite impulsul de mare putere spre țintă prin intermediul antenei", "Roti mecanic antena directivă pentru baleierea spațiului aerian", "Genera semnalul de sincronizare care coordonează întregul sistem"],
    c: 0,
    e: "✓ Corect: mixerul convertește înalta frecvență în frecvență intermediară (FI). Receptorul mai are un LNA și un amplificator FI. 📌 Recepție: LNA → mixer (→ FI) → amplificator FI → detecție.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "PROCESORUL unei stații radar realizează:",
    o: ["Filtrarea, corelația și analiza spectrală a semnalului recepționat", "Emisia impulsului de mare putere spre țintele din spațiul aerian", "Comutarea rapidă între regimul de emisie și cel de recepție", "Alimentarea electrică și răcirea componentelor stației radar"],
    c: 0,
    e: "✓ Corect: procesorul extrage distanța, viteza și direcția prin filtrare, corelație și analiză spectrală (și, modern, filtrare adaptivă și recunoaștere automată a țintelor). 📌 Procesorul transformă ecoul în date despre țintă.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "INDICATORUL unei stații de radiolocație are rolul de a:",
    o: ["Afișa datele despre ținte într-un format util pentru operator", "Amplifica puterea semnalului emis înainte de a ajunge la antenă", "Comuta căile de semnal între blocul de emisie și cel de recepție", "Genera frecvența intermediară necesară procesării semnalului"],
    c: 0,
    e: "✓ Corect: indicatorul afișează informațiile despre ținte (hărți, grafice, valori); modern, se integrează într-un sistem de comandă și control. 📌 Indicator = interfața cu operatorul.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Cum influențează durata impulsului rezoluția în distanță?",
    o: ["Impulsul scurt dă o rezoluție în distanță mai bună", "Impulsul lung dă o rezoluție în distanță mai bună", "Durata impulsului nu are legătură cu rezoluția", "Rezoluția depinde doar de câștigul antenei radar"],
    c: 0,
    e: "✓ Corect: rezoluția în distanță = c·τ/2, deci un impuls scurt separă mai bine ținte apropiate; impulsul lung crește raza dar înrăutățește rezoluția. 📌 Impuls scurt = rezoluție bună; impuls lung = rază mare.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Frecvența de repetiție a impulsurilor (PRF / Fr) determină:",
    o: ["Distanța maximă neambiguă de măsurare", "Rezoluția unghiulară a țintei în azimut", "Suprafața efectivă de reflexie a țintei", "Câștigul antenei radar la recepție"],
    c: 0,
    e: "✓ Corect: PRF stabilește distanța maximă neambiguă (Tr = 1/Fr) și viteza Doppler maximă neambiguă. PRF mare = actualizare rapidă dar ambiguitate; PRF mică = detecție precisă la distanțe mari. 📌 PRF = parametru al sincronizatorului.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Factorul de umplere (Q – Duty Cycle) reprezintă raportul dintre:",
    o: ["Durata impulsului și perioada ciclului radar", "Puterea semnalului emis și cea recepționată", "Numărul de ținte și numărul de impulsuri", "Câștigul de emisie și câștigul de recepție"],
    c: 0,
    e: "✓ Corect: Q = durata impulsului / perioada ciclului; un Q ridicat = consum energetic mai mare și risc de supraîncălzire. 📌 Duty cycle mare = energie medie mare, solicitare termică mare.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Distanța până la țintă este determinată prin măsurarea:",
    o: ["Timpului de zbor al impulsului (dus-întors)", "Deplasării Doppler a frecvenței ecoului", "Amplitudinii semnalului radar reflectat", "Fazei semnalului recepționat de antenă"],
    c: 0,
    e: "✓ Corect: distanța rezultă din timpul dus-întors al impulsului, cunoscând c. Doppler → viteza; directivitatea antenei → direcția. 📌 Timp → distanță; Doppler → viteză; antenă → direcție.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Viteza radială a țintei este determinată prin:",
    o: ["Deplasarea Doppler a frecvenței ecoului", "Timpul de zbor al impulsului radar emis", "Rotația mecanică a antenei directive", "Numărul de impulsuri emise pe secundă"],
    c: 0,
    e: "✓ Corect: viteza radială se obține din efectul Doppler (schimbarea frecvenței ecoului). 📌 Apropiere → shift pozitiv; depărtare → shift negativ.",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Direcția (coordonatele unghiulare β și ε) a țintei se determină folosind:",
    o: ["Directivitatea antenei (lobul principal)", "Deplasarea Doppler a frecvenței ecoului", "Timpul de zbor al impulsului transmis", "Factorul de umplere al ciclului radar"],
    c: 0,
    e: "✓ Corect: direcția rezultă din directivitatea antenei — semnalul maxim se recepționează pe lobul principal. 📌 Distanță (timp), viteză (Doppler), direcție (antenă directivă).",
    tema: "Stații în impuls", ref: "2.2.2"
  },
  {
    t: "Care este un AVANTAJ al sistemelor radar în impuls?",
    o: ["Detectarea la distanțe mari și precizia ridicată în distanță", "Imposibilitatea de a lucra pe timp de ploaie, ceață sau ninsoare", "Lipsa totală a imunității la interferențe și mediul ostil", "Consumul energetic egal cu zero pe durata funcționării"],
    c: 0,
    e: "✓ Corect: radarele în impuls detectează la distanțe mari, au precizie ridicată (timpul de zbor), imunitate sporită la interferențe și lucrează în condiții meteo dificile. 📌 Impuls puternic + timp de zbor = rază + precizie.",
    tema: "Stații în impuls", ref: "2.2.2"
  },

  /* ---------- 2.2.4 RADIOLOCAȚIA MONOIMPULS ---------- */
  {
    t: "Principalul avantaj al radiolocației MONOIMPULS este că:",
    o: ["Determină coordonatele unghiulare într-un singur impuls", "Necesită mai multe rotații succesive complete ale antenei", "Emite o putere de sute de ori mai mare decât alte radare", "Funcționează exclusiv cu ținte staționare, aflate la sol"],
    c: 0,
    e: "✓ Corect: monoimpulsul dă poziția unghiulară dintr-un singur impuls ⇒ viteză de reacție și precizie, mai puțin vulnerabil la bruiaj. „Rotații succesive” descrie tehnicile tradiționale. 📌 Rapid + precis + rezistent la bruiaj.",
    tema: "Monoimpuls", ref: "2.2.4"
  },
  {
    t: "În radiolocația monoimpuls, coordonatele unghiulare se calculează măsurând:",
    o: ["Diferențele de amplitudine și de fază ale ecoului recepționat", "Timpul de zbor al fiecărui impuls emis către țintă și înapoi", "Doar culoarea și intensitatea vizuală a semnalului reflectat", "Doar puterea totală recepționată, integrată pe o rotație completă"],
    c: 0,
    e: "✓ Corect: monoimpulsul folosește o antenă cu loburi multiple și măsoară diferențele de amplitudine și fază pentru azimut și elevație, într-un singur impuls. 📌 Amplitudine + fază → unghiuri.",
    tema: "Monoimpuls", ref: "2.2.4.1"
  },
  {
    t: "Metoda de AMPLITUDINE în monoimpuls servește la determinarea:",
    o: ["Unghiului de azimut al țintei", "Distanței absolute până la țintă", "Compoziției materialului țintei", "Perioadei de repetiție a impulsului"],
    c: 0,
    e: "✓ Corect: metoda de amplitudine compară intensitatea pe canale diferite → azimutul; metoda de fază (foarte precisă) → elevația. 📌 Amplitudine → azimut; fază → elevație.",
    tema: "Monoimpuls — metode", ref: "2.2.4.3"
  },
  {
    t: "Metoda de FAZĂ în monoimpuls se bazează pe:",
    o: ["Diferențele de fază între semnalele antenei, dând elevația", "Numărarea impulsurilor emise de radar într-o singură secundă", "Măsurarea directă a distanței absolute până la ținta detectată", "Compararea culorii și a intensității ecoului radar reflectat"],
    c: 0,
    e: "✓ Corect: metoda de fază măsoară diferențele de fază între elementele antenei → unghiul de elevație, cu mare precizie, dar sensibilă la interferențe/bruiaj. 📌 Fază = precizie pe verticală, dar sensibilă.",
    tema: "Monoimpuls — metode", ref: "2.2.4.3"
  },
  {
    t: "Semnalele HIBRIDE în monoimpuls reprezintă:",
    o: ["Combinația între semnalele de amplitudine și cele de fază", "Doar semnalele de amplitudine, întărite prin amplificare", "Semnale infraroșii combinate cu semnalele radar clasice", "Semnale acustice folosite pentru detecția țintelor sub apă"],
    c: 0,
    e: "✓ Corect: combinând amplitudinea (azimut) și faza (elevație), sistemul compensează erorile fiecăruia și obține o măsurătoare mai precisă. 📌 Hibrid = amplitudine + fază.",
    tema: "Monoimpuls — metode", ref: "2.2.4.2"
  },
  {
    t: "În monoimpuls, canalul de SUMĂ (SUM) servește la:",
    o: ["Determinarea distanței și asigurarea unui raport SNR optim", "Estimarea deviației unghiulare a țintei în plan orizontal", "Estimarea unghiului de elevație al țintei în plan vertical", "Calibrarea sistemului și monitorizarea zgomotului de fond"],
    c: 0,
    e: "✓ Corect: SUM (adunarea coerentă a semnalelor) dă distanța și SNR optim. Azimut = DAZ, elevație = DEL, calibrare/zgomot = AUX. 📌 SUM = distanță; DAZ = azimut; DEL = elevație; AUX = auxiliar.",
    tema: "Monoimpuls — canale", ref: "2.2.4.4"
  },
  {
    t: "Canalul diferențial de AZIMUT (DAZ) estimează:",
    o: ["Deviația unghiulară a țintei în plan orizontal", "Distanța absolută dintre radar și ținta urmărită", "Unghiul de elevație al țintei, în plan vertical", "Nivelul zgomotului de fond și al interferențelor"],
    c: 0,
    e: "✓ Corect: DAZ operează în plan orizontal → azimutul (comparând faza/amplitudinea elementelor dispuse orizontal). Elevația = DEL; distanța = SUM. 📌 DAZ = orizontal/azimut; DEL = vertical/elevație.",
    tema: "Monoimpuls — canale", ref: "2.2.4.4"
  },
  {
    t: "Canalul diferențial de ELEVAȚIE (DEL) furnizează:",
    o: ["Unghiul de elevație al țintei, în plan vertical", "Distanța absolută dintre radar și ținta urmărită", "Azimutul țintei detectate, în plan orizontal", "Frecvența de emisie folosită de stația radar"],
    c: 0,
    e: "✓ Corect: DEL operează în plan vertical → unghiul de elevație (altitudinea). DAZ = orizontal (azimut); SUM = distanța. 📌 DEL = vertical/elevație.",
    tema: "Monoimpuls — canale", ref: "2.2.4.4"
  },
  {
    t: "Canalul AUXILIAR (AUX) din monoimpuls asigură:",
    o: ["Monitorizarea zgomotului, calibrarea și redundanța sistemului", "Determinarea principală a distanței până la ținta urmărită", "Rotația mecanică a antenei directive pe durata baleierii", "Emiterea impulsului de vârf de putere maximă spre țintă"],
    c: 0,
    e: "✓ Corect: AUX = funcții auxiliare (zgomot de fond, interferențe, calibrare, redundanță). Distanța = SUM. 📌 AUX = „ajutor” pentru fiabilitate, nu canal principal de măsură.",
    tema: "Monoimpuls — canale", ref: "2.2.4.4"
  },

  /* ---------- COMPLETĂRI — ACOPERIRE TOTALĂ A MATERIEI ---------- */
  {
    t: "RATA DE BALEIERE, ca parametru tactic, definește:",
    o: ["Viteza cu care radarul scanează spațiul înconjurător", "Timpul necesar detectării și raportării unei ținte", "Capacitatea de a fi deplasat și folosit în alte locații", "Probabilitatea funcționării corecte într-un interval dat"],
    c: 0,
    e: "✓ Corect: rata de baleiere = viteza cu care radarul SCANEAZĂ spațiul înconjurător — importantă în aplicațiile de supraveghere care cer acoperirea rapidă a unei zone largi. Timpul de reacție = detectare + furnizarea informațiilor; mobilitatea = deplasarea; fiabilitatea = probabilitatea funcționării corecte. 📌 Baleiere = „cât de repede mătură” radarul cerul.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "TIMPUL DE REACȚIE al unui radar, ca parametru tactic, reprezintă:",
    o: ["Timpul necesar detectării țintei și furnizării informațiilor", "Viteza cu care antena scanează întregul spațiu înconjurător", "Durata de viață totală a sistemului radar, până la casare", "Intervalul dintre două impulsuri de sincronizare succesive"],
    c: 0,
    e: "✓ Corect: timpul de reacție = timpul necesar radarului să DETECTEZE ținta și să FURNIZEZE informațiile — critic în aplicațiile care cer reacție rapidă la apariția țintelor. Scanarea = rata de baleiere; intervalul dintre impulsuri = perioada de repetiție Tr. 📌 Reacție = detecție + raportare, cât mai repede.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "SENSIBILITATEA RECEPTORULUI, ca parametru tehnic, definește capacitatea de a:",
    o: ["Detecta semnale slabe (ținte cu SER mică sau îndepărtate)", "Concentra energia radiată pe o singură direcție anume", "Emite impulsuri de putere cât mai mare către țintă", "Separa în distanță două ținte aflate foarte aproape"],
    c: 0,
    e: "✓ Corect: sensibilitatea receptorului = capacitatea de a detecta semnale SLABE; o sensibilitate mai mare permite detectarea unor ținte mai mici (SER mică) sau mai îndepărtate. Concentrarea energiei = câștigul antenei; separarea în distanță = durata impulsului/lățimea de bandă. 📌 Sensibilitate mare = „aude” ecouri slabe.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  },
  {
    t: "TIPUL DE MODULAȚIE al semnalului radar influențează:",
    o: ["Rezoluția, distanța de descoperire și rezistența la bruiaj", "Doar culoarea și luminozitatea ecranului indicatorului", "Exclusiv costul total pe ciclul de viață al sistemului", "Numai greutatea și dimensiunile antenei directive folosite"],
    c: 0,
    e: "✓ Corect: tipul de modulație (în impulsuri, în frecvență etc.) influențează performanța radarului în termeni de REZOLUȚIE, DISTANȚĂ de descoperire și REZISTENȚĂ LA BRUIAJ. 📌 Modulația = un parametru tehnic cu efect direct asupra performanței și protecției.",
    tema: "Parametri tehnici/tactici", ref: "2.2.1"
  }
];
