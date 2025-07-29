export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceConfig {
  slug: string;
  imageUrl: string;
  heroImage: string;
  title: string;
  shortDescription: string;
  content: string;
  features: ServiceFeature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  phoneNumber: string;
  responseTime: string;
  specialization: string;
}

export const services: ServiceConfig[] = [
  {
    slug: "recupero-crediti",
    imageUrl: "/recupero-crediti.jpg",
    heroImage: "/recupero-crediti.jpg",
    title: "Recupero Crediti",
    shortDescription: "Tutela dei crediti e procedure esecutive per professionisti, aziende e privati.",
    features: [
      {
        icon: "Search",
        title: "Indagini Patrimoniali",
        description: "Verifica preventiva della solvibilità del debitore"
      },
      {
        icon: "Gavel",
        title: "Azioni Esecutive",
        description: "Pignoramenti e procedure di recupero efficaci"
      },
      {
        icon: "TrendingUp",
        title: "Recupero Garantito",
        description: "Massima trasparenza su tempi, costi e risultati"
      }
    ],
    ctaTitle: "Hai crediti da recuperare? Non aspettare oltre!",
    ctaDescription: "Il nostro team specializzato in recupero crediti ti aiuterà a rientrare delle somme dovute con strategie mirate e procedure efficaci.",
    ctaPrimaryText: "Recupera i Tuoi Crediti Ora",
    ctaSecondaryText: "Valutazione Gratuita Credito",
    phoneNumber: "+39 329 336 6330",
    responseTime: "24 ore",
    specialization: "Recupero Crediti",
    content: `
      <h2>🔷 RECUPERO CREDITI</h2>
      <h3>💰 Tutela dei crediti e procedure esecutive</h3>
      <p>Lo Studio offre servizi completi di recupero crediti, assistendo professionisti, aziende e privati per garantire il soddisfacimento dei propri diritti in tempi rapidi.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Redazione solleciti e diffide di pagamento</li>
        <li>Decreti ingiuntivi e procedimenti monitori</li>
        <li>Pignoramenti mobiliari, immobiliari e presso terzi</li>
        <li>Azioni esecutive e cautelari</li>
        <li>Accordi stragiudiziali e piani di rientro</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <ul>
        <li>Analisi preventiva della solvibilità del debitore</li>
        <li>Consulenza strategica sul miglior strumento di recupero</li>
        <li>Gestione completa del contenzioso</li>
        <li>Massima trasparenza su tempi e costi</li>
      </ul>
      
      <h4>📋 Attività stragiudiziale</h4>
      <p>La consulenza e le attività stragiudiziali di recupero dei crediti sono sempre state tra le materie di quotidiana trattazione. L'esperienza pluridecennale ci consente di esaminare gli aspetti specifici di ogni rapporto creditorio e di fornire tempestivamente un parere legale sull'effettiva recuperabilità del credito.</p>
      
      <p>Le attività di disamina preventiva comprendono una verifica approfondita sul soggetto debitore nonché mirate indagini patrimoniali.</p>
      
      <p>Se desideri recuperare un credito in modo rapido ed efficace, contatta il nostro Studio per ricevere assistenza legale mirata.</p>
    `
  },
  {
    slug: "diritto-famiglia",
    imageUrl: "/diritto-famiglia.jpg",
    heroImage: "/diritto-famiglia.jpg",
    title: "Diritto di Famiglia",
    shortDescription: "Tutela della famiglia e dei suoi diritti con professionalità, riservatezza e approccio umano.",
    features: [
      {
        icon: "Heart",
        title: "Approccio Umano",
        description: "Gestiamo ogni caso con sensibilità e riservatezza"
      },
      {
        icon: "Shield",
        title: "Tutela dei Minori",
        description: "Priorità assoluta alla protezione dei diritti dei bambini"
      },
      {
        icon: "Users",
        title: "Mediazione Familiare",
        description: "Soluzioni consensuali per evitare lunghi contenziosi"
      }
    ],
    ctaTitle: "Stai affrontando una problematica familiare?",
    ctaDescription: "Il nostro team specializzato in diritto di famiglia ti offrirà supporto professionale e umano per tutelare i tuoi diritti e quelli dei tuoi figli.",
    ctaPrimaryText: "Consulenza Familiare Riservata",
    ctaSecondaryText: "Parliamo del Tuo Caso",
    phoneNumber: "+39 329 336 6330",
    responseTime: "12 ore",
    specialization: "Diritto di Famiglia",
    content: `
      <h2>🔷 DIRITTO DI FAMIGLIA</h2>
      <h3>👨‍👩‍👧‍👦 Tutela della famiglia e dei suoi diritti</h3>
      <p>Il diritto di famiglia regola i rapporti personali e patrimoniali tra coniugi, conviventi e figli. Lo Studio offre assistenza legale completa per affrontare con serenità le delicate questioni familiari, garantendo professionalità, riservatezza e un approccio umano in ogni fase.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Separazioni e divorzi (consensuali e giudiziali)</li>
        <li>Regolamentazione dell'affidamento dei figli minori</li>
        <li>Assegno di mantenimento per figli e coniuge</li>
        <li>Modifica delle condizioni di separazione o divorzio</li>
        <li>Tutela dei minori e decadenza della responsabilità genitoriale</li>
        <li>Riconoscimento o disconoscimento di paternità/maternità</li>
        <li>Amministrazioni di sostegno e tutele</li>
        <li>Convivenze di fatto e unioni civili</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <p>Offriamo:</p>
      <ul>
        <li>Analisi preventiva della situazione e dei diritti coinvolti</li>
        <li>Redazione di ricorsi, accordi e negoziazioni assistite</li>
        <li>Assistenza in mediazione familiare e procedure ADR</li>
        <li>Tutela in giudizio dinanzi ai Tribunali Ordinari e ai Tribunali per i Minorenni</li>
      </ul>
      
      <p>Se stai affrontando una problematica familiare o desideri tutelare al meglio i tuoi diritti e quelli dei tuoi figli, contattaci oggi stesso per ricevere una consulenza riservata e personalizzata.</p>
    `
  },
  {
    slug: "immigrazione-cittadinanza",
    imageUrl: "/immigrazione.jpg",
    heroImage: "/immigrazione.jpg",
    title: "Immigrazione e Cittadinanza",
    shortDescription: "Assistenza legale completa per visti, permessi di soggiorno e cittadinanza italiana.",
    features: [
      {
        icon: "Clock",
        title: "Tempi di Rilascio Chiari",
        description: "Ti informiamo sui tempi effettivi (30-90 giorni per visti)"
      },
      {
        icon: "FileText",
        title: "Documentazione Completa",
        description: "Assistenza nella preparazione di tutti i documenti richiesti"
      },
      {
        icon: "Users",
        title: "Specialisti in Immigrazione",
        description: "Team dedicato con esperienza consolidata nel settore"
      }
    ],
    ctaTitle: "Hai bisogno di assistenza per immigrazione o cittadinanza?",
    ctaDescription: "I nostri esperti in diritto dell'immigrazione ti assisteranno in ogni fase della pratica, dalla consulenza preliminare alla presentazione di eventuali ricorsi.",
    ctaPrimaryText: "Consulenza Immigrazione Gratuita",
    ctaSecondaryText: "Chiama per Info Immediate",
    phoneNumber: "+39 329 336 6330",
    responseTime: "24 ore",
    specialization: "Diritto dell'Immigrazione",
    content: `
      <h2>🇮🇹 Immigrazione e cittadinanza italiana</h2>
      <p>L'Italia è tra le mete più ambite per studio, lavoro o ricongiungimento familiare. Conoscere le normative su visti, permessi di soggiorno e cittadinanza italiana è essenziale per evitare errori burocratici che potrebbero compromettere la tua permanenza o il tuo progetto di vita.</p>
      
      <h3>🛂 Immigrazione in Italia</h3>
      
      <h4>🔹 Visti per ingresso in Italia</h4>
      <p>Il visto è l'autorizzazione rilasciata dal Consolato italiano nel paese di origine che consente l'ingresso in Italia per un periodo determinato. Le tipologie principali sono:</p>
      <ul>
        <li><strong>Visto per studio:</strong> per frequentare corsi universitari o professionali riconosciuti</li>
        <li><strong>Visto per lavoro subordinato:</strong> in presenza di un contratto di lavoro e nulla osta dello Sportello Unico per l'Immigrazione</li>
        <li><strong>Visto per lavoro autonomo:</strong> per professionisti con requisiti specifici o titolari di partita IVA</li>
        <li><strong>Visto per ricongiungimento familiare:</strong> per familiari stretti di cittadini extra-UE regolarmente soggiornanti</li>
      </ul>
      <p><strong>👉 Tempi di rilascio:</strong> variano da 30 a 90 giorni, in base al visto richiesto e al Consolato competente.</p>
      
      <h4>🔹 Permesso di soggiorno</h4>
      <p>Il permesso di soggiorno è il documento che consente di soggiornare legalmente in Italia oltre i 90 giorni del visto turistico. Va richiesto entro 8 giorni dall'ingresso.</p>
      
      <h4>🔹 Cittadinanza italiana</h4>
      <p>Assistiamo i clienti in tutti i procedimenti per l'ottenimento della cittadinanza italiana:</p>
      <ul>
        <li>Cittadinanza per nascita o diritto di sangue (Ius sanguinis)</li>
        <li>Cittadinanza per matrimonio</li>
        <li>Cittadinanza per residenza</li>
      </ul>
      
      <p><strong>📞 Hai bisogno di supporto per il tuo permesso di soggiorno o per la cittadinanza italiana?</strong><br>
      I nostri avvocati esperti in diritto dell'immigrazione e cittadinanza ti assisteranno in ogni fase della pratica.</p>
    `
  },

  {
    slug: "diritto-tributario",
    imageUrl: "/diritto-tributario.jpg",
    heroImage: "/diritto-tributario.jpg",
    title: "Diritto Tributario",
    shortDescription: "Tutela legale in materia fiscale e tributaria per privati, professionisti e imprese.",
    features: [
      {
        icon: "Calculator",
        title: "Analisi Fiscale Dettagliata",
        description: "Valutazione completa della posizione fiscale e dei rischi"
      },
      {
        icon: "FileText",
        title: "Ricorsi e Memorie",
        description: "Predisposizione di ricorsi contro cartelle e accertamenti"
      },
      {
        icon: "TrendingDown",
        title: "Riduzione Debiti Fiscali",
        description: "Strategie per definizioni agevolate e rottamazioni"
      }
    ],
    ctaTitle: "Problemi con il Fisco? Hai ricevuto cartelle o accertamenti?",
    ctaDescription: "I nostri esperti in diritto tributario ti assisteranno nella gestione di controversie fiscali e nella pianificazione tributaria strategica.",
    ctaPrimaryText: "Consulenza Tributaria Urgente",
    ctaSecondaryText: "Analisi Gratuita Cartelle",
    phoneNumber: "+39 329 336 6330",
    responseTime: "6 ore",
    specialization: "Diritto Tributario",
    content: `
      <h2>🔷 DIRITTO TRIBUTARIO</h2>
      <h3>💼 Tutela legale in materia fiscale e tributaria</h3>
      <p>Lo Studio offre assistenza legale e consulenza qualificata in ambito tributario e fiscale, supportando privati, professionisti e imprese nella gestione dei rapporti con l'Amministrazione finanziaria e nella risoluzione delle controversie.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Contenzioso tributario presso le Commissioni Tributarie Provinciali e Regionali</li>
        <li>Assistenza in accertamenti fiscali e verifiche da parte dell'Agenzia delle Entrate o Guardia di Finanza</li>
        <li>Ricorsi contro cartelle esattoriali, avvisi di accertamento e iscrizioni ipotecarie</li>
        <li>Definizioni agevolate e rottamazione cartelle</li>
        <li>Procedure di autotutela e istanze di sgravio</li>
        <li>Consulenza su imposte dirette e indirette, IVA, IRAP e tributi locali</li>
        <li>Piani di rateizzazione e gestione di debiti fiscali</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <p>Offriamo:</p>
      <ul>
        <li>Analisi dettagliata della posizione fiscale e valutazione dei rischi</li>
        <li>Predisposizione di ricorsi e memorie difensive</li>
        <li>Assistenza nelle trattative con l'Amministrazione finanziaria</li>
        <li>Strategie preventive per la corretta pianificazione fiscale</li>
      </ul>
      
      <p>Se desideri tutelarti in materia fiscale o hai ricevuto un atto dell'Agenzia delle Entrate o di Agenzia Entrate-Riscossione, contattaci oggi stesso per una consulenza legale personalizzata e mirata alla miglior soluzione.</p>
    `
  },
  {
    slug: "diritto-penale",
    imageUrl: "/diritto-penale.jpg",
    heroImage: "/diritto-penale.jpg",
    title: "Diritto Penale",
    shortDescription: "Difesa penale e tutela dei diritti dell'indagato e dell'imputato con presenza costante.",
    features: [
      {
        icon: "Shield",
        title: "Difesa Immediata",
        description: "Assistenza tempestiva presso Questura, Procura e Tribunale"
      },
      {
        icon: "Scale",
        title: "Strategie Difensive",
        description: "Approccio personalizzato per ogni tipo di procedimento"
      },
      {
        icon: "Clock",
        title: "Reperibilità 24/7",
        description: "Assistenza urgente in qualsiasi momento della giornata"
      }
    ],
    ctaTitle: "Sei indagato o imputato? Hai bisogno di assistenza penale?",
    ctaDescription: "In materia penale il tempo è fondamentale. Il nostro team di penalisti ti garantirà una difesa tempestiva ed efficace in ogni fase del procedimento.",
    ctaPrimaryText: "Assistenza Penale Immediata",
    ctaSecondaryText: "Contatto Urgente 24/7",
    phoneNumber: "+39 329 336 6330",
    responseTime: "Immediata",
    specialization: "Diritto Penale",
    content: `
      <h2>🔷 DIRITTO PENALE</h2>
      <h3>⚖️ Difesa penale e tutela dei diritti dell'indagato e dell'imputato</h3>
      <p>Lo Studio offre assistenza e difesa legale in materia penale, garantendo professionalità, riservatezza e presenza costante in ogni fase del procedimento, dall'indagine preliminare al giudizio.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Difesa in processi penali per reati contro la persona e il patrimonio</li>
        <li>Reati societari e fallimentari</li>
        <li>Reati tributari e fiscali</li>
        <li>Violenza domestica e maltrattamenti</li>
        <li>Stalking e atti persecutori</li>
        <li>Guida in stato di ebbrezza e reati stradali</li>
        <li>Assistenza in fase di esecuzione penale e misure alternative alla detenzione</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <ul>
        <li>Assistenza immediata presso Questura, Procura o Tribunale</li>
        <li>Redazione di querele, denunce e opposizioni ad archiviazione</li>
        <li>Strategie difensive personalizzate</li>
        <li>Ricorsi in Cassazione</li>
      </ul>
      
      <p><strong>Se sei indagato o imputato per un reato o desideri sporgere querela, contatta subito il nostro Studio per una difesa tempestiva ed efficace.</strong></p>
    `
  },

  {
    slug: "diritto-lavoro",
    imageUrl: "/sicurezza-lavoro.jpg",
    heroImage: "/sicurezza-lavoro.jpg",
    title: "Diritto del Lavoro",
    shortDescription: "Tutela di lavoratori e aziende nella gestione di rapporti lavorativi e contenziosi.",
    features: [
      {
        icon: "Users",
        title: "Tutela Lavoratori",
        description: "Difesa dei diritti in licenziamenti e vertenze retributive"
      },
      {
        icon: "Building",
        title: "Consulenza Aziendale",
        description: "Assistenza a datori di lavoro per contratti e procedure"
      },
      {
        icon: "ShieldCheck",
        title: "Sicurezza sul Lavoro",
        description: "Supporto per infortuni e normative sulla sicurezza"
      }
    ],
    ctaTitle: "Problemi sul lavoro? Licenziamento o vertenza in corso?",
    ctaDescription: "I nostri esperti in diritto del lavoro ti assisteranno per tutelare i tuoi diritti o quelli della tua azienda con strategie efficaci e soluzioni personalizzate.",
    ctaPrimaryText: "Consulenza Lavoro Specializzata",
    ctaSecondaryText: "Analisi Caso Lavorativo",
    phoneNumber: "+39 329 336 6330",
    responseTime: "24 ore",
    specialization: "Diritto del Lavoro",
    content: `
      <h2>🔷 DIRITTO DEL LAVORO</h2>
      <h3>👔 Tutela di lavoratori e aziende</h3>
      <p>Lo Studio offre consulenza e assistenza legale in materia di diritto del lavoro, supportando sia i lavoratori sia i datori di lavoro nella gestione di rapporti lavorativi e contenziosi.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Licenziamenti individuali e collettivi</li>
        <li>Impugnazione di licenziamenti illegittimi</li>
        <li>Vertenze retributive e differenze salariali</li>
        <li>Contratti di lavoro subordinato e autonomo</li>
        <li>Mobbing e discriminazioni sul luogo di lavoro</li>
        <li>Sicurezza sul lavoro e infortuni</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <ul>
        <li>Consulenza preventiva su contratti e procedure</li>
        <li>Assistenza stragiudiziale e giudiziale</li>
        <li>Difesa dinanzi al Tribunale del Lavoro</li>
        <li>Negoziazione di transazioni e conciliazioni</li>
      </ul>
      
      <p>Se stai affrontando un problema sul lavoro o desideri tutelarti in un licenziamento o vertenza, contattaci per una consulenza personalizzata.</p>
    `
  },
  {
    slug: "diritto-civile",
    imageUrl: "/diritto-civile.jpg",  
    heroImage: "/diritto-civile.jpg",
    title: "Diritto Civile",
    shortDescription: "Assistenza legale su obbligazioni, contratti e responsabilità civile.",
    features: [
      {
        icon: "FileText",
        title: "Contrattualistica",
        description: "Redazione e analisi di contratti civili e commerciali"
      },
      {
        icon: "Home",
        title: "Diritti Reali",
        description: "Tutela della proprietà, locazioni e questioni immobiliari"
      },
      {
        icon: "Heart",
        title: "Successioni",
        description: "Gestione di eredità e divisioni ereditarie"
      }
    ],
    ctaTitle: "Questioni contrattuali, successorie o di responsabilità civile?",
    ctaDescription: "Il nostro team ti supporterà nella gestione di controversie civili e nella redazione di contratti con competenza e professionalità.",
    ctaPrimaryText: "Consulenza Civile Completa",
    ctaSecondaryText: "Valutazione Pratica Civile",
    phoneNumber: "+39 329 336 6330",
    responseTime: "48 ore",
    specialization: "Diritto Civile",
    content: `
      <h2>🔷 DIRITTO CIVILE</h2>
      <h3>⚖️ Assistenza legale su obbligazioni, contratti e responsabilità civile</h3>
      <p>Lo Studio offre consulenza e assistenza in tutte le aree del diritto civile, garantendo un supporto completo nella gestione di controversie e nella redazione di atti e contratti.</p>
      
      <h4>✅ Aree di attività</h4>
      <ul>
        <li>Contrattualistica civile e commerciale</li>
        <li>Responsabilità civile e risarcimento danni</li>
        <li>Locazioni e sfratti</li>
        <li>Tutela della proprietà e diritti reali</li>
        <li>Successioni e divisioni ereditarie</li>
        <li>Amministrazioni di sostegno e interdizioni</li>
      </ul>
      
      <h4>💬 Come possiamo aiutarti</h4>
      <ul>
        <li>Analisi e redazione di contratti personalizzati</li>
        <li>Gestione stragiudiziale e giudiziale delle controversie</li>
        <li>Strategie mirate per risarcimenti o recuperi di somme</li>
      </ul>
      
      <p>Per consulenze su contratti, responsabilità civile o questioni ereditarie, contatta il nostro Studio e ricevi assistenza legale chiara ed efficace.</p>
    `
  },
  {
    slug: "mediazione-negoziazione",
    imageUrl: "/mediazione.jpg",
    heroImage: "/mediazione.jpg",
    title: "Mediazione e Negoziazione Assistita",
    shortDescription: "Risoluzione alternativa delle controversie per evitare lunghi processi.",
    features: [
      {
        icon: "Users",
        title: "Mediatore Certificato",
        description: "Avv. Fici Spreafico è mediatore professionista accreditato"
      },
      {
        icon: "Clock",
        title: "Tempi Ridotti",
        description: "Soluzioni rapide ed economiche rispetto ai processi tradizionali"
      },
      {
        icon: "Handshake",
        title: "Accordi Vincolanti",
        description: "Verbali e accordi con pieno valore legale"
      }
    ],
    ctaTitle: "Vuoi risolvere una controversia senza lunghi processi?",
    ctaDescription: "La mediazione e negoziazione assistita offrono soluzioni rapide ed economiche. Il nostro team ti guiderà verso accordi vantaggiosi per tutte le parti.",
    ctaPrimaryText: "Risoluzione Alternativa Controversie",
    ctaSecondaryText: "Info su Mediazione",
    phoneNumber: "+39 329 336 6330",
    responseTime: "24 ore",
    specialization: "ADR e Mediazione",
    content: `
      <h2>🏛️ MEDIAZIONE E NEGOZIAZIONE ASSISTITA</h2>
      <h3>Assistenza legale per negoziazioni assistite e mediazioni</h3>
      <p>Lo Studio Legale offre assistenza completa nelle procedure di risoluzione alternativa delle controversie.</p>
      
      <h4>🔹 MEDIAZIONE</h4>
      <p>La mediazione consiste in un'attività posta in essere dal Mediatore, terzo ed imparziale, finalizzata a consentire che due o più parti raggiungano un accordo di varia natura ovvero superino un contrasto già in essere tra loro.</p>
      
      <p>L'Avv. Fici Spreafico è Mediatore professionista. Tutti gli Avvocati del nostro Studio possono prestare assistenza ai Clienti nei procedimenti di mediazione, sia obbligatoria che volontaria.</p>
      
      <h4>🔹 NEGOZIAZIONE ASSISTITA</h4>
      <p>La procedura di negoziazione assistita consiste in un accordo col quale le parti, assistite da uno o più avvocati, convengono di cooperare in buona fede e con lealtà per risolvere in via amichevole una controversia.</p>
      
      <h4>✅ Servizi offerti</h4>
      <ul>
        <li>Negoziazione assistita per separazioni e divorzi</li>
        <li>Negoziazione assistita per risarcimenti e obbligazioni</li>
        <li>Mediazioni civili in materia di diritti reali, successioni, contratti, locazioni, responsabilità medica e condominio</li>
      </ul>
      
      <h4>💬 Garantiamo:</h4>
      <ul>
        <li>✅ Analisi preliminare della controversia</li>
        <li>✅ Preparazione strategica degli incontri</li>
        <li>✅ Assistenza legale in ogni fase</li>
        <li>✅ Redazione di accordi e verbali con pieno valore legale</li>
      </ul>
      
      <p>Se desideri risolvere una controversia in modo rapido ed efficace evitando lunghi processi, contatta oggi stesso il nostro Studio per una consulenza legale personalizzata.</p>
    `
  },
  {
    slug: "volontaria-giurisdizione",
    imageUrl: "/volontaria.jpg",  
    heroImage: "/volontaria.jpg",
    title: "Volontaria Giurisdizione",
    shortDescription: "Assistenza per amministrazioni di sostegno e procedure di volontaria giurisdizione.",
    features: [
      {
        icon: "UserCheck",
        title: "Amministrazione di Sostegno",
        description: "Tutela con minore limitazione della capacità d'agire"
      },
      {
        icon: "FileText",
        title: "Pareri Legali",
        description: "Pareri 'pro veritate' con valutazione oggettiva"
      },
      {
        icon: "Scale",
        title: "Procedure Giudiziali",
        description: "Assistenza presso il Giudice Tutelare"
      }
    ],
    ctaTitle: "Bisogno di amministrazione di sostegno o pareri legali?",
    ctaDescription: "Il nostro studio ti assisterà nelle procedure di volontaria giurisdizione con competenza e sensibilità, garantendo la tutela delle persone più vulnerabili.",
    ctaPrimaryText: "Consulenza Volontaria Giurisdizione",
    ctaSecondaryText: "Richiedi Parere Legale",
    phoneNumber: "+39 329 336 6330",
    responseTime: "48 ore",
    specialization: "Volontaria Giurisdizione",
    content: `
      <h2>📋 VOLONTARIA GIURISDIZIONE</h2>
      <p>La c.d. volontaria giurisdizione è un tipo di giurisdizione diretta non a risolvere controversie, ma alla gestione di un negozio o di un affare, per la cui conclusione è necessario l'intervento partecipativo di un terzo (il giudice) estraneo ed imparziale che collabora con le parti allo scopo di costituire un determinato rapporto giuridico.</p>
      
      <h4>🔹 Amministrazione di sostegno</h4>
      <p>Lo studio Legale offre l'assistenza in particolare per le procedure di amministrazione di sostegno (Legge 6/2004) che hanno avuto una sempre maggiore diffusione.</p>
      
      <p>L'istituto mira a tutelare, con la minore limitazione possibile della capacità d'agire del beneficiario, le persone che non hanno la piena autonomia nella vita quotidiana e si trovano nell'impossibilità di provvedere ai propri interessi.</p>
      
      <h4>✅ La consulenza legale comprende:</h4>
      <ul>
        <li>La fase di redazione del ricorso per la nomina di amministratore di sostegno</li>
        <li>La formulazione di istanze da indirizzare al Giudice Tutelare</li>
        <li>Predisposizione di revoche e richieste</li>
        <li>Assistenza per redazione di rendicontazione delle attività e spese sostenute dall'ads</li>
      </ul>
      
      <h4>📝 REDAZIONE PARERI LEGALI</h4>
      <p>Lo studio è a disposizione per redigere pareri scritti "pro veritate" previa esposizione orale o per iscritto della problematica del cliente. Il parere legale è fondamentale per spiegare quali possano essere le possibili soluzioni giuridiche del problema prospettato.</p>
      
      <p>La consulenza dell'avvocato considererà anche il punto di vista della controparte, in modo da delineare i possibili esiti di un futuro giudizio. La funzione del parere "pro veritate" è quella di offrire una valutazione oggettiva della controversia.</p>
      
      <p>Il parere sarà fornito previo colloquio preliminare con il cliente su appuntamento.</p>
    `
  },
  {
    slug: "servizi-specializzati",
    imageUrl: "/servizi-specializzati.jpg",
    heroImage: "/servizi-specializzati.jpg",
    title: "Servizi Specializzati",
    shortDescription: "Domiciliazione, sostituzioni di udienza e servizi professionali specializzati.",
    features: [
      {
        icon: "MapPin",
        title: "Presenza Territoriale",
        description: "Domiciliazione presso Tribunali di Trapani, Palermo e Termini Imerese"
      },
      {
        icon: "Users",
        title: "Supporto a Studi Legali",
        description: "Assistenza continuativa per contenziosi seriali e recuperi crediti"
      },
      {
        icon: "Clock",
        title: "Flessibilità Operativa",
        description: "Accordi personalizzati per ogni esigenza professionale"
      }
    ],
    ctaTitle: "Hai bisogno di domiciliazione o sostituzioni in Sicilia?",
    ctaDescription: "Il nostro studio offre servizi specializzati di domiciliazione e assistenza per colleghi avvocati con presenza costante sul territorio siciliano.",
    ctaPrimaryText: "Servizi Professionali Specializzati",
    ctaSecondaryText: "Info Domiciliazione",
    phoneNumber: "+39 329 336 6330",
    responseTime: "Immediata",
    specialization: "Servizi Professionali",
    content: `
      <h2>🔧 SERVIZI SPECIALIZZATI</h2>
      
      <h4>🏛️ SERVIZIO DI DOMICILIAZIONE E SOSTITUZIONI DI UDIENZE</h4>
      <p>Lo studio legale è disponibile per il servizio di domiciliazione sia a studi di grandi dimensioni che necessitano di domicilio e assistenza continuativa per le attività legate a contenziosi seriali (quali recuperi crediti massivi ecc.) sia per il singolo adempimento di accesso in uffici, cancellerie e sostituzioni di singole udienze, previo accordo con lo studio da stabilire di volta in volta.</p>
      
      <p><strong>L'attività di domiciliazione viene svolta esclusivamente presso il Tribunale di Trapani, Palermo e Termini Imerese.</strong></p>
      
      <h4>📋 Servizi inclusi:</h4>
      <ul>
        <li>Domiciliazione per studi legali di grandi dimensioni</li>
        <li>Assistenza continuativa per contenziosi seriali</li>
        <li>Sostituzioni di singole udienze</li>
        <li>Accesso in uffici e cancellerie</li>
        <li>Supporto per recuperi crediti massivi</li>
      </ul>
      
      <h4>🎯 Vantaggi del servizio:</h4>
      <ul>
        <li>Presenza costante sul territorio</li>
        <li>Conoscenza approfondita delle procedure locali</li>
        <li>Flessibilità negli accordi</li>
        <li>Professionalità e puntualità garantite</li>
      </ul>
      
      <p>Il servizio è personalizzabile in base alle esigenze specifiche di ogni studio legale, con modalità e tariffe da concordare caso per caso per garantire la massima convenienza ed efficacia.</p>
    `
  }
]; 