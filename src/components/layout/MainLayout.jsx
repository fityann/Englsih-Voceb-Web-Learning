import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, CheckSquare, Award } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Quizzes', path: '/quiz', icon: CheckSquare }, 
    { name: 'Certificate', path: '/certificate', icon: Award },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">EnglishHub</h1>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-50"
                )}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
              JS
            </div>
            <div>
              <p className="text-sm font-medium">John Student</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Intermediate</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-lg font-semibold">
            {navItems.find(item => location.pathname.startsWith(item.path))?.name || 'Overview'}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Streak: 🔥 5 Days</span>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
