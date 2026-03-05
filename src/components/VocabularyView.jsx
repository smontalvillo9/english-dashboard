import React from 'react';
import { getAllClasses } from '../data';
import { BookA, TrendingUp, Key } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function VocabularyView() {
    const { selectedClassId } = useOutletContext();
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);
    const allVocab = classes.flatMap(c => c.vocabulary);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Vocabulario B2/C1</h1>
                <p className="text-gray-400 mt-1">Upgrade activo y contexto real para Logística</p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-4">
                <Key className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                    <h4 className="font-semibold text-emerald-300">Teoría: Vocabulario Duradero y Upgrade Activo</h4>
                    <p className="text-sm text-emerald-200/70 mt-1 leading-relaxed">
                        Un adulto no aprende vocabulario por listas, sino por necesidad funcional (familias de palabras y contexto). En entorno profesional, la diferencia entre B1 y C1 no es no cometer errores, sino el <strong>"Upgrade Activo"</strong>: sustituir de forma consciente verbos fáciles por sus equivalentes premium (ej. 'use' → 'leverage', 'make better' → 'streamline').
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allVocab.map((v, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white font-display mb-1">{v.word}</h3>
                                {v.phonetics && <p className="text-sm font-mono text-gray-500">{v.phonetics}</p>}
                            </div>
                            <span className="px-2 py-1 rounded text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                C1 Focus
                            </span>
                        </div>

                        <p className="text-gray-300 mb-4 font-medium">{v.meaning}</p>

                        <div className="mt-auto space-y-4">
                            <div className="p-3 bg-gray-950/50 rounded-lg border border-gray-800 text-sm text-gray-400 italic">
                                "{v.example}"
                            </div>

                            {(v.activeUpgrade || v.upgrade || v.tip) && (
                                <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg flex items-start gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-bold text-emerald-500 mb-1 uppercase tracking-wider">Active Upgrade</p>
                                        <p className="text-xs text-emerald-200/80 font-medium">
                                            {v.activeUpgrade || v.upgrade || v.tip}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
