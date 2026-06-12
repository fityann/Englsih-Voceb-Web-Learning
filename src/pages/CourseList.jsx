import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/coursesData';

export default function CourseList() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-slate-600 dark:text-slate-400">Explore your enrolled courses and pick up where you left off.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`} className="flex flex-col p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md mb-4 self-start">
              {course.category}
            </span>
            <h3 className="text-lg font-bold mb-2">{course.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{course.totalModules} Modules</p>
            
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{course.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

