/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRightLeft, Volume2, Sparkles, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { sentencePairComparisons } from './data';

export default function CompareView() {
  const [activePairId, setActivePairId] = useState<string | null>(sentencePairComparisons[0]?.id || null);
  const [isSpeakingPresent, setIsSpeakingPresent] = useState(false);
  const [isSpeakingPast, setIsSpeakingPast] = useState(false);

  const speakText = (text: string, isPresent: boolean) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[.—\u200b]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = 0.82;

      utterance.onstart = () => {
        if (isPresent) setIsSpeakingPresent(true);
        else setIsSpeakingPast(true);
      };

      utterance.onend = () => {
        setIsSpeakingPresent(false);
        setIsSpeakingPast(false);
      };

      utterance.onerror = () => {
        setIsSpeakingPresent(false);
        setIsSpeakingPast(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const selectedPair = sentencePairComparisons.find((p) => p.id === activePairId);

  return (
    <div className="space-y-6" id="compare-view-root">
      {/* Intro visual banner */}
      <div className="bg-gradient-to-r from-brand-terracotta/10 to-brand-citrus/10 p-6 md:p-8 rounded-3xl border border-brand-terracotta/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-brand-terracotta font-semibold">
            <ArrowRightLeft size={16} />
            <span>Զուգահեռ համեմատում</span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-charcoal">
            Rutina vs. Acciones de Hoy
          </h3>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-2xl font-sans">
            Ինտերակտիվ կամուրջ Presente-ի սովորական գործողությունների («Սովորաբար ես դա անում եմ ամեն օր») և Pretérito Perfecto-ի ավարտված դրվագների («Ահա թե ինչ եմ արել այսօր») միջև։
          </p>
        </div>
        <div className="flex items-center gap-1 bg-white border border-brand-charcoal/10 rounded-2xl px-4 py-2 text-xs font-mono font-bold text-brand-terracotta shadow-sm">
          <span>{sentencePairComparisons.length} Համեմատական շղթաներ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Comparison List Column */}
        <div className="xl:col-span-7 space-y-3.5">
          {sentencePairComparisons.map((pair) => {
            const isActive = activePairId === pair.id;
            return (
              <motion.div
                key={pair.id}
                onClick={() => {
                  setActivePairId(pair.id);
                  setIsSpeakingPresent(false);
                  setIsSpeakingPast(false);
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                }}
                className={`p-4 md:p-5 cursor-pointer rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-brand-charotta shadow-lg ring-1 ring-brand-terracotta/20 scale-[1.008]'
                    : 'bg-white/60 hover:bg-white border-brand-charcoal/5 hover:border-brand-charcoal/15'
                }`}
                whileHover={{ y: isActive ? 0 : -1 }}
                id={`compare-row-${pair.id}`}
              >
                {/* Horizontal flow containing both sentences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Presente */}
                  <div className="space-y-1.5 border-b md:border-b-0 pb-3 md:pb-0 md:border-r border-brand-charcoal/5 pr-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-brand-citrus font-bold">
                        Presente (Կանոնավոր)
                      </span>
                      {isActive && (
                        <span className="text-xs font-mono font-medium text-brand-charcoal/40 font-sans">Habitual</span>
                      )}
                    </div>
                    <p className="font-serif text-sm md:text-base text-brand-charcoal leading-relaxed font-medium">
                      {pair.present.split(' ').map((word, idx) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        const isVerb = cleanWord.includes(pair.verbPresent.toLowerCase()) || pair.verbPresent.toLowerCase().includes(cleanWord);
                        return (
                          <span
                            key={idx}
                            className={`mx-0.5 ${
                              isVerb ? 'text-brand-citrus font-bold underline decoration-brand-citrus/45' : ''
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </p>
                  </div>

                  {/* Pretérito Perfecto */}
                  <div className="space-y-1.5 pl-0 md:pl-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-brand-terracotta font-bold">
                        Pretérito P. (Այսօր)
                      </span>
                      {isActive && (
                        <span className="text-xs font-mono font-medium text-brand-charcoal/40 font-sans">Finalizado</span>
                      )}
                    </div>
                    <p className="font-serif text-sm md:text-base text-brand-charcoal leading-relaxed font-medium">
                      {pair.past.split(' ').map((word, idx) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        const isVerb = pair.verbPast.toLowerCase().includes(cleanWord) || cleanWord.includes(pair.verbPast.toLowerCase().split(' ')[1] || '_____');
                        return (
                          <span
                            key={idx}
                            className={`mx-0.5 ${
                              isVerb ? 'text-brand-terracotta font-bold underline decoration-brand-terracotta/45' : ''
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-3.5 border-t border-brand-charcoal/5 pt-2 flex items-center justify-between text-[11px] font-mono text-brand-charcoal/40">
                  <div className="flex items-center gap-1 text-brand-emerald">
                    <Check size={12} />
                    <span>Կապված է բայով՝ {pair.verbPresent} ➜ {pair.verbPast}</span>
                  </div>
                  <span>Ակտիվ</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Card Column */}
        <div className="xl:col-span-5" id="compare-analysis-pane">
          <div className="sticky top-6">
            {selectedPair ? (
              <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-6 space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-brand-terracotta font-bold bg-brand-terracotta/10 px-2.5 py-1 rounded-full">
                    Շղթայի խորը վերլուծություն
                  </span>
                  <p className="font-mono text-xs text-brand-charcoal/40 mt-3">Փոփոխությունը շղթայում՝</p>
                  <div className="flex items-center gap-3.5 bg-brand-beige border border-brand-charcoal/5 rounded-2xl p-4 mt-2 justify-center">
                    <span className="font-mono font-bold text-sm text-brand-citrus bg-white px-2.5 py-1 rounded-lg border border-brand-charcoal/10 shadow-sm">
                      {selectedPair.verbPresent}
                    </span>
                    <ArrowRight size={16} className="text-brand-charcoal/30 animate-bounce" />
                    <span className="font-mono font-bold text-sm text-brand-terracotta bg-white px-2.5 py-1 rounded-lg border border-brand-charcoal/10 shadow-sm">
                      {selectedPair.verbPast}
                    </span>
                  </div>
                </div>

                {/* Audios interactive controls */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-mono text-brand-charcoal/50 block">Աուդիո արտասանություն՝</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => speakText(selectedPair.present, true)}
                      className={`flex items-center justify-center gap-2 text-xs font-semibold p-3.5 rounded-xl border transition-all ${
                        isSpeakingPresent
                          ? 'bg-brand-citrus text-white border-brand-citrus scale-102 shadow-sm'
                          : 'bg-brand-beige text-brand-charcoal border-brand-charcoal/10 hover:border-brand-citrus/40 hover:bg-white'
                      }`}
                      id="btn-speak-present-compare"
                    >
                      <Volume2 size={15} />
                      <span>{isSpeakingPresent ? 'Հնչում է...' : 'Routine (Present)'}</span>
                    </button>

                    <button
                      onClick={() => speakText(selectedPair.past, false)}
                      className={`flex items-center justify-center gap-2 text-xs font-semibold p-3.5 rounded-xl border transition-all ${
                        isSpeakingPast
                          ? 'bg-brand-terracotta text-white border-brand-terracotta scale-102 shadow-sm'
                          : 'bg-brand-beige text-brand-charcoal border-brand-charcoal/10 hover:border-brand-terracotta/40 hover:bg-white'
                      }`}
                      id="btn-speak-past-compare"
                    >
                      <Volume2 size={15} />
                      <span>{isSpeakingPast ? 'Հնչում է...' : 'Today (Perfecto)'}</span>
                    </button>
                  </div>
                </div>

                {/* Explanations block */}
                <div className="space-y-4">
                  <div className="space-y-1.5 p-4 rounded-2xl bg-brand-beige border border-brand-charcoal/5">
                    <div className="flex items-center gap-1.5 text-brand-charcoal text-xs font-mono font-semibold uppercase">
                      <Sparkles size={14} className="text-brand-terracotta" />
                      <span>Հասկացությունների տարբերությունը</span>
                    </div>
                    <p className="text-xs text-brand-charcoal/75 font-sans leading-relaxed mt-1">
                      {selectedPair.concept}
                    </p>
                  </div>

                  {selectedPair.armenianConcept && (
                    <div className="space-y-1.5 p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/10 text-brand-emerald">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase">
                        <span>🇦🇲 ՀԱՅԵՐԵՆ ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ</span>
                      </div>
                      <p className="text-xs font-medium font-sans leading-relaxed mt-1">
                        {selectedPair.armenianConcept}
                      </p>
                    </div>
                  )}
                </div>

                {/* Prompt Info */}
                <div className="flex items-start gap-2 text-xs bg-brand-beige p-3.5 rounded-xl text-brand-charcoal/60 border border-transparent">
                  <HelpCircle size={16} className="text-brand-terracotta flex-shrink-0 mt-0.5" />
                  <p className="leading-normal font-sans">
                    Pretérito Perfecto-ի յուրաքանչյուր նախադասություն օգտագործում է <strong>haber</strong> օժանդակ բայը ներկա ժամանակով և հիմնական բայի դերբայը (-ado / -ido)։ Կտտացրեք ձախ կողմի մյուս քարտերին՝ այլ կապեր տեսնելու համար։
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-10 text-center text-brand-charcoal/40 font-sans">
                Կտտացրեք ձախ կողմում գտնվող որևէ համեմատական շղթայի վրա՝ մանրամասն քերականական վերլուծությունը տեսնելու համար։
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
