import { class15Quiz } from './class15Quiz';

export const class15Data = {
    id: "class-15",
    date: "17 Mar 2026",
    duration: "33 min",
    level: "B2 → C1",

    overview: {
        title: "Linking Words (Cohesion & Coherence)",
        objectives: [
            "Dominar las 7 categorías de conectores: Adición, Contraste, Causa, Consecuencia, Secuencia, Ejemplo, Conclusión",
            "Diferenciar causa (owing to) de consecuencia (as a result) sin confundirlas",
            "Aprender que 'despite' SIEMPRE necesita noun/gerund, nunca verbo conjugado",
            "Automatizar la cheat sheet de linking words de B2 a C1"
        ],
        stats: {
            exercises: 3,
            correct: "15/15 (con traducciones) — 0/8 sin ellas",
            improvement: "De 0% a 100% en 20 minutos tras recibir las traducciones"
        },
        classSummary: "Sesión reveladora. Sergio arrancó con 0/8 en el primer ejercicio por desconocer el significado de los linking words. Sin embargo, una vez recibidas las traducciones al español, demostró una lógica impecable: 5/5 y después 10/10 sin un solo fallo. El problema no era la gramática ni el razonamiento, sino puro vocabulario desconocido.",
        theoreticalExplanation: "Los Linking Words son las bisagras que elevan un texto B1 (ideas sueltas como post-its) a un texto C1 (ideas que fluyen como un río con dirección). Sin ellos, tu email ejecutivo o tu presentación son un listado de puntos. Con ellos, se convierten en un argumento.",
        extraLearningPoint: "La diferencia entre CAUSA y CONSECUENCIA es cuestión de flechas mentales. Causa (←): ¿por qué pasó? → owing to, due to. Consecuencia (→): ¿qué pasó como resultado? → as a result, consequently."
    },

    errors: [
        {
            title: "Confusión Total Causa ↔ Consecuencia ↔ Contraste",
            userError: "Puso 'as a result' donde iba 'owing to', 'for instance' donde iba 'as a result', etc.",
            correction: "Causa (¿POR QUÉ?) → owing to / due to. Consecuencia (¿QUÉ PASÓ?) → as a result / consequently.",
            type: "Semantic Confusion",
            teacherInsight: "En español, 'por lo tanto' y 'debido a' suenan parecido porque ambos implican relación causa-efecto. Pero en inglés son direcciones OPUESTAS. Antes de elegir un linker, pregúntate: ¿Estoy explicando la RAZÓN o el RESULTADO?"
        },
        {
            title: "Vocabulario Desconocido = Bloqueo Total",
            userError: "0/8 en el primer ejercicio por no conocer las traducciones de los linkers.",
            correction: "Con la cheat sheet de traducciones → 15/15 perfecto.",
            type: "Vocabulary Gap",
            teacherInsight: "No se puede usar una herramienta sin saber para qué sirve. Los linking words son VOCABULARIO, no gramática. Hay que memorizarlos como se memoriza cualquier palabra nueva."
        },
        {
            title: "Despite + verbo conjugado",
            userError: "'Despite he was late...'",
            correction: "'Despite BEING late...' o 'Although he was late...'",
            type: "Structure Rule",
            teacherInsight: "Despite + noun/gerund SIEMPRE. Si necesitas meter sujeto + verbo conjugado, cámbiate a 'although'."
        },
        {
            title: "Owning vs Owing (Ortografía)",
            userError: "'Owning to the delay...'",
            correction: "'OWING to the delay...'",
            type: "Spelling",
            teacherInsight: "Owning = poseer (to own). Owing = deber (to owe). 'Owing to' = debido a, que viene de 'deber'. Piensa en 'I owe you an explanation'."
        }
    ],

    flashcards: [
        { front: "Además / Es más (Formal)", back: "Moreover / Furthermore", phonetics: "/mɔːˈroʊvər/", example: "The plan saved money. Moreover, it improved efficiency.", tip: "En C1, reemplaza 'also' por 'moreover'." },
        { front: "Sin embargo (Contraste)", back: "However / Nevertheless", phonetics: "/haʊˈevər/", example: "It rained. However, the event continued.", tip: "Nevertheless es más fuerte que however." },
        { front: "Mientras que (Comparar A vs B)", back: "Whereas", phonetics: "/weərˈæz/", example: "Zara delivers in 15 days, whereas H&M takes 6 months.", tip: "Solo para comparar dos hechos opuestos sin sorpresa." },
        { front: "Debido a + nombre", back: "Owing to / Due to", phonetics: "/ˈoʊɪŋ tuː/", example: "Owing to the storm, flights were cancelled.", tip: "CAUSA: responde a ¿POR QUÉ?" },
        { front: "Como resultado (Consecuencia)", back: "As a result / Consequently", phonetics: "/æz ə rɪˈzʌlt/", example: "Sales dropped. As a result, we cut staff.", tip: "CONSECUENCIA: responde a ¿QUÉ PASÓ?" },
        { front: "A pesar de + nombre/-ing", back: "Despite / In spite of", phonetics: "/dɪˈspaɪt/", example: "Despite the budget cuts, we launched on time.", tip: "NUNCA le sigas con verbo conjugado." },
        { front: "En última instancia", back: "Ultimately", phonetics: "/ˈʌltɪmətli/", example: "Ultimately, reliability defines supply chain.", tip: "Distinto de 'eventually' (que implica espera)." },
        { front: "Por ejemplo", back: "For instance", phonetics: "/fɔːr ˈɪnstəns/", example: "Several factors contributed — for instance, poor inventory.", tip: "Más C1 que 'for example'." }
    ],

    vocabulary: [
        {
            word: "Moreover / Furthermore",
            meaning: "Además / Es más",
            example: "He speaks French. Furthermore, he's fluent in German.",
            activeUpgrade: "En C1, 'moreover' y 'furthermore' hacen que tu argumento escale como si amontonaras evidencia. Mucho más potente que 'also' o 'and'."
        },
        {
            word: "Nevertheless / Nonetheless",
            meaning: "No obstante / Aun así",
            example: "She had no experience. Nevertheless, she proved excellent.",
            activeUpgrade: "Es el 'however' con esteroides: indica que el resultado fue MUY inesperado."
        },
        {
            word: "Consequently / Therefore",
            meaning: "En consecuencia / Por lo tanto",
            example: "He missed 3 deadlines. Consequently, he was dismissed.",
            activeUpgrade: "Marca la flecha lógica → de causa a efecto. Ideal para cerrar argumentos en presentaciones."
        },
        {
            word: "Ultimately",
            meaning: "En última instancia / Lo que de verdad importa",
            example: "Ultimately, consistency defines a great supply chain.",
            activeUpgrade: "No es 'finalmente' (eventually). Es 'lo esencial', la verdad última de la ecuación."
        }
    ],

    pronunciation: [
        {
            word: "Nevertheless",
            phonetics: "/ˌnevərðəˈles/",
            description: "Tiene el sonido /ð/ (lengua entre dientes) en el centro: ne-ver-THE-less. No digas 'never-de-less'."
        },
        {
            word: "Consequently",
            phonetics: "/ˈkɒnsɪkwəntli/",
            description: "El acento fuerte está en la primera sílaba: CON-si-quent-li. No es 'con-se-CUENT-li'."
        }
    ],

    grammar: [
        {
            title: "Reglas de Puntuación de los Linking Words",
            content: "• Al INICIO de frase: However, / Moreover, / Consequently, → siempre COMA después.\\n• En MEDIO de frase: 'The plan, however, was rejected.' → comas a ambos lados.\\n• 'Although' NO lleva coma después: Although it rained, we played. (la coma va tras la cláusula).\\n• 'Despite' NUNCA va solo: Siempre + noun/gerund. ❌ 'Despite, we won.' → ✅ 'Despite the odds, we won.'"
        },
        {
            title: "Causa vs Consecuencia: La Flecha Mental",
            content: "• CAUSA (←): Responde a '¿POR QUÉ pasó esto?' → owing to, due to, because of, on account of.\\n• CONSECUENCIA (→): Responde a '¿QUÉ RESULTÓ de esto?' → as a result, consequently, therefore, hence, thus.\\n• Truco: Si puedes poner '¿y qué pasó?', es consecuencia. Si puedes poner '¿por qué?', es causa."
        },
        {
            title: "Despite vs Although: La Línea Roja",
            content: "• Despite + NOUN/GERUND: Despite the rain / Despite being tired.\\n• Although + FRASE COMPLETA: Although it rained / Although he was tired.\\n• ❌ NUNCA: 'Despite he was tired' (mezcla de ambos).\\n• ❌ NUNCA: 'Although + but' en la misma frase (redundante)."
        }
    ],

    theory: [
        {
            title: "La Trampa Semántica Causa ↔ Consecuencia",
            priority: "Crítica",
            problem: "Usar 'as a result' (consecuencia) donde debería ir 'owing to' (causa) y viceversa.",
            whyItHappens: "En español, 'por lo tanto' y 'debido a' suenan parecido porque ambos implican relación causa-efecto. Pero apuntan en direcciones opuestas.",
            rule: "Antes de escribir un linker, hazte la pregunta diagnóstica: ¿Estoy explicando la RAZÓN (← causa) o el RESULTADO (→ consecuencia)?",
            trick: "Llegué tarde DEBIDO A el tráfico = RAZÓN → owing to. Hubo tráfico. POR LO TANTO llegué tarde = RESULTADO → as a result."
        },
        {
            title: "Los Linking Words son Vocabulario, No Gramática",
            priority: "Alta",
            problem: "Sergio obtuvo 0/8 intentando resolver por intuición sin conocer las traducciones.",
            whyItHappens: "Se asumió que los linkers se podían deducir por lógica contextual. No: son palabras con significado concreto.",
            rule: "No se puede usar una herramienta sin saber para qué sirve. Los linking words deben memorizarse con su traducción exacta.",
            trick: "Plan: leer la cheat sheet 1x al día durante 1 semana + escribir 2 frases diarias usando linkers nuevos. En 5-7 días estarán automatizados."
        }
    ],

    speaking: [
        {
            prompt: "Describe a logistics problem using CAUSA y CONSECUENCIA: Start with 'Owing to...' and then add 'As a result...' and close with 'Nevertheless...'",
            timeLimit: 90,
            tips: "Ejemplo: Owing to a warehouse fire, we lost 40% of our stock. As a result, we had to source from competitors. Nevertheless, we met all our customer commitments."
        },
        {
            prompt: "Compare two companies or strategies using 'whereas', 'moreover', and 'ultimately'.",
            timeLimit: 120,
            tips: "Example: Zara delivers in 15 days, whereas H&M takes months. Moreover, Zara adapts in real time. Ultimately, speed defines their competitive advantage."
        }
    ],

    quiz: class15Quiz
};
