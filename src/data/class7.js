import { class7Quiz } from './class7Quiz';

export const class7Data = {
    id: 'clase-7',
    date: '06 Mar 2026',
    duration: '45 min',
    level: 'B2 → C1',
    overview: {
        title: 'Clase 7: Perfect Modals & Complex KPIs',
        objectives: [
            "Dominar los Perfect Modals (must have, should have, could have) para deducciones y arrepentimientos",
            "Aprender más de 20 KPIs financieros y logísticos (Days of supply, ROI, YoY)",
            "Erradicar interferencias directas del español ('de' en lugar de 'the')",
            "Combinar correctamente Reported Speech + Passive Voice sin romper la estructura"
        ],
        classSummary: 'In this session, we tackled the advanced combination of Reported Speech and Passive Voice. We also introduced "Perfect Modals" to express past deductions and regrets, and significantly expanded our technical KPI vocabulary.',
        theoreticalExplanation: 'Combinar pasiva y reported speech exige un dominio mental absoluto del "Backshift". Además, los Perfect Modals ("must have done") son el pináculo de la gramática B2/C1 para expresar qué creemos que pasó o qué deberíamos haber hecho, herramientas vitales en análisis forense de Supply Chain.'
    },
    errors: [
        {
            userError: "The supplier told me that the order was shipping the order.",
            correction: "The supplier told me that the order WAS BEING SHIPPED.",
            teacherInsight: "Error por sobrecarga cognitiva al combinar Reported Speech + Passive Voice. Pasiva en Continuous ('is being shipped') retrocede a Past Continuous ('was being shipped'). Evita repetir el sujeto."
        },
        {
            userError: "We can't consolidate de different orders in the truck.",
            correction: "We can't consolidate THE different orders ON the truck.",
            teacherInsight: "Dos errores: 1) Interferencia del español al escribir 'de' en vez de 'the'. 2) En logística, la carga va SOBRE ('on') los vehículos como camiones y trenes, no 'in'."
        },
        {
            userError: "We must have departured earlier.",
            correction: "We SHOULD HAVE DEPARTED earlier.",
            teacherInsight: "1) 'Departured' no existe, el verbo es 'depart' -> 'departed'. 2) Expresar un arrepentimiento exige 'should have', mientras que 'must have' expresa deducción segura."
        },
        {
            userError: "Get the completly shipment to our stores.",
            correction: "Deliver the COMPLETE shipment to our stores.",
            teacherInsight: "Confusión Adjetivo/Adverbio. 'Shipment' es sustantivo, por tanto requiere el adjetivo ('complete'). Los adverbios (-ly) solo modifican verbos o adjetivos."
        }
    ],
    vocabulary: [
        {
            word: "Days of Supply",
            phonetic: "/deɪz əv səˈplaɪ/",
            meaning: "Días de cobertura (inventario). Cuántos días durará el stock actual.",
            example: "We currently have 14 days of supply for this SKU.",
            level: "C1",
            activeUpgrade: "Crucial diferenciarlo de 'Fill Rate' (% de demanda servida)."
        },
        {
            word: "YoY (Year-over-Year)",
            phonetic: "/jɪər ˈəʊ.vər jɪər/",
            meaning: "Comparación interanual (este año vs el año pasado).",
            example: "Our revenue grew 15% YoY.",
            level: "C1",
            activeUpgrade: "Término obligatorio en finanzas y QBRs (Quarterly Business Reviews)."
        },
        {
            word: "Downtime",
            phonetic: "/ˈdaʊn.taɪm/",
            meaning: "Tiempo de inactividad o parada (de un sistema o máquina).",
            example: "Downtime in the warehouse cost us €10,000 yesterday.",
            level: "B2/C1",
            activeUpgrade: "Se opone a 'Uptime'. Muy usado en logística e IT."
        },
        {
            word: "Variance",
            phonetic: "/ˈveə.ri.əns/",
            meaning: "Desviación numérica entre lo esperado/presupuestado y lo real.",
            example: "Explain the variance in this month's transport costs.",
            level: "C1",
            activeUpgrade: "No confundir con 'Forecast accuracy' (que es el porcentaje de precisión)."
        },
        {
            word: "To Receive",
            phonetic: "/rɪˈsiːv/",
            meaning: "Recibir.",
            example: "We received the shipment this morning.",
            level: "B1/B2",
            activeUpgrade: "Presta máxima atención al spelling: E va antes de I tras la letra C (recEIve)."
        }
    ],
    grammar: [
        {
            title: "Perfect Modals (must have vs should have)",
            content: "• Estructura Invariable: Modal + HAVE (nunca has/had) + Participio Pasado.\n• MUST HAVE: Deducción casi segura (~95%). 'The truck must have left' = Seguro que salió.\n• SHOULD HAVE: Crítica o arrepentimiento. 'We should have checked' = Debimos haber comprobado.\n• COULD HAVE: Oportunidad perdida / Posibilidad. 'We could have won' = Pudimos haber ganado."
        },
        {
            title: "Reported Speech + Passive Voice",
            content: "• La Regla de Oro: Haz las transformaciones por separado para no colapsar. Primero pasa la frase a voz pasiva ('The order is being shipped'). Segundo, aplica el Backshift ('was being shipped').\n• Past Continuous Passive: 'WAS/WERE + BEING + Participio Pasado'. Los 3 elementos son inamovibles."
        },
        {
            title: "Interferencia del Español ('the' vs 'de')",
            content: "• El Problema: El cerebro de Sergio procesa la frase en español y en ocasiones se le 'cuela' la preposición 'de' queriendo escribir 'the'. Hay que forzar un 'modo inglés' antes de empezar un ejercicio escrito para evitar escribir palabras inventadas como 'departured' o la palabra española 'de'."
        }
    ],
    theory: [
        {
            title: "Reported Speech + Passive Voice (Estructura Rota)",
            priority: "Alta",
            problem: `Sergio escribió: *"The order was shipping the order"* en lugar de *"The order was being shipped"*.`,
            whyItHappens: `Combinar dos transformaciones simultáneas (Reported + Pasiva) sobrepasa la memoria de trabajo y la estructura colapsa.`,
            rule: `Primero transforma a Pasiva mentalmente ("is being shipped"). Luego, aplica el Backshift propio del Reported Speech ("was being shipped"). NUNCA cambies el orden de **was/were + being + participio**.`,
            trick: `Separa el proceso en dos pasos. No intentes hacerlo todo de golpe en tiempo real.`
        },
        {
            title: "Perfect Modals ('Could have' vs 'Must have')",
            priority: "Media",
            problem: `*"It **could have** left before dawn"* (para hablar de una deducción lógica de algo que SEGURO pasó).`,
            whyItHappens: `Confusión en la función de cada modal. "Could have" = oportunidad perdida. "Must have" = deducción matemática/segura.`,
            rule: `**Must have** = Deducción casi 100% segura.\n**Should have** = Arrepentimiento.\n**Could have** = Posibilidad.\nEl "HAVE" nunca se altera (nada de must has o should had).`,
            trick: `Si quieres decir "Seguro que pasó", usa **must have**. Si quieres quejarte de algo que se hizo mal, usa **should have**.`
        },
        {
            title: "Interferencia Literal del Español",
            priority: "Alta",
            problem: `*1. "we can't consolidate **de** diferent orders"*\n*2. "departured" (verbo inventado a partir de "departure")*`,
            whyItHappens: `El cerebro de Sergio aún traduce frase por frase en tiempo real. La preposición española "de" se infiltró en la escritura. Y un sustantivo "-ure" se convirtió erróneamente en verbo.`,
            rule: `1. Los sustantivos terminados en "-ure" (departure, failure) NUNCA se conjugan. Usa el verbo base ("departed", "failed").\n2. Bloquea el "spanglish". El artículo es "the".`,
            trick: `Haz una pausa intencionada de 2 segundos antes de escribir para cambiar mentalmente al "modo inglés".`
        },
        {
            title: "Preposiciones Logísticas ('In' vs 'On' the truck)",
            priority: "Media",
            problem: `*"consolidate the different orders **in** the truck"* -> *"**on** the truck"*`,
            whyItHappens: `En español, "en el camión" significa tanto dentro como cargado sobre él.`,
            rule: `Vehículos donde puedes caminar o para carga (truck, bus, plane, ship) usan **ON**. Vehículos de los que te sientas (car, van) usan **IN**. Toda carga va **ON** the truck/pallet.`,
            trick: `En Supply Chain, la carga siempre va **ON** (encima) de algo.`
        },
        {
            title: "Adjetivo vs Adverbio (2ª Aparición)",
            priority: "Alta",
            problem: `*"get the **completly** shipment"* -> *"**complete** shipment"*`,
            whyItHappens: `Persistencia en usar "-ly" para describir cosas en lugar de acciones.`,
            rule: `Adjetivo (complete) -> Modifica sustantivos (shipment).\nAdverbio (completely) -> Modifica verbos (finished).`,
            trick: `Si la palabra que le sigue es un sustantivo (Meeting, Shipment), quita el -LY.`
        }
    ],
    pronunciation: [
        {
            word: "Variance",
            phonetics: "/ˈveə.ri.əns/",
            description: "Es VEA-ri-ans. La E inicial se ensancha ligeramente."
        },
        {
            word: "Receive",
            phonetics: "/rɪˈsiːv/",
            description: "Suena fuerte el SIIV, la E es sorda y la vibración se va a la V."
        }
    ],
    speaking: [
        {
            prompt: "Describe an error that happened last week using Perfect Modals (What should have happened? What must have gone wrong?).",
            duration: 90
        },
        {
            prompt: "Explain the difference between Fill Rate and Days of Supply using a warehouse example.",
            duration: 90
        }
    ],
    flashcards: [
        {
            front: "Seguro que ha ocurrido",
            back: "Must have happened",
            phonetic: "/mʌst hæv ˈhæp.ənd/",
            example: "The driver must have taken a wrong turn.",
            tip: "Deducción lógica extrema (~95% seguro)."
        },
        {
            front: "Deberíamos haber revisado",
            back: "Should have checked",
            phonetic: "/ʃʊd hæv tʃekt/",
            example: "We should have checked the stock before ordering.",
            tip: "Uso absoluto para expresar arrepentimientos profesionales."
        },
        {
            front: "Comparativa Interanual",
            back: "YoY (Year-over-Year)",
            phonetic: "/jɪər ˈəʊ.vər jɪər/",
            example: "Our profits increased 15% YoY.",
            tip: "Mejor que decir 'compared to last year'."
        },
        {
            front: "Desviación (KPI)",
            back: "Variance",
            phonetic: "/ˈveə.ri.əns/",
            example: "The variance was $5,000 above budget.",
            tip: "Diferencia matemática entre lo planeado y la realidad."
        },
        {
            front: "En el camión (carga)",
            back: "On the truck",
            phonetic: "/ɒn ðə trʌk/",
            example: "Load the pallets on the truck.",
            tip: "❌ No digas 'In the truck' cuando hables de colocar mercancía logística."
        }
    ],
    quiz: class7Quiz
};
