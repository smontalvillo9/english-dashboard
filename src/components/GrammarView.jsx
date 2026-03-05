import React, { useState } from 'react';
import { getAllClasses } from '../data';
import { BookOpenCheck, ChevronDown, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

export default function GrammarView() {
    const { selectedClassId } = useOutletContext();
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);
    const grammar = classes.flatMap(c => c.grammar);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Gramática Estructural</h1>
                <p className="text-gray-400 mt-1">Reglas clave destiladas de tus errores en clase</p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-4 shrink-0">
                <PenTool className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                    <h4 className="font-semibold text-blue-300">Teoría: Estudiar gramática eficazmente</h4>
                    <p className="text-sm text-blue-200/70 mt-1 leading-relaxed">
                        Aprender gramática abstracta a nivel B1-B2 no funciona. Funciona interiorizar <strong>patrones</strong>. Por ejemplo, en los condicionales, no intentes recordar la regla del Type 3, grábate a fuego una frase modelo ("If I had studied, I would have passed") y aplícala a todo. Despliega las pestañas para ver las explicaciones más importantes basadas en tus propios fallos.
                    </p>
                </div>
            </div>

            <div className="space-y-4 overflow-y-auto pb-8">
                {grammar?.map((item, i) => (
                    <Accordion key={i} title={item.title || item.topic} content={item.content || ""} />
                ))}
            </div>
        </div>
    );
}

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-panel rounded-2xl overflow-hidden border border-gray-800 transition-colors hover:border-blue-500/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 bg-gray-900/40 focus:outline-none focus:bg-gray-800/80 transition-colors"
            >
                <span className="text-lg font-bold text-gray-200 text-left">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-gray-500"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-950/50"
                    >
                        <div className="p-6 pt-2 border-t border-gray-800 text-gray-300 leading-relaxed text-sm">
                            {content.split('\n').map((line, idx) => {
                                if (!line.trim()) return <div key={idx} className="h-2" />;
                                const isBullet = line.trim().startsWith('•');
                                if (isBullet) {
                                    const cleanLine = line.replace('•', '').trim();
                                    const parts = cleanLine.split(':');
                                    return (
                                        <p key={idx} className="relative pl-5 mb-2">
                                            <span className="absolute left-0 top-0 text-blue-500 font-bold">•</span>
                                            {parts.length > 1 ? (
                                                <>
                                                    <strong className="text-blue-300">{parts[0]}:</strong>
                                                    {parts.slice(1).join(':')}
                                                </>
                                            ) : (
                                                cleanLine
                                            )}
                                        </p>
                                    );
                                }
                                return <p key={idx} className="mb-2 text-gray-300">{line}</p>;
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
