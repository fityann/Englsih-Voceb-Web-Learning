import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import MultipleChoice from './MultipleChoice';
import FillInTheBlank from './FillInTheBlank';
import MatchingWord from './MatchingWord';
import ScoreCard from './ScoreCard';

// Dummy Data dengan Tema Android App Development
const dummyQuizData = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Choose the correct word to complete the "Code":\nThe app crashed because the background process was running _____ instead of asynchronously.',
    options: ['Synchronous', 'Deprecated', 'Lifecycle', 'Inheritance'],
    answer: 'Synchronous',
    log: 'Logcat Error: Main thread blocked! Process cannot be...'
  },
  {
    id: 2,
    type: 'fill-in-blank',
    question: 'Debug the sentence! Fill in the missing vocabulary.',
    codeSnippet: 'const method = /* Maksud: Kadaluarsa / Tidak direkomendasikan lagi */\n\nif (method === "____") {\n   console.warn("Please use the newer API.");\n}',
    answer: 'Deprecated'
  },
  {
    id: 3,
    type: 'matching',
    question: 'Match the Vocabulary with its Android analogy!',
    pairs: [
      { id: 'a', vocab: 'Compile', analogy: 'Building an APK from source code' },
      { id: 'b', vocab: 'Lifecycle', analogy: 'Activity states (onCreate, onPause, onDestroy)' },
      { id: 'c', vocab: 'Dependencies', analogy: 'External libraries imported in build.gradle' }
    ]
  }
];

export default function QuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersLog, setAnswersLog] = useState([]);

  const handleAnswer = (selectedAnswer, isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    setAnswersLog([...answersLog, {
      question: dummyQuizData[currentQuestionIndex].id,
      isCorrect,
      selected: selectedAnswer
    }]);

    if (currentQuestionIndex + 1 < dummyQuizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setAnswersLog([]);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#D4D4D4] font-mono p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-[#252526] border border-[#333333] rounded-lg shadow-2xl overflow-hidden">
        {/* IDE Header */}
        <div className="bg-[#323233] px-4 py-2 flex items-center border-b border-[#1E1E1E]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-[#858585]">VocabQuiz.java - Android Studio</span>
        </div>

        <div className="p-6">
          {!isFinished ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-xs text-[#858585] mb-2 uppercase tracking-wider">
                  <span>Gradle Build Progress</span>
                  <span>{currentQuestionIndex + 1} / {dummyQuizData.length}</span>
                </div>
                <ProgressBar current={currentQuestionIndex + 1} total={dummyQuizData.length} />
              </div>

              <div className="min-h-[300px]">
                {dummyQuizData[currentQuestionIndex].type === 'multiple-choice' && (
                  <MultipleChoice 
                    data={dummyQuizData[currentQuestionIndex]} 
                    onAnswer={handleAnswer} 
                  />
                )}
                {dummyQuizData[currentQuestionIndex].type === 'fill-in-blank' && (
                  <FillInTheBlank 
                    data={dummyQuizData[currentQuestionIndex]} 
                    onAnswer={handleAnswer} 
                  />
                )}
                {dummyQuizData[currentQuestionIndex].type === 'matching' && (
                  <MatchingWord 
                    data={dummyQuizData[currentQuestionIndex]} 
                    onAnswer={handleAnswer} 
                  />
                )}
              </div>
            </>
          ) : (
            <ScoreCard 
              score={score} 
              total={dummyQuizData.length} 
              log={answersLog}
              onRestart={restartQuiz} 
            />
          )}
        </div>
        
        {/* IDE Footer / Status Bar */}
        <div className="bg-[#007ACC] text-white text-xs px-4 py-1 flex justify-between">
          <span>{isFinished ? 'BUILD SUCCESSFUL' : 'BUILDING...'}</span>
          <span>UTF-8 &nbsp; {score} Errors</span>
        </div>
      </div>
    </div>
  );
}
