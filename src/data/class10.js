import { class10Quiz } from './class10Quiz';

export const class10Data = {
    id: "class-10",
    date: "10 Mar 2026",
    duration: "30 min",
    level: "B2 → C1",

    overview: {
        title: "Business Phrasal Verbs (Supply Chain)",
        objectives: [
            "Dominar 15 Phrasal Verbs críticos de negocios",
            "Entender la diferencia entre Separables e Inseparables",
            "Aplicar Phrasal Verbs de 3 palabras (Three-word)",
            "Corregir errores de Spelling (consonante doble)"
        ],
        stats: {
            exercises: 2,
            correct: "88% (Exercise A)",
            improvement: "Uso sintáctico en redacción de Clarel"
        },
        classSummary: "Sesión corta e intensa enfocada exclusivamente en el músculo de Phrasal Verbs corporativos. El desempeño conectando verbos con significado en reading fue muy alto (88%), pero en la producción se resintieron el spelling del pasado y los tiempos verbales básicos.",
        theoreticalExplanation: "Los Phrasal Verbs son el sello del inglés nativo corporativo. Evitan sonar artificial o 'de libro'. La clave no es memorizarlos dispersos, sino entender si la preposición anula al pronombre (inseparables) o lo encierra (separables con 'it' / 'them').",
        extraLearningPoint: "Omitir el 'it' (Because is probably...) es un error fosilizado hispano gravísimo. En inglés TODO verbo requiere su placa de matrícula por delante (el sujeto explícito)."
    },

    errors: [
        {
            title: "Join vs Step Down",
            userError: "'...their best talent stept down to our company'",
            correction: "'...their best talent CAME OVER (or MOVED OVER) to our company'",
            type: "Vocabulary / Semantic",
            teacherInsight: "Step down = dimitir/renunciar. Si el talento se va A nuestra empresa, están viniendo hacia nosotros, por lo cual 'come over' o 'move over' es perfecto. Alguien que 'steps down' se baja del barco, no se une a él."
        },
        {
            title: "Spelling: Consonante + -ED",
            userError: "'stept' / 'stopt'",
            correction: "'stepped' / 'stopped'",
            type: "Spelling",
            teacherInsight: "La terminación -ed obedece a la regla CVC (Consonante-Vocal-Consonante tónica): step -> stepped, plan -> planned. Las formas terminadas en 't' como 'stept' no tienen cabida fonética y son errores visuales fuertes en emails."
        },
        {
            title: "Break down vs Come up with",
            userError: "'...break down a new strategy'",
            correction: "'...COME UP WITH a new strategy'",
            type: "Phrasal Logic",
            teacherInsight: "Break down es analizar y destripar algo que YA existe (desglosar costes). Come up with es fabricar desde cero, parir una idea genial de manera repentina."
        },
        {
            title: "Sujeto Elíptico (El gran error español)",
            userError: "'...because is probably the best option.'",
            correction: "'...because IT IS probably the best option.'",
            type: "Grammar Core",
            teacherInsight: "El inglés tolera muchas licencias, pero NUNCA tolera un verbo huérfano de sujeto conjugado. El 'it' es el sujeta-velas oficial del inglés. Nunca empieces una cláusula con 'is' pelado."
        },
        {
            title: "Choose vs Chose (Present vs Past)",
            userError: "'We choose this TMS (Contexto pasado)'",
            correction: "'We CHOSE this TMS'",
            type: "Tense Confusion",
            teacherInsight: "Error de ortografía sutil que altera el tiempo temporal. Choose (con doble o) es PRESENTE general. Chose (con una o y mudo al final) es PASADO. Escríbelo bien y ahorrarás confusión en el Timeline del lector."
        }
    ],

    flashcards: [
        { front: "Posponer / Aplazar", back: "Put off", phonetics: "/pʊt ɒf/", example: "We put off the meeting until Friday.", tip: "Phrasal verb separable. Ideal para reuniones." },
        { front: "Investigar a fondo", back: "Look into", phonetics: "/lʊk ˈɪntuː/", example: "I'll look into the missing shipment.", tip: "Inseparable. Ojo, no significa 'mirar dentro'." },
        { front: "Idear / Inventar algo nuevo", back: "Come up with", phonetics: "/kʌm ʌp wɪð/", example: "We need to come up with a backup plan.", tip: "Phrasal de 3 palabras. Totalmente inseparable." },
        { front: "Desglosar para analizar", back: "Break down", phonetics: "/breɪk daʊn/", example: "Break down the budget by department.", tip: "Separable. Úsalo para tablas de Excel en llamadas." },
        { front: "Recortar / Reducir gastos", back: "Cut back on", phonetics: "/kʌt bæk ɒn/", example: "We are cutting back on travel expenses.", tip: "3-palabras inseparable. Expresión top de contabilidad." },
        { front: "Lanzar al mercado / Implementar", back: "Roll out", phonetics: "/rəʊl aʊt/", example: "IT will roll out the software next week.", tip: "Amo y señor de los lanzamientos de productos de software o reglas." }
    ],

    vocabulary: [
        {
            word: "Carry out",
            meaning: "Ejecutar, llevar a cabo",
            example: "The auditor carried out a deep inspection of the warehouse.",
            activeUpgrade: "Upgrade de 'do' o 'make'. Cuando se trata de un encargo, auditoría o encuesta, la élite directiva siempre usa 'carry out'."
        },
        {
            word: "Take over",
            meaning: "Asumir el control",
            example: "Amazon took over the startup last year.",
            activeUpgrade: "Mucho más orgánico que decir 'buy'. Take over es coger el timón corporativo."
        },
        {
            word: "Follow up",
            meaning: "Hacer seguimiento riguroso",
            example: "Can you follow up with the carrier on that issue?",
            activeUpgrade: "Un must-have del diccionario logístico. No digas 'contact again', di 'follow up'."
        },
        {
            word: "Set up",
            meaning: "Configurar / Establecer",
            example: "We need to set up the KPIs before Q3.",
            activeUpgrade: "Olvida la tentación de decir 'configure' o 'establish' para temas simples como reuniones o indicadores."
        },
        {
            word: "Turn down",
            meaning: "Rechazar enfáticamente",
            example: "They turned down our supplier proposal.",
            activeUpgrade: "Rechazar la palabra 'reject'. Usar 'Turn down' demuestra una fluidez oral propia de mesas de negociación avanzadas."
        }
    ],

    pronunciation: [
        {
            word: "Stepped",
            phonetics: "/stept/",
            description: "Terminación sorda. Al ser -ed tras una 'p', no se dice la vocal 'e', suena como una 't' seca."
        },
        {
            word: "Take over",
            phonetics: "/teɪk ˈəʊvə/",
            description: "Enlaza la frase: /tei-Kó-ver/. La T y la O se funden en el speech rápido nativo."
        },
        {
            word: "Chose vs Choose",
            phonetics: "/tʃəʊz/ vs /tʃuːz/",
            description: "Chose rima con 'Nose' (nariz). Choose rima con 'Shoes' (zapatos)."
        }
    ],

    grammar: [
        {
            title: "Phrasal Verbs Separables",
            content: "• Qué son: Phrasal verbs donde el objeto directo puede ir entre el verbo y la preposición.\\n• Regla Diamante: Si tu objeto directo es un pronombre (IT, THEM), DEBE ir en medio oblicatoriamente.\\n• ¿Por qué usar uno y no otro?: El inglés no quiere golpear a un 'it' al final de la frase, prefiere envolverlo.\\n\\n• Ejemplos:\\n- ✅ Correcto general: I'll set up the meeting. / I'll set the meeting up.\\n- 💎 Correcto con pronombre: I'll set it up.\\n- ❌ Incorrecto fatal: I'll set up it."
        },
        {
            title: "Phrasal Verbs Inseparables",
            content: "• Qué son: Phrasal verbs que jamás permiten separar la partícula del verbo principal. Normalmente porque la partícula rige directamente sobre el sustantivo que le sigue.\\n• Ejemplos clave: Look into (investigar), Step down (dimitir), Follow up (Dar seguimiento).\\n\\n• Ejemplos:\\n- ✅ Correcto: Let's look into the problem.\\n- ❌ Incorrecto: Let's look the problem into."
        },
        {
            title: "Three-Word Phrasal Verbs",
            content: "• Qué son: Conjugaciones enlazadas de Verbo + Adverbio + Preposición. Son bloques sólidos e INSEPARABLES.\\n• Aplicación: Come up with, Cut back on, Run out of.\\n\\n• Ejemplos:\\n- ✅ Correcto: We need to come up with an idea.\\n- ❌ Incorrecto: We need to come an idea up with."
        },
        {
            title: "Diferencia: Phrasal Verbs vs Prepositional Verbs",
            content: "• Phrasal verb: La partícula cambia radicalmente el significado base del verbo (Look up = buscar info, no mirar arriba. Break down = analizar).\\n• Prepositional Verb: La preposición es literal e indica dirección o conexión (Look at = Mirar a).\\n• Test: Si no puedes predecir lo que significa sumando palabras, es un Phrasal Verb."
        }
    ],

    theory: [
        {
            title: "La tiranía del sujeto implícito en español",
            priority: "Crítica",
            problem: `*""We choose this TMS, because is probably the best option.""* -> Falta un "IT" antes del is.`,
            whyItHappens: `El español es un idioma "pro-drop" (sujetos omitidos o elípticos), el verbo por sí solo tiene carga gramatical completa (es = él/ello es). En el inglés "IT" carece de sufijos formales de persona.`,
            rule: `TODO verbo conjugado en afirmativa o negativa TIENE que llevar escrito su sujeto-pronombre literal. "Because IT is". "It rains".`,
            trick: `Ponle casco a los verbos. Un verbo en inglés es como un obrero sin casco si le falta el "I, you, he, she, it". El obrero "is" sin caso "it" morirá aplastado.`
        },
        {
            title: "Regla CVC y el Spelling del Pasado",
            priority: "Alta",
            problem: `Tu cerebro dudó al buscar el pasado de "step", y optó erróneamente por la transliteración germánica *"stept".*`,
            whyItHappens: `La duda fonética (/stept/ suena a 'stept') y no procesar visualmente el patrón C-V-C.`,
            rule: `Axioma C-V-C (Consonante - Vocal - Consonante): Si la última sílaba es tónica, DUPLICA antes de insertar "-ed".\nS-t-e-p -> Stepped\nS-t-o-p -> Stopped\nP-l-a-n -> Planned`,
            trick: `Pronombre + Terminación seca de consonante = Clona la última consonante y pega ED (Stepped). Nunca uses la terminación 't' suelta en verbos regulares.`
        },
        {
            title: "Miedo a los Phrasal Verbs (Síndrome del Investigador / Investigation Syndrome)",
            priority: "Media",
            problem: `El hispanohablante siempre dice "investigate", "execute", "postpone", "reject" (lenguaje latín).`,
            whyItHappens: `Falsa zona de confort por similitud semántica al español. Evitamos fallar esquivando a los invasores anglosajones y buscando refugio en los romanos.`,
            rule: `El inglés de C-Level fluye. "Investigate" es de abogado, "look into" es de manager. "Postpone" es de robot, "put off" es de mesa directiva.`,
            trick: `Ponte la regla de escribir 1 Phrasal Verb mínimo por cada email de 5 líneas que envíes en Clarel.`
        }
    ],

    speaking: [
        {
            prompt: "Using 'bring up' and 'cut back on', explain two difficult topics you have to discuss in your next logistics meeting.",
            timeLimit: 120,
            tips: "Bring up = sacar un tema (ej. I will bring up the OTIF collapse). Cut back on = recortar (ej. We must cut back on premium freight)."
        },
        {
            prompt: "Describe an emergency situation where you had to 'come up with' a quick solution.",
            timeLimit: 90,
            tips: "Past tense mandatory (We came up with, we set up, we carried out)."
        }
    ],

    quiz: class10Quiz
};
