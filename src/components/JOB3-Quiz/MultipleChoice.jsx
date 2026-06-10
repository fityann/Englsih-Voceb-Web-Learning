import React, { useState } from 'react';

export default function MultipleChoice({ data, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    if (selected) {
      onAnswer(selected, selected === data.answer);
      setSelected(null);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-[#569CD6] mb-4 text-sm font-semibold">// {data.log}</div>
      <p className="text-lg mb-6 whitespace-pre-wrap leading-relaxed">
        {data.question}
      </p>

      <div className="space-y-3 mb-6">
        {data.options.map((option, index) => (
          <label 
            key={index} 
            className={`block p-4 border rounded cursor-pointer transition-all ${
              selected === option 
                ? 'border-[#007ACC] bg-[#007ACC]/10' 
                : 'border-[#333333] hover:border-[#858585] bg-[#1E1E1E]'
            }`}
          >
            <div className="flex items-center">
              <input 
                type="radio" 
                name="quiz-option" 
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="w-4 h-4 text-[#007ACC] bg-[#1E1E1E] border-[#333333] focus:ring-[#007ACC]"
              />
              <span className="ml-3 text-[#D4D4D4]">
                <span className="text-[#CE9178]">"{option}"</span>
              </span>
            </div>
          </label>
        ))}
      </div>

      <button 
        onClick={handleSubmit}
        disabled={!selected}
        className={`w-full py-3 px-4 rounded font-bold transition-colors ${
          selected 
            ? 'bg-[#3DDC84] hover:bg-[#32B36C] text-[#1E1E1E]' 
            : 'bg-[#333333] text-[#858585] cursor-not-allowed'
        }`}
      >
        EXECUTE CODE
      </button>
    </div>
  );
}
