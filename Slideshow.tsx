/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, RotateCcw, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { SentenceItem } from './types';

interface SlideshowProps {
  title: string;
  theme: string;
  sentences: SentenceItem[];
}

export default function Slideshow({ title, theme, sentences }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.85); // slower for learning
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [showExplanation, setShowExplanation] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear interval when stopped or manual change
    if (timerRef.current) clearInterval(timerRef.current);
    
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000); // 7 seconds per slide
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const speakSentence = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[.—\u200b]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = speechRate;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sentences.length - 1 : prev - 1));
    setIsSpeaking(false);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === sentences.length - 1 ? 0 : prev + 1));
    setIsSpeaking(false);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  };

  const handleRestart = () => {
    setDirection(-1);
    setCurrentIndex(0);
    setIsPlaying(false);
    setIsSpeaking(false);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  };

  const activeSentence = sentences[currentIndex];

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 24 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 24 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="flex flex-col h-full justify-between" id="slideshow-root">
      {/* Upper Progress Indicators */}
      <div className="px-6 pt-4 flex items-center justify-between border-b border-brand-charcoal/5 bg-white/40 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wider font-mono text-brand-terracotta font-medium">{theme}</span>
          <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-brand-charcoal/50 bg-brand-charcoal/5 px-2.5 py-1 rounded-full">
            Սլայդ {currentIndex + 1} / {sentences.length}
          </span>
          <button
            onClick={handleRestart}
            className="p-1.5 text-brand-charcoal/60 hover:text-brand-terracotta rounded-full hover:bg-white transition-colors"
            title="Վերասկսել ներկայացումը"
            id="btn-slideshow-restart"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-brand-charcoal/5 h-1">
        <motion.div
          className="bg-brand-terracotta h-1 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / sentences.length) * 100}%` }}
        />
      </div>

      {/* Main Interactive Motion Slides */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative overflow-hidden min-h-[350px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-3xl bg-white rounded-3xl border border-brand-charcoal/10 shadow-xl shadow-brand-charcoal/5 py-10 px-8 md:p-12 flex flex-col justify-between h-full min-h-[280px]"
            id={`slide-${currentIndex}`}
          >
            {/* Main Greeting / Line */}
            <div className="space-y-6">
              <div className="flex justify-between items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center font-mono font-bold text-sm">
                  {currentIndex + 1}
                </div>
                <button
                  onClick={() => speakSentence(activeSentence.spanish)}
                  className={`p-2.5 rounded-xl border flex items-center gap-2 text-sm font-medium transition-all ${
                    isSpeaking
                      ? 'bg-brand-terracotta border-brand-terracotta text-white scale-105 shadow-md animate-pulse'
                      : 'bg-brand-beige border-brand-charcoal/15 text-brand-charcoal hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta'
                  }`}
                  title="Լսել արտասանությունը (ES)"
                  id={`btn-speak-${currentIndex}`}
                >
                  <Volume2 size={16} />
                  <span>{isSpeaking ? 'Հնչում է...' : 'Լսել'}</span>
                </button>
              </div>

              {/* Spanish Text */}
              <div className="py-4">
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-brand-charcoal font-medium tracking-tight">
                  {activeSentence.spanish.split(' ').map((word, wordIdx) => {
                    const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                    const verbDetail = activeSentence.highlightedVerbs.find(v => 
                      v.word.toLowerCase() === cleanWord || 
                      v.word.toLowerCase().includes(cleanWord) || 
                      cleanWord.includes(v.word.toLowerCase())
                    );

                    if (verbDetail) {
                      return (
                        <span key={wordIdx} className="relative inline-block group mx-1">
                          <span className="underline decoration-brand-terracotta decoration-2 underline-offset-4 font-semibold text-brand-terracotta cursor-help hover:bg-brand-terracotta/5 px-1 py-0.5 rounded transition-all">
                            {word}
                          </span>
                        </span>
                      );
                    }
                    return <span key={wordIdx} className="mx-0.5 inline-block">{word}</span>;
                  })}
                </p>
              </div>
            </div>

            {/* Armenian Explanations & Verb Highlight Analysis (Interactive Panel) */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-5 rounded-2xl bg-brand-beige border border-brand-charcoal/5 space-y-4"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-brand-charcoal/60">
                  <BookOpen size={14} className="text-brand-terracotta" />
                  <span>Բայերի և արտահայտությունների վերլուծություն</span>
                </div>
                
                {activeSentence.highlightedVerbs.length > 0 ? (
                  <div className="space-y-3">
                    {activeSentence.highlightedVerbs.map((verb, idx) => (
                      <div key={idx} className="border-l-2 border-brand-terracotta/40 pl-3 py-0.5">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-mono font-semibold text-sm text-brand-charcoal bg-white px-2 py-0.5 rounded border border-brand-charcoal/10 shadow-sm">
                            {verb.word}
                          </span>
                          <span className="text-xs text-brand-charcoal/50">➜</span>
                          <span className="font-serif italic text-xs text-brand-charcoal/80">
                            Infinitive: <strong className="text-brand-terracotta not-italic font-sans">{verb.infinitive}</strong>
                          </span>
                          <span className="text-xs bg-brand-citrus/15 text-brand-terracotta px-1.5 py-0.5 rounded-full font-medium">
                            {verb.conjugation}
                          </span>
                        </div>
                        <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans mt-1">
                          {verb.explanation}
                        </p>
                        {verb.armenianExplanation && (
                          <p className="text-xs text-brand-emerald font-medium leading-relaxed font-sans mt-1 bg-white/60 p-1.5 rounded border border-brand-emerald/10">
                            🇦🇲 {verb.armenianExplanation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal/50 py-1">
                    <AlertCircle size={14} />
                    <span>Առօրյա ներածական ողջույն: Չի պարունակում բարդ բայական փոփոխություններ:</span>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation and Controls */}
      <div className="px-6 py-5 bg-white border-t border-brand-charcoal/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Playback rate */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-brand-charcoal/60">Աուդիոյի արագություն՝</span>
          <div className="flex rounded-lg border border-brand-charcoal/10 overflow-hidden bg-brand-beige">
            <button
              onClick={() => setSpeechRate(0.65)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                speechRate === 0.65 ? 'bg-brand-terracotta text-white' : 'hover:bg-brand-charcoal/5'
              }`}
              id="btn-rate-slowest"
            >
              Դանդաղ
            </button>
            <button
              onClick={() => setSpeechRate(0.85)}
              className={`px-3 py-1.5 text-xs font-medium border-x border-brand-charcoal/10 transition-colors ${
                speechRate === 0.85 ? 'bg-brand-terracotta text-white' : 'hover:bg-brand-charcoal/5'
              }`}
              id="btn-rate-slow"
            >
              Հարմարավետ
            </button>
            <button
              onClick={() => setSpeechRate(1.0)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                speechRate === 1.0 ? 'bg-brand-terracotta text-white' : 'hover:bg-brand-charcoal/5'
              }`}
              id="btn-rate-normal"
            >
              Նորմալ
            </button>
          </div>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-white hover:bg-brand-beige border border-brand-charcoal/10 text-brand-charcoal rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
            title="Նախորդ սլայդ"
            id="btn-slideshow-prev"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-4 rounded-full text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center ${
              isPlaying ? 'bg-brand-charcoal hover:bg-brand-charcoal/90' : 'bg-brand-terracotta hover:bg-brand-terracotta/90'
            }`}
            title={isPlaying ? 'Ավտոմատ նվագարկման դադար' : 'Ավտոմատ նվագարկում'}
            id="btn-slideshow-toggle-play"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-3 bg-white hover:bg-brand-beige border border-brand-charcoal/10 text-brand-charcoal rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
            title="Հաջորդ սլայդ"
            id="btn-slideshow-next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Action Toggle */}
        <div>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl border transition-all ${
              showExplanation
                ? 'bg-brand-charcoal text-white border-brand-charcoal'
                : 'bg-white text-brand-charcoal border-brand-charcoal/15 hover:bg-brand-beige'
            }`}
            id="btn-toggle-explanations"
          >
            <Sparkles size={14} />
            <span>{showExplanation ? 'Թաքցնել վերլուծությունը' : 'Ցուցադրել վերլուծությունը'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
