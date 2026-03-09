// C:\Users\Usuario\Desktop\IA\Clases Inglés C1\english-dashboard\src\components\DashboardLayout.jsx
import React, { useState } from 'react';
import {
    LayoutDashboard,
    AlertCircle,
    BrainCircuit,
    BookA,
    Ear,
    Mic,
    BookOpen,
    BookOpenCheck,
    CheckSquare,
    Gamepad2
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { getAllClasses } from '../data';

const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Resumen' },
    { path: '/errors', icon: AlertCircle, label: 'Errores' },
    { path: '/flashcards', icon: BrainCircuit, label: 'Flashcards' },
    { path: '/vocabulary', icon: BookA, label: 'Vocabulario' },
    { path: '/pronunciation', icon: Ear, label: 'Pronunciación' },
    { path: '/speaking', icon: Mic, label: 'Speaking' },
    { path: '/grammar', icon: BookOpenCheck, label: 'Gramática' },
    { path: '/theory', icon: BookOpen, label: 'Teoría' },
    { path: '/tasks', icon: CheckSquare, label: 'Tareas' },
    { path: '/quiz', icon: Gamepad2, label: 'Quiz' },
];

export default function DashboardLayout() {
    const [selectedClassId, setSelectedClassId] = useState('all');
    const availableClasses = getAllClasses();

    return (
        <div className="flex h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-gray-800 bg-gray-900/50 flex flex-col backdrop-blur-sm relative z-10 shadow-2xl">
                <div className="p-6">
                    <h1 className="text-xl font-display font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Sergio's English
                    </h1>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Premium Dashboard</p>
                </div>

                <div className="px-6 mb-2">
                    <label className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-2 block">Modo de Visualización</label>
                    <div className="relative">
                        <select
                            value={selectedClassId}
                            onChange={(e) => setSelectedClassId(e.target.value)}
                            className="w-full bg-gray-950/80 border border-gray-700 hover:border-indigo-500 text-gray-200 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none transition-all cursor-pointer shadow-inner appearance-none pr-10"
                        >
                            <optgroup label="🌐 Global Dashboard" className="bg-gray-900 font-bold text-indigo-300">
                                <option value="all" className="text-gray-200">Ver Todas Las Clases (Mezclado)</option>
                            </optgroup>

                            <optgroup label="📚 Clases Específicas" className="bg-gray-900 font-bold text-purple-300">
                                {availableClasses.map((c, idx) => {
                                    if (!c || !c.overview) {
                                        console.error('INVALID CLASS DATA FOUND AT INDEX', idx, c);
                                    }
                                    return (
                                        <option key={c?.id || idx} value={c?.id || 'error'} className="text-gray-300 font-normal">
                                            👉 {c?.id?.replace('class-', 'Clase ') || 'Unknown'}: {c?.overview?.title || 'No Title Provided'}
                                        </option>
                                    );
                                })}
                            </optgroup>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-6 overflow-y-auto pb-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-indigo-500/10 text-indigo-400 shadow-[inset_2px_0_0_#818cf8]'
                                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium text-sm">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold shadow-lg">
                            SM
                        </div>
                        <div>
                            <p className="text-sm font-medium">Sergio M.</p>
                            <p className="text-xs text-gray-500">Nivel B1 → B2</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="p-8 relative z-10 min-h-full">
                    <Outlet context={{ selectedClassId }} />
                </div>
            </main>
        </div>
    );
}
