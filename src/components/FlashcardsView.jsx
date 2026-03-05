import React, { useState } from 'react';
import { getAllClasses, getExtraVocab } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, BrainCircuit } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function FlashcardsView() {
    const { selectedClassId } = useOutletContext();
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);
    const allCards = classes.flatMap(c =>
        c.vocabulary.map((v, i) => ({
            id: `${c.id}-vocab-${i}`,
            front: v.meaning, // Spanish to guess
            back: v.word, // English
            phonetic: v.phonetic,
            example: v.example,
            type: v.type,
            tip: v.upgrade || "Úsala en tu próxima reunión en lugar de opciones más básicas."
        }))
    );

    const extraCards = getExtraVocab().map((v, i) => ({
        id: `extra-vocab-${i}`,
        front: v.meaning,
        back: v.word,
        phonetic: v.phonetic,
        example: v.example,
        type: v.type,
        tip: v.tip
    }));

    const [filter, setFilter] = useState('All'); // 'All', 'Extra Vocab'
    const cardsToShow = filter === 'All' ? allCards : extraCards;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Flashcards 3D</h1>
                <p className="text-gray-400 mt-1">Memorización activa mediante repetición espaciada</p>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex gap-4 shrink-0">
                <BrainCircuit className="w-6 h-6 text-indigo-400 shrink-0" />
                <div>
                    <h4 className="font-semibold text-indigo-300">Teoría: Spaced Repetition (Repetición Espaciada)</h4>
                    <p className="text-sm text-indigo-200/70 mt-1 leading-relaxed">
                        Lee el concepto en español. Oblígate a recordar la palabra en inglés y su pronunciación antes de darle la vuelta. El esfuerzo crea memoria C1.
                    </p>
                </div>
            </div>

            <div className="flex gap-2 bg-gray-900 p-1 rounded-xl border border-gray-800 w-fit">
                {['All', 'Extra Vocab'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === f
                            ? 'bg-indigo-500 text-white shadow-md'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                    >
                        {f === 'All' ? 'Vocabulario de Clase' : 'Vocabulario Extra (Bonus)'}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] overflow-y-auto pb-8">
                {cardsToShow.map((card) => (
                    <Flashcard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}

function Flashcard({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-full perspective-1000 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front (Spanish) */}
                <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl p-6 flex flex-col justify-center items-center text-center border-t border-t-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:border-indigo-500/30 transition-colors">
                    <div className="absolute top-4 right-4 text-gray-600 group-hover:text-indigo-400 transition-colors">
                        <RefreshCcw className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                        Español &gt; Inglés
                    </span>
                    <h2 className="text-xl font-display font-bold text-white mb-2 leading-tight">{card.front}</h2>
                    <p className="text-gray-400 text-xs mt-2 italic">Pulsa para ver respuesta</p>
                </div>

                {/* Back (English) */}
                <div className="absolute inset-0 backface-hidden glass-panel bg-indigo-900/40 border-indigo-500/30 rounded-2xl p-6 flex flex-col justify-center rotate-y-180 text-left">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{card.back}</h3>
                            <p className="text-indigo-300 font-mono text-xs">{card.phonetic}</p>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded bg-indigo-500/10">
                            {card.type}
                        </span>
                    </div>

                    <div className="w-full h-px bg-indigo-500/30 my-3" />

                    <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
                        <p className="text-sm text-gray-200 italic mb-3">
                            "{card.example}"
                        </p>
                        <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-500/20">
                            <p className="text-xs font-semibold text-indigo-300 mb-1">Teacher's Tip:</p>
                            <p className="text-xs text-indigo-200/80 leading-relaxed">{card.tip}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
