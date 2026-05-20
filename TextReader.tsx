/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Award, Info, BookOpen, Layers } from 'lucide-react';
import { SentenceItem } from './types';

interface TextReaderProps {
  title: string;
  theme: string;
  sentences: SentenceItem[];
  accentColor: string; // Tailwind class
}

export default function TextReader({ title, theme, sentences, accentColor }: TextReaderProps) {
  const [selectedId, setSelectedId] = useState<string | null>(sentences[0]?.id || null);
  const [speechRate, setSpeechRate] = useState(0.8);
  const [isCurrentlyReading, setIsCurrentlyReading] = useState<string | null>(null);

  const speakText = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[.—\u200b]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = speechRate;

      utterance.onstart = () => setIsCurrentlyReading(id);
      utterance.onend = () => setIsCurrentlyReading(null);
      utterance.onerror = () => setIsCurrentlyReading(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const selectedSentence = sentences.find((s) => s.id === selectedId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-1 md:p-3" id="textreader-container">
      {/* Editorial Text Column */}
      <div className="lg:col-span-7 bg-white/95 rounded-3xl border border-brand-charcoal/10 shadow-lg p-6 md:p-10 relative overflow-hidden flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-brand-charcoal/5 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-brand-terracotta font-semibold">
                {theme}
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal leading-tight mt-1">{title}</h3>
            </div>
            <span className="text-2xl">🇪🇸</span>
          </div>

          {/* Book Parchment View */}
          <div className="parchment-texture rounded-2xl p-6 md:p-8 border border-brand-terracotta/10 min-h-[300px]">
            <div className="space-y-4">
              {sentences.map((sentence) => {
                const isSelected = selectedId === sentence.id;
                const isReading = isCurrentlyReading === sentence.id;

                return (
                  <motion.div
                    key={sentence.id}
                    onClick={() => setSelectedId(sentence.id)}
                    className={`group cursor-pointer p-2.5 rounded-xl transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-white border-l-4 border-brand-terracotta shadow-md md:translate-x-1'
                        : 'hover:bg-white/50 border-l-4 border-transparent'
                    }`}
                    whileHover={{ scale: isSelected ? 1.01 : 1.005 }}
                    id={`reader-line-${sentence.id}`}
                  >
                    <p className="font-serif text-lg leading-relaxed text-brand-charcoal">
                      {sentence.spanish.split(' ').map((word, wIdx) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        const isVerb = sentence.highlightedVerbs.some(v => 
                          v.word.toLowerCase() === cleanWord || 
                          v.word.toLowerCase().includes(cleanWord) || 
                          cleanWord.includes(v.word.toLowerCase())
                        );

                        return (
                          <span
                            key={wIdx}
                            className={`mx-0.5 ${
                              isVerb
                                ? 'font-semibold text-brand-terracotta border-b-2 border-brand-terracotta/25'
                                : ''
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </p>

                    {/* Small action trigger inside hover */}
                    <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(sentence.spanish, sentence.id);
                        }}
                        className={`p-1.5 rounded-lg border text-brand-charcoal/60 bg-white hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta transition-all ${
                          isReading ? 'bg-brand-terracotta text-white animate-pulse' : ''
                        }`}
                        title="Լսել նախադասությունը"
                        id={`btn-speaker-inline-${sentence.id}`}
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Speed Controls footer */}
        <div className="mt-8 pt-4 border-t border-brand-charcoal/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-brand-charcoal/50">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-brand-terracotta" />
            <span>Կտտացրեք ցանկացած նախադասության՝ մանրամասն քերականական վերլուծության համար</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Արագություն՝ {speechRate}x</span>
            <input
              type="range"
              min="0.5"
              max="1.2"
              step="0.1"
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
              className="w-20 accent-brand-terracotta cursor-pointer"
              id="slider-reader-speed"
            />
          </div>
        </div>
      </div>

      {/* Grammar & Translation Analysis Sidebar Column */}
      <div className="lg:col-span-5 flex flex-col" id="reader-sidebar">
        <AnimatePresence mode="wait">
          {selectedSentence ? (
            <motion.div
              key={selectedSentence.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-6 flex flex-col justify-between h-full space-y-6"
              id={`sidebar-analysis-${selectedId}`}
            >
              <div className="space-y-5">
                {/* Spanish sentence view in card */}
                <div className="p-4 bg-brand-beige rounded-2xl border border-brand-terracotta/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-mono text-brand-terracotta font-semibold">
                      Ընտրված տող
                    </span>
                    <button
                      onClick={() => speakText(selectedSentence.spanish, selectedSentence.id)}
                      className={`p-1.5 rounded-lg border text-brand-charcoal/60 hover:bg-brand-terracotta hover:text-white transition-all ${
                        isCurrentlyReading === selectedSentence.id ? 'bg-brand-terracotta text-white animate-pulse' : 'bg-white'
                      }`}
                      id="btn-sidebar-speak"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <p className="font-serif text-lg text-brand-charcoal leading-relaxed font-medium">
                    {selectedSentence.spanish}
                  </p>
                </div>

                {/* Grammatical Verbs Matrix */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-brand-charcoal/50">
                    <BookOpen size={14} className="text-brand-terracotta" />
                    <span>Մորֆոլոգիական մանրամասն վերլուծություն</span>
                  </div>

                  {selectedSentence.highlightedVerbs.length > 0 ? (
                    <div className="space-y-4">
                      {selectedSentence.highlightedVerbs.map((verb, idx) => (
                        <div
                          key={idx}
                          className="bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl p-4 space-y-2"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-charcoal/5 pb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-bold text-brand-terracotta bg-white border px-2 py-0.5 rounded shadow-sm">
                                {verb.word}
                              </span>
                              <span className="text-xs text-brand-charcoal/50">➜</span>
                              <span className="font-sans font-medium text-xs text-brand-charcoal">
                                {verb.infinitive}
                              </span>
                            </div>
                            <span className="text-[10px] uppercase font-mono bg-brand-charcoal text-white font-medium px-2 py-0.5 rounded">
                              {verb.tense}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-baseline gap-2">
                              <span className="text-[11px] font-mono text-brand-charcoal/50">Դեմքը՝</span>
                              <span className="text-xs font-medium text-brand-charcoal font-sans">
                                {verb.conjugation}
                              </span>
                            </div>
                            <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                              {verb.explanation}
                            </p>
                            {verb.armenianExplanation && (
                              <div className="bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/10 p-2.5 rounded-lg mt-1">
                                <span className="text-[10px] font-mono font-bold uppercase block tracking-wider text-brand-emerald mb-1">
                                  Հայերեն Բացատրություն
                                </span>
                                <p className="text-xs font-medium font-sans leading-relaxed">
                                  {verb.armenianExplanation}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-brand-beige/30 border border-dashed border-brand-charcoal/15 rounded-xl p-6 text-center text-brand-charcoal/50 space-y-1.5">
                      <Layers className="mx-auto text-brand-charcoal/30" size={24} />
                      <p className="text-xs font-medium">Այստեղ հատուկ բայական փոփոխություններ չկան</p>
                      <p className="text-[11px] text-brand-charcoal/40">Սովորական կապակցող բառեր կամ անփոփոխ արտահայտություններ:</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Helpful Grammar Sidenote Footer */}
              <div className="border-t border-brand-charcoal/10 pt-4 flex gap-3 text-xs text-brand-charcoal/60 items-start">
                <Award size={20} className="text-brand-citrus flex-shrink-0 mt-0.5" />
                <div className="space-y-1 font-sans">
                  <p className="font-semibold text-brand-charcoal">Խորհուրդ՝</p>
                  <p className="leading-relaxed">
                    Ուշադրություն դարձրեք <strong>Presente</strong>-ից (կանոնավոր կերպով կատարվող) <strong>Pretérito Perfecto</strong>-ին (այսօր կամ այս շաբաթ ավարտված գործողություն) անցմանը:
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-10 flex flex-col items-center justify-center text-center h-full text-brand-charcoal/50">
              <p>Խնդրում ենք ընտրել որևէ նախադասություն վերլուծության համար։</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
