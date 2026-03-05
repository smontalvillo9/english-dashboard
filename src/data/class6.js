import { class6Quiz } from './class6Quiz';

export const class6Data = {
    id: 'clase-6',
    date: '05 Mar 2026',
    duration: '45 min',
    level: 'B1 → B2',
    overview: {
        title: 'Clase 6: Reported Speech',
        objectives: [
            "Dominar la técnica de 'Backshift' (Retroceder un tiempo verbal al reportar)",
            "Erradicar el error crítico de 'Say' vs 'Tell' (Say me ❌)",
            "Adaptar expresiones de tiempo (tomorrow → the next day)",
            "Eliminar Falsos Amigos letales: Actually vs Currently, Rentability vs Profitability"
        ],
        classSummary: 'In this session, we conquered Reported Speech. The core mechanic is the "Backshift" (stepping one tense back in time). We also ironed out the severe "say vs tell" confusion and eliminated deeply ingrained false friends from business vocabulary.',
        theoreticalExplanation: 'Reported Speech es vital en la oficina (para resumir reuniones o correos de terceros). La regla de oro es el Backshift: lo que se dijo en Presente, se reporta en Pasado ("I am happy" → He said he was happy). Y cuidado con "Tell": SIEMPRE necesita una persona detrás (He told *me*), mientras que "Say" va solo (He said *that*).'
    },
    errors: [
        {
            userError: "He said me that the rentability of the project is low.",
            correction: "He TOLD me that the PROFITABILITY of the project WAS low.",
            teacherInsight: "Tres errores letales: 1) 'Say' nunca lleva pronombre de objeto directo ('said me' ❌). Usa 'Told me'. 2) 'Rentability' no existe en inglés corporativo, es Spanglish. Usa 'Profitability'. 3) Backshift: Si era 'is low', al reportarlo pasa a 'WAS low'."
        },
        {
            userError: "Actually, we are redesigning the routes.",
            correction: "CURRENTLY, we are redesigning the routes.",
            teacherInsight: "El peor Falso Amigo del español. 'Actually' NO significa actualmente; significa 'en realidad' o 'de hecho'. Para decir 'en la actualidad', debes usar imperativamente 'Currently'."
        },
        {
            userError: "The supplier told that they will deliver tomorrow.",
            correction: "The supplier SAID that they WOULD deliver THE NEXT DAY.",
            teacherInsight: "Tres correcciones vitales en Reported Speech: 1) Si no hay persona recibiendo el mensaje, es 'Said', no 'Told'. 2) El 'Will' retrocede a 'Would'. 3) Las expresiones de tiempo también cambian: 'Tomorrow' pasa a ser 'The next day' o 'The following day'."
        },
        {
            userError: "We achieved 100% in-time delivery for the transport.",
            correction: "We achieved 100% ON-TIME delivery for the transport.",
            teacherInsight: "En logística, llegar puntual a la hora acordada es 'On-time'. Llegar 'In time' significa llegar justo a tiempo antes de que ocurra un desastre (como en las películas de desactivar bombas)."
        }
    ],
    vocabulary: [
        {
            word: "Profitability",
            phonetic: "/ˌprɒf.ɪ.təˈbɪl.ə.ti/",
            meaning: "Rentabilidad (capacidad de generar beneficios).",
            example: "We need to focus on profitability improvements this quarter.",
            level: "C1",
            activeUpgrade: "Elimina de tu cabeza la palabra inventada 'rentability'. Si hablas de dinero, es Profitability. Si hablas de exprimir recursos, Cost-efficiency."
        },
        {
            word: "Currently",
            phonetic: "/ˈkʌr.ənt.li/",
            meaning: "Actualmente, en este momento.",
            example: "We are currently redesigning the distribution network.",
            level: "B2",
            activeUpgrade: "Usa esto en tus emails diarios en lugar del falso amigo 'actually'."
        },
        {
            word: "To Renegotiate",
            phonetic: "/ˌriː.nəˈɡəʊ.ʃi.eɪt/",
            meaning: "Renegociar (un contrato, precios).",
            example: "We will have to renegotiate the terms with the supplier.",
            level: "B2/C1",
            activeUpgrade: "Presta mucha atención al spelling. Es 're+negotiate'. Un fallo ortográfico aquí resta poder a tu correo."
        },
        {
            word: "To Claim",
            phonetic: "/kleɪm/",
            meaning: "Afirmar (algo que no está 100% probado), o Reclamar.",
            example: "The vendor claimed that the shipment was already sent.",
            level: "C1",
            activeUpgrade: "Es un verbo de reporte excelente para mostrar diplomacia y distancia. 'Dijo que (afirmó)' sin que tú lo des por hecho."
        },
        {
            word: "Forecasting Model",
            phonetic: "/ˈfɔː.kɑːst.ɪŋ ˈmɒd.əl/",
            meaning: "Modelo de previsión (predicción matemática de ventas o demandas).",
            example: "Our new forecasting model will reduce excess inventory.",
            level: "C1",
            activeUpgrade: "Término sagrado en el Supply Chain. No uses 'future preview'."
        }
    ],
    grammar: [
        {
            title: "Reported Speech: Backshift (La Máquina del Tiempo)",
            content: "• ¿Qué es?: Cuando cuentas lo que otra persona dijo (Reported Speech), tu mente debe retroceder obligatoriamente un paso en el tiempo verbal ('Backshift'). Si escuchaste Presente, hablas en Pasado.\n• Presente a Pasado: 'I AM working' ➔ He said he WAS working. 'We HAVE a problem' ➔ She said they HAD a problem.\n• Futuro a Condicional: 'I WILL call you' ➔ He said he WOULD call me. 'We CAN deliver' ➔ They said they COULD deliver."
        },
        {
            title: "Say vs Tell: El Duelo Final",
            content: "• El Error: 'Say' y 'Tell' significan decir/contar, pero tienen una regla de sintaxis matemática de hierro. Usar 'said me' o 'told that' destroza los oídos del nativo.\n• Say (Sin Persona): El verbo 'Say' dispara directamente a la información. JAMÁS pongas una persona detrás. Correcto: He SAID that the budget was approved ✅. Incorrecto: He said me ❌.\n• Tell (Con Persona Obligatoria): El verbo 'Tell' exige un receptor humano como puente. Correcto: He TOLD ME that the budget was approved ✅. Incorrecto: He told that ❌."
        },
        {
            title: "Las Matemáticas del Tiempo Temporal",
            content: "• El Problema Lógico: Si alguien te dijo ayer 'Mañana voy', tú hoy no puedes decir 'Me dijo que vendría mañana' (hoy ya es mañana). El inglés corporativo es hiperexacto con esto.\n• Transformaciones Obligatorias: \ntomorrow ➔ the next day / the following day.\nyesterday ➔ the day before / the previous day.\nnow ➔ then / at that moment.\nthis ➔ that."
        }
    ],
    pronunciation: [
        {
            word: "Actually / Currently",
            phonetics: "/ˈæk.tʃu.ə.li/ vs /ˈkʌr.ənt.li/",
            description: "Ambas tienen ritmos de 4-3 sílabas con acento fuerte al inicio. Evita el 'ac-TUA-ly' español."
        },
        {
            word: "Profitability",
            phonetics: "/ˌprɒf.ɪ.təˈbɪl.ə.ti/",
            description: "Palabra larga con doble acento. Un apoyo inicial en PROF, y el golpe letal en BIL."
        }
    ],
    speaking: [
        {
            prompt: "Roleplay: The Operations Director said in the morning meeting: 'We will implement a new forecasting model tomorrow'. Report this back to your team.",
            duration: 60
        },
        {
            prompt: "Explain the difference between 'Currently' and 'Actually' to a junior employee.",
            duration: 90
        }
    ],
    flashcards: [
        {
            front: "Rentabilidad",
            back: "Profitability",
            phonetic: "/ˌprɒf.ɪ.təˈbɪl.ə.ti/",
            example: "We aim for long-term profitability.",
            tip: "❌ 'Rentability' no existe en el inglés corporativo real."
        },
        {
            front: "Actualmente / Hoy en día",
            back: "Currently",
            phonetic: "/ˈkʌr.ənt.li/",
            example: "We are currently reviewing the SOPs.",
            tip: "❌ Jamás uses 'actually'. Actually significa 'de hecho/en realidad'."
        },
        {
            front: "Me dijo que...",
            back: "He told me that...",
            phonetic: "/hiː təʊld miː ðæt/",
            example: "He told me that the shipment was delayed.",
            tip: "❌ Destierra de tu vocabulario el letal 'He said me'."
        },
        {
            front: "Afirmar / Asegurar (algo sin probar cien por cien)",
            back: "To claim",
            phonetic: "/tuː kleɪm/",
            example: "The vendor claimed that costs would drop.",
            tip: "Verbo diplomático B2/C1 perfecto para 'Reported Speech' dudoso."
        },
        {
            front: "Entrega puntual (A la hora acordada)",
            back: "On-time delivery",
            phonetic: "/ɒn taɪm dɪˈlɪv.ər.i/",
            example: "Our on-time delivery rate is 99%.",
            tip: "❌ No uses 'In time'. 'In time' es para evitar que explote una bomba de película."
        }
    ],
    quiz: class6Quiz
};
