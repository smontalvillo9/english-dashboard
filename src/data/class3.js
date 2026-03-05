import { class3Quiz } from './class3Quiz';

export const class3Data = {
    id: "class-3",
    date: "02 Mar 2026",
    duration: "1h 6min",
    level: "B1+ → B2",

    // 1. Resumen Section
    overview: {
        title: "Business Vocabulary: Supply Chain",
        objectives: [
            "Aprender 30 vocablos de Supply Chain",
            "Dominar Reading Comprehension",
            "Corregir errores de Presente vs Pasado Simple (Crítico)",
            "Business Email Writing formal"
        ],
        stats: {
            exercises: 4,
            correct: "5.6/10",
            improvement: "5/5 en comprensión lectora"
        },
        classSummary: "La comprensión lectora es excelente, el principal problema es la producción productiva oral y escrita. El uso constante del presente simple para hablar de eventos que ya ocurrieron (past simple) lastró mucho la puntuación general.",
        theoreticalExplanation: "En Supply Chain, hablarás constantemente de lo que YA pasó (el camión llegó tarde, la producción se paró, invertimos dinero). Usar presente para este contexto rompe por completo la coherencia del mensaje e impide que pases de nivel B1.",
        extraLearningPoint: "El Spelling (ortografía) en correos es vital: Which (no wich), Percentage (no percentege)."
    },

    // 2. Análisis de Errores
    errors: [
        {
            title: "Presente vs Pasado Simple (CRÍTICO)",
            userError: "'Last week we invest' / 'We increase the profit'",
            correction: "'Last week we INVESTED' / 'We INCREASED the profit'",
            type: "Grammar Core",
            teacherInsight: "¿Por qué se usa uno y no otro? Usar presente para narrativa pasada es el error cognitivo clásico B1. Desconcierta al interlocutor. Memoriza que si la métrica ya cambió (ej. ventas subieron el mes pasado), el verbo DEBE yacer en el pasado: Increased, Decreased, Invested, Reduced."
        },
        {
            title: "Spelling Corporativo: Which y Percentage",
            userError: "'wich' / 'percentege'",
            correction: "'WHICH' / 'PERCENTAGE'",
            type: "Spelling",
            teacherInsight: "Cuidado con los correos ejecutivos. 'Which' ('el cual / que') es de uso diario, nunca 'wich' o 'witch'. 'Percentage' lleva doble 'e', no es 'percentege'."
        },
        {
            title: "False Friends: Actually vs Currently",
            userError: "'Actually we are working with 15 suppliers'",
            correction: "'Currently we are working with 15 suppliers'",
            type: "False Friends",
            teacherInsight: "Este es el False Friend más devastador. Actually huele a 'actualmente' para el hispano, pero ES MENTIRA. Actually = De hecho/En realidad. Para 'actualmente' usamos 'Currently'. Su equivalente falso es 'I am actually uneasy' en lugar de 'I am increasingly concerned'."
        },
        {
            title: "Preposiciones Numéricas: IN vs BY",
            userError: "'Increase in 5%' / 'Reduce in 100€'",
            correction: "'Increase BY 5%' / 'Reduce BY 100€'",
            type: "Prepositions",
            teacherInsight: "Para hablar de márgenes y cantidades exactas de subida o bajada NUNCA usamos IN, usamos BY. Excepcionalmente usamos IN cuando referenciamos al sector entero ('increase in sales' = subida EN las ventas)."
        },
        {
            title: "Falta de Contables Plurales",
            userError: "'Stockout cost us thousands'",
            correction: "'StockoutS cost us thousands'",
            type: "Grammar Core",
            teacherInsight: "Hablamos de eventos múltiples de desabastecimiento, por tanto exigen una 's' plural. Un único 'stockout' requeriría usar el artículo 'A/The stockout'."
        },
        {
            title: "Percentage Points",
            userError: "'OTIF increased by 7 percentage'",
            correction: "'OTIF increased by 7 percentage POINTS'",
            type: "Business Terms",
            teacherInsight: "En presentaciones C-Level internacionales nunca se dice 'by 7 percentage', la colocación obligatoria exige la palabra 'points' a continuación."
        },
        {
            title: "Spelling: Optimization",
            userError: "'Route optimizacion'",
            correction: "'Route optimizaTion'",
            type: "Spelling",
            teacherInsight: "False friend fonético/escrito: optimización en español vs optimization en inglés (T, no C)."
        },
        {
            title: "Pluralizar números (Millions)",
            userError: "'They invest two millions euros'",
            correction: "'They invested two MILLION euros'",
            type: "Grammar Core",
            teacherInsight: "Regla sagrada: Hundred, Thousand, Million y Billion NO llevan 's' plural cuando van precedidos de un número. 'Two million', nunca 'Two millions'."
        },
        {
            title: "TO Preposicional + Gerundio",
            userError: "'We are open to have a meeting'",
            correction: "'We are open to HAVING a meeting'",
            type: "Advanced Grammar",
            teacherInsight: "En la expresión 'open TO', el 'to' actúa como preposición de dirección (hacia algo), no como partícula de infinitivo. Y toda preposición exige que si le sigue un verbo, este sea en gerundio (-ing)."
        },
        {
            title: "Email Writing: Either vs Neither",
            userError: "'...and I am sure for you neither'",
            correction: "'...and I am sure for you EITHER'",
            type: "Grammar Core",
            teacherInsight: "Al final de frases que ya son negativas ('haven't been enough'), para decir 'tampoco' se debe usar 'either'. 'Neither' solo se usa al principio o como respuesta única (Me neither)."
        }
    ],

    // 3. Vocabulario Flashcards (Business)
    flashcards: [
        { front: "Actualmente / Hoy en día", back: "Currently", phonetics: "/ˈkʌrəntli/", example: "Currently we are working with 15 suppliers.", tip: "Por favor, NO USES 'actually'." },
        { front: "Decepcionante / Fallar en proveer", back: "Stockout", phonetics: "/stɒkaʊt/", example: "Stockouts cost us €50,000 last month.", tip: "Rotura de stock o desabastecimiento. La pesadilla logística." },
        { front: "Aprovisionamiento / Compras", back: "Procurement", phonetics: "/prəˈkjʊərmənt/", example: "The procurement team negotiates with vendors.", tip: "Término formal que aúna las compras y adquisiciones de la empresa." },
        { front: "Prevención de paradas", back: "Safety stock", phonetics: "/ˈseɪfti stɒk/", example: "We maintain 2 weeks of safety stock.", tip: "El stock de seguridad ante contingencias." },
        { front: "Cuello de botella", back: "Bottleneck", phonetics: "/ˈbɒtlnek/", example: "We identified three bottlenecks in the workflow.", tip: "La limitación o paso más lento de todo un pipeline operativo." },
        { front: "A tiempo y completo", back: "OTIF", phonetics: "/əʊ tɪ ænd ɛf/", example: "Our OTIF improved from 85% to 92%.", tip: "On-Time In-Full. KPI logístico rey para satisfacción de clientes." }
    ],

    // 4. Vocabulario Detallado
    vocabulary: [
        {
            word: "Lead Time",
            meaning: "Tiempo de aprovisionamiento/espera",
            example: "The lead time for this raw material is 6 weeks.",
            activeUpgrade: "En C1, no decimos 'waiting time'. Se emplea siempre 'lead time' para todo el ciclo desde que pides el material hasta que lo recibes listo."
        },
        {
            word: "Throughput",
            meaning: "Volumen de procesamiento / Rendimiento",
            example: "We increased the warehouse throughput by optimizing routes.",
            activeUpgrade: "Apalanca 'throughput' cuando quieras deslumbrar. Implica cuánta capacidad de carga/gestión tiene tu sistema por hora o día."
        },
        {
            word: "Scalability",
            meaning: "Escalabilidad",
            example: "Our distribution model lacks enough scalability for Black Friday.",
            activeUpgrade: "Un sistema que puede crecer sin romperse operativamente es escalable. 'Expandable' se usa para cosas físicas, 'Scalable' para procesos abstractos y negocios."
        },
        {
            word: "Forecasting",
            meaning: "Previsión de la demanda / Pronóstico",
            example: "Accurate forecasting avoids heavy unnecessary safety stocks.",
            activeUpgrade: "Mejor que 'predicting'. 'Forecasting' es 100% analítico y algorítmico, propio de análisis de Supply Chain y Finanzas."
        },
        {
            word: "Merchandise (False Friend)",
            meaning: "Mercancía / Artículos para vender",
            example: "We move millions in merchandise every week.",
            activeUpgrade: "Asimila que 'merchandise' no tiene absolutamente NADA que ver con la palabra 'Emergency' aunque fonéticamente tu cerebro lo confunda."
        }
    ],

    // 5. Pronunciation
    pronunciation: [
        {
            word: "Warehouses",
            phonetics: "/weərhaʊzɪz/",
            description: "¡Atención! NO se pronuncia 'world houses'. Es WEER-hous-es, marcado el sonido W suave inicial."
        },
        {
            word: "Merchandise",
            phonetics: "/ˈmɜːrtʃəndaɪz/",
            description: "No es Emergency. El primer sonido es MËR (con boca abierta), luego tshan y termina con sonido fuerte de Z (daiz)."
        },
        {
            word: "OTIF",
            phonetics: "Deletreado: O-T-I-F",
            description: "No lo pronuncies como una sola palabra ('motif'). Deletrea las siglas de manera ejecutiva."
        }
    ],

    // 6. Grammar (Deep Dive)
    grammar: [
        {
            title: "Past Simple vs Present Simple",
            content: "• Usos: Usamos el Present Simple para hechos y rutinas actuales. Usamos el Past Simple para TODO LO CULMINADO (acciones finalizadas en un marco temporal concreto: last year, two months ago).\n• ¿Por qué usar uno y no otro?: Informar que las ventas cayeron la semana pasada usando presente ('we reduce costs') destruye la credibilidad. Debe conjugarse imperativamente con Pasado Simple ('we reduced').\n\n• Ejemplos:\n- Correcto (Narrativa Pasada): Last year, we invested €2M and reduced transportation costs.\n- Incorrecto (Colapso narrativo): Last year, we invest €2M and reduce transportation costs."
        },
        {
            title: "Preposiciones: BY, FROM/TO, AT, IN",
            content: "• Estructura: AT (empresa referenciada como punto de anclaje) / IN (ciudad o departamento contenedor) / BY (cantidades subidas o bajadas) / FROM X TO Y (Intervalo numérico cerrado).\n• Usos: Expresar métricas analíticas KPI con exactitud ejecutiva.\n• ¿Por qué usar uno y no otro?: El hispanohablante siempre dice 'reduced in 25' por traducción mental. Sin embargo, en inglés restas 'desde X hasta Y', o restas 'mediante' un volumen (by).\n\n• Ejemplos:\n- Correcto (Volumen): Our revenue grew BY 15% / Costs were reduced BY half.\n- Correcto (Intervalo): Vendors reduced FROM 50 TO 25.\n- Correcto (Geometría laboral): I work AT Clarel IN Madrid."
        },
        {
            title: "Preposición TO + Gerundio (-ING)",
            content: "• Regla Absoluta: Después de un 'TO' cuando actúa como de dirección/preposición (no de infinitivo) el verbo va en GERUNDIO (-ing).\n• Usos: Expresiones formales corporativas clave: 'look forward to', 'be open to', 'be committed to', 'be accustomed to'.\n• ¿Por qué usar uno y no otro?: Porque el 'to' está señalando el destino hacia el que se dirige tu actitud. 'Estoy abierto a (la actividad de) negociar'.\n\n• Ejemplos:\n- Correcto (Gerundio): We are open TO HAVING a meeting.\n- Correcto (Gerundio): I look forward TO SEEING you.\n- Incorrecto (Infinitivo fatal): We are open TO HAVE a meeting."
        },
        {
            title: "Números Multiplicadores (Million / Billion)",
            content: "• Regla Absoluta: Las palabras 'Hundred', 'Thousand', 'Million' y 'Billion' carecen de 's' plural si llevan un número delante.\n• Usos: Reportes financieros y de inversión.\n• ¿Por qué usar uno y no otro?: Porque en inglés actúan como adjetivos ('un billete de cinco euros' -> 'a five euro note'), y los adjetivos nunca se pluralizan.\n\n• Ejemplos:\n- Correcto: They invested two MILLION euros.\n- Incorrecto: They invested two MILLIONS euros."
        }
    ],

    // 7. Speaking Prompts
    speaking: [
        {
            prompt: "Explain 3 KPIs your logistics department tracks using 'increase by' or 'from... to'.",
            timeLimit: 120,
            tips: "Use 'Throughput', 'OTIF' or 'Lead time'. Avoid Present Simple when narrating the past year."
        },
        {
            prompt: "Describe what caused your biggest bottleneck last year and how you mitigated it.",
            timeLimit: 90,
            tips: "MANDATORY: Use Past Simple specifically ('identified', 'invested', 'reduced', 'optimized')."
        }
    ],

    // 8. Quiz
    quiz: class3Quiz
};
