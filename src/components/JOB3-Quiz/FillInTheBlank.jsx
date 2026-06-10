import React, { useState } from 'react';

export default function FillInTheBlank({ data, onAnswer }) {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onAnswer(inputVal.trim(), inputVal.trim().toLowerCase() === data.answer.toLowerCase());
      setInputVal('');
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-[#C586C0] mb-4 text-sm font-semibold">/* {data.question} */</div>
      
      <form onSubmit={handleSubmit}>
        <div className="bg-[#1E1E1E] p-4 rounded border border-[#333333] mb-6 font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#D4D4D4]">
          {data.codeSnippet.split('____').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="bg-[#2D2D30] border-b-2 border-[#007ACC] text-[#CE9178] px-2 py-1 mx-1 focus:outline-none focus:border-[#3DDC84] w-32"
                  placeholder="value"
                  autoFocus
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <button 
          type="submit"
          disabled={!inputVal.trim()}
          className={`w-full py-3 px-4 rounded font-bold transition-colors ${
            inputVal.trim() 
              ? 'bg-[#3DDC84] hover:bg-[#32B36C] text-[#1E1E1E]' 
              : 'bg-[#333333] text-[#858585] cursor-not-allowed'
          }`}
        >
          COMPILE RUN
        </button>
      </form>
    </div>
  );
}
