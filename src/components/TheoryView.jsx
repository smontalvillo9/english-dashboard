import React, { useState } from 'react';
import { BookOpen, GraduationCap, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { getAllClasses } from '../data';

export default function TheoryView() {
    const { selectedClassId } = useOutletContext();
    const availableClasses = getAllClasses();
    const [expandedIds, setExpandedIds] = useState([]);

    const toggleExpand = (id) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    // Filter logic similar to other components
    const classesToProcess = selectedClassId === 'all'
        ? availableClasses
        : availableClasses.filter(c => c.id === selectedClassId);

    // Extract all theory blocks
    const allTheories = classesToProcess.flatMap(cls => {
        if (!cls?.theory) return [];
        return cls.theory.map((item, index) => ({
            ...item,
            classId: cls.id,
            classDate: cls.date,
            uniqueId: `${cls.id}-theory-${index}`
        }));
    });

    if (allTheories.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center glass-panel rounded-2xl animate-in fade-in duration-700">
                <BookOpen className="w-16 h-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-medium text-gray-300">Aún no hay teoría disponible</h3>
                <p className="text-gray-500 mt-2 max-w-sm">
                    Selecciona otra clase o el dashboard global para explorar las lecciones teóricas.
                </p>
            </div>
        );
    }

    // Helper to determine priority icon color
    const getPriorityColor = (priority) => {
        if (!priority) return 'text-gray-400';
        const p = priority.toLowerCase();
        if (p.includes('alta')) return 'text-red-500';
        if (p.includes('media')) return 'text-yellow-500';
        if (p.includes('baja')) return 'text-emerald-500';
        return 'text-blue-500';
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center justify-center gap-3">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                    Deep Learning Theory
                </h1>
                <p className="text-gray-400 mt-2">
                    Análisis clínico de patrones lingüísticos para dar el salto definitivo al nivel C1.
                </p>
            </div>

            <div className="space-y-4">
                {allTheories.map((theory) => (
                    <motion.div
                        key={theory.uniqueId}
                        initial={false}
                        animate={{ backgroundColor: expandedIds.includes(theory.uniqueId) ? 'rgba(30, 41, 59, 0.7)' : 'rgba(15, 23, 42, 0.4)' }}
                        className="border border-gray-800 rounded-xl overflow-hidden transition-colors"
                    >
                        {/* Header (Clickable) */}
                        <div
                            onClick={() => toggleExpand(theory.uniqueId)}
                            className="p-5 cursor-pointer flex items-start gap-4 hover:bg-gray-800/50 transition-colors"
                        >
                            <div className="shrink-0 mt-1">
                                <AlertCircle className={`w-5 h-5 ${getPriorityColor(theory.priority)}`} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-lg font-semibold text-gray-200 leading-snug">
                                        {theory.title}
                                    </h3>
                                    {theory.priority && (
                                        <span className="shrink-0 text-xs font-medium px-2 py-1 rounded bg-gray-800 text-gray-400 uppercase tracking-wider">
                                            {theory.priority}
                                        </span>
                                    )}
                                </div>
                                {!expandedIds.includes(theory.uniqueId) && (
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-1">
                                        {theory.overview || theory.problem || "Haz clic para leer el análisis completo..."}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {expandedIds.includes(theory.uniqueId) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 space-y-6 bg-slate-900/40">

                                        {/* El Problema */}
                                        {theory.problem && (
                                            <div>
                                                <h4 className="text-sm font-bold text-red-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                                    El Problema
                                                </h4>
                                                <div className="text-gray-300 leading-relaxed bg-gray-900/50 p-4 rounded-lg border border-red-900/30">
                                                    <MarkdownFormat content={theory.problem} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Por qué pasa */}
                                        {theory.whyItHappens && (
                                            <div>
                                                <h4 className="text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                                    ¿Por qué sucede? (Interferencia)
                                                </h4>
                                                <div className="text-gray-300 leading-relaxed bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                                                    <MarkdownFormat content={theory.whyItHappens} />
                                                </div>
                                            </div>
                                        )}

                                        {/* La Regla */}
                                        {theory.rule && (
                                            <div>
                                                <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                    La Regla Estructural
                                                </h4>
                                                <div className="text-white leading-relaxed bg-blue-900/10 p-5 rounded-lg border border-blue-900/40">
                                                    <MarkdownFormat content={theory.rule} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Truco / Hack */}
                                        {theory.trick && (
                                            <div>
                                                <h4 className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                    <Sparkles className="w-4 h-4" />
                                                    El Truco Nativo
                                                </h4>
                                                <div className="text-emerald-100 font-medium leading-relaxed bg-emerald-900/20 p-4 rounded-lg border border-emerald-900/50">
                                                    <MarkdownFormat content={theory.trick} />
                                                </div>
                                            </div>
                                        )}

                                        <div className="text-right text-xs text-gray-500 font-mono mt-4 pt-4 border-t border-gray-800/50">
                                            Origen: {theory.classId.replace('-', ' ').toUpperCase()}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Simple Helper to map \n to <br/> and basic bolding **text** to <strong>
const MarkdownFormat = ({ content }) => {
    if (!content) return null;

    // Split by lines
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');

    return (
        <div className="space-y-3">
            {paragraphs.map((p, i) => {
                // If line starts with a hyphen/bullet, format as list item
                if (p.trim().startsWith('-') || p.trim().startsWith('•')) {
                    return (
                        <div key={i} className="flex pl-4">
                            <span className="mr-2 text-gray-500">•</span>
                            <span dangerouslySetInnerHTML={{ __html: formatInline(p.substring(1)) }} />
                        </div>
                    );
                }

                // Normal paragraph
                return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(p) }} />
                );
            })}
        </div>
    );
};

// Extremely simple inline formatter
const formatInline = (text) => {
    let t = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
    t = t.replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>');
    // Replace markdown checks/crosses
    t = t.replace(/✅/g, '<span class="text-emerald-400 mr-1">✅</span>');
    t = t.replace(/❌/g, '<span class="text-red-400 mr-1">❌</span>');
    t = t.replace(/→/g, '<span class="text-gray-500 mx-1">→</span>');
    return t;
};
