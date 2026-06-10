import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function LessonDetail() {
  const { lessonId } = useParams();

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <Link to="/courses/1" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Course
        </Link>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Present Simple Rules & Formula</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              The simple present tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border border-blue-100 dark:border-blue-900/50">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Formula</h3>
              <p className="font-mono text-lg text-blue-900 dark:text-blue-200">
                Subject + Verb (v1) + s/es + Object
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">Examples</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span><strong>Positive:</strong> She <em>works</em> in London.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span><strong>Negative:</strong> She <em>does not work</em> in London.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span><strong>Question:</strong> <em>Does</em> she <em>work</em> in London?</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Previous Lesson
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center">
            Next Lesson <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Right Sidebar (Notes/Progress) */}
      <div className="w-full lg:w-80 space-y-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold mb-4">Your Notes</h3>
          <textarea 
            className="w-full h-32 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your personal notes here..."
          ></textarea>
          <button className="w-full mt-3 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg text-sm font-medium">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
