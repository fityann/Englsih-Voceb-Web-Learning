import React from 'react';
import { Link } from 'react-router-dom';
import { quizCategories } from '../data/quizData';

const colorMap = {
  blue: {
    badge: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
    bar: 'bg-blue-600',
    hover: 'hover:border-blue-500',
  },
  violet: {
    badge: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
    bar: 'bg-violet-600',
    hover: 'hover:border-violet-500',
  },
  emerald: {
    badge: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    bar: 'bg-emerald-600',
    hover: 'hover:border-emerald-500',
  },
};

export default function QuizPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Vocabulary Quizzes</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Choose a vocabulary category and test your knowledge with mobile app themed quizzes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizCategories.map((cat) => {
          const colors = colorMap[cat.color] || colorMap.blue;
          return (
            <Link
              key={cat.id}
              to={`/quiz/${cat.id}`}
              className={`flex flex-col p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm ${colors.hover} transition-colors`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${colors.badge}`}>
                  {cat.subtitle}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                {cat.description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {cat.totalQuestions} Questions · 3 Quiz Modes
              </p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
                  <span className={`text-sm font-bold ${colors.badge.split(' ')[0]}`}>{cat.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className={`${colors.bar} h-2 rounded-full transition-all`} style={{ width: `${cat.progress}%` }}></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
