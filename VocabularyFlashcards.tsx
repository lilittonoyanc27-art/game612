/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, CheckCircle2, RotateCcw, Volume2, HelpCircle } from 'lucide-react';
import { vocabularyWords } from './data';

export default function VocabularyFlashcards() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Verbs' | 'Nouns' | 'Time Expressions' | 'Others'>('All');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [markedLearned, setMarkedLearned] = useState<Record<string, boolean>>({});
  const [speechRate] = useState(0.85);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLearned = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMarkedLearned((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const speakSpanish = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[.—\u200b]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = speechRate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredWords = vocabularyWords.filter(
    (word) => selectedCategory === 'All' || word.category === selectedCategory
  );

  const learnedCount = Object.values(markedLearned).filter(Boolean).length;

  const resetProgress = () => {
    setMarkedLearned({});
    setFlippedCards({});
  };

  return (
    <div className="space-y-6" id="vocabulary-view-root">
      {/* Category Toggles navbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-brand-charcoal/10 shadow-sm" id="vocabulary-status-bar">
        <div className="flex flex-wrap gap-2">
          {(['All', 'Verbs', 'Nouns', 'Time Expressions', 'Others'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono font-medium px-4 py-2 rounded-xl border transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-sm'
                  : 'bg-white text-brand-charcoal/70 border-brand-charcoal/10 hover:bg-brand-beige'
              }`}
              id={`vocab-cat-${cat}`}
            >
              {cat === 'All'
                ? 'Բոլոր բառերը'
                : cat === 'Verbs'
                ? 'Բայեր'
                : cat === 'Nouns'
                ? 'Գոյականներ'
                : cat === 'Time Expressions'
                ? 'Ժամանակակից արտահայտություններ'
                : 'Այլ'}
            </button>
          ))}
        </div>

        {/* Counters & Reset */}
        <div className="flex items-center gap-4 text-xs font-mono justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <span className="text-brand-charcoal/50">Ցուցադրված է՝</span>
            <span className="bg-brand-charcoal/5 text-brand-charcoal px-2.5 py-1 rounded-full font-bold">
              {filteredWords.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-brand-charcoal/50">Սովորած՝</span>
            <span className="bg-brand-emerald/10 text-brand-emerald px-2.5 py-1 rounded-full font-bold">
              {learnedCount} / {vocabularyWords.length}
            </span>
          </div>

          {learnedCount > 0 && (
            <button
              onClick={resetProgress}
              className="p-1.5 text-brand-charcoal/50 hover:text-brand-terracotta hover:bg-brand-terracotta/5 rounded-lg transition-all"
              title="Մաքրել առաջընթացը"
              id="btn-vocab-reset"
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Grid of beautifully animated cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="vocab-cards-grid">
        <AnimatePresence mode="popLayout">
          {filteredWords.map((word) => {
            const isFlipped = !!flippedCards[word.id];
            const isLearned = !!markedLearned[word.id];

            return (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => toggleFlip(word.id)}
                className={`group cursor-pointer aspect-square rounded-3xl p-6 border relative flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 ${
                  isLearned
                    ? 'bg-brand-emerald/5 border-brand-emerald/20 opacity-80'
                    : 'bg-white border-brand-charcoal/10 hover:border-brand-terracotta/30 hover:shadow-md'
                }`}
                id={`vocab-card-${word.id}`}
              >
                {/* Upper pill bar details inside card */}
                <div className="flex items-center justify-between relative z-10 w-full">
                  <span className="text-[9px] uppercase font-mono tracking-widest bg-brand-charcoal/5 text-brand-charcoal/50 px-2 py-0.5 rounded">
                    {word.partOfSpeech === 'Verbo'
                      ? 'բայ'
                      : word.partOfSpeech.startsWith('Sustantivo')
                      ? 'գոյական'
                      : 'այլ'}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => speakSpanish(word.spanish, e)}
                      className="p-2 bg-brand-beige border border-brand-charcoal/15 text-brand-charcoal/60 rounded-xl hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta transition-all opacity-0 group-hover:opacity-100"
                      title="Լսել արտասանությունը"
                      id={`btn-speak-vocab-${word.id}`}
                    >
                      <Volume2 size={12} />
                    </button>

                    <button
                      onClick={(e) => toggleLearned(word.id, e)}
                      className={`p-2 rounded-xl transition-all border ${
                        isLearned
                          ? 'bg-brand-emerald/20 border-brand-emerald/40 text-brand-emerald'
                          : 'bg-brand-beige border-brand-charcoal/15 text-brand-charcoal/40 hover:text-brand-emerald hover:border-brand-emerald/30'
                      }`}
                      title={isLearned ? 'Հեռացնել սովորածներից' : 'Ավելացնել սովորածների մեջ'}
                      id={`btn-learn-vocab-${word.id}`}
                    >
                      <Check size={12} />
                    </button>
                  </div>
                </div>

                {/* Centered Main Term */}
                <div className="py-2 text-center relative z-10 select-none flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {!isFlipped ? (
                      <motion.div
                        key="front"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="font-serif text-xl font-bold text-brand-charcoal leading-snug tracking-tight">
                          {word.spanish}
                        </h4>
                        <span className="text-[10px] font-mono text-brand-charcoal/30 flex items-center justify-center gap-1">
                          <HelpCircle size={10} />
                          <span>Կտտացրեք թարգմանելու համար</span>
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="back"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="font-sans text-lg font-bold text-brand-terracotta leading-snug">
                          {word.armenian}
                        </h4>
                        <span className="text-[10px] font-mono font-semibold text-brand-charcoal/40 bg-brand-charcoal/5 px-2 py-0.5 rounded-full inline-block">
                          {word.partOfSpeech}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Context */}
                <div className="border-t border-brand-charcoal/5 pt-3 w-full relative z-10 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-brand-charcoal/40">
                    Կատեգորիա՝ {word.category === 'Verbs' ? 'Բայեր' : word.category === 'Nouns' ? 'Գոյականներ' : word.category === 'Time Expressions' ? 'Ժամանակ' : 'Այլ'}
                  </span>
                  {isLearned && (
                    <span className="text-[10px] font-mono font-bold text-brand-emerald flex items-center gap-0.5">
                      Սովորած է 🎉
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
