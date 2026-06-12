import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HelpCircle, CheckCircle, XCircle, PenLine, Shuffle, Link2, ArrowRight, ArrowLeft, RotateCcw, Sparkles, BookOpen } from 'lucide-react';
import { quizCategories, getQuizByCategory } from '../data/quizData';

const modes = [
  { id: 'sentence', label: 'Arrange Sentence', icon: PenLine },
  { id: 'scramble', label: 'Word Guess', icon: Shuffle },
  { id: 'match', label: 'Word Match', icon: Link2 },
];

// Helper to scramble an array of words
function scrambleArray(array) {
  const arr = [...array];
  let scrambled = false;
  // Keep shuffling until it's actually scrambled (if length > 1)
  while (!scrambled && arr.length > 1) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr.join(' ') !== array.join(' ')) {
      scrambled = true;
    }
  }
  return arr;
}

// ─── SENTENCE ARRANGEMENT MODE (Replaces Essay) ───────────────
function SentenceMode({ questions }) {
  const [idx, setIdx] = useState(0);
  const [wordPool, setWordPool] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const q = questions[idx];

  // Initialize and scramble word pool when question index changes
  useEffect(() => {
    if (q) {
      const originalWords = q.correctSentence.split(' ');
      setWordPool(scrambleArray(originalWords));
      setSelectedWords([]);
      setSubmitted(false);
    }
  }, [idx, q]);

  const selectWord = (word, indexInPool) => {
    if (submitted) return;
    setSelectedWords([...selectedWords, word]);
    setWordPool(wordPool.filter((_, i) => i !== indexInPool));
  };

  const deselectWord = (word, indexInSelected) => {
    if (submitted) return;
    setWordPool([...wordPool, word]);
    setSelectedWords(selectedWords.filter((_, i) => i !== indexInSelected));
  };

  const handleReset = () => {
    if (submitted) return;
    const originalWords = q.correctSentence.split(' ');
    setWordPool(scrambleArray(originalWords));
    setSelectedWords([]);
  };

  const isCorrect = selectedWords.join(' ') === q.correctSentence;

  const next = () => {
    setIdx((i) => (i + 1) % questions.length);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
          📝 Arrange Sentence
        </span>
        <span className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">
          {idx + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-2xl border border-slate-700/50 space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 mb-2">
            Target Word: <span className="font-bold underline">{q.targetWord}</span> ({q.wordType})
          </span>
          <p className="text-sm text-slate-400">{q.clue}</p>
        </div>

        {/* Selected Words Area (Workspace) */}
        <div className="min-h-16 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap gap-2 items-center">
          {selectedWords.length === 0 ? (
            <span className="text-sm text-slate-600 italic">Click the words below to build the sentence...</span>
          ) : (
            selectedWords.map((word, i) => (
              <button
                key={i}
                onClick={() => deselectWord(word, i)}
                disabled={submitted}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-80"
              >
                {word}
              </button>
            ))
          )}
        </div>

        {/* Word Pool Area */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap gap-2 justify-center">
          {wordPool.length === 0 && selectedWords.length > 0 ? (
            <span className="text-xs text-slate-500 italic">All words selected!</span>
          ) : (
            wordPool.map((word, i) => (
              <button
                key={i}
                onClick={() => selectWord(word, i)}
                disabled={submitted}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                {word}
              </button>
            ))
          )}
        </div>
      </div>

      {submitted && (
        <div className="space-y-4 animate-fade-in">
          <div className={`p-5 rounded-2xl border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
            <h4 className={`font-bold mb-2 flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Correct!
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4" /> Incorrect
                </>
              )}
            </h4>
            <p className="text-sm text-slate-300">
              <span className="font-semibold">Correct Sentence:</span> "{q.correctSentence}."
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-2xl">
            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Vocabulary Insight
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{q.explanation}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <>
            <button
              onClick={handleReset}
              disabled={selectedWords.length === 0}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-800/40 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-300 rounded-xl font-medium transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Clear
            </button>
            <button
              onClick={() => selectedWords.length > 0 && setSubmitted(true)}
              disabled={selectedWords.length === 0}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all"
            >
              Check Answer
            </button>
          </>
        ) : (
          <button
            onClick={next}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-medium transition-all flex items-center gap-2"
          >
            Next Question <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── SCRAMBLE ────────────────────────────────────────────────
function ScrambleMode({ questions }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const q = questions[idx];
  const isCorrect = input.trim().toUpperCase() === q.answer;

  const next = () => { setIdx((i) => (i + 1) % questions.length); setInput(''); setSubmitted(false); };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">🔀 Word Guess</span>
        <span className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">{idx + 1} / {questions.length}</span>
      </div>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {q.scrambledWord.split('').map((letter, i) => (
            <div key={i} className="w-12 h-14 flex items-center justify-center bg-gradient-to-b from-amber-500/20 to-amber-600/10 border-2 border-amber-500/40 rounded-xl text-2xl font-bold text-amber-300 shadow-lg shadow-amber-500/5 select-none">
              {letter}
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
          <HelpCircle className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
          <p className="text-sm text-slate-300"><span className="text-blue-400 font-semibold">Clue:</span> {q.clue}</p>
        </div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value.toUpperCase())} disabled={submitted}
          placeholder="Type your answer..." maxLength={q.answer.length}
          className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center text-xl font-bold tracking-[0.3em] text-slate-200 placeholder-slate-500 uppercase focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all disabled:opacity-60" />
      </div>

      {submitted && (
        <div className={`p-5 rounded-2xl border animate-fade-in ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <h4 className={`font-bold mb-2 flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect ? <><CheckCircle className="w-4 h-4" /> Correct!</> : <><XCircle className="w-4 h-4" /> Incorrect — The answer is: {q.answer}</>}
          </h4>
          <p className="text-sm text-slate-300">{q.explanation}</p>
        </div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <button onClick={() => input.trim() && setSubmitted(true)} disabled={!input.trim()}
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all">
            Check Answer
          </button>
        ) : (
          <button onClick={next} className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-medium transition-all flex items-center gap-2">
            Next Word <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── MATCHING ────────────────────────────────────────────────
function MatchMode({ questions }) {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const q = questions[0];

  const shuffledDefs = useMemo(() => [...q.pairs].sort(() => Math.random() - 0.5), [q.id]);

  const handleTermClick = (id) => { if (submitted) return; setSelectedTerm(selectedTerm === id ? null : id); };
  const handleDefClick = (id) => {
    if (submitted || !selectedTerm) return;
    setMatches((prev) => ({ ...prev, [selectedTerm]: id }));
    setSelectedTerm(null);
  };

  const allMatched = Object.keys(matches).length === q.pairs.length;
  const correctCount = submitted ? Object.entries(matches).filter(([t, d]) => t === d).length : 0;

  const getTermStyle = (id) => {
    if (!submitted) {
      if (selectedTerm === id) return 'border-blue-500 bg-blue-500/20 text-blue-300 ring-2 ring-blue-500/30';
      if (matches[id]) return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300';
      return 'border-slate-700 hover:border-blue-400 text-slate-300 hover:bg-slate-800/50';
    }
    return matches[id] === id ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-red-500 bg-red-500/10 text-red-300';
  };

  const getDefStyle = (id) => {
    const matched = Object.entries(matches).find(([, d]) => d === id);
    if (!submitted) {
      if (matched) return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300 opacity-60';
      return 'border-slate-700 hover:border-violet-400 text-slate-300 hover:bg-slate-800/50';
    }
    if (matched && matched[0] === id) return 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
    if (matched) return 'border-red-500 bg-red-500/10 text-red-300';
    return 'border-slate-700 text-slate-500';
  };

  const reset = () => { setSelectedTerm(null); setMatches({}); setSubmitted(false); };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">🔗 Word Match</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-200">{q.title}</h3>
      <p className="text-sm text-slate-400 flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-blue-400" /> {q.instruction}
        {!submitted && <span className="ml-auto text-xs text-blue-400">Click a term → then its definition</span>}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Terms</h4>
          {q.pairs.map((p) => (
            <button key={p.id} onClick={() => handleTermClick(p.id)}
              className={`w-full text-left p-3.5 rounded-xl border-2 transition-all text-sm font-medium ${getTermStyle(p.id)}`}>
              {p.term}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Definitions</h4>
          {shuffledDefs.map((p) => (
            <button key={p.id} onClick={() => handleDefClick(p.id)}
              disabled={Object.values(matches).includes(p.id)}
              className={`w-full text-left p-3.5 rounded-xl border-2 transition-all text-sm ${getDefStyle(p.id)} disabled:cursor-default`}>
              {p.definition}
            </button>
          ))}
        </div>
      </div>

      {submitted && (
        <div className={`p-5 rounded-2xl border animate-fade-in ${correctCount === q.pairs.length ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
          <h4 className={`font-bold mb-1 ${correctCount === q.pairs.length ? 'text-emerald-400' : 'text-amber-400'}`}>
            {correctCount === q.pairs.length ? '🎉 Perfect Score!' : `You got ${correctCount} out of ${q.pairs.length} correct`}
          </h4>
          <p className="text-sm text-slate-400">
            {correctCount === q.pairs.length ? 'Excellent! You matched all terms correctly.' : 'Review the highlighted pairs above. Red = incorrect.'}
          </p>
        </div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <>
            <button onClick={reset} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium transition-all flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
            <button onClick={() => allMatched && setSubmitted(true)} disabled={!allMatched}
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all">
              Check Matches
            </button>
          </>
        ) : (
          <button onClick={reset} className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-medium transition-all flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        )}
      </div>
    </div>
  );
}

// ─── MAIN QUIZ DETAIL PAGE ───────────────────────────────────
export default function QuizDetail() {
  const { categoryId } = useParams();
  const [activeMode, setActiveMode] = useState('sentence');

  const category = quizCategories.find((c) => c.id === categoryId);
  const quizData = getQuizByCategory(categoryId);

  if (!category || !quizData) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400 mb-4">Quiz category not found.</p>
        <Link to="/quiz" className="text-blue-400 hover:underline">← Back to Quizzes</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back + Header */}
      <div>
        <Link to="/quiz" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Quizzes
        </Link>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="text-2xl font-bold">{category.title}</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">{category.subtitle} — {category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-2 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = activeMode === mode.id;
          return (
            <button key={mode.id} onClick={() => setActiveMode(mode.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600/80 to-violet-600/80 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}>
              <Icon className="w-4 h-4" />
              {mode.label}
            </button>
          );
        })}
      </div>

      {/* Quiz Content */}
      <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
        {activeMode === 'sentence' && <SentenceMode questions={quizData.sentence} />}
        {activeMode === 'scramble' && <ScrambleMode questions={quizData.scramble} />}
        {activeMode === 'match' && <MatchMode questions={quizData.matching} />}
      </div>
    </div>
  );
}
