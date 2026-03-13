import { class13Quiz } from './class13Quiz';

export const class13Data = {
    id: "class-13",
    date: "12 Mar 2026",
    duration: "1h",
    level: "B2 → C1",

    overview: {
        title: "Week 2 Review & Negotiation Roleplay",
        objectives: [
            "Evaluar el dominio cruzado de Reported Speech, Modals, Phrasal Verbs, Relative Clauses y Conditionals",
            "Aplicar el vocabulario logístico de Carrier Negotiation en tiempo real",
            "Dominar la presión oral asumiendo el rol directivo (Head of Transport)",
            "Erradicar los Top 5 errores crónicos arrastrados durante la Semana 2"
        ],
        stats: {
            exercises: 2,
            correct: "Quiz 20 Preguntas (Tracking Vivo)",
            improvement: "Warm-up de 15 min integrando phrasal verbs"
        },
        classSummary: "Sesión bisagra de Cierre de Semana. La totalidad de la clase giró alrededor de una evaluación integral de la retención sintáctica de todo lo impartido en la semana 2. La prueba de fuego residió en el Role-Play: 15 minutos seguidos debatiendo como Head of Transport con un proveedor logístico ('Carrier') renegociando unas métricas OTIF deficientes bajo un presupuesto ajustado.",
        theoreticalExplanation: "La consolidación se produce en escenarios de estrés. Negociar con TransEuropa obligó al cerebro a conjugar Modals (Could you guarantee...?), Phrasal Verbs (Let's figure out...), y Condicionales Mixtas (If you had delivered on time last Q1, we wouldn't be talking about penalties logically).",
        extraLearningPoint: "El Subjuntivo Fantasma: Cuidado con decir 'If I would have...'. El 'Would' NUNCA pisa la porción de la frase que arranca con el 'If'. Dices 'If I HAD...' de manera granítica y tajante."
    },

    errors: [
        {
            title: "Subjuntivo Tóxico (Error #1)",
            userError: "'If I would have more time, I could finish...'",
            correction: "'If I HAD more time, I could finish...'",
            type: "Grammar Core",
            teacherInsight: "El español usa Subjuntivo natural aquí (Si yo *tuviera*). En inglés asusta, y por eso el hispano planta un seguro 'would' defensivo detrás del If. Prohibido: El IF se fusiona con el Past Simple (Tipo 2) de manera incontestable."
        },
        {
            title: "Preposiciones Enganchadas",
            userError: "'Depend OF the weather' / 'Consist IN three parts'",
            correction: "'Depend ON the weather' / 'Consist OF three parts'",
            type: "Prep. Mix-Up",
            teacherInsight: "Traducción literal directa al abismo. Depender DE = Depend ON. Consistir EN = Consist OF. Apréndelas juntas, como cantadas."
        },
        {
            title: "El bucle inquisitivo en Reported Speech",
            userError: "'She asked me where WAS the warehouse'",
            correction: "'She asked me where the warehouse WAS'",
            type: "Syntax Inversion",
            teacherInsight: "Al relatar una pregunta en Report Speech, desaparece el formato pregunta. Ya no es una interrogación directa agresiva, es una declarativa contando un chisme. Sujeto ANTES del verbo siempre."
        },
        {
            title: "El Must Pasado Intento (Inexistente)",
            userError: "'Yesterday I must finish the report'",
            correction: "'Yesterday I HAD TO finish the report'",
            type: "Modal Abuse",
            teacherInsight: "Must es un verbo inamovible anclado a la existencia presente. Es incapaz de viajar atrás en el tiempo. Su alter-ego de los viajes espaciotemporales es 'Have to', cuyo pasado 'Had to' es obligatorio."
        },
        {
            title: "Comas Respiratorias Omitidas",
            userError: "'My boss who is from BCN speaks 4 languages' (Omitiendo comas en speech/escritura)",
            correction: "'My boss, who is from BCN, speaks 4 languages'",
            type: "Punctuation Control",
            teacherInsight: "Si la información es puro chismorreo suplementario (ya todos sabemos que tienes solo 1 jefe), DEBES encapsularla entre dos comas sólidas como el hormigón. De lo contrario, gramaticalmente insinúas que tienes varios jefes y estás diferenciando al que es de Barcelona de los demás."
        }
    ],

    flashcards: [
        { front: "Indicador: A tiempo y completo", back: "OTIF (On Time In Full)", phonetics: "/oʊ-ti-aɪ-ef/", example: "Our OTIF target is 92%.", tip: "El Santo Grial (KPI rey) de Supply Chain." },
        { front: "Acuerdo del Nivel de Servicio", back: "SLA (Service Level Agreement)", phonetics: "/es-el-eɪ/", example: "We will add a penalty clause in the SLA.", tip: "Contrato vinculante de calidad entre las partes." },
        { front: "Cadena de Frío", back: "Cold chain", phonetics: "/kəʊld tʃeɪn/", example: "We deal with pharmaceuticals, cold chain is critical.", tip: "Término imperioso en FMCG, Farma o cosmética avanzada (Clarel)." },
        { front: "Historial de desempeño", back: "Track record", phonetics: "/træk ˈrekɔːd/", example: "This carrier has a proven track record.", tip: "Mucho más C-Level que decir 'history'." },
        { front: "Volumen / Capacidad de flujo", back: "Throughput", phonetics: "/ˈθruːpʊt/", example: "We need higher warehouse throughput.", tip: "Palabra VIP en logística: cantidad de material que pasa por un sistema en un tiempo o caudal." },
        { front: "Elevar un problema a jefes", back: "Escalate", phonetics: "/ˈeskəleɪt/", example: "If this continues, I must escalate the issue.", tip: "Avisar a la cadena de mando." }
    ],

    vocabulary: [
        {
            word: "Penalty clause",
            meaning: "Cláusula de penalización",
            example: "Without an OTIF minimum, we demand a strict penalty clause.",
            activeUpgrade: "En negociaciones inglesas, hablar de 'penalties' con elegancia es lo que separa a un Manager B2 de un director C1."
        },
        {
            word: "Lead time",
            meaning: "Tiempo de Carga/Espera",
            example: "Your lead time is 6 weeks, which breaks our launch planning.",
            activeUpgrade: "El tiempo total que tarda algo desde que lo pides hasta que entra en las estanterías de las 1000 tiendas de Clarel."
        },
        {
            word: "Non-negotiable",
            meaning: "Innegociable",
            example: "The 90% tracking guarantee is non-negotiable for us.",
            activeUpgrade: "Cierre rotundo. Expresión fetiche para trancar una negociación antes de firmar."
        },
        {
            word: "Benchmark",
            meaning: "Punto de referencia del mercado (Competencia)",
            example: "The European carrier benchmark sits around €91k.",
            activeUpgrade: "Estándar o referencia con el que hay que medirse (normalmente marcando a la competencia)."
        }
    ],

    pronunciation: [
        {
            word: "Throughput",
            phonetics: "/ˈθruːpʊt/",
            description: "No es Tro-Put. Saca la lengua para morder suave (Teta-Ruu-Putt). Termina seco y rápido."
        },
        {
            word: "Escalate",
            phonetics: "/ˈeskəleɪt/",
            description: "La E inicial no es 'i'. Suena puramente E, seguida fuertemente de una K y arrastrando /leIt/ al final. Fuerte en ES."
        }
    ],

    grammar: [
        {
            title: "Reported Speech: Backshift Mastery",
            content: "• Qué es: Al reportar lo que cuenta el Carrier, retrocedes un nivel temporal respecto a lo que prometieron en directo.\\n• Ejemplos:\\n- Directo (Ayer en reunión): 'We CAN guarantee 92% OTIF'.\\n- Reported (Hoy a tu CEO): 'They said they COULD guarantee 92% OTIF'.\\n- Directo: 'We WILL launch the fleet'.\\n- Reported: 'They told me they WOULD launch the fleet'."
        },
        {
            title: "Must vs Might en Deducción Férrea",
            content: "• Lógica de detectives:\\n- Must = Hay una evidencia abrumadora a tu favor. Muestras seguridad del 99%. ('Look at the GPS, the truck MUST be broken down.').\\n- Might = Certeza débil del 40-50%. Dudas en la oscuridad. ('The delay MIGHT be because of traffic... I suppose').\\n- ❌ Nunca uses MUST para el pasado puro: ('Yesterday I must')."
        },
        {
            title: "Modals Perfectos de Arrepentimiento",
            content: "• Fórmula de la culpa: Should/Could/Would + HAVE + Participio.\\n• El arma de destrucción masiva en reuniones retrospectivas (Post-Mortems).\\n• Ejemplos:\\n- 'You SHOULD HAVE informed us earlier' = Deberíais habernos informado (Culpa directa).\\n- 'You COULD HAVE asked the dock manager' = Podrías haberle preguntado a alguien (Posibilidad pasada evaporada)."
        }
    ],

    theory: [
        {
            title: "Ataque del Subjuntivo Latino",
            priority: "Crítica",
            problem: `"If I would have more budget, I'd pay 95k."`,
            whyItHappens: `Instinto puro del "Tuviera" (Subjuntivo Pretérito Español).`,
            rule: `La trinchera gramatical más sagrada del inglés. El 'IF' y el 'WOULD' NUNCA pueden sentarse a charlar en la misma cláusula. El IF se divorció del WOULD y solo se ajunta con el simple Past o el Past Perfect.`,
            trick: `Grábalo a fuego. "Si Tuviera" = If I HAD. "Si Fuera" = If I WERE. Jamás intercales Would en el arranque de la condición.`
        },
        {
            title: "La Trampa Verbal Indirecta (Inversion Trap)",
            priority: "Alta",
            problem: `"She asked me where was the warehouse."`,
            whyItHappens: `Memorizamos de niños que las preguntas giran verbo por sujeto ("Where IS it?"). Y lo calcamos en bloque.`,
            rule: `Si relatas una pregunta incrustada o en segundo plano, la frase vuelve a su molde plácido de Sujeto + Verbo.`,
            trick: `Las Indirect Questions son declaraciones de paz, no interrogatorios de policía. Relaja el orden: "She asked me... where... the warehouse... WAS". (Frenazo dramático al final en WAS).`
        },
        {
            title: "Las Preposiciones Mentales (Español->Inglés)",
            priority: "Media",
            problem: `Depend OF, Consist IN, Think TO.`,
            whyItHappens: `Tratamos de alinear traducciones románicas palabra por palabra. (De=Of, En=In).`,
            rule: `Las Collocations anglosajonas (palabras que van de la mano por tradición social y fonética de 400 años) no aceptan negociaciones.`,
            trick: `Aprende el bloque sin cuestionarlo. DependOn. ConsistOf. Piensa las palabras pegadas con cola térmica.`
        }
    ],

    speaking: [
        {
            prompt: "Roleplay Report: Describe the carrier negotiation to your CEO using 'Reported Speech' backshifts. (E.g. TransEuropa said they COULD do 92% OTIF, and they promised they WOULD offer a penalty clause).",
            timeLimit: 120,
            tips: "Use Backshifts: Will -> Would. Can -> Could. We are -> They were."
        },
        {
            prompt: "Reflect on a past failure using 'Should have'. What 'should you have done' to prevent a delay?",
            timeLimit: 90,
            tips: "Required structures: 'I should have...', 'If I had..., we wouldn't have...'."
        }
    ],

    quiz: class13Quiz
};
