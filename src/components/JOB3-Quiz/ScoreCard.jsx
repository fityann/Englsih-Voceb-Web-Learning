import React from 'react';

export default function ScoreCard({ score, total, log, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const isPass = percentage >= 70;

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col items-center justify-center p-6 bg-[#1E1E1E] rounded border border-[#333333]">
        <div className={`text-6xl mb-4 ${isPass ? 'text-[#3DDC84]' : 'text-red-500'}`}>
          {isPass ? '✔' : '✖'}
        </div>
        <h2 className="text-2xl font-bold mb-2">
          {isPass ? 'BUILD SUCCESSFUL' : 'BUILD FAILED'}
        </h2>
        <p className="text-lg">
          Score: <span className={isPass ? 'text-[#3DDC84]' : 'text-red-500'}>{score}</span> / {total}
        </p>
        <p className="text-[#858585] text-sm mt-1">{percentage}% Accuracy</p>
      </div>

      <div className="bg-[#1E1E1E] p-4 rounded border border-[#333333] mb-6">
        <div className="flex items-center mb-2 text-[#858585] text-sm uppercase">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
          Build Output (Logcat)
        </div>
        <div className="font-mono text-sm space-y-2 h-32 overflow-y-auto">
          {log.map((entry, index) => (
            <div key={index} className={entry.isCorrect ? 'text-[#3DDC84]' : 'text-red-400'}>
              {entry.isCorrect 
                ? `I/QuizTest: Question ${entry.question} passed. Value: [${entry.selected}]` 
                : `E/QuizTest: Question ${entry.question} failed! Expected correct answer, got: [${entry.selected}]`
              }
            </div>
          ))}
          <div className="text-[#D4D4D4] mt-2">
            Process finished with exit code {isPass ? '0' : '1'}.
          </div>
        </div>
      </div>

      <button 
        onClick={onRestart}
        className="w-full bg-[#007ACC] hover:bg-[#005999] text-white font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Rebuild Project (Retry Quiz)
      </button>
    </div>
  );
}
