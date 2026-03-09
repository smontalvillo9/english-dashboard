import { class8Quiz } from './class8Quiz';

export const class8Data = {
    id: 'clase-8',
    date: '07 Mar 2026',
    duration: '45 min',
    level: 'C1',
    overview: {
        title: 'Clase 8: Mixed Conditionals & Phrasal Verbs',
        objectives: [
            "Erradicar el error del 'I write this email' (Presente Simple vs Continuo)",
            "Dominar el Subjuntivo 'were' en Condicionales Irreales para todos los sujetos",
            "Identificar la posición correcta de adverbios con verbos modales ('would still be')",
            "Diferenciar Phrasal Verbs reales de simples verbos con preposición de lugar"
        ],
        classSummary: 'In this high-level session, we analyzed a Flexport interview to master advanced Phrasal Verbs. We also practiced complex Business Email writing and unlocked Mixed Conditionals (past actions with present consequences, and vice-versa).',
        theoreticalExplanation: 'Los Mixed Conditionals separan el nivel B2 del C1 real. Entender cuándo una decisión pasada afecta tu presente (Mix A), o cómo tu rasgo de personalidad permanente condicionó una oportunidad perdida (Mix B), añade una profundidad analítica brutal a las reuniones.'
    },
    errors: [
        {
            userError: "I write this mail because...",
            correction: "I AM WRITING this email because...",
            teacherInsight: "Traducción literal del español. Para indicar el propósito de un email siempre se usa Present Continuous porque la acción está ocurriendo en este mismo instante ('Te estoy escribiendo...')."
        },
        {
            userError: "If I was less ambitious...",
            correction: "If I WERE less ambitious...",
            teacherInsight: "El inglés conserva el subjuntivo en bloqueos hipotéticos: 'were' es obligatorio para TODAS las personas (I/He/She/It) en condicionales irreales Tipo 2 y Mix B."
        },
        {
            userError: "The currently situation is tricky.",
            correction: "The CURRENT situation is tricky.",
            teacherInsight: "Confusión clásica entre adjetivo vs adverbio. Si modifica a un sustantivo ('situation'), necesitas el adjetivo sin -ly ('current', no 'currently')."
        },
        {
            userError: "I would have woke up earlier.",
            correction: "I would have WOKEN up earlier.",
            teacherInsight: "Después del auxiliar 'have', es obligatorio usar la tercera columna (Participio Pasado). 'Woke' es el Pasado Simple."
        },
        {
            userError: "The system would be still a mess.",
            correction: "The system would STILL BE a mess.",
            teacherInsight: "La posición de adverbios temporales (still, never, always) es extremadamente estricta en inglés: siempre van colocados ENTRE el modal ('would') y el verbo principal ('be')."
        }
    ],
    vocabulary: [
        {
            word: "To come up with",
            phonetic: "/kʌm ʌp wɪð/",
            meaning: "Inventar, idear, encontrar una solución (Phrasal Verb).",
            example: "She came up with a bold solution to reduce container costs.",
            level: "C1",
            activeUpgrade: "Phrasal verb estrella para demostrar resolución de problemas."
        },
        {
            word: "To hold up",
            phonetic: "/hoʊld ʌp/",
            meaning: "Retrasar, retener (Phrasal Verb).",
            example: "The customs strike held up our shipments for two weeks.",
            level: "B2/C1",
            activeUpgrade: "Excelente alternativa a 'delay' en llamadas operativas."
        },
        {
            word: "Throughput",
            phonetic: "/ˈθruː.pʊt/",
            meaning: "Rendimiento, volumen procesado por unidad de tiempo.",
            example: "We need to increase the warehouse throughput by 20%.",
            level: "C1",
            activeUpgrade: "KPI vital. No digas 'volume of work'."
        },
        {
            word: "Contingency plan",
            phonetic: "/kənˈtɪn.dʒən.si plæn/",
            meaning: "Plan de contingencia, plan B.",
            example: "What is your contingency plan if the port of LA shuts down?",
            level: "B2",
            activeUpgrade: "En Supply Chain no hay 'Plan B', existen los 'Contingency Plans'."
        },
        {
            word: "To lose track of",
            phonetic: "/luːz træk ɒv/",
            meaning: "Perder el rastro de, perder la noción de.",
            example: "Without the TMS, we easily lost track of 3 containers in transit.",
            level: "B2",
            activeUpgrade: "Mucho más orgánico que 'lose control over'."
        }
    ],
    grammar: [
        {
            title: "Mixed Conditionals (A & B)",
            content: "• Mix A (Causa Pasada -> Resultado Presente): If + Past Perfect, WOULD + Infinitivo.\nEj: 'If we had invested (pasado), our OTIF would be higher (hoy)'.\n• Mix B (Rasgo Permanente -> Resultado Pasado): If + Past Simple (WERE), WOULD HAVE + Participio.\nEj: 'If I were more patient (siempre), I would have waited (ayer)'."
        },
        {
            title: "Present Continuous en Emails",
            content: "• Para expresar el propósito central de un correo o una llamada, JAMÁS uses Presente Simple ('I write / I call'). Utiliza SIEMPRE la forma continua ('I am writing to inform you' / 'I am calling regarding...')."
        },
        {
            title: "Phrasal Vbs vs Verbs + Prep",
            content: "• Phrasal Verbs alteran dramáticamente el significado del verbo original (Look into = Investigar). Si el significado es literal ('working in London'), NO es un phrasal verb."
        }
    ],
    theory: [
        {
            title: "Present Simple vs Continuous ('I write' vs 'I am writing')",
            priority: "Alta",
            problem: `*"I write this mail because..."* (Error constante en inicio de emails).`,
            whyItHappens: `El español acepta "Te escribo porque..." (Presente Simple) para indicar el ahora. El inglés prohíbe esto sistemáticamente.`,
            rule: `Cuando indicas la acción que estás realizando en ese preciso instante (como escribir el email que el lector está leyendo), DEBES usar Present Continuous: **"I am writing"**.`,
            trick: `Memoriza en bloque: "I am writing to inform you..." Jamás empieces un email con "I write".`
        },
        {
            title: "Subjuntivo en Condicionales ('Was' vs 'Were')",
            priority: "Alta",
            problem: `*"If I was less ambitious..."*`,
            whyItHappens: `Por inercia, se usa la conjugación normal del pasado continuo ("I was", "She was").`,
            rule: `En las condicionales irreales (Tipo 2 o Mix B), el verbo 'To Be' es SIEMPRE **'were'** para todos los pronombres. Sirve para indicar que es un escenario hipotético, no el pasado real.`,
            trick: `Si la frase empieza por "If" y describe una fantasía o hipótesis que NO es real hoy, tacha el 'was' y pon siempre 'were'.`
        },
        {
            title: "Posición de Adverbios ('Would be still' vs 'Would still be')",
            priority: "Media",
            problem: `*"The system would be still a mess"*`,
            whyItHappens: `El español permite libertad ("sería todavía", "todavía sería"). El inglés no.`,
            rule: `Adverbios como **still**, **never**, **always**, o **already** se colocan sistemáticamente **ENTRE** el auxiliar y el verbo: would + still + be.`,
            trick: `El auxiliar (Would, Have, Is) siempre es el guardaespaldas izquierdo del adverbio.`
        },
        {
            title: "Adjetivo vs Adverbio ('Current' vs 'Currently')",
            priority: "Media",
            problem: `*"The currently situation"* instead of *"The current situation"*.`,
            whyItHappens: `Asociación del falso amigo español "actual/actualmente", olvidando las reglas gramaticales básicas de qué modifica cada uno.`,
            rule: `**Adjetivo (Current)**: Modifica a sustantivos. Va pegado a sustantivos ("Current data").\n**Adverbio (Currently)**: Modifica a verbos. Va con verbos ("Currently working").`,
            trick: `Recuerda: "Actually" NO es "actualmente" (es "De hecho"). "Currently" NO va pegado a sustantivos.`
        },
        {
            title: "Spelling ('Españolización')",
            priority: "Media",
            problem: `*"wich" (which), "recive" (receive), "especifics" (specific)*.`,
            whyItHappens: `Sergio traduce mentalmente la fonética española a letras inglesas, obviando las H intermedias o añadiendo vocales típicas del español (especific).`,
            rule: `Muchísimas palabras en inglés no llevan 'E' inicial (Specific, Strategy, Status). 'Which' es un WH- word. 'Receive' invierte las vocales que siguen a la 'C'.`,
            trick: `Desconfía de cualquier palabra en inglés que empieces por 'ES'. Revisa si verdaderamente lo necesita.`
        }
    ],
    pronunciation: [
        {
            word: "Temporary",
            phonetics: "/ˈtem.pə.rer.i/",
            description: "No se pronuncia te-mpo-ra-li. El sufijo es reri/rari."
        },
        {
            word: "Though / Thought",
            phonetics: "/ðoʊ/ vs /θɔːt/",
            description: "Though rima con GO. Thought rima con BOUGHT/CAUGHT."
        }
    ],
    speaking: [
        {
            prompt: "Roleplay: Explain a mixed conditional scenario where TransMed DID NOT invest in technology 5 years ago, and describe its present consequences using Mix A.",
            duration: 90
        },
        {
            prompt: "Use three Flexport Phrasal Verbs (come up with, hold up, look into) to describe an operational crisis you solved last month.",
            duration: 90
        }
    ],
    flashcards: [
        {
            front: "Si yo fuera tú...",
            back: "If I were you...",
            phonetic: "/ɪf aɪ wɜːr juː/",
            example: "If I were the CEO, I would invest in TMS.",
            tip: "❌ No uses 'was' en hipotéticas. 'Were' para todos (I/he/she/it)."
        },
        {
            front: "Le escribo este correo para...",
            back: "I am writing this email to...",
            phonetic: "/aɪ æm ˈraɪ.tɪŋ..tuː/",
            example: "I am writing to inform you of the delay.",
            tip: "❌ Jamás 'I write'. La acción está ocurriendo AHORA."
        },
        {
            front: "Idear, inventar (una solución)",
            back: "To come up with",
            phonetic: "/tuː kʌm ʌp wɪð/",
            example: "We came up with a contingency plan.",
            tip: "Es un Phrasal Verb puro. Cambia drásticamente del verbo 'Come'."
        },
        {
            front: "Retener / Retrasar (Operaciones)",
            back: "To hold up",
            phonetic: "/tuː hoʊld ʌp/",
            example: "Customs held up the container.",
            tip: "Alternativa superior C1 a 'delay'."
        },
        {
            front: "Específico (Ortografía)",
            back: "Specific",
            phonetic: "/spəˈsɪf.ɪk/",
            example: "We need specific KPIs.",
            tip: "❌ No le añadas la 'E' española ('especific')."
        }
    ],
    quiz: class8Quiz
};
