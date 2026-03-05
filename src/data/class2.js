import { class2Quiz } from './class2Quiz';

export const class2Data = {
    id: "class-2",
    date: "02 Mar 2026",
    duration: "2h 5min",
    level: "B1 → B2",

    // 1. Resumen Section
    overview: {
        title: "Conditional Sentences (Type 0-3)",
        objectives: [
            "Comprender las 4 estructuras de conditionals",
            "Diferenciar Type 2 (presente irreal) vs Type 3 (pasado irreal)",
            "Practicar negativas en conditionals (Type 3)",
            "Dominar vocabulario: hypothesis, regret, consequence"
        ],
        stats: {
            exercises: 5,
            correct: "55% (Avg, Fatiga Mental evidenciada al final)",
            improvement: "Mejora notable (83%) en negativas Type 3"
        },
        classSummary: "Repaso íntegro de condicionales. Hubo confusión grave inicial entre Type 2 y Type 3, especialmente al invertir el orden y añadir negativas. Gran progreso tras explicar que Type 2 es 'distancia de la realidad' y no pasado.",
        theoreticalExplanation: "El Type 2 usa Past Simple, pero NO habla del pasado. Habla de irrealidad presente ('If I won the lottery...'). El Type 3 usa Past Perfect y habla de algo que ya es imposible de cambiar ('If I had studied...').",
        extraLearningPoint: "Las cláusulas negativas en Type 3 suelen paralizar la mente. Recuerda este bloque: If + hadn't + participio -> wouldn't have + participio."
    },

    // 2. Análisis de Errores
    errors: [
        {
            title: "Omisión del 'HAVE' en Type 3",
            userError: "'I would passed' / 'I have told'",
            correction: "'I would HAVE passed' / 'I would HAVE told'",
            type: "Grammar Core",
            teacherInsight: "¿Por qué se usa uno y no otro? En Type 3 necesitas obligatoriamente el bloque condicional compuesto 'would + have + participio'. Olvidarse el 'have' te hace sonar menos preparado. 'Type 3 = 3 palabras en la main clause'."
        },
        {
            title: "Participios Pasados Inventados",
            userError: "'helpt' / 'cought' / 'taked'",
            correction: "'helped' / 'caught' / 'taken'",
            type: "Vocabulary / Spelling",
            teacherInsight: "¿Por qué se usa uno y no otro? Bajo presión oral, la mente acude al pasado 'inventado' añadiendo '-ed' a todo o confundiendo fonética. 'Catch' deriva a 'caught' (no cought). 'Help' es regular (helped). Debes dominar la tabla Top 20 de irregulares."
        },
        {
            title: "Desorden Crítico en Negativas del Type 3",
            userError: "'She had not crash if she wpuld has drive'",
            correction: "'She would not have crashed if she had driven'",
            type: "Structure Syntax",
            teacherInsight: "Cuando la frase empieza por el resultado (She wouldn't have...) y termina con la condición (if she had...), el cerebro colapsa invirtiendo los verbos auxiliares. ¡El 'If' SIEMPRE arrastra al 'Had', nunca al 'Would'!"
        },
        {
            title: "False Friends: War vs Job",
            userError: "'I have a good war right now'",
            correction: "'I have a good job right now'",
            type: "False Friends",
            teacherInsight: "Error extremadamente crítico en audio. 'War' es Guerra, 'Job/Work' es Trabajo. Causado por duda fonética. Di 'Work' si dudas para no asustar al entrevistador."
        },
        {
            title: "False Friends: Signature vs Subject",
            userError: "'If I had studied another signature'",
            correction: "'If I had studied another subject'",
            type: "False Friends",
            teacherInsight: "'Signature' es tu firma al final de un contrato. 'Subject' es asignatura o tema universitario. Esto altera gravemente la comprensión en un entorno C-Level."
        },
        {
            title: "Was vs Were (Subjuntivo Type 2)",
            userError: "'If she was taller / If they was here'",
            correction: "'If she were taller / If they were here'",
            type: "Grammar Polish",
            teacherInsight: "En condicional Type 2, la regla marca usar 'were' para TODAS las personas porque no es un verbo en pasado real, es el Modo Subjuntivo hipotético. 'was' suena descuidado en business."
        },
        {
            title: "Unless NO significa Aunque",
            userError: "'Unless I have a good job right now'",
            correction: "'Although I have a good job right now'",
            type: "Connectors",
            teacherInsight: "'Unless' se traduce férreamente como 'A menos que' y condiciona la frase restrictivamente. Para introducir un contraste ('Aunque tengo un buen trabajo...') debes emplear 'Although' o 'Even though'."
        },
        {
            title: "Present Perfect en lugar de Conditional Perfect",
            userError: "'If you had called, I have told you'",
            correction: "'If you had called, I would have told you'",
            type: "Tense Confusion",
            teacherInsight: "'Have told' (Present Perfect) significa 'ya te lo dije', es un hecho consumado. Tú intentabas decir 'te lo habría dicho' (un evento que nunca pasó), lo cual exige incrustarle el modal 'Would'."
        }
    ],

    // 3. Vocabulario Flashcards (Business)
    flashcards: [
        { front: "A menos que (requiere cláusula)", back: "Unless", phonetics: "/ənˈles/", example: "I won't go unless you come.", tip: "Condición negativa. Nunca lo uses solo suelto. 'Unless you approve the budget, we stop'." },
        { front: "Siempre que / Con tal de que", back: "Provided (that)", phonetics: "/prəˈvaɪdɪd/", example: "I'll help, provided you pay me.", tip: "Upgrade de 'If'. Condición restrictiva." },
        { front: "De lo contrario / Si no", back: "Otherwise", phonetics: "/ˈʌðərwaɪz/", example: "Study hard, otherwise you'll fail.", tip: "La alternativa de nivel nativo al temible 'If not'." },
        { front: "Arrepentirse / Lamentar", back: "Regret", phonetics: "/rɪˈɡret/", example: "I regret not studying English earlier.", tip: "OJO: Siempre va con gerundio (regret doing it)." },
        { front: "Consecuentemente / Por consiguiente", back: "Consequently", phonetics: "/ˈkɑːnsɪkwentli/", example: "I didn't study; consequently, I failed.", tip: "Conector formal ideal para emails de resultados." },
        { front: "Desear (Irreal Type 2/3)", back: "Wish", phonetics: "/wɪʃ/", example: "I wish I had studied more.", tip: "Estructura irreal muy de lamento. 'I wish I were rich'." }
    ],

    // 4. Vocabulario Detallado
    vocabulary: [
        {
            word: "Unless",
            meaning: "A menos que",
            example: "I won't sign the contract unless you change clause 4.",
            activeUpgrade: "Evita decir 'If you don't approve...'. Usando 'Unless' suenas mucho más tajante y negociador."
        },
        {
            word: "Otherwise",
            meaning: "De lo contrario",
            example: "We need that shipment today; otherwise, we stop production.",
            activeUpgrade: "El sustituto perfecto B1+'If not, we stop production'. En C1 usamos 'otherwise' para marcar la consecuencia fatal."
        },
        {
            word: "Suppose / Supposing",
            meaning: "Supongamos que",
            example: "Suppose you lost the main client, what would be the backup plan?",
            activeUpgrade: "Mejor que decir 'Imagine if...'. 'Suppose' abre el tablero de ajedrez corporativo para buscar soluciones hipotéticas."
        },
        {
            word: "Regardless of",
            meaning: "Sin importar / A pesar de",
            example: "I'll execute the plan, regardless of the weather conditions.",
            activeUpgrade: "Evita el españolizado 'It doesn't matter the weather'. 'Regardless' suena a determinación férrea."
        },
        {
            word: "Job vs War",
            meaning: "Falso amigo: Trabajo (Job) vs Guerra (War)",
            example: "I have a new job at the logistics company.",
            activeUpgrade: "En C1, la pronunciación importa. 'Work' es inmensamente más seguro si dudas."
        }
    ],

    // 5. Pronunciation
    pronunciation: [
        {
            word: "Consequently",
            phonetics: "/ˈkɑːnsɪkwentli/",
            description: "Acento recae fuerte en la primera sílaba (CON-se-kwent-li)."
        },
        {
            word: "Otherwise",
            phonetics: "/ˈʌðərwaɪz/",
            description: "Cuidado con la vibrante fricativa dental sonora /ð/, saca la lengua como una abeja."
        },
        {
            word: "Regret",
            phonetics: "/rɪˈɡret/",
            description: "El acento va en la SEGUNDA sílaba. Re-GRET. No RE-gret."
        }
    ],

    // 6. Grammar (Deep Dive)
    grammar: [
        {
            title: "Type 0 y 1 (Realidad y Futuro Probable)",
            content: "• Type 0: If + Present, Present. Son verdades absolutas ('If water freezes, it becomes ice').\n• Type 1: If + Present, Will + Infinitivo. Usado para futuros probables y condicionados ('If it rains tomorrow, we will cancel').\n• ¿Por qué usar uno y no otro?: El Type 0 es para describir procesos de tus máquinas. El Type 1 es para negociar consecuencias futuras con un proveedor ('If you don't hurry, you will miss the deadline').\n\n• Ejemplos:\n- (Type 1): If the supplier delivers late, we will charge a penalty."
        },
        {
            title: "Type 2 vs Type 3 (La Confusión Crítica B2->C1)",
            content: "• Diferencia Clave: Type 2 mira al Presente/Futuro (improbable/hipotético). Type 3 analiza el Pasado (imposible de cambiar).\n• Formación: Type 2 usa 'If + Past Simple' (If I had time). Type 3 usa 'If + Past Perfect' (If I had had time).\n• ¿Por qué usar uno y no otro?: No dominar esta dualidad causa que tus jefes no sepan si estás proponiendo un escenario futuro teórico factible (Type 2) o lamentando irreparablemente algo que la cadena de suministro destrozó ayer (Type 3).\n\n• OJO: Date cuenta de tus 'Marcadores Temporales': si la frase dice 'yesterday', 'last year', estás abocado obligatoriamente al Type 3.\n\n• Ejemplos:\n- (Type 2 - Hipótesis Actual): If I had the budget now, I would buy the software.\n- (Type 3 - Lamento Pasado): If I had had the budget last year, I would have bought the software."
        },
        {
            title: "Negativas en Type 3 (El Rompecabezas)",
            content: "• Estructura en Bloque If: If + hadn't + Participle.\n• Estructura en Bloque Effect: wouldn't have + Participle.\n• ¿Por qué usar uno y no otro?: El cerebro hispano interfiere e intenta decir 'didn't' en el IF, y 'wouldn't' en el efecto pero sin el 'have'. Memoriza la rigidez del bloque perfecto.\n\n• Ejemplos:\n- Correcto (Ambos lados en negativo): If we hadn't left early, we wouldn't have caught the train.\n- Incorrecto (Colapso Estructural): If we didn't left early, we wouldn't catch the train."
        },
        {
            title: "The Subjunctive 'Were' (Type 2)",
            content: "• Usos: En el condicional Type 2, el verbo To Be es SIEMPRE 'were' para todas las personas (I/He/She/It), nunca 'was'.\n• ¿Por qué usar uno y no otro?: Aunque oigas 'was' ('If I was you') en canciones, en un contexto corporativo es un error de bajo nivel.\n\n• Ejemplos:\n- Correcto: If I were the logistics manager, I would change the route.\n- Incorrecto: If I was the manager, I would change the route."
        },
        {
            title: "Mixed Conditionals (C1/C2 Advanced)",
            content: "• Usos: Cuando una Decisión PASADA (Type 3) tiene un Efecto PRESENTE activo (Type 2).\n• Estructura: If + Past Perfect (causa ayer) -> Would + infinitivo (efecto hoy).\n• ¿Por qué usar uno y no otro?: Es la forma más natural de describir el entorno laboral. Tomas decisiones hace un año que se sufren hoy.\n\n• Ejemplos:\n- If I had taken that job last year (T3), I would be happier now (T2).\n- If we hadn't signed the contract in 2022 (T3), we wouldn't have this debt right now (T2)."
        }
    ],

    // 7. Speaking Prompts
    speaking: [
        {
            prompt: "What would you have done differently in your career? (Use Type 3)",
            timeLimit: 120,
            tips: "MANDATORY: Use 'If I had... I would have...' at least 3 times. Focus on past impossibilities."
        },
        {
            prompt: "Suppose you were the CEO tomorrow. What would you change? (Use Type 2)",
            timeLimit: 90,
            tips: "Use 'If I were...' and 'I would [streamline / foster / leverage]...'"
        }
    ],

    // 8. Quiz
    quiz: class2Quiz
};
