import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { courses, lessonsContent } from '../data/coursesData';

export default function LessonDetail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsContent[Number(lessonId)];
  const [notes, setNotes] = useState('');

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Lesson Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">The lesson you are looking for does not exist.</p>
        <Link to="/courses" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Courses
        </Link>
      </div>
    );
  }

  // Find parent course and all lessons in it to resolve previous / next links
  const parentCourse = courses.find(c => c.id === lesson.courseId);
  const allLessons = parentCourse 
    ? parentCourse.modules.flatMap(m => m.lessons.filter(l => l.status !== 'locked')) 
    : [];

  const currentIdx = allLessons.findIndex(l => l.id === Number(lessonId));
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const handleSaveNotes = () => {
    alert('Notes saved successfully!');
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <Link to={`/courses/${lesson.courseId}`} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Course
        </Link>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {lesson.description}
            </p>
            
            {lesson.formula && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border border-blue-100 dark:border-blue-900/50">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Formula / Key Phrase</h3>
                <p className="font-mono text-lg text-blue-900 dark:text-blue-200">
                  {lesson.formula}
                </p>
              </div>
            )}

            {lesson.examples && lesson.examples.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4">Examples</h3>
                <ul className="space-y-3 mb-8">
                  {lesson.examples.map((example, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                      <span><strong>{example.type}:</strong> <em>{example.text}</em></span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button 
            onClick={() => prevLesson && navigate(`/lessons/${prevLesson.id}`)}
            disabled={!prevLesson}
            className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Lesson
          </button>
          <button 
            onClick={() => nextLesson && navigate(`/lessons/${nextLesson.id}`)}
            disabled={!nextLesson}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl font-medium transition-colors flex items-center disabled:cursor-not-allowed"
          >
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
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <button 
            onClick={handleSaveNotes}
            className="w-full mt-3 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}

