import React, { useState, useEffect } from 'react';
import { Gamepad2, AlertTriangle, ArrowRight, RotateCcw, BrainCircuit, Target, Flame } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { getAllClasses } from '../data';

// Helper to shuffle array
const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function QuizView() {
    const { selectedClassId } = useOutletContext();
    const allClasses = getAllClasses();

    // States
    const [difficulty, setDifficulty] = useState('standard'); // 'standard' or 'hard'
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const generateQuizSession = (currentScore = 0) => {
        const classes = selectedClassId === 'all' ? allClasses : allClasses.filter(c => c.id === selectedClassId);
        let pool = classes.flatMap(c => (c.quiz || []).map(q => ({ ...q, classId: c.id })));
        pool = pool.filter(q => q.difficulty === difficulty);

        // Shuffle and take max 15
        const shuffled = shuffleArray(pool);
        const finalQuestions = shuffled.slice(0, 15);

        // Randomize options for each question
        const finalized = finalQuestions.map(q => {
            const correctAnswerText = q.correctAnswer;
            const shuffledOptions = shuffleArray([...q.options]);
            const correctIndex = shuffledOptions.indexOf(correctAnswerText);
            return {
                ...q,
                options: shuffledOptions,
                correctIndex: correctIndex
            };
        });

        setSessionQuestions(finalized);
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(currentScore);
    };

    useEffect(() => {
        // Only reset completely when difficulty or class changes
        generateQuizSession(0);
    }, [selectedClassId, difficulty]);

    const handleSelect = (idx) => {
        if (showResult) return;
        setSelected(idx);
        setShowResult(true);
        if (idx === sessionQuestions[currentQ].correctIndex) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        setSelected(null);
        setShowResult(false);
        setCurrentQ(currentQ + 1);
    };

    const resetQuiz = () => {
        generateQuizSession(0);
    };

    const question = sessionQuestions[currentQ];
    const isComplete = currentQ >= sessionQuestions.length && sessionQuestions.length > 0;
    const hasQuestions = sessionQuestions.length > 0;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto h-full flex flex-col justify-start pt-4 pb-12">

            <div className="flex justify-between items-end mb-2">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white tracking-tight">Interactive Quiz Setup</h1>
                    <p className="text-gray-400 mt-1">15 situaciones simuladas para validar tu interiorización C1</p>
                </div>

                <div className="flex gap-2 bg-gray-900 p-1 rounded-xl border border-gray-800">
                    <button
                        onClick={() => setDifficulty('standard')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${difficulty === 'standard'
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                    >
                        <Target className="w-4 h-4" /> Standard (B1-B2)
                    </button>
                    <button
                        onClick={() => setDifficulty('hard')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${difficulty === 'hard'
                            ? 'bg-rose-500 text-white shadow-md'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                    >
                        <Flame className="w-4 h-4" /> Hard (C1-C2)
                    </button>
                </div>
            </div>

            {!hasQuestions ? (
                <div className="h-48 flex flex-col items-center justify-center space-y-4 glass-panel rounded-2xl border border-gray-800">
                    <AlertTriangle className="w-12 h-12 text-gray-600" />
                    <h2 className="text-xl font-display font-semibold text-gray-400">No hay suficientes preguntas para esta selección</h2>
                </div>
            ) : (
                <>
                    {!isComplete && (
                        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 flex gap-4 shrink-0">
                            <BrainCircuit className="w-6 h-6 text-pink-400 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-pink-300">Teoría: El error no te define, te refina</h4>
                                <p className="text-sm text-pink-200/70 mt-1 leading-relaxed">
                                    Lee la situación con calma. Imagina que estás en la oficina. Responde, falla (o acierta) y lee urgentemente la explicación de por qué es la estructura ideal según el Teacher.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex-1 overflow-y-auto min-h-[500px]">
                        {isComplete ? (
                            <div className="text-center py-16">
                                <h2 className="text-5xl font-display font-bold text-white mb-4">Quiz Completado</h2>
                                <p className="text-xl text-gray-400 mb-12">Has puntuado <span className="text-indigo-400 font-bold">{score}</span> de {sessionQuestions.length}</p>

                                <button
                                    onClick={resetQuiz}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 mx-auto"
                                >
                                    <RotateCcw className="w-5 h-5" /> Repetir Quiz (Preguntas Aleatorias)
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                                    <span className="text-sm font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                                        Pregunta {currentQ + 1} de {sessionQuestions.length}
                                    </span>
                                    <span className="text-sm text-gray-500 font-mono font-bold bg-gray-900 px-3 py-1.5 rounded-full">Puntos: {score}</span>
                                </div>

                                <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 mb-8 shadow-inner">
                                    <h3 className="text-xl font-medium text-gray-100 leading-relaxed">{question.question}</h3>
                                </div>

                                <div className="space-y-4">
                                    {question.options.map((opt, idx) => {
                                        let btnStyle = "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600";

                                        if (showResult) {
                                            if (idx === question.correctIndex) {
                                                btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-medium ring-1 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                            } else if (idx === selected) {
                                                btnStyle = "bg-rose-500/20 border-rose-500 text-rose-400 line-through decoration-rose-500/50";
                                            } else {
                                                btnStyle = "bg-gray-900/50 border-gray-800 text-gray-600 opacity-60";
                                            }
                                        } else if (selected === idx) {
                                            btnStyle = "bg-indigo-500 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]";
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleSelect(idx)}
                                                disabled={showResult}
                                                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-lg ${btnStyle}`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${showResult && idx === question.correctIndex ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-950/50 text-gray-500'}`}>
                                                        {String.fromCharCode(65 + idx)}
                                                    </span>
                                                    <span className="mt-1">{opt}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {showResult && (
                                    <div className="mt-8 animate-in slide-in-from-bottom-4 duration-500">
                                        <div className={`p-6 rounded-xl mb-8 border backdrop-blur-sm shadow-xl ${selected === question.correctIndex
                                            ? 'bg-emerald-500/10 border-emerald-500/30'
                                            : 'bg-rose-500/10 border-rose-500/30'
                                            }`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                {selected === question.correctIndex ? (
                                                    <span className="font-bold text-emerald-400 flex items-center gap-2">
                                                        ✓ Excelente deducción
                                                    </span>
                                                ) : (
                                                    <span className="font-bold text-rose-400 flex items-center gap-2">
                                                        ✗ Oportunidad de Aprendizaje
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-200 leading-relaxed text-lg">{question.explanation}</p>
                                        </div>

                                        <button
                                            onClick={nextQuestion}
                                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-6 py-5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                                        >
                                            Siguiente Situación <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
