import React, { useState, useEffect } from 'react';

export default function MatchingWord({ data, onAnswer }) {
  const [selectedVocab, setSelectedVocab] = useState(null);
  const [matches, setMatches] = useState({}); // { vocabId: analogyId }
  const [shuffledAnalogies, setShuffledAnalogies] = useState([]);

  useEffect(() => {
    // Shuffle analogies on mount
    const analogies = [...data.pairs].sort(() => Math.random() - 0.5);
    setShuffledAnalogies(analogies);
  }, [data]);

  const handleVocabClick = (vocabId) => {
    if (matches[vocabId]) return; // Already matched
    setSelectedVocab(vocabId);
  };

  const handleAnalogyClick = (analogyId) => {
    if (!selectedVocab) return;
    
    const newMatches = { ...matches, [selectedVocab]: analogyId };
    setMatches(newMatches);
    setSelectedVocab(null);

    // Check if all matched
    if (Object.keys(newMatches).length === data.pairs.length) {
      // Validate
      let isCorrect = true;
      data.pairs.forEach(pair => {
        if (newMatches[pair.id] !== pair.id) {
          isCorrect = false;
        }
      });
      // Submit answer after short delay
      setTimeout(() => {
        onAnswer("Matched All", isCorrect);
      }, 1000);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-[#4EC9B0] mb-4 text-sm font-semibold">/* {data.question} */</div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Vocab Column */}
        <div className="space-y-3">
          <div className="text-xs text-[#858585] uppercase tracking-wider mb-2">Variables</div>
          {data.pairs.map((pair) => (
            <button
              key={`v-${pair.id}`}
              onClick={() => handleVocabClick(pair.id)}
              disabled={!!matches[pair.id]}
              className={`w-full text-left p-3 border rounded font-mono text-sm transition-all ${
                matches[pair.id] 
                  ? 'bg-[#3DDC84]/20 border-[#3DDC84] text-[#3DDC84] opacity-50 cursor-not-allowed'
                  : selectedVocab === pair.id
                    ? 'bg-[#007ACC]/20 border-[#007ACC] text-[#569CD6]'
                    : 'bg-[#1E1E1E] border-[#333333] text-[#D4D4D4] hover:border-[#858585]'
              }`}
            >
              let {pair.vocab};
            </button>
          ))}
        </div>

        {/* Analogy Column */}
        <div className="space-y-3">
          <div className="text-xs text-[#858585] uppercase tracking-wider mb-2">Values (Android Analogy)</div>
          {shuffledAnalogies.map((pair) => {
            const isMatched = Object.values(matches).includes(pair.id);
            return (
              <button
                key={`a-${pair.id}`}
                onClick={() => handleAnalogyClick(pair.id)}
                disabled={isMatched}
                className={`w-full text-left p-3 border rounded text-sm transition-all ${
                  isMatched
                    ? 'bg-[#3DDC84]/20 border-[#3DDC84] text-[#3DDC84] opacity-50 cursor-not-allowed'
                    : 'bg-[#1E1E1E] border-[#333333] text-[#CE9178] hover:border-[#858585]'
                }`}
              >
                "{pair.analogy}"
              </button>
            );
          })}
        </div>
      </div>
      
      {Object.keys(matches).length === data.pairs.length && (
        <div className="text-center text-[#E5E510] animate-pulse">
          Validating syntax...
        </div>
      )}
    </div>
  );
}
