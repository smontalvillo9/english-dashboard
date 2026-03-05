import React, { useState } from 'react';
import { getAllClasses, getCommonErrors } from '../data';
import { Filter, XCircle, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function ErrorsView() {
    const { selectedClassId } = useOutletContext();
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);
    const allErrors = classes.flatMap(c => c.errors);
    const typicalErrors = getCommonErrors();

    const [filter, setFilter] = useState('All'); // 'All', 'Student Error', 'Teacher Addition', 'Typical Error'

    let filteredErrors = [];
    if (filter === 'All') {
        filteredErrors = allErrors;
    } else if (filter === 'Typical Error') {
        filteredErrors = typicalErrors;
    } else {
        filteredErrors = allErrors.filter(e => e.type === filter);
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white tracking-tight">Análisis de Errores</h1>
                    <p className="text-gray-400 mt-1 flex items-center gap-2">
                        Identifica patrones para hablar como un nativo
                    </p>
                </div>

                <div className="flex gap-2 bg-gray-900 p-1 rounded-xl border border-gray-800">
                    {['All', 'Student Error', 'Teacher Addition', 'Typical Error'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === f
                                ? 'bg-indigo-500 text-white shadow-md'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            {f === 'All' ? 'Clase (Recientes)' : f === 'Student Error' ? 'Tus Errores' : f === 'Teacher Addition' ? 'Teacher Insights' : 'Errores Típicos (Native)'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Theory Box */}
            {filter === 'Teacher Addition' && (
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex gap-4">
                    <GraduationCap className="w-6 h-6 text-indigo-400 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-indigo-300">¿Por qué el profesor genera "Teacher Insights"?</h4>
                        <p className="text-sm text-indigo-200/70 mt-1">
                            Como tutor, no solo corrijo lo que dices, sino que anticipo problemas. Si cometes un error con "like a" en vez de "as a", genero variaciones de ese mismo error para que veas el patrón y no caigas en la trampa en otros contextos de tu trabajo (Logística).
                        </p>
                    </div>
                </div>
            )}

            {/* Errors List */}
            <div className="space-y-4">
                {filteredErrors.map((err, i) => (
                    <div key={i} className="glass-panel rounded-2xl overflow-hidden group">

                        {/* Top Row: Wrong vs Correct */}
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-b border-gray-800">
                            <div className="p-5 bg-rose-500/5 relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <XCircle className="w-5 h-5 text-rose-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Incorrecto</span>
                                    {err.type === 'Teacher Addition' && (
                                        <span className="ml-auto px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                                            Simulación
                                        </span>
                                    )}
                                </div>
                                <p className="text-lg font-medium text-rose-100/90 line-through decoration-rose-500/50">
                                    {err.userError || err.wrong}
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-500/5 relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Forma Natural (Nativa)</span>
                                </div>
                                <p className="text-lg font-medium text-emerald-300">
                                    {err.correction || err.correct}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Row: Theory */}
                        <div className="p-5 bg-gray-900/40">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                                        ¿Por qué usamos esto y no lo otro?
                                    </h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {err.teacherInsight || err.teacherTheory || err.explanation || "Ver justificación del profesor a la derecha."}
                                    </p>
                                </div>

                                <div className="relative pl-4">
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500/50 rounded-full" />
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        Teacher's Insight
                                    </h4>
                                    <p className="text-sm text-indigo-200/80 leading-relaxed italic">
                                        {err.teacherTheory || err.teacherInsight || err.explanation}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}
