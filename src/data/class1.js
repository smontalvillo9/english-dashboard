import { class1Quiz } from './class1Quiz';

export const class1Data = {
    id: "class-1",
    date: "28 Feb 2026",
    duration: "35 min",
    level: "B1 → B2",

    // 1. Resumen Section
    overview: {
        title: "Articles, Quantifiers & Word Order",
        objectives: [
            "Master quantifiers (a couple of, a few, several)",
            "Understand 'We are' vs 'There are'",
            "Improve word order (football matches vs matches of football)"
        ],
        stats: {
            exercises: 3,
            correct: "83%",
            improvement: "Significant"
        },
        teacherNote: "Sergio, gran trabajo en el test. Tu nivel subió de B1 a B2 en los 3 audios a medida que asimilaste la estructura. Recuerda que en profesional (logística), la precisión da imagen de liderazgo.",
        classSummary: "Revisión de cuantificadores comunes en reuniones de operaciones. Corrección de traducciones literales de cantidad ('we are' vs 'there are') e instrucción sobre el orden de sustantivos modicadores para evitar el uso excesivo de 'of'.",
        theoreticalExplanation: "Los hablantes nativos de español calcan la estructura 'somos X personas'. En inglés, debes separar la identidad (We are a great team) de la existencia/cantidad (There are 30 employees). Asimismo, la estructura 'Noun + Noun' (e.g., 'sales reports') agiliza la comunicación frente a 'reports of sales', denotando nivel B2/C1.",
        extraLearningPoint: {
            title: "Bonus Tip: El uso de 'Lately' vs 'Recently'",
            content: "Aunque no salió en clase, en logística se confunden mucho. Usa 'recently' para acciones puntuales terminadas (I recently signed the contract) y 'lately' para tendencias o estados continuos (Deliveries have been delayed lately)."
        }
    },

    // 2. Errores Section
    errors: [
        {
            type: "Student Error",
            wrong: "We are 30 employees",
            correct: "There are 30 employees / We have 30 employees",
            explanation: "En inglés no se usa 'we are' para cantidades de personas, solo para identidad (we are professionals).",
            teacherTheory: "Los españoles tendemos a calcar el 'somos 30' (nosotros somos = we are), pero en inglés necesitas el existencial 'Hay 30' (There are)."
        },
        {
            type: "Student Error",
            wrong: "matches of football",
            correct: "football matches",
            explanation: "Cuando un sustantivo modifica a otro (tipo), van juntos sin 'of'.",
            teacherTheory: "Como Supply Chain Director, jamás digas 'reports of sales' o 'meetings of work'. Es 'sales reports' y 'work meetings'."
        },
        {
            type: "Student Error",
            wrong: "In my next steps, like a supply chain director",
            correct: "In my next steps, AS a supply chain director",
            explanation: "LIKE es para comparar ('I work like a machine'). AS es para función/rol.",
            teacherTheory: "Crucial no equivocarte en entrevistas. Siempre que hables de tu puesto, USA AS."
        },
        {
            type: "Teacher Addition",
            wrong: "I want to apply like a manager",
            correct: "I want to apply as a manager",
            explanation: "Error similar creado para ti. Postular a un puesto es un rol, no una comparación.",
            teacherTheory: "Si quieres sonar como un nativo seguro, usa AS para posiciones, y 'LIKE' solo para poner ejemplos de empresas (e.g. 'companies like Amazon')."
        },
        {
            type: "Teacher Addition",
            wrong: "A hundred of trucks",
            correct: "A hundred trucks",
            explanation: "Números exactos no llevan 'of'.",
            teacherTheory: "Solo usamos 'of' cuando es aproximado y plural (hundreds of trucks)."
        }
    ],

    // 3. Vocabulario Section (Families / Context / Upgrade)
    vocabulary: [
        {
            word: "OTIF",
            phonetic: "/oʊ-tiː-aɪ-ɛf/",
            meaning: "On-Time In-Full",
            example: "Our OTIF improved from 85% to 92%",
            level: "B2",
            type: "Good Usage"
        },
        {
            word: "several",
            phonetic: "/ˈsev.ər.əl/",
            meaning: "Varios (5-10+)",
            example: "We have faced several supply chain disruptions this year.",
            level: "B2",
            type: "Good Usage"
        },
        {
            word: "approximately",
            phonetic: "/əˈprɒk.sɪ.mət.li/",
            meaning: "Aproximadamente (Formal)",
            example: "We have approximately 30 employees in the warehouse.",
            level: "B2",
            type: "Needs Practice",
            upgrade: "Usa esto en vez de 'around' o 'about' en contextos profesionales."
        },
        {
            word: "streamline",
            phonetic: "/ˈstriːm.laɪn/",
            meaning: "Optimizar, simplificar procesos",
            example: "I streamlined the delivery process to reduce costs.",
            level: "C1",
            type: "New Teacher Keyword",
            upgrade: "Mejor que 'improve' o 'make better'. Demuestra liderazgo C1."
        },
        {
            word: "leverage",
            phonetic: "/ˈlev.ər.ɪdʒ/",
            meaning: "Aprovechar recursos/ventajas",
            example: "I leveraged my logistics experience to optimize routes.",
            level: "C1",
            type: "New Teacher Keyword",
            upgrade: "Palabra TOP para entrevistas. Cambia 'use my experience' por 'leverage my experience'."
        },
        {
            word: "mitigate",
            phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
            meaning: "Mitigar, reducir la gravedad (riesgos)",
            example: "We need a backup supplier to mitigate the risk of stockouts.",
            level: "C1",
            type: "New Teacher Keyword",
            upgrade: "Sustituye 'reduce' o 'make less' cuando hables de problemas o riesgos."
        },
        {
            word: "oversee",
            phonetic: "/ˌəʊ.vəˈsiː/",
            meaning: "Supervisar, estar a cargo de",
            example: "As Supply Chain Director, I oversee all distribution centers.",
            level: "B2+",
            type: "New Teacher Keyword",
            upgrade: "En lugar de decir 'I control' o 'I am the boss of', di 'I oversee'."
        },
        {
            word: "fluctuate",
            phonetic: "/ˈflʌk.tʃu.eɪt/",
            meaning: "Fluctuar, variar irregularmente",
            example: "Fuel prices fluctuate daily, making forecasting difficult.",
            level: "C1",
            type: "New Teacher Keyword",
            upgrade: "Úsala en vez de 'go up and down' o 'change a lot' para sonar como un ejecutivo."
        }
    ],

    // 4. Pronunciación Section
    pronunciation: [
        {
            word: "logistics",
            wrongSound: "lo-gis-TICS / Paralympics",
            correctSound: "lo-JIS-tiks",
            theory: "El acento tónico (stress) va en la segunda sílaba. Además, la G suena como 'J' fuerte, no como la G española."
        },
        {
            word: "statistics",
            wrongSound: "es-ta-tis-tics",
            correctSound: "stə-TIS-tiks",
            theory: "Igual que logistics, el acento va en TIS. Cuidado con añadir una 'E' antes de la S (defecto español)."
        }
    ],

    // 5. Gramática Section
    grammar: [
        {
            title: "Quantifiers: Escala y Formalidad (a few vs several vs dozens)",
            content: "Los cuantificadores marcan la precisión de tu mensaje. En logística, la precisión es clave.\n\n• Usos: 'A couple of' (aprox. 2), 'A few' (3-5), 'Several' (5-10), 'Dozens of' (docenas, 24+).\n• ¿Por qué usar uno y no otro?: 'A few' suena a escasez aceptable, 'several' denota un número notable pero contable. Nunca uses 'a lot of' en informes formales; usa 'numerous' o 'several'.\n• Regla de ORO: Sin 'OF' para números exactos (a hundred trucks). Con 'OF' para aproximados (hundreds of trucks).\n\n• Ejemplos:\n- Correcto: We have several containers delayed at the port.\n- Incorrecto: A hundred of trucks are waiting."
        },
        {
            title: "We are vs There are (Existential vs Identity)",
            content: "Este es el error de traducción literal más común desde el español.\n\n• Usos: 'There are' indica existencia o cantidad en un lugar. 'We are' indica identidad corporativa o adjetivos.\n• ¿Por qué usar uno y no otro?: Si dices 'We are 30 employees', un nativo procesa 'Nuestra identidad es el número 30'. 'There are' sitúa el sujeto gramatical fuera de vosotros mismos.\n\n• Ejemplos:\n- Correcto: There are 30 employees in this facility. / We have 30 employees.\n- Incorrecto: We are 30 employees in this facility."
        },
        {
            title: "Noun Adjuncts: El orden correcto en el Business English",
            content: "La omisión de la preposición 'of' mediante el uso de sustantivos como adjetivos.\n\n• Usos: Unir dos sustantivos donde el primero modifica cualitativamente al segundo (ej. Supply Chain + Director).\n• ¿Por qué usar uno y no otro?: 'Director of Supply Chain' o 'meetings of work' son gramaticalmente correctos pero suenan poco naturales y pesados (estilo francés/español). Usar el primer sustantivo como adjetivo (Supply Chain Director, work meetings) agiliza la comunicación ejecutiva.\n\n• Ejemplos:\n- Correcto: I need the sales reports by tomorrow.\n- Incorrecto: I need the reports of sales by tomorrow."
        },
        {
            title: "Preposiciones de Rol: AS vs LIKE",
            content: "Derivado del error en clase: 'In my next steps, like a supply chain director'.\n\n• Usos: 'As' se usa para roles reales, funciones o trabajos. 'Like' se usa para similitudes o comparaciones.\n• ¿Por qué usar uno y no otro?: Si dices 'I work like a director', significa que trabajas MUCHO (esfuerzo similar a un director) pero NO eres el director. Si dices 'I work as a director', ese es tu cargo real en la nómina.\n\n• Ejemplos:\n- Correcto: As the Head of Logistics, I made the decision.\n- Incorrecto: Like the Head of Logistics, I made the decision."
        }
    ],

    // 6. Speaking Prompts
    speaking: [
        {
            prompt: "Describe your team size and structure using 'There are' and quantifiers.",
            timeLimit: 60,
            tips: "Use 'approximately', 'several', 'a couple of'. Avoid 'We are 30 people'."
        },
        {
            prompt: "Talk about a process you have 'streamlined' or want to streamline.",
            timeLimit: 90,
            tips: "Use the new C1 verbs: leverage, streamline, foster."
        }
    ],

    // 7. Quiz
    quiz: class1Quiz
};
