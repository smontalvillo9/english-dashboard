import React, { useState } from 'react';
import { CheckSquare, Flame, Trophy } from 'lucide-react';

const initialTasks = [
    { id: 1, text: "4A: Corregir 5 frases erróneas de Present Continuous (Ej: We are having problems)", isDone: false },
    { id: 2, text: "4B: Elegir entre Past Simple o Present Perfect en 5 ejemplos logísticos", isDone: false },
    { id: 3, text: "4C: Buscar, definir y usar en una frase 5 nuevos términos de Supply Chain", isDone: false },
    { id: 4, text: "5A: Transformar 5 frases de Supply Chain de Activa a Pasiva", isDone: false },
    { id: 5, text: "5B: Elegir el tiempo pasivo correcto (being vs been / was vs has been)", isDone: false },
    { id: 6, text: "5C: Escribir un párrafo (100-150 words) sobre Clarel usando 3 pasivas y Vocabulario", isDone: false }
];

export default function TasksView() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t));
    };

    const completedCount = tasks.filter(t => t.isDone).length;
    const progress = (completedCount / tasks.length) * 100;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Rutina Diaria de Estudio</h1>
                <p className="text-gray-400 mt-1">El secreto de la fluidez es la repetición constante</p>
            </div>

            <div className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h4 className="font-bold text-gray-300">Progreso Diario</h4>
                        <p className="text-sm text-gray-500">{completedCount} de {tasks.length} completadas</p>
                    </div>
                    <Flame className={`w-8 h-8 ${progress === 100 ? 'text-orange-500 animate-pulse' : 'text-gray-700'}`} />
                </div>

                <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-700 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 flex gap-4">
                <Trophy className="w-6 h-6 text-yellow-500 shrink-0" />
                <div>
                    <h4 className="font-semibold text-yellow-400">Teoría: Consistencia vs Intensidad (Mínimo Viable Diario)</h4>
                    <p className="text-sm text-yellow-200/70 mt-1 leading-relaxed">
                        Es mejor hacer 5 minutos de inglés CADA DÍA (mínimo viable) prestando atención al 100%, que intentar estudiar 2 horas el domingo (intensidad) cuando estás cansado. Esta lista de tareas es la base para forjar hábitos. No vayas a dormir sin haber cruzado al menos 3 de estas tareas.
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`glass-panel p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${task.isDone ? 'bg-emerald-900/20 border-emerald-500/30' : 'hover:bg-gray-800 hover:border-gray-700'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${task.isDone ? 'bg-emerald-500 border-emerald-500' : 'border-gray-600'
                            }`}>
                            {task.isDone && <CheckSquare className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`font-medium transition-colors ${task.isDone ? 'text-emerald-500 line-through decoration-emerald-500/50' : 'text-gray-300'
                            }`}>
                            {task.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
