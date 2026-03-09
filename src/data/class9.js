import { class9Quiz } from './class9Quiz';

export const class9Data = {
    id: 'clase-9',
    date: '08 Mar 2026',
    duration: '45 min',
    level: 'C1',
    overview: {
        title: 'Clase 9: Supply Chain War Rooms & Error Eradication',
        objectives: [
            "Erradicar la interferencia literal del español ('de' en lugar de 'the')",
            "Dominar el Word Order en preguntas indirectas (I don't know where it is)",
            "Aprender vocabulario corporativo avanzado (Supply Chain War Rooms & Military Metaphors)",
            "Distinguir el uso milimétrico de 'Other', 'Another' y 'Others'"
        ],
        classSummary: 'In this session, we engaged deeply with a C1-level text comparing global supply chains to military war rooms. We also focused heavily on eradicating deeply ingrained Spanish interferences in spelling and basic grammar structures like indirect questions.',
        theoreticalExplanation: 'Las metáforas militares ("fog of war", "pre-emptive", "frontline") son el estándar en los niveles directivos de Supply Chain. Además, a este nivel, errores básicos como usar "de" o invertir preguntas indirectas destruyen la percepción de fluidez. Aquí atajamos esos problemas de raíz.'
    },
    errors: [
        {
            userError: "Anticipate de troubles and de better results.",
            correction: "Anticipate THE troubles and THE best results.",
            teacherInsight: "Interferencia directa del español al teclear rápido. En inglés, el artículo SIEMPRE es 'the' (nunca 'de'). Si tu mente quiere escribir 'de', es una señal de que estás pensando en español."
        },
        {
            userError: "I do not know where is he.",
            correction: "I do not know where HE IS.",
            teacherInsight: "Fallo letal de Word Order. Las preguntas indirectas (embedded questions) NUNCA se invierten. El verbo siempre va después del sujeto (Where the shipment IS), igual que en afirmativa."
        },
        {
            userError: "A dashboard that consolidate the data.",
            correction: "A dashboard that CONSOLIDATES the data.",
            teacherInsight: "Subject-Verb Agreement. 'Dashboard' es singular (IT). En el Presente Simple, los verbos de la tercera persona singular DEBEN llevar una 'S' al final."
        },
        {
            userError: "We can use anothers carriers if needed.",
            correction: "We can use OTHER carriers if needed.",
            teacherInsight: "1) 'Another' NUNCA va con plural. 2) 'Other' NUNCA lleva 'S' cuando acompaña a un sustantivo. Por tanto: 'other carriers'."
        },
        {
            userError: "When it is an incident...",
            correction: "When THERE IS an incident...",
            teacherInsight: "Confusión entre describir existencia ('Hay' = There is/are) e identificar algo ('Es' = It is). Para decir 'hay un problema', siempre es 'There is'."
        }
    ],
    vocabulary: [
        {
            word: "To lay bare",
            phonetic: "/leɪd beər/",
            meaning: "Dejar al descubierto, revelar algo que estaba oculto.",
            example: "The Suez Canal incident laid bare the fragility of global logistics.",
            level: "C1",
            activeUpgrade: "Expresión literaria/corporativa para 'revealed' o 'showed'."
        },
        {
            word: "To scramble",
            phonetic: "/ˈskræm.blɪŋ/",
            meaning: "Correr desesperadamente para solucionar algo sin plan claro.",
            example: "Companies were caught off guard and scrambling to reroute shipments.",
            level: "C1",
            activeUpgrade: "Verbo visual perfecto para describir situaciones de colapso logístico."
        },
        {
            word: "Pre-emptive",
            phonetic: "/priˈemp.tɪv/",
            meaning: "Preventivo, actuar antes de que el problema ocurra.",
            example: "A control tower provides a pre-emptive approach to supply chain risks.",
            level: "C1",
            activeUpgrade: "En Mantenimiento o SC, no uses 'preventive', usa 'pre-emptive'."
        },
        {
            word: "To loom",
            phonetic: "/luːmz/",
            meaning: "Cernirse (una amenaza), amenazar con ocurrir pronto.",
            example: "A port strike looms in Rotterdam next week.",
            level: "C1",
            activeUpgrade: "Excelente metáfora visual ('una amenaza asoma en el horizonte')."
        },
        {
            word: "Prohibitively expensive",
            phonetic: "/prəˈhɪb.ɪ.tɪv.li/",
            meaning: "Prohibitivamente caro (tan caro que impide la acción).",
            example: "Building a full control tower is prohibitively expensive for SMEs.",
            level: "C1",
            activeUpgrade: "Mucho más profesional que 'too expensive' o 'very expensive'."
        }
    ],
    grammar: [
        {
            title: "Indirect Questions (Word Order)",
            content: "• Pregunta Directa (Inversión): Where IS the package?\n• Pregunta Indirecta (Sin Inversión): I do not know where the package IS.\n• Regla: Las frases introductorias (Can you tell me..., I wonder..., Do you know...) encienden la alarma -> NO inviertas sujeto y verbo después de la partícula interrogativa."
        },
        {
            title: "Other vs Another vs Others",
            content: "• OTHER + Plural: We need other suppliers.\n• ANOTHER + Singular: We need another supplier (Un otro).\n• OTHERS (Pronombre solo): Some are late, others are on time."
        },
        {
            title: "There is / are vs It is",
            content: "• There is = HAY (Existencia). 'There is a delay in the port'.\n• It is = ES / ESTÁ (Identificación). 'It is a huge delay'."
        }
    ],
    theory: [
        {
            title: "Interferencia Español: 'de' en el teclado",
            priority: "Alta",
            problem: `*1. "Anticipate **de** troubles"*\n*2. "Get **de** better results"*`,
            whyItHappens: `Traducción automática a alta velocidad. En español el artículo cambia, en inglés es invariable pero el cerebro inyecta la palabra castellana 'de'.`,
            rule: `En inglés "de" no es un artículo. El artículo es el 100% de las veces **"THE"**.`,
            trick: `Haz un escáner mental al terminar tu email. Si has escrito "de", cámbialo a "the".`
        },
        {
            title: "Word Order: Preguntas Indirectas",
            priority: "Alta",
            problem: `*"I don\'t know where **is it**"* -> *"where **it is**"*`,
            whyItHappens: `Aplicamos la estructura de pregunta ("is it?") dentro de una afirmación.`,
            rule: `En Embedded Questions, el verbo SIEMPRE va detrás del sujeto ("where the shipment is").`,
            trick: `Si la oración no termina con un signo de interrogación (?), nunca cruces el verbo y el sujeto.`
        },
        {
            title: "Concordancia de la '-S' (3ª Persona)",
            priority: "Media",
            problem: `*"A dashboard that **consolidate**"* -> *"consolidate**s**"*`,
            whyItHappens: `El verbo inglés "consolidate" no cambia fonéticamente, y se olvida que los sujetos como "it, anything, everything, a dashboard" exigen una '-s' final en Presente Simple.`,
            rule: `Si puedes sustituir el sujeto por 'He', 'She' o 'It', el verbo en presente DEBE terminar en 's'.`,
            trick: `¿Es un objeto singular? -> El verbo lleva -s.`
        },
        {
            title: "Ortografía y Españolización",
            priority: "Media",
            problem: `*"estabilish", "mantain", "alternetive", "informated", "generete"*`,
            whyItHappens: `Sergio intenta adivinar el spelling inglés basándose en las vocales de la pronunciación del vocablo español ("est[A]blecer", "mant[E]ner").`,
            rule: `1) El inglés adora agrupar consonantes (esta**bl**ish, no estaBIlish). 2) Los participios solo añaden -ed (inform -> informed) a no ser que el verbo base ya acabe en -ate (generate).`,
            trick: `Visualiza la palabra real: establish, maintain, alternative, generate.`
        },
        {
            title: "Other / Another / Others",
            priority: "Alta",
            problem: `*"anothers carriers"* -> *"other carriers"*`,
            whyItHappens: `Traducción literal de "otros", tratándolo como un adjetivo pluralizado español.`,
            rule: `1) "Another" es literalmente An + Other (UNO otro), jamás puede ir con plurales.\n2) "Other" funciona como adjetivo y en inglés los adjetivos carecen de plural, NO llevan 's' cuando acompañan sustantivos.`,
            trick: `Otro (singular) -> Another carrier. Otros (plural) -> Other carriers. `
        }
    ],
    pronunciation: [
        {
            word: "Prohibitively",
            phonetics: "/prəˈhɪb.ɪ.tɪv.li/",
            description: "No se pronuncia 'proiti-bly'. Es pro-HI-bi-tiv-li."
        },
        {
            word: "Resilience",
            phonetics: "/rɪˈzɪl.i.əns/",
            description: "La segunda i es clave, re-ZIL-i-ens. Aporta peso y fluidez."
        }
    ],
    speaking: [
        {
            prompt: "Describe an incident where you were 'caught off guard' using War Room vocabulary (scrambling, laid bare, held up).",
            duration: 90
        },
        {
            prompt: "Explain why 'Another suppliers' is grammatically incorrect, and teach a colleague the difference between Other, Another, and Others.",
            duration: 90
        }
    ],
    flashcards: [
        {
            front: "Pillado desprevenido",
            back: "Caught off guard",
            phonetic: "/kɔːt ɒf ɡɑːrd/",
            example: "We were caught off guard by the strike.",
            tip: "Expresión indispensable para situaciones de crisis."
        },
        {
            front: "Preventivo",
            back: "Pre-emptive",
            phonetic: "/priˈemp.tɪv/",
            example: "We need a pre-emptive strategy, not a reactive one.",
            tip: "❌ No uses 'preventive'. Suena B1. Usa 'pre-emptive' para SC y Mantenimiento."
        },
        {
            front: "Corriendo desesperadamente (Caos)",
            back: "Scrambling",
            phonetic: "/ˈskræm.blɪŋ/",
            example: "The team was scrambling to reroute the shipments.",
            tip: "Cierra los ojos e imagina gallinas corriendo sin cabeza. Eso es 'scrambling'."
        },
        {
            front: "Dejar al descubierto / Revelar",
            back: "To lay bare",
            phonetic: "/leɪ beər/",
            example: "The crisis laid bare our structural vulnerabilities.",
            tip: "Nivel C1 nativo. Muy literario pero común en artículos directivos."
        },
        {
            front: "Se cierne una huelga",
            back: "A strike looms",
            phonetic: "/ə straɪk luːmz/",
            example: "A massive port strike looms in Northern Europe.",
            tip: "Metáfora visual perfecta de una gran nube negra acercándose."
        }
    ],
    quiz: class9Quiz
};
