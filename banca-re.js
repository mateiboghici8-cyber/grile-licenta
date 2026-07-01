/* ============================================================
   BANCĂ DE GRILE — RĂZBOI ELECTRONIC
   Academia Forțelor Aeriene "Henri Coandă" — pregătire licență
   Redactare exigentă: variante de lungime comparabilă (corectul NU e
   sistematic cel mai lung), distractori plauzibili din concepte reale.
   Capitole: 2.3.2 Doppler/MTI · 3.2.1 ECM · 3.2.2 ECCM · 3.3.1 SIGINT.
   ============================================================ */
window.BANCA_RE = [
  /* ---------- 2.3.2 EFECTUL DOPPLER ȘI SELECȚIA ȚINTELOR MOBILE ---------- */
  {
    t: "Conform efectului Doppler, când o țintă se APROPIE de radar, frecvența ecoului este:",
    o: ["Mai mare decât cea emisă (shift pozitiv)", "Mai mică decât cea emisă (shift negativ)", "Egală cu frecvența emisă (fără shift)", "Nulă, ecoul dispărând complet de pe ecran"],
    c: 0,
    e: "✓ Corect: apropiere → shift Doppler pozitiv (frecvență mai mare); depărtare → shift negativ (mai mică). 📌 Din această diferență se determină viteza radială.",
    tema: "Efectul Doppler", ref: "2.3.2"
  },
  {
    t: "Efectul Doppler este folosit în radiolocație pentru a determina:",
    o: ["Viteza radială a țintei", "Compoziția materialului țintei", "Numărul de operatori inamici", "Temperatura suprafeței țintei"],
    c: 0,
    e: "✓ Corect: efectul Doppler (schimbarea frecvenței datorată mișcării relative) determină viteza radială și distinge mobilul de staționar. 📌 Doppler = „radarul de viteză” al țintei.",
    tema: "Efectul Doppler", ref: "2.3.2"
  },
  {
    t: "În formula frecvenței Doppler (fD) intervin:",
    o: ["Viteza țintei, lungimea de undă și unghiul de zbor", "Puterea de emisie și sensibilitatea receptorului", "Durata impulsului și factorul de umplere Q", "Câștigul antenei și lățimea fasciculului radar"],
    c: 0,
    e: "✓ Corect: fD depinde de viteza (v), lungimea de undă (λ) și unghiul α dintre direcția semnalului și direcția de zbor. 📌 Când α = 90°, componenta radială (deci fD) tinde spre zero.",
    tema: "Efectul Doppler", ref: "2.3.2"
  },
  {
    t: "Selecția țintelor mobile (SȚM / MTI) are rolul de a:",
    o: ["Distinge obiectele mobile de fundalul staționar", "Amplifica ecourile provenite de la sol și clădiri", "Detecta exclusiv țintele complet imobile și fixe", "Distruge fizic țintele aflate în mișcare rapidă"],
    c: 0,
    e: "✓ Corect: MTI separă țintele mobile de fundalul fix, eliminând clutterul (teren, clădiri, apă) prin filtru Doppler. 📌 MTI = „văd doar ce se mișcă”.",
    tema: "MTI / Selecția țintelor mobile", ref: "2.3.2"
  },
  {
    t: "Principiul de funcționare al MTI se bazează pe:",
    o: ["Compararea fazei semnalelor la momente diferite", "Măsurarea directă a distanței absolute la țintă", "Analiza culorii și intensității ecoului pe ecran", "Numărarea operatorilor din centrul de comandă"],
    c: 0,
    e: "✓ Corect: obiectele în mișcare produc o schimbare de fază; MTI detectează aceste variații și filtrează semnalele statice (filtru Doppler, circuite de anulare). 📌 MTI = variația de fază între impulsuri succesive.",
    tema: "MTI / Selecția țintelor mobile", ref: "2.3.2"
  },
  {
    t: "Sistemele MTI COERENTE se deosebesc prin faptul că:",
    o: ["Folosesc o referință de fază stabilă", "Folosesc doar metode statistice", "Nu detectează nicio țintă mobilă", "Emit exclusiv în banda infraroșie"],
    c: 0,
    e: "✓ Corect: MTI coerent folosește o referință de fază stabilă (măsurare precisă a frecvenței); cel necoerent folosește metode statistice. 📌 Coerent = referință de fază; necoerent = statistic.",
    tema: "MTI / Selecția țintelor mobile", ref: "2.3.2"
  },
  {
    t: "O LIMITARE a tehnologiei MTI apare când:",
    o: ["Viteza radială a țintei este apropiată de zero", "Ținta se deplasează cu o viteză radială foarte mare", "Ținta reflectă foarte puternic undele radar incidente", "Radarul emite pe o singură frecvență fixă, îngustă"],
    c: 0,
    e: "✓ Corect: la viteză radială ~zero, ținta dă un shift Doppler nesemnificativ și e eliminată ca staționară („blind speed”). 📌 MTI „orbește” pentru ținte cu viteză radială ~0.",
    tema: "MTI / Selecția țintelor mobile", ref: "2.3.2"
  },
  {
    t: "Eliminarea țintelor false (clutter, reflexii de la structuri) se face prin:",
    o: ["Filtrare Doppler și analiza spectrului semnalului", "Creșterea puterii de emisie a stației radar", "Mărirea lățimii fasciculului antenei directive", "Reducerea numărului de canale de recepție"],
    c: 0,
    e: "✓ Corect: obiectele staționare nu dau efect Doppler semnificativ; prin filtrare Doppler și analiza spectrului se separă mobilul real de clutterul static. 📌 Analiza spectrului = mai puține alarme false.",
    tema: "Eliminarea țintelor false", ref: "Analiza spectrului"
  },

  /* ---------- 3.2.1 CONTRAMĂSURI ELECTRONICE (ECM) ---------- */
  {
    t: "Contramăsurile electronice (ECM) reprezintă măsuri pentru:",
    o: ["Destabilizarea sistemului electronic al adversarului", "Protejarea propriilor sisteme contra bruiajului inamic", "Culegerea de date și informații din comunicații adverse", "Reglementarea și controlul traficului aerian civil"],
    c: 0,
    e: "✓ Corect: ECM = destabilizarea sistemului electronic advers (prevenirea/reducerea folosirii spectrului de către adversar). Protecția proprie = ECCM; culegerea din comunicații = COMINT. 📌 ECM = ofensiv; ECCM = defensiv.",
    tema: "ECM", ref: "3.2.1"
  },
  {
    t: "Cele trei componente ale ECM sunt:",
    o: ["Bruiajul, dezinformarea electronică și distrugerea fizică", "Bruiajul, radiolocația și navigația prin satelit", "Măsurile ESM, ECM și ECCM ale războiului electronic", "Atacul, apărarea și supravegherea electronică"],
    c: 0,
    e: "✓ Corect: componentele ECM = bruiaj + dezinformare electronică + distrugere fizică. „ESM/ECM/ECCM” = componentele majore RE; „atac/apărare/supraveghere” = categoriile de acțiuni RE. 📌 Nu confunda componentele ECM cu ale războiului electronic.",
    tema: "ECM", ref: "3.2.1"
  },
  {
    t: "Bruiajul, ca acțiune deliberată, urmărește:",
    o: ["Degradarea sistemelor electronice adverse prin emisie", "Îmbunătățirea propriilor comunicații radio de comandă", "Creșterea preciziei și a razei de acțiune a radarului", "Reducerea consumului energetic al propriei stații radar"],
    c: 0,
    e: "✓ Corect: bruiajul = acțiune de degradare/neutralizare/distrugere a capacităților electronice adverse prin emisie de energie electromagnetică; se împarte în activ și pasiv. 📌 Bruiajul = componentă de bază a RE.",
    tema: "Bruiaj", ref: "3.2.1"
  },
  {
    t: "Bruiajul PASIV se caracterizează prin faptul că:",
    o: ["Reflectă sau absoarbe energia, fără a emite semnale proprii", "Emite deliberat semnale de mare putere către sistemele inamice", "Distruge fizic antena și emițătorul radarului advers", "Este întotdeauna mai eficient decât bruiajul activ"],
    c: 0,
    e: "✓ Corect: bruiajul pasiv reflectă/absoarbe energia, fără emisie proprie — mai puțin eficient decât cel activ, dar mai greu de detectat. Emisia deliberată = bruiaj activ. 📌 Pasiv = fără emisie, discret, mai slab.",
    tema: "Bruiaj pasiv", ref: "3.2.1"
  },
  {
    t: "Bruiajul de tip SPOT constă în:",
    o: ["Concentrarea pe o singură frecvență / interval îngust", "Bruierea simultană a unui spectru larg de frecvențe", "Crearea de ținte false pe ecranele radar ale inamicului", "Absorbția undelor radar cu ajutorul unor materiale speciale"],
    c: 0,
    e: "✓ Corect: spot vizează o frecvență/interval îngust, eficient contra sistemelor pe frecvențe fixe. Spectrul larg = barrage; țintele false = semnal fals. 📌 Spot = țintit; barrage = perdea de frecvențe.",
    tema: "Bruiaj activ", ref: "3.2.1"
  },
  {
    t: "Bruiajul de tip „BARRAGE” este eficient mai ales contra sistemelor care:",
    o: ["Operează pe o gamă largă sau își schimbă frecvența", "Emit numai în banda de infraroșu apropiat, îngustă", "Folosesc rachete cu ghidare termică pe timp de noapte", "Au antene parabolice fixe, imobile și nedirective"],
    c: 0,
    e: "✓ Corect: barrage acoperă un spectru larg simultan, eficient contra sistemelor cu salt de frecvență/bandă largă, unde spot nu s-ar adapta. 📌 Barrage = putere împrăștiată pe multe frecvențe.",
    tema: "Bruiaj activ", ref: "3.2.1"
  },
  {
    t: "Bruiajul cu SEMNAL FALS urmărește:",
    o: ["Inducerea în eroare prin crearea de ținte false", "Absorbția undelor radar incidente pe suprafață", "Creșterea preciziei de urmărire a radarului advers", "Emiterea de radiații infraroșii spre rachetele inamice"],
    c: 0,
    e: "✓ Corect: semnalul fals imită sistemul țintă pentru a-l induce în eroare/satura (ținte false pe radar, perturbarea navigației, blocarea comunicațiilor). 📌 Semnal fals = „minciună” electronică.",
    tema: "Bruiaj activ", ref: "3.2.1"
  },
  {
    t: "Un exemplu practic de bruiaj asupra sistemelor de navigație prin satelit este:",
    o: ["Bruiajul GNSS, pentru a dezorienta forțele inamice", "Bruiajul propriilor sisteme de identificare IFF", "Bruiajul radarului meteorologic propriu de la sol", "Bruiajul rețelei de telefonie fixă a populației civile"],
    c: 0,
    e: "✓ Corect: exemple practice: bruiajul radarelor de supraveghere, al comunicațiilor militare, al GNSS (dezorientare/împiedicarea armelor ghidate), al UAV-urilor. 📌 Bruiaj GNSS = ținta pierde poziția.",
    tema: "Bruiaj activ", ref: "3.2.1"
  },
  {
    t: "„Chaff”-ul (reflectoare radar) este un bruiaj pasiv care:",
    o: ["Reflectă undele radar, creând ecouri false pe ecran", "Emite radiații în infraroșu pentru a păcăli rachetele", "Absoarbe complet undele radar incidente pe suprafață", "Emite un semnal activ chiar pe frecvența radarului advers"],
    c: 0,
    e: "✓ Corect: chaff = benzi subțiri de material conductor care reflectă undele → ecouri false. IR = flares; absorbția = absorbanți radar. 📌 Chaff reflectă, flares emit IR, absorbanții absorb.",
    tema: "Bruiaj pasiv", ref: "3.2.1"
  },
  {
    t: "Capcanele termice („flares”) sunt folosite pentru:",
    o: ["A dezorienta rachetele cu ghidare în infraroșu", "A reflecta undele radar și a crea ecouri false", "A absorbi undele în construcția aeronavelor stealth", "A bruia comunicațiile prin satelit ale inamicului"],
    c: 0,
    e: "✓ Corect: flares emit radiații IR pentru a atrage rachetele cu ghidare în infraroșu departe de aeronavă. Ecouri false = chaff; absorbția = absorbanți. 📌 Flares = momeală termică contra rachetelor IR.",
    tema: "Bruiaj pasiv", ref: "3.2.1"
  },
  {
    t: "Absorbanții radar sunt materiale care:",
    o: ["Absorb energia undelor, reducând semnalul reflectat", "Emit semnale false chiar pe frecvența radarului advers", "Reflectă puternic undele radar incidente pe suprafață", "Emit radiații în banda infraroșie spre rachetele inamice"],
    c: 0,
    e: "✓ Corect: absorbanții reduc semnalul reflectat (deci reduc SER), folosiți la aeronavele stealth. Reflexia puternică = chaff; IR = flares. 📌 Absorbanți = reduc ecoul; chaff = amplifică ecouri false.",
    tema: "Bruiaj pasiv", ref: "3.2.1"
  },
  {
    t: "Dezinformarea electronică MANIPULATIVĂ presupune:",
    o: ["Alterarea sau simularea semnalelor din canalele proprii", "Introducerea de radiații ostile în canalele adversarului", "Distrugerea fizică a emițătorului și antenei adverse", "Culegerea de date și informații din comunicații inamice"],
    c: 0,
    e: "✓ Corect: manipulativă = alterarea/simularea semnalelor din canalele PROPRII pentru înșelare; imitativă = introducerea de radiații în canalele ADVERSARULUI. 📌 Manipulativă = canalele mele; imitativă = canalele lui.",
    tema: "Dezinformare electronică", ref: "3.2.1"
  },
  {
    t: "Dezinformarea electronică IMITATIVĂ presupune:",
    o: ["Introducerea de radiații ostile în canalele adversarului", "Alterarea sau simularea semnalelor din canalele proprii", "Bruierea unei singure frecvențe fixe, de tip spot", "Absorbția undelor radar incidente pe suprafața țintei"],
    c: 0,
    e: "✓ Corect: imitativă = radiații care imită o emisie ostilă introduse în canalele de recepție ale adversarului; alterarea canalelor proprii = manipulativă. 📌 Imitativă „vorbește” pe canalele adversarului.",
    tema: "Dezinformare electronică", ref: "3.2.1"
  },
  {
    t: "Un exemplu de DISTRUGERE FIZICĂ a sistemelor adverse este:",
    o: ["Lovirea radarului cu rachete anti-radiolocație", "Bruiajul comunicațiilor prin satelit ale inamicului", "Lansarea de chaff pentru a crea ecouri false", "Simularea unor semnale false pe canalele proprii"],
    c: 0,
    e: "✓ Corect: distrugerea fizică = suprimarea materială (rachete anti-radiolocație, arme cu energie dirijată, lovirea nucleară a centrelor de comandă). Bruiajul/chaff/simularea nu distrug fizic. 📌 Distrugere fizică = scoatere din funcțiune materială.",
    tema: "ECM", ref: "3.2.1"
  },

  /* ---------- 3.2.2 CONTRA-CONTRAMĂSURI ELECTRONICE (ECCM) ---------- */
  {
    t: "Contra-contramăsurile electronice (ECCM) au ca scop:",
    o: ["Protejarea sistemelor radar de bruiajul activ", "Destabilizarea sistemelor electronice ale adversarului", "Distrugerea fizică a radarelor și antenelor inamice", "Culegerea de date și informații de tip COMINT"],
    c: 0,
    e: "✓ Corect: ECCM protejează sistemele radar proprii de bruiaj și interferențe, asigurând integritatea semnalului. Destabilizarea adversarului = ECM. 📌 ECCM = scut; ECM = sabie.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "Prin ce se deosebește ECCM de ECM?",
    o: ["ECCM se implementează din faza de proiectare a sistemului", "ECCM este un sistem distinct, separat de cel de bază", "ECCM se aplică doar după neutralizarea fizică a inamicului", "ECCM nu are nicio legătură cu funcționarea sistemelor radar"],
    c: 0,
    e: "✓ Corect: ECCM se implementează din faza de proiectare, integrat în structura sistemelor; ECM sunt sisteme DISTINCTE, cu reguli proprii. 📌 ECCM = „built-in”; ECM = echipament separat.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "Confruntarea ECM–ECCM, ca „competiție pentru resurse”, presupune că:",
    o: ["Orice sistem poate fi neutralizat și orice ECM contracarat", "Adversarul renunță întotdeauna primul la lupta electronică", "Bruiajul pasiv învinge întotdeauna bruiajul de tip activ", "Nu se mai pot proiecta deloc sisteme electronice noi"],
    c: 0,
    e: "✓ Corect: competiția pentru resurse = nimic nu e invulnerabil, de aici cursa tehnologică. Distinctă de „imaginea în oglindă” (presupui adversarul cel puțin la nivelul tău). 📌 Cursă continuă, fără invulnerabilitate.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "Principiul „imaginii în oglindă” care guvernează confruntarea ECM–ECCM presupune că:",
    o: ["Adversarul are tehnologie cel puțin la fel de bună ca a ta", "Adversarul folosește mereu echipamente mai slabe decât ale tale", "Bruiajul pasiv este întotdeauna superior celui de tip activ", "Radarul propriu nu poate fi bruiat în nicio situație"],
    c: 0,
    e: "✓ Corect: imaginea în oglindă = presupui că adversarul are informație/tehnologie cel puțin egală (sau superioară), ceea ce stimulează competiția tehnologică. 📌 Oglindă = respectă adversarul la nivelul tău sau peste.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "ECCM cuprinde, în ansamblu, trei tipuri de măsuri:",
    o: ["Organizatorice, tehnice și de exploatare", "De atac, de apărare și de supraveghere", "Bruiaj, dezinformare și distrugere fizică", "ELINT, COMINT și măsuri de sprijin ESM"],
    c: 0,
    e: "✓ Corect: ECCM = măsuri organizatorice + tehnice + de exploatare. „Atac/apărare/supraveghere” = acțiunile RE; „bruiaj/dezinformare/distrugere” = componentele ECM. 📌 Tripleta ECCM: organizatorice–tehnice–exploatare.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "Care NU este un obiectiv vizat de ECCM?",
    o: ["Facilitarea cercetării electronice a adversarului", "Asigurarea stabilității lucrului în condiții de bruiaj", "Contracararea acțiunilor de dezinformare adverse", "Asigurarea compatibilității electromagnetice proprii"],
    c: 0,
    e: "✓ Corect: ECCM ÎMPIEDICĂ (nu facilitează) cercetarea electronică adversă. Celelalte sunt obiective reale: stabilitate în bruiaj, contracararea dezinformării, controlul electronic, compatibilitatea electromagnetică. 📌 ECCM ascunde sistemele proprii.",
    tema: "ECCM", ref: "3.2.2"
  },
  {
    t: "Care este o modalitate de protecție contra ECM ale adversarului?",
    o: ["Antene cu nivel foarte redus al lobilor laterali", "Creșterea deliberată a nivelului lobilor laterali", "Emisia permanentă pe o singură frecvență fixă", "Renunțarea completă la selecția țintelor mobile"],
    c: 0,
    e: "✓ Corect: modalități: lobi laterali reduși, compensare coerentă pe lobii laterali, antene adaptive, STM, radare LPI, gestionare spațio-temporală a puterii. Lobi laterali mari = mai vulnerabil. 📌 Lobi laterali reduși = greu de bruiat lateral.",
    tema: "Protecție contra ECM", ref: "3.2.2"
  },
  {
    t: "Sistemele radar de tip LPI (Low Probability of Intercept) urmăresc:",
    o: ["Reducerea probabilității de a fi interceptate de adversar", "Creșterea puterii de emisie pentru o vizibilitate sporită", "Emisia exclusiv în banda de infraroșu, greu de detectat", "Bruierea propriilor comunicații radio de comandă"],
    c: 0,
    e: "✓ Corect: LPI = probabilitate mică de interceptare — radarul emite astfel încât să fie greu de detectat de adversar. 📌 LPI = radar „discret”.",
    tema: "Protecție contra ECM", ref: "3.2.2"
  },
  {
    t: "Radarul MONOIMPULS protejează contra bruiajului activ deoarece:",
    o: ["Nu depinde de rotații ale antenei, scăzând expunerea", "Emite o putere de mii de ori mai mare decât bruiajul", "Funcționează doar în absența oricărui semnal advers", "Renunță complet la orice procesare a semnalului radar"],
    c: 0,
    e: "✓ Corect: monoimpulsul analizează în timp real, pe mai multe canale, fără rotații complete ⇒ mai puțin vulnerabil la bruiaj. 📌 Determinare rapidă = mai puțin timp expus interferențelor.",
    tema: "Protecție contra ECM", ref: "3.2.2"
  },
  {
    t: "Selectarea semnalelor utile într-un mediu cu bruiaj și clutter se face prin:",
    o: ["Filtrare avansată și algoritmi de învățare automată", "Creșterea greutății fizice a antenei directive", "Reducerea numărului de canale de recepție folosite", "Oprirea completă a radarului pentru o perioadă"],
    c: 0,
    e: "✓ Corect: filtrare avansată (analiză Doppler, frecvențe multiple) și algoritmi de învățare automată/analiză spectrală separă semnalele reale de cele false. 📌 Selecția semnalelor utile = cheia funcționării în bruiaj intens.",
    tema: "Protecție contra ECM", ref: "3.2.2"
  },

  /* ---------- 3.3.1 SUPRAVEGHEREA ELECTRONICĂ / SIGINT ---------- */
  {
    t: "Acțiunile de război electronic se împart în trei categorii:",
    o: ["Atac, apărare și supraveghere electronică", "Bruiaj, dezinformare și distrugere fizică", "Măsuri organizatorice, tehnice și de exploatare", "Culegere ELINT, culegere COMINT și sprijin ESM"],
    c: 0,
    e: "✓ Corect: acțiunile RE = atac electronic + apărare electronică + supraveghere electronică. „Bruiaj/dezinformare/distrugere” = componentele ECM; „organizatorice/tehnice/exploatare” = măsurile ECCM. 📌 Categoriile RE: atac–apărare–supraveghere.",
    tema: "Componentele RE", ref: "3.3.1"
  },
  {
    t: "Componentele majore ale războiului electronic se transpun în:",
    o: ["Măsuri de sprijin (ESM), contramăsuri (ECM) și ECCM", "Radar primar, radar secundar și sistemul IFF", "Chaff, capcane termice (flares) și absorbanți radar", "Componenta locuționară, ilocuționară și perlocuționară"],
    c: 0,
    e: "✓ Corect: componentele majore RE = ESM + ECM + ECCM, sprijinite de supravegherea electronică. 📌 ESM (sprijin) – ECM (contramăsuri) – ECCM (contra-contramăsuri).",
    tema: "Componentele RE", ref: "3.3.1"
  },
  {
    t: "Relația dintre radiolocație și războiul electronic este că:",
    o: ["RE e ofensiv, iar radiolocația sprijină defensiv apărarea", "Cele două domenii nu au nicio legătură funcțională între ele", "Radiolocația este ofensivă, iar RE este strict defensiv", "Ambele funcționează numai pe timp de pace, nu în conflict"],
    c: 0,
    e: "✓ Corect: RE = preponderent ofensiv; radiolocația sprijină aviația/apărarea antiaeriană cu date precise, în timp real. Domeniile nu pot fi analizate separat. 📌 RE ofensiv + radiolocație (sprijin) = complementare.",
    tema: "Componentele RE", ref: "3.3.1"
  },
  {
    t: "SIGINT (Signal Intelligence) are două componente principale:",
    o: ["ELINT și COMINT", "ECM și ECCM", "PSR și SSR", "Bruiaj activ și pasiv"],
    c: 0,
    e: "✓ Corect: SIGINT = ELINT (date din echipamente non-comunicații, ex. radar) + COMINT (date din comunicații). 📌 SIGINT = umbrela; ELINT (radar) + COMINT (comunicații) = piloni.",
    tema: "SIGINT", ref: "3.3.1"
  },
  {
    t: "Informațiile furnizate de SIGINT au caracter:",
    o: ["Analitic și strategic, nu în timp real", "Pur tactic, obținut exclusiv în timp real", "Lipsit de orice valoare informativă utilă", "Doar de natură meteorologică și climatică"],
    c: 0,
    e: "✓ Corect: SIGINT = informație analitică, strategică, NU în timp real; beneficiarii sunt pe nivele ierarhice superioare. 📌 SIGINT = informație strategică prelucrată, nu alertă instantanee.",
    tema: "SIGINT", ref: "3.3.1"
  },
  {
    t: "COMINT (Communications Intelligence) se referă la:",
    o: ["Date obținute din semnalele de comunicații", "Date din radare și echipamente de conducere a focului", "Distrugerea fizică a centrelor de comandă adverse", "Absorbția undelor radar cu materiale speciale"],
    c: 0,
    e: "✓ Corect: COMINT = date din semnale de comunicații (mesaje recepționabile de factorul uman); din radare/echipamente non-comunicații = ELINT. 📌 COMINT ascultă comunicații; ELINT ascultă radare.",
    tema: "SIGINT", ref: "3.3.1"
  },
  {
    t: "Prin ELINT, radarele sunt identificate pe baza SEMNĂTURII RADAR, care conține:",
    o: ["PRF, durata impulsurilor, frecvența de emisie, modulația", "Numele, gradul și naționalitatea operatorului advers", "Culoarea și tipul aeronavei care poartă radarul", "Doar altitudinea de zbor a țintei urmărite de radar"],
    c: 0,
    e: "✓ Corect: semnătura radar = PRF + durata impulsurilor + frecvența de emisie + tipul de modulație, permițând identificarea în toate modurile (descoperire, urmărire, tragere). 📌 Semnătură radar = „amprenta” tehnică.",
    tema: "SIGINT / ELINT", ref: "3.3.1"
  },
  {
    t: "Datele primare ELINT se obțin prin cercetare directă și prin:",
    o: ["Monitorizare regulată a evoluției tehnologice adverse", "Distrugerea fizică imediată a emițătorului advers", "Bruierea deliberată a propriilor sisteme electronice", "Culegerea de date meteorologice din surse civile"],
    c: 0,
    e: "✓ Corect: ELINT obține date prin cercetare directă (memorare + analiză) și monitorizare regulată (nivel tehnologic, schimbări de strategie). 📌 Directă = analiză detaliată; regulată = evoluția în timp.",
    tema: "SIGINT / ELINT", ref: "3.3.1"
  },
  {
    t: "O funcție a ELINT este determinarea EOB (Electronic Order of Battle), adică:",
    o: ["Situația electronică a adversarului", "Ordinea de tragere a rachetelor proprii", "Programul de mentenanță al radarelor proprii", "Lista frecvențelor civile permise legal"],
    c: 0,
    e: "✓ Corect: EOB = situația electronică a adversarului, ce alimentează biblioteca de amenințări folosită de ESM și ECM proprii. 📌 EOB = „harta electronică” a inamicului.",
    tema: "SIGINT / ELINT", ref: "3.3.1"
  },
  {
    t: "Localizarea emițătoarelor inamice prin TRIANGULAȚIE presupune:",
    o: ["Măsurarea unghiurilor semnalului din două sau mai multe stații", "Distrugerea fizică a emițătorului advers cu o rachetă dirijată", "Absorbția semnalului inamic cu ajutorul unor materiale speciale", "Emiterea unui semnal fals de dezinformare către inamic"],
    c: 0,
    e: "✓ Corect: triangulația folosește ≥2 stații de recepție; din unghiurile măsurate se calculează poziția emițătorului. Alte metode: analiza semnalului, direcționarea antenei. 📌 Triangulație = intersecția direcțiilor.",
    tema: "Supraveghere electronică", ref: "3.3.1"
  },
  {
    t: "În localizarea emițătoarelor, ANALIZA SEMNALULUI oferă informații despre:",
    o: ["Frecvența, puterea și tipul semnalului advers", "Greutatea fizică a antenei emițătorului inamic", "Numele și gradul operatorului advers de la stație", "Culoarea și dispunerea centrului de comandă inamic"],
    c: 0,
    e: "✓ Corect: pe lângă triangulație, analiza semnalului dă frecvența, puterea și tipul, ajutând la distingerea între tipurile de emițătoare inamice. 📌 Triangulație = UNDE; analiza semnalului = CE fel de emițător.",
    tema: "Supraveghere electronică", ref: "3.3.1"
  },
  {
    t: "În supravegherea electronică, bruiajul PASIV (clutter) provine din:",
    o: ["Reflexii de la clădiri, vegetație, sol sau apă", "Emițătoare militare care blochează intenționat radarul", "Transponderele IFF de pe aeronavele proprii, prietene", "Semnalele GPS emise de utilizatorii civili din zonă"],
    c: 0,
    e: "✓ Corect: clutterul (bruiaj pasiv) = reflexii neintenționate de la mediu (sol, clădiri, vegetație, apă). Bruiajul intenționat de la emițătoare = bruiaj activ. 📌 Clutter = „zgomot” natural, nu atac deliberat.",
    tema: "Supraveghere electronică", ref: "3.3.1"
  },
  {
    t: "Fără produsele supravegherii electronice, forțele proprii NU pot:",
    o: ["Executa apărarea electronică și identifica țintele atacului", "Zbura cu aeronave civile de pasageri pe rute comerciale", "Folosi radarele meteorologice civile de la aeroporturi", "Comunica prin rețeaua publică de telefonie fixă la sol"],
    c: 0,
    e: "✓ Corect: supravegherea electronică sprijină ESM, ECM și ECCM; fără produsele ei nu se pot executa acțiuni de apărare electronică și nu se pot identifica țintele atacului electronic. 📌 Supravegherea = „ochii” războiului electronic.",
    tema: "Supraveghere electronică", ref: "3.3.1"
  },

  /* ---------- COMPLETĂRI — ACOPERIRE TOTALĂ A MATERIEI ---------- */
  {
    t: "Bruiajul sistemelor de control de la distanță ale UAV-urilor urmărește:",
    o: ["Neutralizarea sau capturarea acestora", "Creșterea preciziei lor de navigație", "Alimentarea lor cu energie electrică", "Identificarea lor ca ținte prietene"],
    c: 0,
    e: "✓ Corect: printre exemplele practice de bruiaj electronic se numără bruiajul sistemelor de control de la distanță a UAV-urilor, pentru a le NEUTRALIZA sau a le CAPTURA. Alte exemple: bruiajul radarelor de supraveghere aeriană, al comunicațiilor militare și al GNSS. 📌 Bruiaj control UAV = drona rămâne „fără pilot” → neutralizare/capturare.",
    tema: "Bruiaj activ", ref: "3.2.1"
  }
];
