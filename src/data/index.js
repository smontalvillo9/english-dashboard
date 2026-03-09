import { class1Data } from './class1';
import { class2Data } from './class2';
import { class3Data } from './class3';
import { class4Data } from './class4';
import { class5Data } from './class5';
import { class6Data } from './class6';
import { class7Data } from './class7';
import { class8Data } from './class8';
import { class9Data } from './class9';
import { commonErrors } from './commonErrors';
import { extraVocab } from './extraVocab';

export const allClasses = [
    class1Data,
    class2Data,
    class3Data,
    class4Data,
    class5Data,
    class6Data,
    class7Data,
    class8Data,
    class9Data
];

export const getAllClasses = () => allClasses;

export const getClassById = (id) => allClasses.find(c => c.id === id);

export const getCommonErrors = () => commonErrors;
export const getExtraVocab = () => extraVocab;

// Aggregation functions for dashboard overview
export const getAggregateStats = (classId = 'all') => {
    const targetClasses = classId === 'all' ? allClasses : allClasses.filter(c => c.id === classId);

    // Calculate total duration in minutes if filtering by class, otherwise hardcoded for now
    let studyHours = "2h 40min";
    if (classId !== 'all' && targetClasses.length > 0) {
        // Simple extraction assuming format like "1h 20min"
        studyHours = targetClasses[0].duration;
    }

    return {
        totalClasses: targetClasses.length,
        totalErrorsResolved: targetClasses.reduce((acc, curr) => acc + curr.errors.length, 0),
        totalVocabLearned: targetClasses.reduce((acc, curr) => acc + curr.vocabulary.length, 0),
        levels: "B1 → B2",
        studyHours: studyHours
    };
};
