import { class4Quiz } from './class4Quiz';

export const class4Data = {
    id: 'clase-4',
    date: '04 Mar 2026',
    duration: '45 min',
    level: 'B1 → B2',
    overview: {
        title: 'Clase 4: Present Perfect & States',
        objectives: [
            "Diferenciar Past Simple vs Present Perfect",
            "Corregir traducciones literales de State Verbs ('Estamos teniendo')",
            "Aprender vocabulario avanzado logístico (Throughput, Fulfillment)"
        ],
        classSummary: 'Mastering the difference between Past Simple and Present Perfect. Correcting the "Estamos teniendo" translation error and deeply exploring Supply Chain terminology like Fulfillment and Throughput.',
        theoreticalExplanation: 'El mayor problema del alumno hispano de B2/C1 es usar el Present Continuous para describir estados corporativos ("We are having problems" en lugar de "We have problems") y fallar en la conjugación del singular colectivo ("The company HAVE" en vez de "The company HAS"). En esta sesión erradicamos esos fallos y afianzamos el vocabulario de Supply Chain.'
    },
    errors: [
        {
            userError: "Estamos teniendo un poco de problemas en el modo de implantación.",
            correction: "We have some problems during the implementation phase.",
            teacherInsight: "ERROR CRÍTICO: No se puede usar el Present Continuous ('are having') para describir un estado o un hecho en el entorno corporativo. 'Have' indicando posesión o estado ('tenemos problemas') no admite gerundio. Usa siempre Present Simple: 'We have problems'."
        },
        {
            userError: "Our company have worked in supply chain for 15 years.",
            correction: "Our company HAS worked in supply chain for 15 years.",
            teacherInsight: "Cuidado con los sustantivos colectivos. 'Company', aunque engloba a mucha gente, es un ente singular (IT). Por tanto, la conjugación en Present Perfect exige 'HAS', nunca 'have'."
        },
        {
            userError: "We reduce our inventory turnover while maintaining high our stock level.",
            correction: "We reduce our inventory turnover while maintaining high stock levels.",
            teacherInsight: "El orden de los adjetivos en inglés es inquebrantable. 'High' describe al stock, así que va obligado antes del sustantivo: 'high stock levels'. La construcción 'high our' suena a traducción mental directa del español."
        },
        {
            userError: "We are making a little way to send our products.",
            correction: "We are finding new ways to ship our products.",
            teacherInsight: "'Make a way' no es natural para hablar de logística. 'Find a way' (encontrar la manera) o usar verbos directos como 'ship' (enviar/despachar) en lugar del básico 'send', eleva tu discurso automáticamente a C1."
        }
    ],
    vocabulary: [
        {
            word: "Fulfillment Rate",
            phonetic: "/fʊlˈfɪl.mənt reɪt/",
            meaning: "Tasa de cumplimiento de pedidos (porcentaje de pedidos completados sobre el total).",
            example: "If I had been a director, we would have achieved better fulfillment rates.",
            level: "C1",
            activeUpgrade: "En vez de decir 'orders completed', usa 'fulfillment' para sonar como un Operations Manager real."
        },
        {
            word: "Lead Time",
            phonetic: "/liːd taɪm/",
            meaning: "Tiempo de aprovisionamiento/entrega (desde la orden hasta la recepción).",
            example: "If we controlled our stock, we would improve our lead time.",
            level: "B2/C1",
            activeUpgrade: "Mejor que decir 'delivery time' o 'waiting time'."
        },
        {
            word: "Last-Mile Delivery",
            phonetic: "/lɑːst-maɪl dɪˈlɪv.ər.i/",
            meaning: "Entrega de última milla (el eslabón final de logística hasta el cliente).",
            example: "We have optimized our transport routes to get a better last-mile delivery.",
            level: "C1",
            activeUpgrade: "Concepto absoluto del sector retail y e-commerce."
        },
        {
            word: "Throughput",
            phonetic: "/ˈθruː.pʊt/",
            meaning: "Rendimiento, capacidad de procesamiento o flujo del almacén.",
            example: "We need to increase our throughput by 10% this quarter.",
            level: "C1",
            activeUpgrade: "Usar 'throughput' en lugar de 'speed' o 'amount of work' demuestra un dominio técnico elevado."
        },
        {
            word: "Inventory Turnover",
            phonetic: "/ˈɪn.vən.tər.i ˈtɜːnˌəʊ.vər/",
            meaning: "Rotación de inventario (cuántas veces se vende/reemplaza el stock en un periodo).",
            example: "We want to increase our inventory turnover while maintaining safety stock.",
            level: "C1",
            activeUpgrade: "No uses 'stock rotation' si puedes usar el término financiero oficial 'Inventory Turnover'."
        }
    ],
    grammar: [
        {
            title: "Present Continuous vs State Verbs",
            content: "• Regla de los Verbos de Estado: En inglés, los 'state verbs' (verbos que describen posesión, estados mentales, opiniones o emociones) NO pueden ir en forma continua (-ing). El verbo 'to have' cuando significa 'tener/poseer' es un state verb.\n• ¿Por qué nos equivocamos?: En español decimos 'estamos teniendo mucho trabajo' o 'estamos teniendo problemas'. La traducción mental directa (We are having) genera un error muy notorio para un nativo.\n• La Corrección C1: Identifica que es un estado y bájalo al Present Simple: 'We HAVE completely different routines now', 'We HAVE bugs in the software'."
        },
        {
            title: "Past Simple vs Present Perfect",
            content: "• Past Simple (Acción Muerta): Se usa para acciones que empezaron y TERMINARON en un momento específico del pasado. Requiere conectores de tiempo cerrado (Yesterday, In 2020, Last month). Ejemplo: 'Last month, we implemented new delivery routes'.\n• Present Perfect (Conexión con el Hoy): Se usa para acciones pasadas pero que siguen TRAYENDO CONSECUENCIAS al presente, o cuyo margen de tiempo aún no ha acabado (This week, Recently, For 15 years). Ejemplo: 'Our company has worked in supply chain for 15 years'.\n• El error común: A veces se usa Present Perfect con marcas de tiempo cerradas ('We have reduced costs last month' ❌). Si dices 'last month', la acción murió. Obligatorio Past Simple ('We reduced costs last month' ✅)."
        }
    ],
    pronunciation: [
        {
            word: "Fulfillment",
            phonetics: "/fʊlˈfɪl.mənt/",
            description: "Acento recae en la segunda sílaba (ful-FIL-ment). Cuidado con no arrastrar una E final inexistente."
        },
        {
            word: "Throughput",
            phonetics: "/ˈθruː.pʊt/",
            description: "El sonido TH inicial saca la lengua como una z española (/θ/). Luego RU larga y suave."
        }
    ],
    speaking: [
        {
            prompt: "Describe an optimization process you recently led (Focus on avoiding 'are having' and using Past Simple for metrics).",
            duration: 90
        },
        {
            prompt: "Explain your current Fulfillment Rates and Lead Times. (Focus on Supply Chain vocab).",
            duration: 60
        }
    ],
    flashcards: [
        {
            front: "Cumplimiento de pedidos / Tasa de completitud",
            back: "Fulfillment Rate",
            phonetic: "/fʊlˈfɪl.mənt reɪt/",
            example: "We achieved a 98% fulfillment rate.",
            tip: "Obligatorio en logística de almacén B2C y B2B."
        },
        {
            front: "Tiempo de aprovisionamiento (hasta la entrega)",
            back: "Lead Time",
            phonetic: "/liːd taɪm/",
            example: "Our lead time is 48 hours for premium clients.",
            tip: "Término sagrado. No digas 'waiting time'."
        },
        {
            front: "Rendimiento/Flujo del sistema",
            back: "Throughput",
            phonetic: "/ˈθruː.pʊt/",
            example: "The new automation increased our throughput.",
            tip: "Úsalo para describir la capacidad productiva de una instalación."
        },
        {
            front: "Rotación de inventario",
            back: "Inventory Turnover",
            phonetic: "/ˈɪn.vən.tər.i ˈtɜːnˌəʊ.vər/",
            example: "A high inventory turnover means strong sales.",
            tip: "Finance + Logistics crossover term clave."
        },
        {
            front: "Entrega de última milla",
            back: "Last-Mile Delivery",
            phonetic: "/lɑːst-maɪl dɪˈlɪv.ər.i/",
            example: "Last-mile delivery is the most expensive logistics segment.",
            tip: "El concepto estrella del E-commerce actual."
        }
    ],
    quiz: class4Quiz
};
