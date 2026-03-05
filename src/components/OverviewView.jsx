import React from 'react';
import { getAggregateStats, getAllClasses } from '../data';
import { Target, TrendingUp, Clock, BookOpen, AlertCircle, Lightbulb } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function OverviewView() {
    const { selectedClassId } = useOutletContext();
    const stats = getAggregateStats(selectedClassId);
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Resumen Ejecutivo</h1>
                <p className="text-gray-400 mt-1">Progreso y métricas de tus sesiones de inglés B1 → B2</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Clases Completadas', value: stats.totalClasses, icon: BookOpen, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                    { label: 'Errores Corregidos', value: stats.totalErrorsResolved, icon: AlertCircle, color: 'text-rose-400', bg: 'bg-rose-500/10' },
                    { label: 'Vocabulario B2/C1', value: stats.totalVocabLearned, icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { label: 'Horas de Estudio', value: stats.studyHours, icon: Clock, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                ].map((kpi, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${kpi.bg}`}>
                            <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">{kpi.label}</p>
                            <p className="text-2xl font-bold text-white font-display mt-0.5">{kpi.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Timeline */}
                <div className="col-span-1 lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-semibold text-white mb-4">Timeline de Clases</h2>
                    <div className="space-y-4">
                        {classes.map((cls) => (
                            <div key={cls.id} className="glass-panel p-6 rounded-2xl border-l-4 border-l-indigo-500 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Target className="w-24 h-24" />
                                </div>

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 block">
                                            {cls.date} • {cls.duration}
                                        </span>
                                        <h3 className="text-xl font-bold text-white">{cls.overview.title}</h3>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-gray-800 text-xs font-medium text-gray-300 border border-gray-700">
                                        {cls.level}
                                    </span>
                                </div>

                                <div className="space-y-4 mt-2">
                                    {/* Abstract/Summary */}
                                    {cls.overview.classSummary && (
                                        <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-indigo-500/50 pl-3">
                                            {cls.overview.classSummary}
                                        </p>
                                    )}

                                    <div className="p-4 bg-gray-950/50 rounded-xl flex gap-3 items-start border border-gray-800/50">
                                        <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-200 mb-1">Teacher's Note (BigBrain)</p>
                                            <p className="text-sm text-gray-400 italic">"{cls.overview.teacherNote}"</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-gray-300 mb-2">Objetivos de la sesión:</p>
                                        <ul className="space-y-1.5">
                                            {cls.overview.objectives?.map((obj, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                                    <span className="leading-relaxed">{obj}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Theoretical Explanation */}
                                    {cls.overview.theoreticalExplanation && (
                                        <div className="bg-indigo-900/20 rounded-xl p-4 border border-indigo-500/20">
                                            <h4 className="text-sm font-semibold text-indigo-300 mb-2">Explicación Teórica</h4>
                                            <p className="text-sm text-indigo-100/80 leading-relaxed">
                                                {cls.overview.theoreticalExplanation}
                                            </p>
                                        </div>
                                    )}

                                    {/* Extra Learning Point */}
                                    {cls.overview.extraLearningPoint && (
                                        <div className="bg-emerald-900/20 rounded-xl p-4 border border-emerald-500/20 mt-4">
                                            <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4" />
                                                {cls.overview.extraLearningPoint.title}
                                            </h4>
                                            <p className="text-sm text-emerald-100/80 leading-relaxed">
                                                {cls.overview.extraLearningPoint.content}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How to use this app block */}
                <div className="col-span-1">
                    <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl p-6 sticky top-8">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <SparklesIcon /> Cómo usar esta app
                        </h2>

                        <div className="space-y-4">
                            <Instruction step="1" title="Revisa tus Errores" desc="Antes de cada clase, revisa la tabla de Errores para no repetirlos." />
                            <Instruction step="2" title="Flashcards Diarias" desc="Dedica 5 mins diarios a las tarjetas 3D para asentar vocabulario C1." />
                            <Instruction step="3" title="Speaking Lab" desc="Grábate respondiendo a los prompts con el temporizador activo." />
                            <Instruction step="4" title="Teacher Theory" desc="Lee las notas en amarillo que tu profesor nativo ha dejado para ti." />
                        </div>

                        <button className="w-full mt-6 py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                            Empezar Rutina Diaria
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

function SparklesIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-400">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
        </svg>
    );
}

function Instruction({ step, title, desc }) {
    return (
        <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">
                {step}
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-200">{title}</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
