import { class14Quiz } from './class14Quiz';

export const class14Data = {
    id: "class-14",
    date: "13 Mar 2026",
    duration: "100 min",
    level: "B2 → C1",

    overview: {
        title: "Business Collocations & Presentations",
        objectives: [
            "Inyectar 40 Business Collocations en la memoria activa (streamline, deploy, gather...)",
            "Configurar la estructura C-Level de una presentación (Opening, Signposting, Datos)",
            "Erradicar la epidemia de Spelling visual (marvellous, appreciate, however)",
            "Destruir los False Friends recurrentes de origen español (Actually, Reclaim, Prorrogate)"
        ],
        stats: {
            exercises: 4,
            correct: "70% (21/30) en Collocations Test",
            improvement: "Conciencia gramatical superior frente al '-ing' como sujeto"
        },
        classSummary: "Sesión Doble Titánica. Se repasó y afianzó la gramática de la semana 2 con un desempeño altísimo en The Grammer Quiz (70%). Pero el corazón de la sesión consistió en inyectar 40 Business Collocations: combinaciones de palabras irrompibles ('carry out an analysis', jamás 'do an analysis'). Adicionalmente, se auditaron los 6 errores crónicos arrastrados, focalizados fundamentalmente en Tense Agreement (no conjugar en pasado cuando hay contexto histórico).",
        theoreticalExplanation: "Las palabras en inglés no son lobos solitarios, son matrimonios cerrados llamados Collocations. Cuanto más C-Level es el rol, más ceñido a las collocations es su vocabulario. Si el COO de MiraMira dice 'do a report', un colega anglosajón experimenta 'fricción'. Si dice 'compile a report', la conexión fluye como seda.",
        extraLearningPoint: "La maldición de la 3ª Persona del Presente: Es física. Cuesta pronunciar '-s' al final del verbo porque tu cerebro dice 'Bah, el pronombre (It, the system, the CEO) ya avisa del sujeto'. Falso. La -s final (tracks, delivers) es obligatoria y su omisión te cataloga instantáneamente como nativo hispano."
    },

    errors: [
        {
            title: "Trinidad Tóxica de False Friends",
            userError: "'Reclaiming a cost' / 'Prorrogate a contract' / 'Actually we have problems'",
            correction: "'Requesting a cost' / 'Extend a contract' / 'Currently we have problems'",
            type: "False Friends",
            teacherInsight: "Reclaim (Recuperar tierras/derechos); Prorrogate (No existe); Actually (De hecho/Sorprendentemente). Es fundamental desconfiar de las palabras que lucen latinas, casi siempre es una trampa. Request, Extend y Currently son las dagas ejecutivas."
        },
        {
            title: "Tense Agreement Amnesia (El error rey)",
            userError: "'Before the meeting, we gather data...' / 'Both parties reach an agreement last year'",
            correction: "'Before the meeting, we GATHERED data...' / 'Both parties REACHED an agreement last year'",
            type: "Time Anchoring",
            teacherInsight: "El español permite el presente histórico (Ayer llego y me dicen...). El inglés es implacable: si hay un ancla temporal que tira de la frase hacia atrás (Yesterday, last year, before), el verbo DEBE hundirse con él al pasado."
        },
        {
            title: "Verbo Sujeto sin Corbata (-ING)",
            userError: "'Forecast demand is critical.'",
            correction: "'FORECASTING demand is critical.'",
            type: "Subject Gerund",
            teacherInsight: "En español el infinitivo es todoterreno ('Fumar mata', 'Prever es clave'). En inglés, cuando un verbo empuja la frase como protagonista-sujeto, TIENE que disfrazarse de sustantivo vistiéndose con -ING. 'Managing is hard'."
        },
        {
            title: "Divorcios de Collocations",
            userError: "'Carry on an analysis' / 'Do a decision'",
            correction: "'Carry OUT an analysis' / 'MAKE a decision'",
            type: "Collocation Mix-Up",
            teacherInsight: "Carry on significa continuar caminando (Carry on, son). Carry OUT es ejecutar/realizar. Do es hacer manual. Make es fabricar conceptual. Si fallas la colocation, el cerebro nativo tropieza."
        },
        {
            title: "Spelling Truncado",
            userError: "'apreciate', 'indentified', 'marvelos'",
            correction: "'aPPreciate', 'identified', 'marvellOus'",
            type: "Written C-Level",
            teacherInsight: "Tu imagen digital está sujeta a la doble consonante. Appreciate tira 2 P. Identified carece de la N fantasma latina. Marvellous lleva LL y empalma un OUS. Tatuártelos es innegociable."
        }
    ],

    flashcards: [
        { front: "Implementar / Optimizar Operativas", back: "Streamline operations", phonetics: "/ˈstriːmlaɪn ɒpəˈreɪʃn/", example: "We need to streamline operations to cut waste.", tip: "Mejor que 'improve' o 'expand'." },
        { front: "Realizar un análisis", back: "Carry out an analysis", phonetics: "/ˈkæri aʊt/", example: "We carried out a risk analysis.", tip: "NUNCA digas 'make' o 'do' a risk analysis." },
        { front: "Generar ingresos", back: "Generate revenue", phonetics: "/ˈdʒenəreɪt ˈrevənjuː/", example: "This new route generates €200K per quarter.", tip: "Revenue (Ingresos Brutos) suena mucho más C1 que 'money'." },
        { front: "Cumplir los plazos", back: "Meet the deadline", phonetics: "/miːt/", example: "It is crucial we meet the Q2 deadline.", tip: "El tiempo y las fechas NO se respetan (respect), se CUMPLEN (meet)." },
        { front: "Presentaciones: 'Para poner esto en perspectiva'", back: "To put this into perspective...", phonetics: "/pʊt ðɪs ɪntə pəˈspektɪv/", example: "To put this into perspective, we saved 14%.", tip: "Frase percutora (Signposting) de transición genial antes de dar un KPI." },
        { front: "Presentaciones: 'Me gustaría llamar su atención sobre...'", back: "I'd like to draw your attention to...", phonetics: "/drɔː jɔːr əˈtenʃən/", example: "I'd like to draw your attention to this chart.", tip: "Ultra-formal para dominar la sala con un puntero láser." }
    ],

    vocabulary: [
        {
            word: "Forecast demand",
            meaning: "Pronosticar/Prever la Demanda",
            example: "Forecasting demand accurately is our priority.",
            activeUpgrade: "Forecast asume el rol de verbo en supply chain. 'Predecir' (predict) pertenece a los magos."
        },
        {
            word: "Provide feedback",
            meaning: "Ofrecer retrospectiva (feedback)",
            example: "Managers should regularly provide feedback.",
            activeUpgrade: "El feedback no se 'da' (give), el feedback se 'provee/proporciona' (provide). C1 puro."
        },
        {
            word: "Raise an issue",
            meaning: "Elevar/Plantear un problema",
            example: "I would like to raise an issue regarding quality.",
            activeUpgrade: "No es 'I have a problem'. Levantar un issue transmite frialdad matemática para debatir en una mesa."
        },
        {
            word: "Compile a report",
            meaning: "Elaborar / Empaquetar un informe",
            example: "Could you compile a logistics report this week?",
            activeUpgrade: "Mejor que 'create' o 'write'. Compile denota que has aglutinado diferentes bases de datos."
        }
    ],

    pronunciation: [
        {
            word: "Actually / Currently",
            phonetics: "/ˈæktʃuəli/ - /ˈkʌrəntli/",
            description: "ACTUALLY (ák-chu-li) es 'De hecho'. CURRENTLY (cá-rent-li) es 'Actualmente'. Sepáralos sonoramente para que tu cerebro no los confunda semánticamente."
        },
        {
            word: "Streamline",
            phonetics: "/ˈstriːmlaɪn/",
            description: "Esdrújula frontal (STRÍM-Lain). Pronunciando una i larguísima."
        }
    ],

    grammar: [
        {
            title: "Gerundios Liderando Frases",
            content: "• La Ley: Cuando el verbo protagoniza la frase sin sujeto previo, debe amadrinarse en -ING.\\n• Ejemplos:\\n- ✅ Forecasting demand cuts costs.\\n- ❌ Forecast demand cuts costs.\\n- ✅ Streamlining processes takes time.\\n- ❌ Streamline processes takes time."
        },
        {
            title: "Tense Agreement: El látigo Temporal",
            content: "• Explicación: Los adverbios de tiempo actúan como anclas gravitacionales implacables. Si están, el verbo principal obedece.\\n• Anclas del Pasado: Yesterday, Last (Week/Month), Ago, Before...\\n• Ejemplos:\\n- 'We NEGOTIATED better terms LAST QUARTER'.\\n- 'They IMPLEMENTED a strategy 3 DAYS AGO'."
        },
        {
            title: "Signposting (Los Semáforos C1)",
            content: "• Qué es: Señalar en una presentación hacia dónde llevas a la audiencia. Actúan como bisagras para que el público no se pierda.\\n• Transición a nueva fase: 'Moving on to my second point...'\\n• Relacionar ideas: 'This brings me to...'\\n• Apuntar con el láser: 'As you can see from this chart...'\\n• Resumir brutal: 'To sum up, there are three takeaways...'."
        }
    ],

    theory: [
        {
            title: "El Agujero Negro Lexical: Activo vs Pasivo",
            priority: "Media",
            problem: `"I know 'Compile', but I said 'Create' in the meeting."`,
            whyItHappens: `El estrés en tiempo real desconecta el lóbulo frontal (Memoria C1) y tira de instinto amigdalar (Memoria B1 Refleja).`,
            rule: `La única forma de trasladar vocabulario Pasivo a Activo es usando la palabra forzadamente en un role-play de alta presión un mínimo de 15 veces.`,
            trick: `Collocations Drill. Escribe 'Provide Feedback', 'Compile a Report', 'Streamline Ops' en un Post-it. Prométete que durante la próxima reunión los forzarás dentro de tus frases sí o sí.`
        },
        {
            title: "Omisión de la 3ª Persona (-S)",
            priority: "Alta",
            problem: `"The system track performance."`,
            whyItHappens: `No existe la letra s para diferenciar la 3ª persona en el ADN romano/latino.`,
            rule: `Cualquier entidad singular 'no Yo', 'no Tú', obliga al verbo a terminar en S sibilante. Un gerente C1 no puede equivocarse en esto.`,
            trick: `Ponle a tu cerebro la alergia. Cuando oigas "System" / "Director" / "Machine"... tu boca debe estar ya fabricando el sonido 'Sss' para inyectarlo en la siguiente palabra.`
        },
        {
            title: "False Friend: Reclaim",
            priority: "Crítica",
            problem: `"The supplier is reclaiming more money."`,
            whyItHappens: `Porque en español decimos "Me reclamó 100 euros".`,
            rule: `Reclaim no es pedir. Es Recobrar algo que históricamente fue tuyo (Tierras al mar, derechos civiles a un gobierno, maletas en el aeropuerto en 'Baggage Reclaim').`,
            trick: `Exigir = Demand. Pedir o Solicitar = Request. Reclamar (Queja) = Complain. Jamás uses 'Reclaim' en un email de precios.`
        }
    ],

    speaking: [
        {
            prompt: "Presentation Opening & Signpost: Open a mock presentation about Q1 Logistics Costs, lay out the agenda using 'Signposting', and transition to the first slide.",
            timeLimit: 120,
            tips: "Phrases: Good morning... The purpose is... I will be covering... Let me start by looking at..."
        },
        {
            prompt: "Narrate a sequence of actions from 'last year' using at least 3 Collocations (implement a strategy, cut costs...), making sure to use Past Simple.",
            timeLimit: 90,
            tips: "Last year, we implemented... As a result, we streamlined... and successfully cut..."
        }
    ],

    quiz: class14Quiz
};
