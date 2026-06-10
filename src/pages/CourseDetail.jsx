import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlayCircle, CheckCircle, Lock } from 'lucide-react';

export default function CourseDetail() {
  const { courseId } = useParams();

  const modules = [
    {
      id: 1,
      title: 'Module 1: Present Tense',
      lessons: [
        { id: 1, title: 'Introduction to Present Simple', type: 'video', status: 'completed' },
        { id: 2, title: 'Present Simple Rules & Formula', type: 'reading', status: 'completed' },
        { id: 3, title: 'Present Continuous', type: 'video', status: 'in-progress' },
        { id: 4, title: 'Module 1 Quiz', type: 'quiz', status: 'locked' },
      ]
    },
    {
      id: 2,
      title: 'Module 2: Past Tense',
      lessons: [
        { id: 5, title: 'Introduction to Past Simple', type: 'video', status: 'locked' },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 block">Grammar</span>
        <h1 className="text-3xl font-bold mb-4">English Fundamentals</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-6">
          Master the core rules of English grammar, starting from basic tenses to complex sentence structures.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-md bg-slate-100 dark:bg-slate-800 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <span className="text-sm font-medium">45% Completed</span>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Course Content</h2>
        
        {modules.map(module => (
          <div key={module.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg">{module.title}</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {module.lessons.map(lesson => (
                <Link 
                  key={lesson.id} 
                  to={lesson.status !== 'locked' ? `/lessons/${lesson.id}` : '#'}
                  className={`flex items-center p-4 transition-colors ${
                    lesson.status === 'locked' 
                      ? 'opacity-60 cursor-not-allowed' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer'
                  }`}
                >
                  <div className="mr-4">
                    {lesson.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {lesson.status === 'in-progress' && <PlayCircle className="h-5 w-5 text-blue-500" />}
                    {lesson.status === 'locked' && <Lock className="h-5 w-5 text-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${lesson.status === 'completed' ? 'text-slate-600 dark:text-slate-400' : ''}`}>
                      {lesson.title}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {lesson.type}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
