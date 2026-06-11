import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

export default function QuizPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = {
    text: "Which sentence uses the present simple tense correctly?",
    options: [
      { id: 'a', text: "She is working in London right now." },
      { id: 'b', text: "She works in London." },
      { id: 'c', text: "She worked in London yesterday." },
      { id: 'd', text: "She will work in London." },
    ],
    correctAnswer: 'b',
    explanation: "Option B is correct because it describes a general truth or habit, which is the primary use of the present simple tense."
  };

  const handleSubmit = () => {
    if (selectedAnswer) setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Module 1 Quiz</h1>
        <span className="text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Question 1 of 5</span>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-start gap-4 mb-8">
          <HelpCircle className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
          <h2 className="text-xl font-medium">{question.text}</h2>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option) => {
            const isCorrect = option.id === question.correctAnswer;
            const isSelected = selectedAnswer === option.id;
            
            let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ";
            
            if (!isSubmitted) {
              buttonClass += isSelected 
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700";
            } else {
              if (isCorrect) buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20";
              else if (isSelected && !isCorrect) buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20";
              else buttonClass += "border-slate-200 dark:border-slate-700 opacity-50";
            }

            return (
              <button 
                key={option.id}
                onClick={() => !isSubmitted && setSelectedAnswer(option.id)}
                disabled={isSubmitted}
                className={buttonClass}
              >
                <span>{option.text}</span>
                {isSubmitted && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`p-4 rounded-xl mb-8 ${selectedAnswer === question.correctAnswer ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200'}`}>
            <h4 className="font-bold mb-1">
              {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
            </h4>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          {!isSubmitted ? (
            <button 
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="px-8 py-3 bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors"
            >
              Submit Answer
            </button>
          ) : (
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium transition-colors">
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
