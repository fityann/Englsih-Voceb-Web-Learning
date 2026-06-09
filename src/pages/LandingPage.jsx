import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, Search, BookOpen, Code, Layout, Network, Shield, Cloud, 
  MessageSquare, FileText, Globe, Briefcase, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle2, Monitor, ArrowDown
} from 'lucide-react';
import { 
  categories, popularVocabulary, featuredWord, 
  learningPathSteps, benefits, testimonials, faqs 
} from '../data/vocabulary';

// Utility for Icon mapping
const getIcon = (iconName, className) => {
  const icons = {
    Code: <Code className={className} />,
    Layout: <Layout className={className} />,
    Network: <Network className={className} />,
    Shield: <Shield className={className} />,
    Cloud: <Cloud className={className} />,
    MessageSquare: <MessageSquare className={className} />,
    FileText: <FileText className={className} />,
    Globe: <Globe className={className} />,
    Briefcase: <Briefcase className={className} />,
  };
  return icons[iconName] || <BookOpen className={className} />;
};

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0b]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            <span className="text-xl font-bold tracking-tight">VocabIT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#categories" className="hover:text-slate-900 dark:hover:text-white transition-colors">Categories</a>
            <a href="#popular" className="hover:text-slate-900 dark:hover:text-white transition-colors">Popular</a>
            <a href="#roadmap" className="hover:text-slate-900 dark:hover:text-white transition-colors">Roadmap</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Log in</button>
            <Link to="/dashboard" className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 border border-blue-100 dark:border-blue-500/20">
              <Monitor className="h-4 w-4" />
              <span>Built for Developers & IT Professionals</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Master English Vocabulary for the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                IT Industry
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn essential technical English used by software developers, engineers, and IT professionals worldwide. Communicate with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                Start Learning <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#popular" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-full font-medium text-lg transition-all border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2">
                Explore Vocabulary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar & Stats (Floating below hero) */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 flex items-center">
          <div className="pl-4 text-slate-400">
            <Search className="h-5 w-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search for terms like 'Deployment', 'API', or 'Scalability'..." 
            className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          <button className="px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Featured Word of the Day */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-8 text-center">Featured Vocabulary of the Day</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
              <Terminal className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{featuredWord.word}</h3>
                <span className="text-slate-500 font-mono text-lg">{featuredWord.pronunciation}</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Definition</h4>
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300">{featuredWord.definition}</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Example in context</h4>
                  <p className="text-slate-800 dark:text-slate-200 italic">"{featuredWord.example}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Explore by Category</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Focus your learning on specific technology domains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group cursor-pointer p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-center">
                <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(category.icon, "w-6 h-6")}
                </div>
                <h3 className="font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{category.wordsCount} words</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Vocabulary Cards */}
      <section id="popular" className="py-24 bg-slate-50/50 dark:bg-[#0f0f11] border-y border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Popular Terminology</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Essential words you will encounter every day in tech.</p>
            </div>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1 mt-4 md:mt-0">
              View all vocabulary <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularVocabulary.map((item) => (
              <div key={item.id} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                    {item.category}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-md border ${
                    item.difficulty === 'Beginner' ? 'border-green-200 text-green-700 bg-green-50 dark:border-green-900 dark:text-green-400 dark:bg-green-900/20' :
                    item.difficulty === 'Intermediate' ? 'border-amber-200 text-amber-700 bg-amber-50 dark:border-amber-900 dark:text-amber-400 dark:bg-amber-900/20' :
                    'border-red-200 text-red-700 bg-red-50 dark:border-red-900 dark:text-red-400 dark:bg-red-900/20'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.word}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-1">
                  {item.meaning}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">Example:</p>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400">"{item.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path (Roadmap) */}
      <section id="roadmap" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Your Learning Path</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">A structured roadmap from basic terms to professional communication.</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
            {learningPathSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0a0b] bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  {step.id}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-colors">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Learn IT Vocabulary?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">Mastering technical English opens doors to global opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-blue-700/50 rounded-2xl border border-blue-500/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  {getIcon(benefit.icon, "w-6 h-6 text-white")}
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Tech Professionals</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">See what others are saying about our platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 relative">
                <MessageSquare className="absolute top-8 right-8 w-8 h-8 text-slate-100 dark:text-slate-800" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 relative z-10">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0f0f11] border-t border-slate-200 dark:border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            <span className="text-xl font-bold tracking-tight">VocabIT</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 VocabIT Platform. All rights reserved. (Frontend Dummy Project)
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
