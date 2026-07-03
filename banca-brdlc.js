/* ============================================================
   BANCĂ DE GRILE — BAZELE RADIOLOCAȚIEI (quiz-maker QBJVKE5XY)
   Cele 60 de întrebări preluate exact din quiz (3 variante fiecare).
   Răspunsurile corecte au fost determinate pe baza teoriei clasice
   a radiolocației (quiz-maker nu expune baremul în pagină) și
   verificate încrucișat cu materia de licență unde se suprapun.
   ============================================================ */
window.BANCA_BRDLC = [
  {
    t: "Indicatorul servește pentru:",
    o: ["Indicarea direcției țintei și se codează din două cifre", "Afișarea datelor despre țintele aeriene", "Observarea vizuală a semnalelor reflectate de la țintă, în scopul determinării coordonatelor acesteia"],
    c: 2,
    e: "✓ Corect: c). Indicatorul este dispozitivul pe care operatorul OBSERVĂ VIZUAL semnalele reflectate de la ținte, în scopul determinării coordonatelor acestora. „Afișarea datelor” e o formulare vagă/incompletă, iar codarea din două cifre nu are legătură cu indicatorul. 📌 Indicator = ecranul de observare vizuală + determinarea coordonatelor.",
    tema: "Indicatoare", ref: "Bazele RDLC, îtr. 1"
  },
  {
    t: "Influența reflexiei undelor electromagnetice de către sol asupra distanței de acțiune:",
    o: ["Se manifestă prin faptul că la țintă sosește pe lângă unda directă și o undă reflectată de la sol", "Nu afectează funcționarea stațiilor de radiolocație", "Întârzie determinarea coordonatelor unei ținte"],
    c: 0,
    e: "✓ Corect: a). La țintă ajunge atât unda DIRECTĂ, cât și unda REFLECTATĂ de sol; cele două interferează (constructiv sau distructiv), modificând diagrama de directivitate în plan vertical și deci distanța de acțiune pe anumite unghiuri. 📌 Sol = a doua cale de propagare → interferență → lobii diagramei verticale.",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 2"
  },
  {
    t: "În cazul microundelor, frecvența de undă este cuprinsă între:",
    o: ["0,3 GHz și 300 GHz", "0,3 MHz și 300 MHz", "0,3 kHz și 300 kHz"],
    c: 0,
    e: "✓ Corect: a) 0,3–300 GHz. Microundele = domeniul frecvențelor foarte înalte (lungimi de undă de la ~1 m până la 1 mm), folosit masiv în radiolocație. MHz = unde radio clasice; kHz = unde foarte lungi. 📌 Microunde = GHz (0,3–300 GHz).",
    tema: "Unde electromagnetice", ref: "Bazele RDLC, îtr. 3"
  },
  {
    t: "Pentru a limita influența curburii Pământului asupra distanței de descoperire este necesar:",
    o: ["Să se încline în sus antena", "Să se mărească înălțimea antenei stației de radiolocație", "Să se micșoreze înălțimea antenei stației de radiolocație"],
    c: 1,
    e: "✓ Corect: b). Orizontul radar crește cu înălțimea antenei (distanța la orizont ∝ √h) — cu cât antena e mai sus, cu atât „vede” mai departe peste curbura Pământului. Înclinarea în sus ar pierde țintele de la înălțimi mici. 📌 Antenă mai înaltă = orizont radar mai departat (identic cu materia de licență: curbura limitează distanța).",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 4"
  },
  {
    t: "Care este rolul sistemului de antenă în cadrul receptorului?",
    o: ["Amplificarea semnalelor reflectate de ținte", "Captarea energiei undelor electromagnetice reflectată de ținte și transformarea în curenți", "Atenuarea semnalelor reflectate de ținte"],
    c: 1,
    e: "✓ Corect: b). La recepție, antena CAPTEAZĂ energia undelor electromagnetice reflectate de ținte și o TRANSFORMĂ în curenți electrici (de frecvență foarte înaltă), pe care îi predă receptorului. Amplificarea se face în receptor (LNA), nu în antenă. 📌 Antena = traductor undă ↔ curent; amplificarea = treaba receptorului.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 5"
  },
  {
    t: "Care dintre următoarele caracteristici se pot determina cu ajutorul stațiilor de radiolocație:",
    o: ["Intenția avioanelor inamice", "Apartenența de stat a aeronavelor", "Tipul de aeronavă"],
    c: 1,
    e: "✓ Corect: b). Prin sistemul de identificare IFF (radar secundar), stația determină APARTENENȚA DE STAT (prieten/inamic) a aeronavei interogate. Intenția pilotului nu poate fi determinată de radar, iar tipul de aeronavă nu se determină direct în radiolocația clasică. 📌 Radar + IFF = „al cui e avionul”, nu „ce vrea pilotul”.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 6"
  },
  {
    t: "Este posibilă utilizarea unei singure antene pentru emisie și recepție?",
    o: ["Da, datorită utilizării comutatorului de antenă", "Da, deoarece emisia și recepția se fac în direcții diferite", "Da, deoarece emisia și recepția se fac pe frecvențe diferite"],
    c: 0,
    e: "✓ Corect: a). Aceeași antenă emite și recepționează datorită COMUTATORULUI DE ANTENĂ, care dirijează impulsul emis spre antenă și ecoul spre receptor, protejând receptorul de puterea mare a emisiei. Emisia/recepția se fac pe aceeași frecvență și aceeași direcție. 📌 Identic cu materia de licență: comutatorul = funcție dublă + protecția receptorului.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 7"
  },
  {
    t: "Cu ajutorul stațiilor de radiolocație se poate asigura:",
    o: ["Dirijarea avioanelor proprii pentru interceptarea avioanelor inamice", "Bruierea avioanelor proprii", "Bruierea avioanelor inamice"],
    c: 0,
    e: "✓ Corect: a). Radiolocația furnizează coordonatele în timp real necesare DIRIJĂRII aviației proprii spre interceptarea țintelor inamice (sprijinul apărării aeriene). Bruierea este misiunea războiului electronic (ECM), nu a stației de radiolocație. 📌 Radar = ochii dirijării; bruiaj = războiul electronic.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 8"
  },
  {
    t: "Care este rolul comutatorului de antenă?",
    o: ["Canalizarea curenților din antenă spre intrarea sistemului de emisie", "Comutarea din modul emisie în modul recepție", "Protecția împotriva saturării receptorului"],
    c: 1,
    e: "✓ Corect: b). Rolul de bază al comutatorului = COMUTAREA antenei între modul emisie (antena legată la emițător) și modul recepție (antena legată la receptor). Varianta a) e inversată (curenții din antenă merg spre RECEPTOR, nu spre emisie), iar protecția receptorului e un efect al comutării, nu definiția rolului. 📌 Comutator = „macazul” emisie ↔ recepție.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 9"
  },
  {
    t: "Durata impulsului stației determină:",
    o: ["Capacitatea de separare în distanță", "Mărimea zonei necercetate din jurul stației", "Ambele caracteristici enumerate"],
    c: 2,
    e: "✓ Corect: c) ambele. Durata impulsului τ determină atât capacitatea de separare în distanță (ΔD = c·τ/2 — impuls scurt separă ținte apropiate), cât și ZONA MOARTĂ din jurul stației (cât timp durează emisia, receptorul e blocat ⇒ Dmin = c·τ/2). 📌 τ mic = separare bună ȘI zonă moartă mică.",
    tema: "Parametrii semnalului", ref: "Bazele RDLC, îtr. 10"
  },
  {
    t: "Influența atmosferei asupra distanței de acțiune a stației de radiolocație se manifestă prin:",
    o: ["Reflexie și dispersie", "Ionizare", "Refracție și absorbție"],
    c: 2,
    e: "✓ Corect: c) refracție și absorbție. Atmosfera curbează traiectoria undelor (REFRACȚIE, prin variația indicelui de refracție cu altitudinea) și ABSOARBE o parte din energie (mai ales la frecvențe înalte și precipitații). Identic cu materia de licență (2.1.5.3). 📌 Atmosfera = refracție + absorbție (+ difuzie).",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 11"
  },
  {
    t: "Într-un sistem de coordonate sferice, poziția unei ținte este determinată de:",
    o: ["Azimut și distanța înclinată", "Ambele variante", "Unghi de înălțare"],
    c: 1,
    e: "✓ Corect: b) ambele variante. În coordonate SFERICE poziția țintei cere TREI mărimi: distanța înclinată + azimutul + unghiul de înălțare (ε). Nici a) singur, nici c) singur nu e suficient — împreună da. 📌 Sferic = D înclinată + β + ε (toate trei).",
    tema: "Sisteme de coordonate", ref: "Bazele RDLC, îtr. 12"
  },
  {
    t: "Zona de descoperire a radarului P-18 în plan vertical se caracterizează prin:",
    o: ["Limitele de descoperire în unghi de înălțare și raza conului mort", "Plafon de urmărire maxim", "Limita inferioară a zonei de descoperire"],
    c: 0,
    e: "✓ Corect: a). Diagrama zonei de descoperire în plan VERTICAL se caracterizează prin limitele în unghi de înălțare (între care stația vede țintele) și prin CONUL MORT de deasupra stației (zona necercetată de deasupra antenei, definită prin raza sa). Variantele b) și c) sunt doar elemente izolate, nu caracterizarea completă. 📌 Vertical = limite în ε + conul mort.",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 13"
  },
  {
    t: "Distanța maximă de descoperire a unui radiolocator poate fi obținută prin:",
    o: ["Mărirea puterii emițătorului", "Micșorarea puterii minime la receptor", "Ambele variante enumerate"],
    c: 2,
    e: "✓ Corect: c) ambele. Din ecuația radiolocației, Dmax crește atât cu PUTEREA emisă (Pt↑), cât și cu SENSIBILITATEA receptorului (puterea minimă detectabilă Pmin↓). Identic cu materia de licență: putere mare + receptor sensibil = distanță mare. 📌 Emiți mai tare SAU auzi mai fin — ideal ambele.",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 14"
  },
  {
    t: "Perioada de repetiție este:",
    o: ["Intervalul între sfârșitul unui impuls și începutul următorului", "Intervalul la care se repetă impulsurile", "Timpul dintre fronturile anterioare a două impulsuri succesive"],
    c: 2,
    e: "✓ Corect: c). Definiția riguroasă: perioada de repetiție Tr = timpul măsurat între FRONTURILE ANTERIOARE (începuturile) a două impulsuri succesive. Varianta a) descrie PAUZA dintre impulsuri (Tr − τ), iar b) e o formulare imprecisă. 📌 Tr = de la începutul unui impuls la începutul următorului.",
    tema: "Parametrii semnalului", ref: "Bazele RDLC, îtr. 15"
  },
  {
    t: "Care este rolul modulatorului?",
    o: ["Creează impulsuri de scurtă durată și frecvență foarte înaltă", "Modulează în frecvență semnalele receptate", "Creează impulsuri de înaltă tensiune necesare pentru pornirea GFFI"],
    c: 2,
    e: "✓ Corect: c). Modulatorul creează impulsurile de ÎNALTĂ TENSIUNE care pornesc (comandă) generatorul de frecvență foarte înaltă (GFFI) pe durata fiecărui impuls. Impulsurile de FFI le creează GFFI-ul, nu modulatorul; cu semnalele recepționate lucrează receptorul. 📌 Modulator = „cheia” de înaltă tensiune care pornește GFFI.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 16"
  },
  {
    t: "Cum se rotește linia desfășurării pe ecranul indicatorului?",
    o: ["Sincron cu antena", "În jurul centrului, sincron și sinfazic cu antena", "În sensul acelor de ceasornic"],
    c: 1,
    e: "✓ Corect: b). La indicatorul de observare circulară (IOC), linia desfășurării se rotește ÎN JURUL CENTRULUI ecranului, SINCRON (aceeași viteză) și SINFAZIC (aceeași poziție unghiulară) cu antena — astfel direcția liniei pe ecran corespunde exact azimutului antenei. 📌 Sincron + sinfazic = ecranul „copiază” fidel rotația antenei.",
    tema: "Indicatoare", ref: "Bazele RDLC, îtr. 17"
  },
  {
    t: "În cazul undelor lungi, lungimea de undă este:",
    o: ["Mai mare de 1 km", "Cuprinsă între 1 m și 1 km", "Mai mică de 1 m"],
    c: 0,
    e: "✓ Corect: a). Undele LUNGI au λ > 1 km (frecvențe sub 300 kHz). Gamele clasice: unde lungi >1 km, medii 100 m–1 km, scurte 10–100 m, ultrascurte <10 m. 📌 „Lungi” = kilometrice (λ > 1 km).",
    tema: "Unde electromagnetice", ref: "Bazele RDLC, îtr. 18"
  },
  {
    t: "Azimutul reprezintă unghiul măsurat dintre:",
    o: ["Direcția nordului geografic și proiecția distanței înclinate în planul orizontal", "Direcția distanței înclinate și proiecția acesteia", "Direcția nordului magnetic și proiecția distanței înclinate"],
    c: 0,
    e: "✓ Corect: a). Azimutul (β) = unghiul, măsurat în plan orizontal, între direcția NORDULUI GEOGRAFIC și PROIECȚIA distanței înclinate pe planul orizontal. Unghiul dintre distanța înclinată și proiecția ei = unghiul de ÎNĂLȚARE (ε). Nordul magnetic nu e referința standard. 📌 β = nord geografic → proiecția orizontală a direcției țintei.",
    tema: "Sisteme de coordonate", ref: "Bazele RDLC, îtr. 19"
  },
  {
    t: "Raportul dintre densitatea fluxului de energie radiată pe direcția maximă reprezintă:",
    o: ["Caracteristica de directivitate", "Câștigul antenei", "Randamentul antenei"],
    c: 1,
    e: "✓ Corect: b). Raportul dintre densitatea fluxului de putere radiat de antenă pe direcția maximului și densitatea produsă de o antenă izotropă (la aceeași putere) = CÂȘTIGUL antenei. Caracteristica de directivitate e reprezentarea grafică a radiației pe direcții; randamentul = raportul putere radiată/putere primită. 📌 Câștig = de câte ori „bate” mai tare pe direcția maximă față de izotrop.",
    tema: "Antene", ref: "Bazele RDLC, îtr. 20"
  },
  {
    t: "Pentru a dubla distanța de acțiune a unui radiolocator este nevoie să mărim puterea emițătorului:",
    o: ["De 2 ori", "De 16 ori", "De 4 ori"],
    c: 1,
    e: "✓ Corect: b) de 16 ori. Din ecuația radiolocației, D ∝ ⁴√Pt ⇒ pentru dublarea distanței trebuie Pt × 2⁴ = 16. Exact regula din materia de licență. 📌 Dublarea razei ⇒ ×16 putere.",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 21"
  },
  {
    t: "Care sunt părțile componente ale radioreceptorului?",
    o: ["Sistem de antenă și receptor propriu-zis", "Sistem de antenă, receptor și dispozitiv final", "Dispozitiv final și receptor propriu-zis"],
    c: 1,
    e: "✓ Corect: b). Instalația de radiorecepție completă = sistemul de ANTENĂ (captează energia) + RECEPTORUL propriu-zis (amplifică și transformă semnalul) + DISPOZITIVUL FINAL (indicatorul/difuzorul care prezintă informația). 📌 Lanț complet: antenă → receptor → dispozitiv final.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 22"
  },
  {
    t: "În cazul undelor scurte, lungimea de undă este:",
    o: ["Mai puțin de 1 m", "Între 1 m și 10 m", "Între 100 m și 10 m"],
    c: 2,
    e: "✓ Corect: c). Undele SCURTE (decametrice) au λ între 10 m și 100 m (3–30 MHz). Sub 10 m încep undele ultrascurte, iar sub 1 m undele metrice scurte/microundele. 📌 Scurte = decametrice (10–100 m).",
    tema: "Unde electromagnetice", ref: "Bazele RDLC, îtr. 23"
  },
  {
    t: "Care sunt parametrii unui receptor de radiolocație?",
    o: ["Sensibilitate, selectivitate, calitatea reproducerii, siguranța în funcționare", "Sensibilitate, putere de intrare, calitatea reproducerii, stabilitatea", "Sensibilitate, selectivitate, putere de ieșire, calitatea reproducerii, stabilitatea și siguranța"],
    c: 2,
    e: "✓ Corect: c) — lista COMPLETĂ: sensibilitate (detecția semnalelor slabe), selectivitate (separarea frecvenței utile), putere de ieșire, calitatea reproducerii, stabilitatea și siguranța în funcționare. Celelalte variante omit parametri. 📌 La grile cu „liste”, câștigă varianta completă.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 24"
  },
  {
    t: "La indicatoarele bidimensionale se pot determina:",
    o: ["Azimutul și înălțimea", "Distanța înclinată și azimut", "Distanța înclinată și înălțimea"],
    c: 1,
    e: "✓ Corect: b). Indicatorul bidimensional clasic (IOC — indicatorul de observare circulară) afișează DISTANȚA ÎNCLINATĂ (pe rază) și AZIMUTUL (pe unghi). Înălțimea se determină cu radioaltimetre / indicatoare speciale. 📌 IOC = distanță + azimut (2D).",
    tema: "Indicatoare", ref: "Bazele RDLC, îtr. 25"
  },
  {
    t: "Refracția este proprietatea undelor radio de:",
    o: ["A interacționa într-un punct", "Curbare a traiectoriei de propagare la trecerea dintr-un mediu în altul", "A-și schimba direcția de propagare"],
    c: 1,
    e: "✓ Corect: b). REFRACȚIA = curbarea traiectoriei undelor la trecerea între medii cu indici de refracție diferiți (ex. straturile atmosferei). Varianta c) e prea vagă (și reflexia schimbă direcția), iar a) descrie interferența. 📌 Refracție = curbare la schimbarea mediului.",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 26"
  },
  {
    t: "La indicatoarele cu semnale de luminozitate, semnalul reflectat se observă:",
    o: ["Sub formă de punct strălucitor", "Sub formă de impulsuri", "Sub formă de linii întrerupte"],
    c: 0,
    e: "✓ Corect: a). La indicatoarele cu modulație de LUMINOZITATE (ex. IOC), ecoul apare ca PUNCT/PATĂ STRĂLUCITOARE pe ecran (semnalul modulează strălucirea spotului). Sub formă de impulsuri (deviație pe verticală) apare la indicatoarele cu modulație de amplitudine (tip A). 📌 Luminozitate = punct luminos; amplitudine = impuls „săltat”.",
    tema: "Indicatoare", ref: "Bazele RDLC, îtr. 27"
  },
  {
    t: "În formula D = c·t/2, t reprezintă:",
    o: ["Timpul de parcurgere până la țintă și înapoi la stație", "Timpul de parcurgere până la țintă", "Durata dintre două impulsuri"],
    c: 0,
    e: "✓ Corect: a). t = timpul TOTAL de zbor al impulsului: stație → țintă → înapoi la stație. De aceea formula împarte la 2 — unda parcurge distanța dublă. Identic cu materia de licență (timpul de zbor dus-întors). 📌 Împărțirea la 2 există tocmai pentru că t e dus-întors.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 28"
  },
  {
    t: "Fenomenul de curbare a traiectoriei de propagare se numește:",
    o: ["Reflexie", "Difracție", "Refracție"],
    c: 2,
    e: "✓ Corect: c) refracție. Curbarea traiectoriei la trecerea prin medii cu proprietăți diferite = REFRACȚIE. Reflexia = întoarcerea undei la suprafața de separație; difracția = ocolirea obstacolelor. 📌 Refracție = curbare; reflexie = întoarcere; difracție = ocolire.",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 29"
  },
  {
    t: "Capacitatea de separare a stației în distanță reprezintă:",
    o: ["Distanța minimă până la care se pot apropia două ținte", "Distanța maximă dintre două ținte pe același azimut", "Distanța minimă dintre două ținte pe același azimut"],
    c: 2,
    e: "✓ Corect: c). Capacitatea de separare în distanță = distanța MINIMĂ dintre două ținte aflate pe ACELAȘI AZIMUT la care ele se văd încă separat pe indicator (ΔD = c·τ/2). Sub această distanță, ecourile se contopesc. 📌 Separare = cât de aproape pot fi două ținte pe aceeași direcție și să le văd distinct.",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 30"
  },
  {
    t: "Heterodina locală este destinată pentru:",
    o: ["Generarea oscilațiilor de frecvență ultra înaltă", "Amplificarea oscilațiilor de joasă frecvență", "Atenuarea oscilațiilor de înaltă frecvență"],
    c: 0,
    e: "✓ Corect: a). Heterodina locală GENEREAZĂ oscilații de frecvență foarte/ultra înaltă care, amestecate în MIXER cu semnalul recepționat, produc frecvența intermediară (FI) — mai ușor de amplificat și procesat. Identic cu lanțul de recepție din materia de licență (LNA → mixer → FI). 📌 Heterodină + mixer = coborârea semnalului la FI.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 31"
  },
  {
    t: "Ce determină bătaia stației de radiolocație?",
    o: ["Stabilitatea frecvenței oscilațiilor", "Valoarea puterii radiate de antenă", "Calitatea modulatorului"],
    c: 1,
    e: "✓ Corect: b). BĂTAIA (distanța maximă de acțiune) este determinată în primul rând de PUTEREA RADIATĂ de antenă (D ∝ ⁴√Pt). Stabilitatea frecvenței și calitatea modulatorului influențează alte performanțe (coerența, forma impulsului), nu direct bătaia. 📌 Bătaie = putere radiată (ecuația radiolocației).",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 32"
  },
  {
    t: "Puterea în impuls a unei stații de radiolocație este:",
    o: ["Puterea totală consumată", "Puterea radiată în timpul unui impuls", "Puterea consumată pe timpul emisiei"],
    c: 1,
    e: "✓ Corect: b). Puterea în impuls (de vârf) = puterea RADIATĂ pe durata unui impuls de sondaj — mult mai mare decât puterea medie. Nu e putere consumată (aceea include pierderile și alimentarea întregii stații). 📌 Putere în impuls = vârful radiat pe durata τ.",
    tema: "Parametrii semnalului", ref: "Bazele RDLC, îtr. 33"
  },
  {
    t: "Pentru a dubla bătaia unui radiolocator trebuie să se mărească puterea emițătorului de:",
    o: ["8 ori", "4 ori", "16 ori"],
    c: 2,
    e: "✓ Corect: c) 16 ori. Aceeași regulă de aur: D ∝ ⁴√Pt ⇒ dublarea bătăii cere 2⁴ = 16× puterea. (Întrebarea 21 din acest set — formulare diferită, același răspuns.) 📌 ×2 distanță = ×16 putere, întotdeauna.",
    tema: "Parametrii stației", ref: "Bazele RDLC, îtr. 34"
  },
  {
    t: "Emițătorul este compus din:",
    o: ["Modulator și două generatoare electrice", "Modulator și generator de frecvență foarte înaltă", "Modulator și un generator electric"],
    c: 1,
    e: "✓ Corect: b). Emițătorul radar în impulsuri = MODULATOR (creează impulsurile de înaltă tensiune) + GFFI (generatorul de frecvență foarte înaltă, ex. magnetronul, care produce oscilațiile radiate). Identic cu materia de licență (emițător = oscilator GFFI + modulator). 📌 Emițător = modulator + GFFI.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 35"
  },
  {
    t: "Ce este un radiator izotrop punctiform?",
    o: ["Antenă fictivă care radiază uniform în toate direcțiile", "O antenă unidirecțională", "O antenă cu caracteristică tip pencil"],
    c: 0,
    e: "✓ Corect: a). Radiatorul izotrop punctiform = antenă IDEALĂ, FICTIVĂ, care radiază energia uniform în toate direcțiile (sferă perfectă). E referința față de care se definește câștigul antenelor reale. Nu există fizic. 📌 Izotrop = „la fel în toate direcțiile” — etalonul teoretic.",
    tema: "Antene", ref: "Bazele RDLC, îtr. 36"
  },
  {
    t: "Prin ce se deosebește radiolocația pasivă de celelalte metode?",
    o: ["Prin faptul că nu sunt emise impulsuri de sondaj", "Prin precizie", "Prin eficacitate"],
    c: 0,
    e: "✓ Corect: a). Radiolocația PASIVĂ nu emite impulsuri de sondaj — recepționează doar semnalele emise de ținte (radiația proprie a acestora). Exact ca în materia de licență: radarul pasiv nu emite, deci e invizibil pentru inamic. 📌 Pasiv = doar ascultă, nu sondează.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 37"
  },
  {
    t: "Scopul principal al radiolocației este:",
    o: ["Descoperirea navelor aeriene proprii", "Descoperirea și determinarea coordonatelor navelor aeriene și maritime, sateliților", "Descoperirea navelor inamice"],
    c: 1,
    e: "✓ Corect: b) — definiția COMPLETĂ: descoperirea ȘI determinarea coordonatelor obiectelor (nave aeriene, maritime, sateliți), indiferent că sunt proprii sau inamice. Celelalte variante sunt fragmente incomplete. 📌 Radiolocație = descoperire + coordonate, pentru orice țintă.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 38"
  },
  {
    t: "Radiolocația activă presupune:",
    o: ["Recepționarea unui semnal codat permanent", "Emiterea unui semnal de răspuns codat", "Instalarea aparaturii speciale la bordul avioanelor"],
    c: 1,
    e: "✓ Corect: b). Radiolocația activă CU RĂSPUNS (principiul radarului secundar/IFF): stația interoghează, iar ținta EMITE UN SEMNAL DE RĂSPUNS CODAT prin transponder. Așa funcționează identificarea prieten-dușman din materia de licență (SSR/IFF). 📌 Activ cu răspuns = interogare + răspuns codat de la bord.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 39"
  },
  {
    t: "Caracteristica de directivitate a radiatorului izotrop punctiform este:",
    o: ["De tip pencil", "Sferică", "De tip dinte de fierăstrău"],
    c: 1,
    e: "✓ Corect: b) sferică. Radiatorul izotrop radiază uniform în TOATE direcțiile ⇒ caracteristica lui de directivitate este o SFERĂ perfectă. „Pencil” (creion) e fasciculul îngust al antenelor foarte directive — opusul izotropului. 📌 Izotrop = sferă; directiv = pencil/evantai.",
    tema: "Antene", ref: "Bazele RDLC, îtr. 40"
  },
  {
    t: "Care este rolul receptorului?",
    o: ["Amplifică curenții de joasă frecvență transformând în frecvență foarte înaltă", "Amplifică curenții de joasă frecvență transformând în frecvență înaltă", "Amplifică curenții de frecvență foarte înaltă transformând în joasă frecvență"],
    c: 2,
    e: "✓ Corect: c). Receptorul AMPLIFICĂ semnalele slabe de FRECVENȚĂ FOARTE ÎNALTĂ captate de antenă și le TRANSFORMĂ (prin mixer + heterodină → FI → detecție) în semnale de joasă frecvență, utilizabile de indicator. Sensul e FFI → JF, nu invers. 📌 Receptor: de la FFI slab → semnal JF prelucrabil.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 41"
  },
  {
    t: "Fiecare emițător:",
    o: ["Are bloc de pornire, modulator, sincronizator și sursă de alimentare", "Ambele variante", "Are generator de frecvență foarte înaltă"],
    c: 1,
    e: "✓ Corect: b) ambele variante. Emițătorul complet conține atât GFFI (inima care generează oscilațiile), cât și blocurile de comandă: bloc de pornire, modulator, sincronizator și sursă de alimentare. Fiecare variantă separată e incompletă. 📌 Emițător = GFFI + toată „logistica” lui de comandă și alimentare.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 42"
  },
  {
    t: "Câștigul nu ia în considerare:",
    o: ["Mărimea densității fluxului de putere", "Înălțimea antenei", "Pierderile din antenă"],
    c: 1,
    e: "✓ Corect: b). Câștigul se definește prin raportul densităților de flux de putere (deci a) e luată în calcul) și, spre deosebire de coeficientul de directivitate, INCLUDE pierderile din antenă (deci c) e luată în calcul). ÎNĂLȚIMEA antenei nu intră în definiția câștigului — ea influențează orizontul radar, nu câștigul. 📌 Câștig = directivitate + pierderi; înălțimea e altă poveste.",
    tema: "Antene", ref: "Bazele RDLC, îtr. 43"
  },
  {
    t: "Dacă mărim câștigul antenei de 4 ori, bătaia stației:",
    o: ["Se înjumătățește", "Rămâne constantă", "Se dublează"],
    c: 2,
    e: "✓ Corect: c) se dublează. La radar monostatic (aceeași antenă emisie+recepție), D⁴ ∝ Pt·G² ⇒ G×4 înseamnă G²×16 ⇒ D×⁴√16 = ×2. Exact regula din materia de licență: dublarea distanței = ×4 câștig. 📌 ×4 câștig = ×2 bătaie (echivalent cu ×16 putere).",
    tema: "Antene", ref: "Bazele RDLC, îtr. 44"
  },
  {
    t: "Emițătoarele de radiolocație:",
    o: ["Sunt destinate pentru crearea oscilațiilor de frecvență foarte înaltă", "Înmagazinează energie de frecvență foarte înaltă", "Funcționează în regim continuu"],
    c: 0,
    e: "✓ Corect: a). Destinația emițătorului = CREAREA oscilațiilor de frecvență foarte înaltă (impulsuri puternice de sondaj). La radarul în impulsuri, emițătorul NU funcționează continuu (emite doar pe durata τ), iar „înmagazinarea” de energie FFI nu e destinația lui. 📌 Emițător = fabrica de impulsuri FFI.",
    tema: "Emițătorul și comutatorul", ref: "Bazele RDLC, îtr. 45"
  },
  {
    t: "Câștigul unei antene emisie/recepție este:",
    o: ["Direct proporțional cu suprafața și invers proporțional cu lungimea de undă", "Direct proporțional cu suprafața și cu distanța", "Direct proporțional cu suprafața și cu lungimea de undă"],
    c: 0,
    e: "✓ Corect: a). G = 4π·Ae/λ² — câștigul crește cu SUPRAFAȚA efectivă a antenei și SCADE cu lungimea de undă (invers proporțional cu λ²). Antenă mare + undă scurtă = câștig mare. 📌 Suprafață mare ↑, λ mic ↓ ⇒ câștig mare.",
    tema: "Antene", ref: "Bazele RDLC, îtr. 46"
  },
  {
    t: "Care sunt principiile care stau la baza radiolocației?",
    o: ["Viteza constantă de propagare a undelor", "Emisia și recepția directivă, propagarea liniară, reflexia, viteza constantă", "Reflexia undelor de la obiecte"],
    c: 1,
    e: "✓ Corect: b) — lista COMPLETĂ a principiilor: emisia/recepția directivă + propagarea liniară (rectilinie) + reflexia undelor + viteza constantă de propagare. Variantele a) și c) sunt doar câte un principiu izolat. Corespunde materiei de licență (2.1.3). 📌 La „principiile radiolocației”, răspunsul e lista completă.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 47"
  },
  {
    t: "Capacitatea de separare în distanță a țintelor depinde de:",
    o: ["Temperatura mediului ambiant", "Durata impulsului", "Masa țintei"],
    c: 1,
    e: "✓ Corect: b). ΔD = c·τ/2 — capacitatea de separare în distanță depinde direct de DURATA IMPULSULUI: impuls scurt = separare bună. Temperatura și masa țintei nu intră în relație. Identic cu materia de licență. 📌 Separare în distanță = funcție de τ.",
    tema: "Parametrii semnalului", ref: "Bazele RDLC, îtr. 48"
  },
  {
    t: "Transformarea, amplificarea și detectarea semnalelor se face în:",
    o: ["Antenă", "Receptor", "Comutatorul de antenă"],
    c: 1,
    e: "✓ Corect: b) receptor. Receptorul realizează întregul lanț: transformarea (FFI → FI, prin mixer), amplificarea (LNA + amplificator FI) și detectarea semnalelor. Antena doar captează; comutatorul doar dirijează. 📌 Toată „bucătăria” semnalului = în receptor.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 49"
  },
  {
    t: "Una din metodele folosite în radiolocație pentru măsurarea distanțelor este:",
    o: ["Metoda impulsurilor", "Metoda fazei", "Metoda Doppler"],
    c: 0,
    e: "✓ Corect: a) metoda impulsurilor — se măsoară timpul de zbor al impulsului până la țintă și înapoi (D = c·t/2). E metoda de bază a radarelor în impuls. Doppler măsoară VITEZA (nu distanța), iar metoda fazei se folosește la măsurători unghiulare/de precizie. 📌 Distanța = metoda impulsurilor (timp de zbor).",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 50"
  },
  {
    t: "Dacă distanța este 150 km, care este timpul de propagare?",
    o: ["1000 µs", "2000 µs", "1500 µs"],
    c: 0,
    e: "✓ Corect: a) 1000 µs. t = 2D/c = 2 × 150.000 m / 3×10⁸ m/s = 10⁻³ s = 1000 µs (unda parcurge 300 km dus-întors). 📌 Regulă rapidă: 150 km ↔ 1 ms; 1 µs ↔ 150 m de distanță.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 51"
  },
  {
    t: "Viteza de propagare a luminii în vid este considerată:",
    o: ["c = 340 m/s", "c = 300.000 m/s", "c = 300.000 km/s"],
    c: 2,
    e: "✓ Corect: c) 300.000 km/s = 3×10⁸ m/s. Atenție la capcană: 300.000 m/s e de 1000 de ori prea puțin, iar 340 m/s e viteza SUNETULUI în aer. 📌 Lumina: 300.000 km/s; sunetul: 340 m/s — nu le încurca!",
    tema: "Unde electromagnetice", ref: "Bazele RDLC, îtr. 52"
  },
  {
    t: "Care este rolul instalației de radiorecepție?",
    o: ["Decodificarea semnalelor reflectate", "Comparația semnalelor reflectate cu cele emise", "Recepționarea, amplificarea și transformarea energiei reflectate"],
    c: 2,
    e: "✓ Corect: c). Instalația de radiorecepție RECEPȚIONEAZĂ energia reflectată de ținte (prin antenă), o AMPLIFICĂ și o TRANSFORMĂ în semnale utilizabile de indicator. Decodificarea/comparația nu definesc rolul instalației de recepție clasice. 📌 Recepție = captare + amplificare + transformare.",
    tema: "Recepția semnalelor", ref: "Bazele RDLC, îtr. 53"
  },
  {
    t: "Când putem afirma că două mărimi sinusoidale sunt în opoziție:",
    o: ["Când tensiunea crește logaritmic", "Când diferența de fază este nulă", "Când diferența de fază este π"],
    c: 2,
    e: "✓ Corect: c). Două mărimi sinusoidale sunt în OPOZIȚIE (antifază) când diferența de fază dintre ele este π (180°) — una atinge maximul când cealaltă atinge minimul ⇒ interferență DISTRUCTIVĂ. Diferență nulă = în fază (interferență constructivă). 📌 Δφ = 0 → în fază; Δφ = π → în opoziție.",
    tema: "Unde electromagnetice", ref: "Bazele RDLC, îtr. 54"
  },
  {
    t: "Ce efect particular au straturile superioare ale atmosferei asupra undelor?",
    o: ["Absorbția", "Dispersia", "Undele nu se mai propagă în linie dreaptă datorită refracției"],
    c: 2,
    e: "✓ Corect: c). Straturile superioare (ionosfera) au indici de refracție variabili ⇒ undele NU se mai propagă rectiliniu, ci se curbează prin REFRACȚIE (fenomen exploatat de radarele cu vedere peste orizont, care „ricoșează” undele din ionosferă). 📌 Ionosfera curbează traiectoria = refracție.",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 55"
  },
  {
    t: "Fascicolul electronic la IOC se deplasează:",
    o: ["Circular", "De la centru spre margine", "De la margine spre centru"],
    c: 1,
    e: "✓ Corect: b). La indicatorul de observare circulară (IOC), fascicolul electronic desenează linia desfășurării DE LA CENTRU SPRE MARGINE (centru = stația, marginea = distanța maximă), iar această linie se rotește sincron cu antena. 📌 Raza pleacă din centru (stația) spre margine (Dmax).",
    tema: "Indicatoare", ref: "Bazele RDLC, îtr. 56"
  },
  {
    t: "Influența reflexiei de către sol se ia în calcul pentru stațiile cu unde:",
    o: ["Cu lungimea mai mare de 1,5 m", "În gama centimetrică", "Cu lungimea mai mică de 1,5 m"],
    c: 0,
    e: "✓ Corect: a). Reflexia de sol influențează semnificativ diagrama de directivitate la stațiile cu unde METRICE (λ > 1,5 m, ex. P-18) — lobii formați prin interferența undei directe cu cea reflectată sunt largi și pronunțați. La undele centimetrice efectul e neglijabil (fascicule înguste, sol „rugos” față de λ). 📌 λ mare (metrice) = reflexia solului contează.",
    tema: "Propagarea undelor", ref: "Bazele RDLC, îtr. 57"
  },
  {
    t: "Coordonatele unui sistem de coordonate cilindric sunt:",
    o: ["Distanță înclinată, azimut și unghi de înălțare", "Distanță orizontală, azimut și înălțime", "Distanță înclinată, azimut și înălțime"],
    c: 1,
    e: "✓ Corect: b). Sistemul CILINDRIC = distanța ORIZONTALĂ (proiecția pe sol) + azimutul + ÎNĂLȚIMEA (H). Sistemul SFERIC = distanța ÎNCLINATĂ + azimut + unghi de ÎNĂLȚARE (varianta a). 📌 Cilindric: d orizontală + β + H; Sferic: D înclinată + β + ε.",
    tema: "Sisteme de coordonate", ref: "Bazele RDLC, îtr. 58"
  },
  {
    t: "Originea unui sistem de coordonate sferice este suprapusă cu:",
    o: ["Nordul geografic", "Locul de dispunere a stației de radiolocație", "Nordul magnetic"],
    c: 1,
    e: "✓ Corect: b). Originea sistemului de coordonate (sferic sau cilindric) = LOCUL DE DISPUNERE A STAȚIEI — toate coordonatele țintei (distanță, azimut, înălțare) se măsoară față de stație. Nordul geografic e doar REFERINȚA de la care se măsoară azimutul, nu originea. 📌 Origine = stația; nordul = referință unghiulară.",
    tema: "Sisteme de coordonate", ref: "Bazele RDLC, îtr. 59"
  },
  {
    t: "Unul dintre scopurile radiolocației este:",
    o: ["Cercetarea stării timpului în zona de descoperire", "Îmbunătățirea stării timpului", "Deteriorarea stării timpului"],
    c: 0,
    e: "✓ Corect: a). Printre scopurile radiolocației se numără și CERCETAREA STĂRII TIMPULUI (radarele meteorologice detectează precipitații, nori, furtuni în zona de descoperire). Radarul doar OBSERVĂ vremea — evident nu o poate îmbunătăți sau deteriora. 📌 Radar meteo = observarea vremii, nu modificarea ei.",
    tema: "Principii și scopuri", ref: "Bazele RDLC, îtr. 60"
  }
];
