import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-slate-600 dark:text-slate-400">Here's an overview of your learning progress.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Courses in Progress</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Completed Lessons</p>
            <p className="text-2xl font-bold">14</p>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-lg text-amber-600 dark:text-amber-400">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Hours Learned</p>
            <p className="text-2xl font-bold">8.5</p>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <div>
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <Link to="/courses/1" className="block p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md mb-2 inline-block">Grammar</span>
              <h3 className="text-lg font-bold">English Fundamentals</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Module 1: Present Tense</p>
            </div>
            <span className="text-sm font-medium">45%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
