import { class5Quiz } from './class5Quiz';

export const class5Data = {
    id: 'clase-5',
    date: '04 Mar 2026',
    duration: '45 min',
    level: 'B1 → B2',
    overview: {
        title: 'Clase 5: Passive Voice & False Friends',
        objectives: [
            "Dominar la Voz Pasiva para comunicaciones corporativas formales",
            "Entender la diferencia entre 'being' y 'been'",
            "Eliminar falsos amigos graves (Implant vs Implement)",
            "Aplicar preposiciones y conectores correctos con Pasiva"
        ],
        classSummary: 'Mastering the Passive Voice for formal corporate environments, learning to differentiate "being" vs "been", and eradicating severe false friends like "implant" (instead of implement) or "troubles".',
        theoreticalExplanation: 'En el entorno corporativo y de Supply Chain valoramos la objetividad. La Voz Pasiva es crítica porque frecuentemente nos importa más QUÉ ha ocurrido ("Costs were reduced") que QUIÉN lo hizo. Aprender a dominar las fórmulas del Passive Voice y eliminar las traducciones directas ("implantar" ➔ "implant" ❌) te catapulta al nivel C1.'
    },
    errors: [
        {
            userError: "We are implanting a new SGA and we are having troubles to implant it.",
            correction: "We are implementing a new SGA and we are having trouble implementing it.",
            teacherInsight: "Falso amigo CRÍTICO. 'Implant' es médico (un implante dental o mamario). En negocios, para poner en marcha un sistema o software SIEMPRE usamos 'implement'. Además, 'trouble' (problema) es incontable en este contexto, NUNCA lleva 's' final."
        },
        {
            userError: "It is going to be harder as we are thinking about.",
            correction: "It is going to be harder THAN we THOUGHT.",
            teacherInsight: "Dos errores en bloque: 1) Los comparativos en inglés usan siempre 'THAN', nunca 'as' (traducción literal de 'más duro QUE'). 2) Hablamos de una expectativa pasada que choca con la realidad presente, así que exige 'thought' (pasado simple), no 'are thinking about'."
        },
        {
            userError: "We need to get this objectives when all it was quiet.",
            correction: "We need to achieve THESE objectives when EVERYTHING was quiet.",
            teacherInsight: "'This' es singular (este), 'Objectives' es plural. Obligatorio usar 'these'. Por otro lado, 'all it was' es Spanglish puro. 'Todo estaba tranquilo' se traduce como 'Everything was quiet'. Por último, 'achieve' asienta un perfil directivo mucho mejor que 'get'."
        },
        {
            userError: "Transport costs was reduced by 2%, by our team.",
            correction: "Transport costs WERE reduced by 2% by our team.",
            teacherInsight: "Subject-Verb Agreement en Pasiva. Si el sujeto 'Costs' está en plural, el verbo To Be tiene que concordar en plural ('were', no 'was')."
        },
        {
            userError: "A new routing system have been implemented by ours.",
            correction: "A new routing system HAS been implemented by US.",
            teacherInsight: "Dos errores. 'System' es singular, requiere 'has'. Segundo: tras preposiciones como 'by' o 'for', el pronombre receptor es objeto ('us'), NO posesivo ('ours', que significa 'el nuestro')."
        }
    ],
    vocabulary: [
        {
            word: "To Implement",
            phonetic: "/ˈɪm.plɪ.ment/",
            meaning: "Poner en marcha, implantar, ejecutar (un sistema, ley o plan).",
            example: "We are implementing a new SGA across all warehouses.",
            level: "C1",
            activeUpgrade: "NUNCA uses 'implant' en logística. Si es urgente, di 'roll out'. Si es estándar corporativo, 'implement'."
        },
        {
            word: "To Achieve",
            phonetic: "/əˈtʃiːv/",
            meaning: "Lograr, conseguir (un objetivo, hito o resultado).",
            example: "We need to achieve these objectives before Q4.",
            level: "B2/C1",
            activeUpgrade: "Sustituye inmediatamente a 'get' cuando hablas de metas (goals/targets)."
        },
        {
            word: "Trouble (Uncountable)",
            phonetic: "/ˈtrʌb.əl/",
            meaning: "Problemas, dificultades, inconvenientes.",
            example: "We're having trouble implementing the new routing system.",
            level: "B2",
            activeUpgrade: "En lugar de 'We have problems', usar la estructura 'Have trouble + verbo-ING' suena infinitamente más nativo."
        },
        {
            word: "To Track",
            phonetic: "/træk/",
            meaning: "Rastrear, monitorizar, hacer seguimiento.",
            example: "All our shipments are tracked via GPS in real time.",
            level: "B2",
            activeUpgrade: "Mejor que 'follow' o 'watch'. Termino técnico para Supply Chain."
        },
        {
            word: "To Handle",
            phonetic: "/ˈhæn.dəl/",
            meaning: "Gestionar, encargarse de, lidiar con.",
            example: "Customer complaints are handled within 24 hours.",
            level: "B2/C1",
            activeUpgrade: "Verbo directivo supremo. Sustituye al 'I do' o al básico 'I manage'."
        }
    ],
    grammar: [
        {
            title: "Passive Voice in Business",
            content: "• ¿Por qué usarla?: En operaciones (Supply Chain) importa más el resultado ('The package was delivered') que quién condujo el camión. La pasiva aporta neutralidad, objetividad y un tono altamente formal y corporativo.\n• Fórmula de ORO: Se construye siempre con el verbo 'TO BE' conjugado en el tiempo exacto que quieras + el PARTICIPIO del verbo principal (-ed, o tercera columna). Ej. Presente (are processed), Pasado (were reduced), Futuro (will be optimized).\n• Regla crítica (BEING vs BEEN): Nunca los cruces. 'BEING' va con los Tiempos Continuos ('is being done' = está siendo hecho AHORA). 'BEEN' va exclusivo con Tiempos Perfectos ('has been done' = HA sido hecho y está COMPLETADO)."
        },
        {
            title: "Signal Words y la Pasiva",
            content: "• Past Simple: Las palabras 'ago', 'last week' o fechas ('in 2024') obligan a usar 'was/were + participio'. Error típico de hispanos: 'Costs have been reduced 2 months ago' ❌ (Usa 'were reduced').\n• Present Perfect: Las palabras 'since', 'recently', 'this year' obligan a usar 'has/have been + participio'. Conectan el evento al presente.\n• Pronombres del Agente: Si mencionas a quién lo hizo al final, va introducido por 'BY' + Pronombre Objeto (me, you, him, her, it, us, them). Ejemplo: By US (nunca by ours)."
        }
    ],
    pronunciation: [
        {
            word: "Implement",
            phonetics: "/ˈɪm.plɪ.ment/",
            description: "Acento recae fuerte en IM. Im-pli-ment. La T final es seca."
        },
        {
            word: "Achieve",
            phonetics: "/əˈtʃiːv/",
            description: "Atención a la vocal central A (schwa /ə/) casi inaudible inicial, seguida de un fuerte CHÍIV."
        }
    ],
    speaking: [
        {
            prompt: "Describe the transition of your logistics system using Passive Voice (What is being implemented? What has been achieved?)",
            duration: 90
        },
        {
            prompt: "Reflect on how your team's tracking and delivery stats were optimized last year (Use Past Simple Passive).",
            duration: 90
        }
    ],
    flashcards: [
        {
            front: "Implantar / Poner en marcha",
            back: "To implement",
            phonetic: "/ˈɪm.plɪ.ment/",
            example: "The software was implemented last night.",
            tip: "❌ No uses 'implant'. Implant es para glúteos y dientes."
        },
        {
            front: "Dificultad para hacer algo",
            back: "To have trouble / difficulty (-ing)",
            phonetic: "/tuː hæv ˈtrʌb.əl/",
            example: "We're having trouble implementing the SGA.",
            tip: "Fórmula mágica nativa. Have trouble NUNCA lleva 's', y exige que el segundo verbo lleve -ING."
        },
        {
            front: "Lograr estos objetivos",
            back: "Achieve these objectives",
            phonetic: "/əˈtʃiːv ðiːz əbˈdʒek.tɪvz/",
            example: "We must achieve these objectives by Q2.",
            tip: "*These* es plural (este -> estos). Achieve es más directivo que 'get'."
        },
        {
            front: "Es más duro de lo que pensamos",
            back: "It's harder THAN we thought",
            phonetic: "/ɪts ˈhɑː.dər ðæn wiː θɔːt/",
            example: "The new routes are harder to manage than we thought.",
            tip: "Comparativo exige THAN. Referirnos a una suposición pasada sobre el presente exige THOUGHT (past simple)."
        },
        {
            front: "Mientras hablamos / Ahora mismo",
            back: "As we speak",
            phonetic: "/æz wiː spiːk/",
            example: "Our rates are being reviewed as we speak.",
            tip: "Expresión élite para enfatizar que algo muy importante está ocurriendo en este mismo milisegundo."
        }
    ],
    quiz: class5Quiz
};
