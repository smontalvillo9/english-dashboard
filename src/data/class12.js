import { class12Quiz } from './class12Quiz';

export const class12Data = {
    id: "class-12",
    date: "11 Mar 2026",
    duration: "1h",
    level: "B2 → C1",

    overview: {
        title: "Business Writing & Supplier Negotiation",
        objectives: [
            "Diseñar un email de negociación con proveedores que sea firme pero diplomático",
            "Erradicar los verbos transitivos espurios ('enter in', 'discuss about')",
            "Consolidar la diferencia entre 'Since' y 'For' ante duraciones de tiempo",
            "Refinar el Spelling crónico ('writing', 'immediately', 'commercial')"
        ],
        stats: {
            exercises: 3,
            correct: "4/10 en Email de Negociación",
            improvement: "Warm-up speaking de 5 min fluido y bien estructurado (roleplay COO)"
        },
        classSummary: "Sesión dominada por el Business Writing. Se simuló una escalada con un proveedor chino crítico de MiraMira. El email redactado desveló un tono demasiado pasional y acusatorio, carecía de estructura lógica de resolución y contenía una altísima densidad de errores ortográficos (Spelling) que dinamitan la imagen ejecutiva.",
        theoreticalExplanation: "Negociar en inglés no es quejarse en inglés. El email corporativo anglosajón requiere neutralizar el tono (voz pasiva), plantear el problema con datos duros y proponer 2 acciones contundentes con fecha límite (deadline) clara ('by Friday'). La emoción debe dar paso al pragmatismo logístico.",
        extraLearningPoint: "El verbo 'Enter' es una trampa mortal del español. 'Entrar en la sala' es The Matrix: NO EXITE EL IN. Dices siempre 'Enter the room', porque la preposición de penetración espacial ya viene preinstalada en el verbo."
    },

    errors: [
        {
            title: "El Fantasma de la Preposición: Enter 'in'",
            userError: "'...When I entered in the room'",
            correction: "'...When I ENTERED the room'",
            type: "Prep. Inclusion",
            teacherInsight: "Enter ya significa internamente 'go into'. Añadirle un 'in' es redundante en inglés y te expone como nativo romance. Ocurre lo mismo con 'Discuss (about)' y 'Reach (to)'."
        },
        {
            title: "Traducción Emocional Literal",
            userError: "'...the relationship is downgrading by moments'",
            correction: "'...this recurring issue is DETERIORATING our relationship'",
            type: "Calco Semántico",
            teacherInsight: "'Downgrading by moments' es una traducción dolorosamente literal de 'rebajando por momentos'. Las relaciones corporativas sufren desgaste ('deteriorate'/'become strained'), y un COO enfocado en negocio aparta el foco de 'sentir' hacia 'resolver'."
        },
        {
            title: "Since vs For (La dualidad temporal)",
            userError: "'...since 2 weeks'",
            correction: "'...FOR 2 weeks'",
            type: "Grammar Core",
            teacherInsight: "Si el tiempo se puede medir con un cronómetro o calendario (duración), se usa FOR. Si el tiempo marca una fecha en el calendario desde donde poner el punto de inicio, se usa SINCE."
        },
        {
            title: "Ortografía Destructiva (Spelling)",
            userError: "'writting', 'inmediatly', 'comercial', 'dissaponted'",
            correction: "'writing', 'immediately', 'commercial', 'disappointed'",
            type: "Spelling C-Level",
            teacherInsight: "Un email con el tono perfecto y gramática impecable pierde todo el respeto si fallas la doble consonante. En C1 debes memorizar las trampas visuales. Writing = 1 T. Commercial = 2 M. Immediately = 2 M + Ely."
        },
        {
            title: "Got vs Had (Experiencias vs Obtenciones)",
            userError: "'Wow I've just got the interview...'",
            correction: "'Wow I've just HAD the interview...'",
            type: "Vocabulary Polish",
            teacherInsight: "Get/Got asume que has recibido de manera tangible o conseguido la cita. Had indica que la has VIVIDO y experimentado."
        }
    ],

    flashcards: [
        { front: "Señalar un problema formal", back: "I need to bring to your attention...", phonetics: "/aɪ niːd tu brɪŋ tuː jɔːr əˈtenʃən/", example: "I need to bring to your attention a recurring delay.", tip: "Reemplaza al agresivo 'You have a problem'." },
        { front: "Por la presente solicito reunión", back: "Could we arrange a meeting?", phonetics: "/kʊd wi əˈreɪndʒ ə ˈmiːtɪŋ/", example: "Could we arrange a call this week?", tip: "Educado, formal y no presiona." },
        { front: "Antes que venza el plazo de X", back: "By + [Fecha]", phonetics: "/baɪ/", example: "Could you confirm by Friday?", tip: "Usa 'by' como deadline fijo. 'Until' es continuidad." },
        { front: "Volver a la normalidad/ruta", back: "Get back on track", phonetics: "/ɡet bæk ɒn træk/", example: "We need an action plan to get back on track.", tip: "La expresión faro de los directores logísticos." },
        { front: "Stock de Seguridad", back: "Buffer stock", phonetics: "/ˈbʌfə stɒk/", example: "Ship the units early to rebuild our buffer stock.", tip: "Concepto absoluto en Retail Fashion (MiraMira)." },
        { front: "Causa Principal / Raíz", back: "Root cause", phonetics: "/ruːt kɔːz/", example: "We must analyze the root cause of the delay.", tip: "Punto de partida de cualquier investigación de operaciones." }
    ],

    vocabulary: [
        {
            word: "Partnership",
            meaning: "Alianza o Relación Comercial Profunda",
            example: "Thank you for your continued partnership over these years.",
            activeUpgrade: "Usar 'partnership' en lugar de 'relationship' proyecta un ecosistema win-win y fideliza al proveedor B2B."
        },
        {
            word: "Recurring Issue",
            meaning: "Problema reiterativo / reincidente",
            example: "This recurring issue with the forwarding agent is unacceptable.",
            activeUpgrade: "Cambia el mediocre 'repeating problem'. 'Recurring' suena a vocabulario técnico de proceso corporativo."
        },
        {
            word: "Behind Schedule",
            meaning: "Con retraso respecto a la planificación",
            example: "Six out of eight containers are arriving perfectly behind schedule.",
            activeUpgrade: "Upgrade brutal a 'late'. 'Behind schedule' cuantifica la distancia real frente a un diagrama de Gantt."
        },
        {
            word: "Afford",
            meaning: "Permitirse (tiempo/recursos/riesgos)",
            example: "With 8 new openings, we cannot afford further delays.",
            activeUpgrade: "Afford no es solo dinero. Permite meter presión mostrando que el costo de oportunidad logística va a sangrar el negocio."
        }
    ],

    pronunciation: [
        {
            word: "Immediately",
            phonetics: "/ɪˈmiːdiətli/",
            description: "No pronuncies in-me-dia-ta-men-te. Es /I-MI-diət-li/. Como una T suelta en diət."
        },
        {
            word: "Colmmercial",
            phonetics: "/kəˈmɜːʃəl/",
            description: "No es Co-mer-cial. La primera O casi ni existe (Schwa /ə/) -> /kə/. La terminación es fuerte y fricativa /ʃəl/ (shhh)."
        }
    ],

    grammar: [
        {
            title: "El Arte del Email Bussines de Queja",
            content: "• Formula de Éxito: Greeting -> Positive Acknowledgment -> The Problem (Data) -> Impact -> Proposed Actions (List) -> Deadline -> Constructive Closing.\\n• Tono Activo vs Pasivo: Cambia 'You caused a delay' (Pasional/Acusatorio) a 'A delay has been recorded' (Pragmático/Pasivo).\\n• ¿Por qué?: En negociación oriental (tu proveedor Liu Wei), amenazar y ser frontal dinamita el 'Mianzi' (rostro social). Hay que exponer datos incontrovertibles."
        },
        {
            title: "Preposiciones de Tiempo Ejecutivas",
            content: "• By vs Until vs Within.\\n• By: La frontera infranqueable. P.ej 'Deliver by Friday'. (El viernes a las 23:59 expira).\\n• Until: Acción continuada hasta que algo lo corta. P.ej 'I will wait until Friday' (Esperar, esperar, esperar... Corta).\\n• Within: Burbuja de tiempo. P.ej 'Within 48 hours'."
        },
        {
            title: "Verbos Omnipotentes (Sin preposición)",
            content: "• Regla: Las raíces corporativas directas ignoran la preposición románica.\\n• Ejemplos:\\n- ✅ Enter the market (No enter IN).\\n- ✅ Discuss the budget (No discuss ABOUT).\\n- ✅ Contact the team (No contact WITH).\\n- ✅ Address the problem (No address TO)."
        }
    ],

    theory: [
        {
            title: "Traducción Emocional al Inglés C-Level",
            priority: "Crítica",
            problem: `"I'm disappointed", "The relationship is downgrading", "I can't see a solution by your company."`,
            whyItHappens: `Aplicamos la lógica narrativa latina, que se basa en proyectar frustración sobre el interlocutor para buscar empatía y que éste reaccione.`,
            rule: `El inglés de C-Level expulsa las emociones de la ecuación. Se ataca la SITUACIÓN, jamás a la PERSONA o LA EMPRESA frontalmente.`,
            trick: `Usa frases neutras de 'impacto operativo': "This issue is negatively impacting our rollout." en vez de "You are destroying our plan." El proveedor ya sabe que estás furioso, no hace falta escribirlo.`
        },
        {
            title: "El error silencioso: Enter 'IN' the room",
            priority: "Alta",
            problem: `"When I entered in the room..."`,
            whyItHappens: `Transferencia lingüística directa ("Entré EN la habitación").`,
            rule: `Si cruzas un límite físico 3D, el verbo 'Enter' engulle por sí solo la direccionalidad ("Go into"). Añadir un "in" es un tartamudeo gramatical inglés.`,
            trick: `Para lugares / espacios: Enter. Para acuerdos o cosas legales (Abstractas): Enter INTO (Enter into negotiations/contracts). JAMÁS Enter "IN".`
        },
        {
            title: "Persona Objeto: Cuando el 'That' suena mejor",
            priority: "Media",
            problem: `Dudas entre "The supplier WHO we contacted" vs "The supplier THAT we contacted".`,
            whyItHappens: `La regla escolar clásica nos blindó diciendo "Persona = Who, Cosa = Which/That".`,
            rule: `En las Defining clauses nativas rápidas, si la persona RECIBE tu acción (es decir, le habéis llamado vosotros, que sois "WE"), el THAT fluye mucho mejor porque despersonaliza la conexión o enfatiza la acción tuya.`,
            trick: `Pronombre relativo precediendo a un 'We/I/They/He' directo = ponle THAT/WHOM y sonarás de Harvard.`
        }
    ],

    speaking: [
        {
            prompt: "Roleplay: You are calling Chen regarding the 2 week delay in containers. Formally bring up the problem without sounding aggressive, and propose a buffer stock solution.",
            timeLimit: 120,
            tips: "Greeting nice words -> The problem is... -> I'd like to propose... -> Buffer stock rebuild."
        },
        {
            prompt: "Describe your biggest professional achievement at Clarel using the verb 'enter' properly and 'by' for a date.",
            timeLimit: 90,
            tips: "Before we entered the market... By December 2025, we had achieved..."
        }
    ],

    quiz: class12Quiz
};
