import React from 'react';
import { getAllClasses } from '../data';
import { Ear, Volume2, Fingerprint } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function PronunciationView() {
    const { selectedClassId } = useOutletContext();
    const allClassesList = getAllClasses();
    const classes = selectedClassId === 'all' ? allClassesList : allClassesList.filter(c => c.id === selectedClassId);
    const pronunciation = classes.flatMap(c => c.pronunciation);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight">Clínica de Pronunciación</h1>
                <p className="text-gray-400 mt-1">Corrección de acento y sonidos inexistentes en español</p>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex gap-4">
                <Fingerprint className="w-6 h-6 text-orange-400 shrink-0" />
                <div>
                    <h4 className="font-semibold text-orange-300">Teoría: El Acento Tónico (Stress) y el "Schwa"</h4>
                    <p className="text-sm text-orange-200/70 mt-1 leading-relaxed">
                        El español es una lengua "syllable-timed" (cada sílaba dura lo mismo). El inglés es "stress-timed" (sólo las sílabas acentuadas son fuertes, las demás se reducen a un sonido débil llamado Schwa /ə/). Si pronuncias cada letra en "logistics", sonará a robot (o a "paralympics" para la IA). Busca la sílaba en MAYÚSCULAS y golpea esa con fuerza.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pronunciation?.map((item, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                        {/* Background graphic */}
                        <div className="absolute -right-4 -bottom-4 opacity-5">
                            <Volume2 className="w-32 h-32 text-orange-500" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">{item.word}</h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">Evita (Típico Español):</p>
                                    <p className="text-lg font-mono text-gray-400 line-through decoration-rose-500/50">{item.wrongSound}</p>
                                </div>

                                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl inline-block mt-2">
                                    <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">Nativo (GOLPEA EL ACENTO):</p>
                                    <p className="text-2xl font-mono text-orange-300 font-bold">{item.correctSound}</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-orange-500 pl-3">
                                    "{item.theory}"
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
