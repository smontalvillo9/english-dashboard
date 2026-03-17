import { class16Quiz } from './class16Quiz';

export const class16Data = {
    id: "class-16",
    date: "17 Mar 2026",
    duration: "10 min",
    level: "B2 → C1",

    overview: {
        title: "Pronunciation & Writing Practice",
        objectives: [
            "Dominar los 4 sonidos problemáticos para hispanohablantes: /θ/ /ð/ /v/ /h/",
            "Diferenciar 'than' (comparación) de 'that' (introduce idea) de forma automática",
            "Erradicar 'based in' para conceptos y consolidar 'based on'",
            "Practicar escritura libre integrando linking words + pronunciación"
        ],
        stats: {
            exercises: 2,
            correct: "Mejora notable tras reescritura (Ex.5 → Ex.6)",
            improvement: "Linking words (however, moreover, owing to) correctamente aplicados en producción escrita"
        },
        classSummary: "Mini-sesión de cierre (parte de la sesión doble con Clase 15). Se cubrieron los 4 sonidos más difíciles para hispanohablantes y se practicó escritura libre sobre supply chain. La primera versión tuvo 7 errores (probable, than, this, helps, based in). La reescritura corrigió 5 de 7 pero reveló nuevos errores de spelling (benefict, beacuse) y el eterno sujeto omitido ('it').",
        theoreticalExplanation: "La pronunciación del inglés opera en un sistema fonético completamente distinto al español. Los 4 sonidos /θ/ /ð/ /v/ /h/ simplemente NO EXISTEN en el sistema fonético español estándar. No es que los pronuncies mal, es que tu boca nunca ha tenido que fabricarlos hasta ahora.",
        extraLearningPoint: "El error 'than' vs 'that' es la trampa del español: en castellano ambos son 'que'. Pero en inglés, 'than' SOLO puede escoltarse de una comparación (bigger THAN). 'That' introduce ideas (I think THAT...)."
    },

    errors: [
        {
            title: "Than vs That — El 'Que' Universal Español",
            userError: "'People always think THAN the most important...'",
            correction: "'People always think THAT the most important...'",
            type: "Grammar Core",
            teacherInsight: "En español, 'que' es un multiusos. En inglés se bifurca: 'Than' para comparaciones (bigger than). 'That' para introducir ideas (I think that). ¿Hay comparación? → than. ¿Introduces una idea? → that."
        },
        {
            title: "Based IN vs Based ON",
            userError: "'...is based IN supply chain'",
            correction: "'...is based ON supply chain'",
            type: "Preposition",
            teacherInsight: "Based in = ubicación FÍSICA (The company is based in Madrid). Based on = fundamento/concepto (The decision was based on data). Supply chain es un concepto → based ON."
        },
        {
            title: "Adjetivo vs Adverbio: Probable → Probably",
            userError: "'Supply chain is PROBABLE the most important...'",
            correction: "'Supply chain is PROBABLY the most important...'",
            type: "Grammar Core",
            teacherInsight: "Si la palabra modifica un verbo (is, was, has) → necesita la terminación -ly. En español 'probable' funciona solo. En inglés debes decidir: ¿modifica un nombre? → probable (adjetivo). ¿Modifica un verbo? → probably (adverbio)."
        },
        {
            title: "Sujeto 'IT' Omitido (Recurrente)",
            userError: "'...beacuse is one of the departments...'",
            correction: "'...because IT IS one of the departments...'",
            type: "Grammar Core",
            teacherInsight: "Error #1 de hispanohablantes. En español el sujeto va implícito en el verbo ('es importante'). En inglés es OBLIGATORIO escribir 'IT is', 'THERE is'. No hay excepciones."
        },
        {
            title: "Spelling Persistente",
            userError: "'benefict', 'beacuse', 'posible'",
            correction: "'benefit', 'because', 'possible'",
            type: "Spelling",
            teacherInsight: "Benefit (sin C — piensa en 'bene-FIT', encajar). Because (be-CAUSE). Possible (doble S en inglés). Estas 3 palabras deben escribirse 10 veces hasta que la mano las memorice."
        },
        {
            title: "Owing to + infinitivo",
            userError: "'owing to cut the costs'",
            correction: "'owing to cutting costs' o 'by cutting costs'",
            type: "Structure Rule",
            teacherInsight: "Owing to / due to / despite / in spite of → SIEMPRE requieren noun o gerund (-ing). NUNCA infinitivo. Para expresar método, usa 'by + gerund'."
        }
    ],

    flashcards: [
        { front: "Sonido /θ/ — TH sorda", back: "Lengua entre dientes, SIN voz (solo aire)", phonetics: "/θ/", example: "Think, three, growth, therefore", tip: "Como la 'z' castellana de 'zapato'." },
        { front: "Sonido /ð/ — TH sonora", back: "Lengua entre dientes, CON voz (vibra garganta)", phonetics: "/ð/", example: "This, that, the, they, together", tip: "Di 'd' pero saca la lengua entre los dientes." },
        { front: "Sonido /v/ — V labiodental", back: "Labio inferior toca dientes superiores + vibración", phonetics: "/v/", example: "Very, value, invest, deliver", tip: "Muérdete suavemente el labio inferior." },
        { front: "Sonido /h/ — H aspirada", back: "Soplo suave de aire (empañar un cristal)", phonetics: "/h/", example: "However, hence, hire, help", tip: "NO es la 'j' española (demasiado gutural)." },
        { front: "Than (comparación)", back: "Solo para comparar: bigger THAN, more THAN", phonetics: "/ðæn/", example: "This is more important than speed.", tip: "¿Hay más/menos/mejor/peor? → THAN." },
        { front: "That (introduce idea)", back: "Para decir lo que piensas/dices: I think THAT", phonetics: "/ðæt/", example: "People think that selling is key.", tip: "¿Introduces una idea/opinión? → THAT." }
    ],

    vocabulary: [
        {
            word: "Visibility",
            meaning: "Visibilidad (de la cadena de suministro)",
            example: "Visibility, velocity, and value are the 3 pillars of SC.",
            activeUpgrade: "Palabra clave en supply chain moderno: poder ver en tiempo real dónde está cada producto."
        },
        {
            word: "Velocity",
            meaning: "Velocidad de flujo logístico",
            example: "We need to increase velocity without sacrificing quality.",
            activeUpgrade: "Speed = genérico. Velocity = velocidad con dirección y propósito técnico."
        },
        {
            word: "Profitability",
            meaning: "Rentabilidad",
            example: "Supply chain can directly improve profitability by cutting costs.",
            activeUpgrade: "Mucho más C1 que 'benefit' o 'money'. Habla de margen neto."
        }
    ],

    pronunciation: [
        {
            word: "Think vs Sink",
            phonetics: "/θɪŋk/ vs /sɪŋk/",
            description: "Think = lengua entre dientes + aire. Sink = la S normal sin lengua fuera. Si no pones la lengua entre los dientes, dices 'hundirse' en vez de 'pensar'."
        },
        {
            word: "Very vs Berry",
            phonetics: "/ˈveri/ vs /ˈberi/",
            description: "Very = labio inferior contra dientes superiores + vibración. Berry = dos labios juntos. Sin la V correcta, dices 'fruta' en vez de 'muy'."
        },
        {
            word: "However",
            phonetics: "/haʊˈevər/",
            description: "La H es un soplo suave (empañar cristal). NO digas 'jowever' (J española demasiado gutural) ni omitas la H completamente."
        },
        {
            word: "Although",
            phonetics: "/ɔːlˈðoʊ/",
            description: "Contiene AMBOS sonidos TH: /ð/ sonora al final. La L es silenciosa en algunos acentos. Suena como 'ol-ðou'."
        }
    ],

    grammar: [
        {
            title: "Than vs That: El Bifurcador del 'Que' Español",
            content: "• THAN = SOLO comparaciones: bigger than, more important than, faster than.\\n• THAT = introduce ideas/cláusulas: I think that, he said that, people believe that.\\n• Regla diagnóstica:\\n- ¿Hay comparación (más/menos/mejor/peor)? → THAN\\n- ¿Introduces lo que alguien piensa/dice/cree? → THAT"
        },
        {
            title: "Based IN vs Based ON",
            content: "• Based IN = ubicación física: 'Clarel is based in Barcelona.'\\n• Based ON = fundamento/concepto: 'The strategy is based on data.'\\n• Truco: ¿Puedes poner una ciudad/país después? → IN. ¿Puedes poner una idea/dato? → ON."
        },
        {
            title: "Los 4 Sonidos que No Existen en Español",
            content: "• /θ/ (think): Lengua entre dientes, SIN voz. Como la Z castellana.\\n• /ð/ (this): Lengua entre dientes, CON voz. Como una D con la lengua fuera.\\n• /v/ (very): Labio inferior contra dientes superiores + vibración. NO es la B española.\\n• /h/ (however): Soplo suave de aire. Más suave que la J española.\\n• Excepciones H muda: honest, hour, heir."
        }
    ],

    theory: [
        {
            title: "El 'Que' Bifurcado: Than vs That",
            priority: "Crítica",
            problem: "'People think THAN the most important...' en lugar de THAT.",
            whyItHappens: "En español, 'que' sirve para todo: 'más grande QUE' y 'pienso QUE'. El cerebro hispanohablante tiene un solo cajón para ambos.",
            rule: "Than = comparación SIEMPRE. That = introduce ideas SIEMPRE. Son dos cajones separados.",
            trick: "¿Hay un comparativo (more, less, bigger, faster) justo antes? → THAN. ¿Hay un verbo de pensamiento/comunicación (think, say, believe) justo antes? → THAT."
        },
        {
            title: "Los Sonidos Fantasma del Inglés",
            priority: "Alta",
            problem: "Decir 'I TINK dis is de problem' en vez de 'I THINK this is the problem'.",
            whyItHappens: "Los sonidos /θ/ y /ð/ no existen en el sistema fonético del español estándar. El cerebro los sustituye por lo más parecido: T/D.",
            rule: "Para ambos sonidos TH, la punta de la lengua DEBE estar entre los dientes. La diferencia es si vibras (/ð/ = this) o no vibras (/θ/ = think).",
            trick: "Practica con pares mínimos diarios: think/sink, three/tree, this/dis. 5 minutos al día durante 2 semanas y el sonido se automatiza."
        },
        {
            title: "El Adverbio Invisible: -LY",
            priority: "Media",
            problem: "'is probable the most important' en lugar de 'is PROBABLY'.",
            whyItHappens: "En español, 'probable' funciona sin cambiar forma. En inglés, si modifica un verbo necesita transformarse en adverbio (-ly).",
            rule: "Si la palabra describe CÓMO algo ES (verbo) → adverbio (-ly). Si describe QUÉ es algo (nombre) → adjetivo.",
            trick: "Pregunta: ¿La palabra acompaña a un verbo (is, was, seems)? Si sí → añade -ly. Probable → probably. Immediate → immediately."
        }
    ],

    speaking: [
        {
            prompt: "Read aloud: 'The three things that matter in supply chain are visibility, velocity, and value.' Focus on /θ/ in 'three/things/that' and /v/ in 'visibility/velocity/value'.",
            timeLimit: 60,
            tips: "Lengua entre dientes para TH. Labio inferior contra dientes superiores para V."
        },
        {
            prompt: "Explain why your supply chain role at Clarel matters. Use 'probably', 'based on', and at least one word with /θ/ sound.",
            timeLimit: 120,
            tips: "Example: 'Supply chain is probably the most important function. Our decisions are based on data, and I think through every operational detail.'"
        }
    ],

    quiz: class16Quiz
};
