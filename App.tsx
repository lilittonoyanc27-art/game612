/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Presentation, ArrowRightLeft, BookOpen, Layers, Sparkles, Smile, ArrowRight, CheckCircle } from 'lucide-react';

import { text1Presente, text2PreteritoPerfecto } from './data';
import Slideshow from './Slideshow';
import TextReader from './TextReader';
import CompareView from './CompareView';
import VerbGrammar from './VerbGrammar';
import VocabularyFlashcards from './VocabularyFlashcards';

type AppTab = 'presentation' | 'reader' | 'compare' | 'grammar' | 'vocab';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('presentation');
  const [selectedTextVersion, setSelectedTextVersion] = useState<'text1' | 'text2'>('text1');

  // Active dataset for single-text modes
  const activeTitle = selectedTextVersion === 'text1' ? 'Texto 1 — Presente' : 'Texto 2 — Pretérito Perfecto';
  const activeSubTitle = selectedTextVersion === 'text1' ? 'Tema: Mi día' : 'Tema: Hoy he tenido un día tranquilo';
  const activeSentences = selectedTextVersion === 'text1' ? text1Presente : text2PreteritoPerfecto;

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal parchment-texture py-6 px-4 md:px-8 flex flex-col justify-between" id="app-workspace">
      {/* Aesthetic Header */}
      <header className="max-w-7xl w-full mx-auto bg-white rounded-3xl border border-brand-charcoal/10 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6" id="app-header">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Sparkles size={14} />
            <span>Իսպաներենի Ինտերակտիվ Տեքստային Դասընթաց</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight text-brand-charcoal">
            Presente y Pretérito Perfecto
          </h1>
          <p className="text-sm text-brand-charcoal/50 max-w-xl leading-normal font-sans">
            Ուսուցողական-ներկայացման հարթակ իսպաներենի բայական ձևերի ուսումնասիրության համար՝ Երևանում տեղի ունեցող երկու հակադիր պատմությունների հիման վրա:
          </p>
        </div>

        {/* Armenian Context Flag Badge */}
        <div className="flex items-center gap-3.5 bg-brand-beige border border-brand-charcoal/5 px-5 py-4 rounded-2xl shadow-inner text-right">
          <div className="space-y-0.5 font-sans">
            <span className="text-[10px] text-brand-charcoal/40 uppercase font-mono block tracking-wider">Լեզվական կամուրջ</span>
            <span className="font-bold text-xs text-brand-charcoal block">Իսպաներեն ⇋ Հայերեն</span>
            <span className="text-[11px] text-brand-emerald font-medium block">Հայերեն Բացատրություններով</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-2xl" title="España">🇪🇸</span>
            <span className="text-2xl" title="Armenia">🇦🇲</span>
          </div>
        </div>
      </header>

      {/* Main Study Desk with Tabs */}
      <main className="flex-1 max-w-7xl w-full mx-auto py-8 grid grid-cols-1 gap-6" id="app-main-view">
        {/* Desk Controller Menu */}
        <div className="bg-white rounded-2xl border border-brand-charcoal/10 shadow-sm p-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Main Tab selector */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTab('presentation')}
              className={`flex items-center gap-2.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'presentation'
                  ? 'bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/15'
                  : 'text-brand-charcoal/70 hover:bg-brand-beige'
              }`}
              id="tab-btn-presentation"
            >
              <Presentation size={15} />
              <span>Ներկայացում</span>
            </button>

            <button
              onClick={() => setActiveTab('reader')}
              className={`flex items-center gap-2.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'reader'
                  ? 'bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/15'
                  : 'text-brand-charcoal/70 hover:bg-brand-beige'
              }`}
              id="tab-btn-reader"
            >
              <Book size={15} />
              <span>Ընթերցանության ռեժիմ</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'compare'
                  ? 'bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/15'
                  : 'text-brand-charcoal/70 hover:bg-brand-beige'
              }`}
              id="tab-btn-compare"
            >
              <ArrowRightLeft size={15} />
              <span>Ժամանակների համեմատում</span>
            </button>

            <button
              onClick={() => setActiveTab('grammar')}
              className={`flex items-center gap-2.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'grammar'
                  ? 'bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/15'
                  : 'text-brand-charcoal/70 hover:bg-brand-beige'
              }`}
              id="tab-btn-grammar"
            >
              <BookOpen size={15} />
              <span>Բայերի քերականություն</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`flex items-center gap-2.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'vocab'
                  ? 'bg-brand-terracotta text-white shadow-md shadow-brand-terracotta/15'
                  : 'text-brand-charcoal/70 hover:bg-brand-beige'
              }`}
              id="tab-btn-vocab"
            >
              <Layers size={15} />
              <span>Բառապաշար</span>
            </button>
          </div>

          {/* Text Choice Selector (Applicable for Slideshow and Reader Modes) */}
          {(activeTab === 'presentation' || activeTab === 'reader') && (
            <div className="flex items-center gap-2 bg-brand-beige p-1.5 rounded-xl border border-brand-charcoal/5 font-sans">
              <span className="text-[10px] font-mono font-bold uppercase text-brand-charcoal/40 px-2">Տեքստ՝</span>
              <button
                onClick={() => setSelectedTextVersion('text1')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  selectedTextVersion === 'text1'
                    ? 'bg-white text-brand-terracotta shadow-sm border border-brand-charcoal/5'
                    : 'text-brand-charcoal/60 hover:text-brand-charcoal'
                }`}
                id="btn-switch-text1"
              >
                1. Presente
              </button>
              <button
                onClick={() => setSelectedTextVersion('text2')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  selectedTextVersion === 'text2'
                    ? 'bg-white text-brand-terracotta shadow-sm border border-brand-charcoal/5'
                    : 'text-brand-charcoal/60 hover:text-brand-charcoal'
                }`}
                id="btn-switch-text2"
              >
                2. Pretérito P.
              </button>
            </div>
          )}
        </div>

        {/* Interactive Workspace Container with Tab Renderers */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (activeTab === 'presentation' || activeTab === 'reader' ? selectedTextVersion : '')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.22 }}
              className="h-full"
            >
              {activeTab === 'presentation' && (
                <Slideshow
                  title={activeTitle}
                  theme={activeSubTitle}
                  sentences={activeSentences}
                />
              )}

              {activeTab === 'reader' && (
                <TextReader
                  title={activeTitle}
                  theme={activeSubTitle}
                  sentences={activeSentences}
                  accentColor="brand-terracotta"
                />
              )}

              {activeTab === 'compare' && <CompareView />}

              {activeTab === 'grammar' && <VerbGrammar />}

              {activeTab === 'vocab' && <VocabularyFlashcards />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Structured Footer */}
      <footer className="max-w-7xl w-full mx-auto mt-8 bg-brand-charcoal text-brand-beige rounded-3xl p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5 shadow-lg shadow-brand-charcoal/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-citrus">
            <Smile size={20} />
          </div>
          <div className="space-y-0.5 font-sans">
            <span className="font-bold text-sm block">Ernesto de Ereván</span>
            <span className="text-xs text-brand-beige/50 block">Իսպաներեն հայախոս ուսանողների համար</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-brand-beige/40">
          <CheckCircle size={14} className="text-brand-emerald" />
          <span>Պատրաստված է սիրով լեզվաբանության և կոդի հանդեպ</span>
        </div>
      </footer>
    </div>
  );
}
