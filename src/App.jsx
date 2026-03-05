import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import OverviewView from './components/OverviewView';
import ErrorsView from './components/ErrorsView';
import FlashcardsView from './components/FlashcardsView';
import VocabularyView from './components/VocabularyView';
import PronunciationView from './components/PronunciationView';
import SpeakingView from './components/SpeakingView';
import GrammarView from './components/GrammarView';
import TasksView from './components/TasksView';
import QuizView from './components/QuizView';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<OverviewView />} />
                    <Route path="errors" element={<ErrorsView />} />
                    <Route path="flashcards" element={<FlashcardsView />} />
                    <Route path="vocabulary" element={<VocabularyView />} />
                    <Route path="pronunciation" element={<PronunciationView />} />
                    <Route path="speaking" element={<SpeakingView />} />
                    <Route path="grammar" element={<GrammarView />} />
                    <Route path="tasks" element={<TasksView />} />
                    <Route path="quiz" element={<QuizView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
