import { class11Quiz } from './class11Quiz';

export const class11Data = {
    id: "class-11",
    date: "10 Mar 2026",
    duration: "30 min",
    level: "B2 → C1",

    overview: {
        title: "Relative Clauses (Defining vs Non-defining)",
        objectives: [
            "Diferenciar Defining (info vital) y Non-defining (info extra)",
            "Aprender la regla de oro: NUNCA usar 'that' con comas",
            "Manejar el pronombre de posesión 'whose' frente a 'which'",
            "Sanear el error eterno de la ausencia de sujeto ('it is')"
        ],
        stats: {
            exercises: 2,
            correct: "50% (Exercise A - Combine Sentences)",
            improvement: "Uso 100% nato en redacción libre (3/3 relative clauses correctas)"
        },
        classSummary: "Sesión enfocada en añadir la complejidad del C1 a las frases simples. En formato test dirigido hubo fallos mecánicos de concordancia plural o cruce de 'whose'/'which'. Paradójicamente, en el bloque de producción escrita libre Sergio enarboló 3 relative clauses perfectas sobre Clarel.",
        theoreticalExplanation: "Las Relative Clauses son las 'tuercas' que unen dos oraciones separadas para construir discursos hilados. El C1 depende de distinguir si esa tuerca es vital (Defining, sin comas) para entender de qué sujeto hablamos, o si es solo pintura decorativa (Non-defining, con comas).",
        extraLearningPoint: "Presta máxima atención a la concordancia. Un pronombre (which, who) hereda la pluralidad de su dueño: 'the offices, which ARE', 'the manager, who IS'."
    },

    errors: [
        {
            title: "Concordancia Sujeto-Verbo robada",
            userError: "'...an analyst who HAVE a background'",
            correction: "'...an analyst who HAS a background'",
            type: "Grammar Core",
            teacherInsight: "El pronombre 'who' es un fantasma, no tiene número. Adquiere el número literamente de la palabra que toca a su izquierda. Analyst es Singular -> HAS. Analysts es Plural -> HAVE."
        },
        {
            title: "When vs Which para objetos/acciones",
            userError: "'The meeting... WHEN we took place'",
            correction: "'The meeting... WHICH took place'",
            type: "Vocabulary / Semantic",
            teacherInsight: "'When' es rigurosamente temporal. Una reunión no es un momento de tiempo, es un ente/entidad (Cosa). Para referirte al evento que ocurrió usas 'Which'."
        },
        {
            title: "Whose vs Which (Posesión vs Verbo)",
            userError: "'Clarel whose belongs to DIA'",
            correction: "'Clarel, WHICH belongs to DIA'",
            type: "Syntax Breakdown",
            teacherInsight: "Whose exige por ley ir emparejado a un sustantivo al que sangrar (su dueño). 'Whose team, whose computer'. 'Belongs' es un verbo. Por ende debes usar el referenciador estándar 'which'."
        },
        {
            title: "Interferencia del demostrativo These/Those",
            userError: "'who were with me all THESE years (en Alcampo, época pasada)'",
            correction: "'who had been with me all THOSE years'",
            type: "Temporal Distance",
            teacherInsight: "En inglés corporativo, la distancia marca el tono. 'These' implica vigencia, que siguen estando contigo. 'Those' asume una puerta que ha sido cerrada en el continuo espaciotiempo de tu vida."
        },
        {
            title: "La tiranía del sujeto español",
            userError: "'because is probably...'",
            correction: "'because IT IS probably...'",
            type: "Grammar Core",
            teacherInsight: "El mayor enemigo del hispanohablante. TODO verbo necesita su sujeto impreso en papel o sonido. No existe 'is' a secas, siempre es 'IT is', 'HE is', 'SHE is'. FOSILIZA ESTO."
        }
    ],

    flashcards: [
        { front: "Quien/Quienes (Personas)", back: "Who", phonetics: "/huː/", example: "The manager who hired me.", tip: "Si es Defining, puedes cambiarlo por THAT." },
        { front: "Que / El Cual (Cosas)", back: "Which", phonetics: "/wɪtʃ/", example: "The TMS, which cost €2M, is ready.", tip: "En Non-defining (con comas) PROHIBIDO usar THAT." },
        { front: "Cuyo / Cuya (Posesión)", back: "Whose", phonetics: "/huːz/", example: "The analyst whose report won.", tip: "Exige un sustantivo detrás inmediatamente." },
        { front: "Donde (Lugares)", back: "Where", phonetics: "/weər/", example: "The warehouse where we work.", tip: "Sustituto sofisticado de 'in which'." },
        { front: "Cuando (Tiempos)", back: "When", phonetics: "/wen/", example: "The year when I joined Clarel.", tip: "Solo ataca marcos temporales explícitos." }
    ],

    vocabulary: [
        {
            word: "Defining Clause",
            meaning: "Cláusula Específicativa",
            example: "The supplier who delivers on time is key.",
            activeUpgrade: "Sin ella destruirías el significado de la frase porque no sabrías de qué proveedor hablo. No lleva comas."
        },
        {
            word: "Non-defining Clause",
            meaning: "Cláusula Explicativa",
            example: "Our CEO, who joined in 2020, is great.",
            activeUpgrade: "Abre paréntesis, inyecta info, cierra paréntesis con comas. NUNCA tolera ser acompañada por la palabra 'that'."
        },
        {
            word: "Omission of Pronoun",
            meaning: "Borrar el pronombre en inglés ágil",
            example: "The report (that) you wrote.",
            activeUpgrade: "Músculo de C-Level nativo. Solo aplicable si el pronombre es OBJETO directo (tú haces la acción a él) en una Defining clause."
        }
    ],

    pronunciation: [
        {
            word: "Whose vs Who's",
            phonetics: "/huːz/",
            description: "Suenan absolutamente IGUAL al oído. El cerebro debe discernir por sintaxis: 'whose + sustantivo' o 'who's + participio/adjetivo'."
        },
        {
            word: "These vs Those",
            phonetics: "/ðiːz/ vs /ðəʊz/",
            description: "These alarga mucho la letra 'i' y zumba al final. Those dibuja el fonema O cerrado británico mezclado con Z de abeja final."
        }
    ],

    grammar: [
        {
            title: "Regla del 'THAT' en Relative Clauses",
            content: "• DEFINING: Puedes usar 'that' libremente para referirte a personas y cosas, sin problema. (The team that handles...)\\n• NON-DEFINING: Terminantemente PROHIBIDO. Si tu frase necesita comas, debes emplear obligatoriamente 'which' para cosas o 'who' para personas.\\n• Ejemplos:\\n- ✅ Correcto: The TMS, which we installed, is ready.\\n- ❌ Mortal: The TMS, that we installed, is ready."
        },
        {
            title: "Whose (Posesión Absoluta)",
            content: "• Formulación: WHOSE implica propiedad inalienable en la frase que va a continuación.\\n• Falla común hispana: Poner un verbo después de whose porque traducimos mentalmente la frase de forma lineal.\\n• Ejemplos:\\n- ✅ Correcto: The manager whose team (sustantivo) won...\\n- ❌ Incorrecto: Clarel whose belongs (verbo)..."
        },
        {
            title: "Omisión del Pronombre Relativo",
            content: "• Regla nativa: El inglés ahorra sílabas eliminando el WHO o WHICH cuando ocupan el puesto de Objeto Directo.\\n• Limitación: Solo para Defining clauses. Jamás lo borres en un paréntesis explicativo (comas).\\n• Ejemplos:\\n- ✅ Se puede borrar: The report [that] I wrote. (Objeto)\\n- ❌ No se puede: The manager [who] hired me. (Sujeto, porque el manager hizo la acción de contratarte)."
        }
    ],

    theory: [
        {
            title: "Concordancia de Plural/Singular tras Pronombres Fantasma",
            priority: "Alta",
            problem: `"an analyst who HAVE" en lugar de "who HAS". Las oficinas "which IS" en lugar de "which ARE".`,
            whyItHappens: `Al interponer la palabra WHO o WHICH, se pierde el rastro visual de si la entidad orignal era 1 o 10.`,
            rule: `Tapa mentalmente el WHO/WHICH. Y lee la frase. ¿"An analyst have"? No, "An analyst has". Por lo tanto, inserta de vuelta: "An analyst who has".`,
            trick: `El relativo es solo un espejo que refleja lo que tiene detrás. Si tu jefe (singular) se mira, el reflejo es Singular. Si 20 directores se miran, es Plural.`
        },
        {
            title: "Sujeto Elíptico español vs 'It' inglés",
            priority: "Crítica",
            problem: `Fosilización en speech oral: "Because is the best option."`,
            whyItHappens: `La raíz latina pro-drop del español, capaz de aglutinar el sujeto en la desinencia del verbo (Es, Llueve).`,
            rule: `Axioma de hormigón: NO PUEDES PONER UN VERBO SIN SU GUARDAESPALDAS (it/he/she). Es estructuralmente repulsivo para el C1.`,
            trick: `El 'it' no se traduce al español, asume que es una pegatina térmica que el inglés le pone obligatoriamente a acciones inanimadas ("IT rains").`
        },
        {
            title: "El caos de preposiciones 'For which / To whom'",
            priority: "Media",
            problem: `No saber qué hacer con preposiciones largas al escribir en formal de negocios.`,
            whyItHappens: `El español obliga a montar la preposición delante ("para la cual"). El inglés oral escupe la preposición al final absoluto ("that I work for").`,
            rule: `Oral informal: The company that I work FOR. / Escrito formal C1: The company FOR WHICH I work.`,
            trick: `Si en un email B2->C1 quieres impresionar, mueve tu 'for', 'to', 'with' por delante del Which/Whom. Automáticamente enmarcas un tono C-Level.`
        }
    ],

    speaking: [
        {
            prompt: "Describe your current company (Clarel) using one Non-defining clause (with which) and one Defining clause (with where or who).",
            timeLimit: 120,
            tips: "Ej: Clarel, WHICH has 1000+ stores, is a company WHERE I manage the entire supply chain."
        },
        {
            prompt: "Explain a problem that a specific logistics carrier generated last week using Relative Clauses.",
            timeLimit: 90,
            tips: "Use: The carrier WHO... The pallets WHICH... The day WHEN... Make sure the verb matches (who has/have)."
        }
    ],

    quiz: class11Quiz
};
