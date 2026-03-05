import React, { useState, useEffect } from 'react';
import { getAllClasses } from '../data';
import { Mic, Timer, Play, Square, MessageSquare } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function SpeakingView() {
    const { selectedClassId } = useOutletContext();
    const allClasses = getAllClasses();
    const classes = selectedClassId === 'all' ? allClasses : allClasses.filter(c => c.id === selectedClassId);
    const prompts = classes.flatMap(c => c.speaking);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Speaking Lab</h1>
                <p className="text-gray-400 mt-1">Práctica bajo presión con temporizador real</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 flex gap-4 shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-400 shrink-0" />
                <div>
                    <h4 className="font-semibold text-purple-300">Teoría: Usar tu Expertise y evitar "Muletillas"</h4>
                    <p className="text-sm text-purple-200/70 mt-1 leading-relaxed">
                        Como Director de Logística, tienes autoridad. Si dudas y dices "ehmmm...", destruyes esa autoridad. Si necesitas pensar, usa <strong>"Fillers" Nativos</strong>: "That's a good question, honestly...", "To be completely straightforward...", o simplemente haz una pausa silenciosa. Selecciona un prompt, dale al Play, y grábate con tu teléfono. No pares el audio aunque cometas errores.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto pb-8">
                {prompts.map((p, i) => (
                    <PromptCard key={i} prompt={p} />
                ))}
            </div>
        </div>
    );
}

function PromptCard({ prompt }) {
    const [timeLeft, setTimeLeft] = useState(prompt.timeLimit);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => {
        if (timeLeft === 0) setTimeLeft(prompt.timeLimit);
        setIsActive(!isActive);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const isWarning = timeLeft > 0 && timeLeft <= 10;

    return (
        <div className={`glass-panel p-6 rounded-2xl border-t-4 transition-colors duration-300 ${isActive ? 'border-t-purple-500 shadow-purple-500/10' : 'border-t-transparent'
            }`}>
            <h3 className="text-lg font-bold text-white mb-4 leading-snug">"{prompt.prompt}"</h3>

            <div className="p-3 bg-indigo-500/5 border border-indigo-500/20 rounded-lg mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">Teacher's Tips:</p>
                <p className="text-sm text-indigo-200/80">{prompt.tips}</p>
            </div>

            <div className="flex items-center justify-between mt-auto">
                <div className={`flex items-center gap-2 font-mono text-3xl font-bold ${isActive ? (isWarning ? 'text-rose-500 animate-pulse' : 'text-purple-400') : 'text-gray-500'
                    }`}>
                    <Timer className="w-6 h-6" />
                    {minutes}:{seconds.toString().padStart(2, '0')}
                </div>

                <button
                    onClick={toggleTimer}
                    className={`px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all ${isActive
                        ? 'bg-rose-500/20 text-rose-500 hover:bg-rose-500/30'
                        : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                        }`}
                >
                    {isActive ? (
                        <><Square className="w-4 h-4 fill-current" /> Stop</>
                    ) : (
                        <><Play className="w-4 h-4 fill-current" /> {timeLeft === 0 ? 'Retry' : 'Start'}</>
                    )}
                </button>
            </div>
        </div>
    );
}
