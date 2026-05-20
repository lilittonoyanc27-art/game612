/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Sliders, CheckCircle2, Award, ListFilter } from 'lucide-react';
import { comparativeVerbs } from './data';

export default function VerbGrammar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInfinitive, setSelectedInfinitive] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'All' | 'Regular' | 'Irregular' | 'Reflexivo'>('All');

  // Filter logic
  const filteredVerbs = comparativeVerbs.filter((verb) => {
    const matchesSearch =
      verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.presentVerb.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.pastVerb.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (filterType === 'All') return true;
    if (filterType === 'Regular' && verb.regularity === 'Regular') return true;
    if (filterType === 'Irregular' && verb.regularity.startsWith('Irregular')) return true;
    if (filterType === 'Reflexivo' && verb.regularity.includes('Reflexivo')) return true;
    
    return true;
  });

  const selectedVerb = comparativeVerbs.find((v) => v.infinitive === selectedInfinitive) || filteredVerbs[0];

  return (
    <div className="space-y-6" id="verb-grammar-root">
      {/* Conjugation explanation card */}
      <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-brand-emerald font-semibold">
          <BookOpen size={16} />
          <span>Քերականական Տեղեկատու (Spelling & Conjugation)</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-2">
          {/* Present tense brief */}
          <div className="space-y-3 bg-brand-beige/50 border border-brand-charcoal/5 p-5 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-citrus font-mono">
              1. Presente Indicativo (Ներկա ժամանակ)
            </h4>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
              Օգտագործվում է սովորական գործողությունների, ընդհանուր փաստերի և տվյալ պահին առկա վիճակների արտահայտման համար: Ներկա ժամանակն ունի հատուկ վերջավորություններ -ar, -er և -ir խմբերի համար:
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] font-mono">
              <div className="bg-white p-2 rounded border border-brand-charcoal/10">
                <span className="font-bold text-brand-citrus block">-AR</span>
                <span className="text-brand-charcoal/60">-o, -as, -a, -amos, -áis, -an</span>
              </div>
              <div className="bg-white p-2 rounded border border-brand-charcoal/10">
                <span className="font-bold text-brand-citrus block">-ER</span>
                <span className="text-brand-charcoal/60">-o, -es, -e, -emos, -éis, -en</span>
              </div>
              <div className="bg-white p-2 rounded border border-brand-charcoal/10">
                <span className="font-bold text-brand-citrus block">-IR</span>
                <span className="text-brand-charcoal/60">-o, -es, -e, -imos, -ís, -en</span>
              </div>
            </div>
          </div>

          {/* Pretérito perfecto brief */}
          <div className="space-y-3 bg-brand-beige/50 border border-brand-charcoal/5 p-5 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-terracotta font-mono">
              2. Pretérito Perfecto (Վաղակատար ներկա)
            </h4>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
              Կազմվում է ներկա ժամանակով խոնարհված <strong>haber</strong> օժանդակ բայի և հիմնական բայի հարակատար դերբայի (Participio) միջոցով:
            </p>
            <div className="bg-white px-3 py-2 rounded-xl border border-brand-charcoal/10 text-xs font-mono flex items-center justify-between text-brand-terracotta font-bold">
              <span>Haber (he, has, ha, hemos, habéis, han)</span>
              <span>+</span>
              <span>-AR ➜ -ado<br />-ER / -IR ➜ -ido</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left list and filters */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Բայական ցուցիչ</h4>
            <span className="text-xs font-mono text-brand-charcoal/40 bg-brand-beige px-2 py-0.5 rounded-full">
              {filteredVerbs.length} բայ
            </span>
          </div>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Փնտրել ըստ անորոշ ձևի կամ խոնարհման..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-brand-charcoal/10 focus:outline-none focus:border-brand-terracotta bg-brand-beige/30 transition-all font-sans"
            id="input-verb-search"
          />

          {/* Regularity Filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
            {(['All', 'Regular', 'Irregular', 'Reflexivo'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all flex-shrink-0 ${
                  filterType === type
                    ? 'bg-brand-charcoal text-white border-brand-charcoal'
                    : 'bg-brand-beige text-brand-charcoal/70 border-brand-charcoal/5 hover:bg-brand-charcoal/5'
                }`}
                id={`btn-filter-type-${type}`}
              >
                {type === 'All' ? 'Բոլորը' : type === 'Regular' ? 'Կանոնավոր' : type === 'Irregular' ? 'Անկանոն' : 'Ինքնադարձ'}
              </button>
            ))}
          </div>

          {/* Verb list */}
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {filteredVerbs.map((verb) => {
              const isActive = selectedVerb?.infinitive === verb.infinitive;
              return (
                <div
                  key={verb.id}
                  onClick={() => setSelectedInfinitive(verb.infinitive)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-beige border-brand-terracotta/40 shadow-sm'
                      : 'bg-white hover:bg-brand-beige/30 border-brand-charcoal/5'
                  }`}
                  id={`verb-row-${verb.id}`}
                >
                  <div className="space-y-0.5 animate-fade-in text-left">
                    <span className="font-sans font-bold text-sm text-brand-charcoal block">
                      {verb.infinitive}
                    </span>
                    <span className="text-[10px] text-brand-charcoal/40 block capitalize">
                      {verb.regularity === 'Regular' ? 'Կանոնավոր' : verb.regularity === 'Reflexivo' ? 'Ինքնադարձ' : 'Անկանոն'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-terracotta bg-white px-2 py-1 rounded border border-brand-charcoal/10">
                      {verb.pastVerb}
                    </span>
                  </div>
                </div>
              );
            })}
            
            {filteredVerbs.length === 0 && (
              <div className="text-center py-6 text-xs text-brand-charcoal/40 font-mono">
                Բայեր չեն գտնվել
              </div>
            )}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-7" id="verb-conjugation-details">
          {selectedVerb ? (
            <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-6 md:p-8 space-y-6">
              {/* Heading */}
              <div className="border-b border-brand-charcoal/5 pb-4 flex flex-wrap justify-between items-start gap-3 text-left">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-brand-charcoal/40 uppercase tracking-widest block">
                    Բայի կենտրոնացում (Verb Focus)
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-brand-charcoal">
                    {selectedVerb.infinitive}
                  </h3>
                  <p className="text-xs text-brand-charcoal/60 font-sans mt-1">
                    Հայերեն թարգմանություն՝{' '}
                    <strong className="text-brand-emerald font-medium bg-brand-emerald/10 px-1.5 py-0.5 rounded">
                      {selectedVerb.armenianTranslation}
                    </strong>
                  </p>
                </div>
                
                <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${
                  selectedVerb.regularity === 'Regular'
                    ? 'bg-brand-emerald/10 text-brand-emerald'
                    : selectedVerb.regularity === 'Reflexivo'
                    ? 'bg-brand-citrus/15 text-brand-terracotta'
                    : 'bg-red-50 text-red-600'
                }`}>
                  {selectedVerb.regularity === 'Regular' ? 'Կանոնավոր' : selectedVerb.regularity === 'Reflexivo' ? 'Ինքնադարձ' : 'Անկանոն'}
                </span>
              </div>

              {/* Side-by-side Conjugation cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* Present aspect */}
                <div className="border border-brand-charcoal/10 rounded-2xl p-4.5 space-y-2 bg-brand-beige/10">
                  <span className="text-[10px] uppercase font-mono text-brand-citrus font-bold block">
                    Presente (Ներկա ժամանակ տեքստում)
                  </span>
                  <div className="bg-white rounded-xl p-3 border border-brand-charcoal/5 shadow-sm space-y-1">
                    <span className="text-xs text-brand-charcoal/50 block font-mono">Ընտրված ձև (yo / ես)</span>
                    <span className="font-mono font-bold text-base text-brand-citrus block">
                      {selectedVerb.presentVerb}
                    </span>
                    <span className="text-xs text-brand-charcoal/70 leading-normal block">
                      Իմաստը՝ &quot;{selectedVerb.presentEnglish}&quot;
                    </span>
                  </div>
                  <div className="p-3 bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-brand-charcoal/50 block">Համատեքստային օրինակ՝</span>
                    <p className="font-serif italic text-xs text-brand-charcoal leading-relaxed">
                      &ldquo;{selectedVerb.examplePresent}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Pretérito perfecto aspect */}
                <div className="border border-brand-charcoal/10 rounded-2xl p-4.5 space-y-2 bg-brand-beige/10">
                  <span className="text-[10px] uppercase font-mono text-brand-terracotta font-bold block">
                    Pretérito Perfecto (Վաղակատար ժամանակ տեքստում)
                  </span>
                  <div className="bg-white rounded-xl p-3 border border-brand-charcoal/5 shadow-sm space-y-1">
                    <span className="text-xs text-brand-charcoal/50 block font-mono">Ընտրված ձև (yo / ես)</span>
                    <span className="font-mono font-bold text-base text-brand-terracotta block">
                      {selectedVerb.pastVerb}
                    </span>
                    <span className="text-xs text-brand-charcoal/70 leading-normal block">
                      Իմաստը՝ &quot;{selectedVerb.pastEnglish}&quot;
                    </span>
                  </div>
                  <div className="p-3 bg-brand-beige/50 border border-brand-charcoal/10 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-brand-charcoal/50 block">Համատեքստային օրինակ՝</span>
                    <p className="font-serif italic text-xs text-brand-charcoal leading-relaxed">
                      &ldquo;{selectedVerb.examplePast}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-brand-emerald/5 border border-brand-emerald/20 rounded-2xl p-4 flex gap-3 text-xs text-brand-charcoal/65 text-left">
                <CheckCircle2 size={18} className="text-brand-emerald flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-bold text-brand-emerald block">Կրթական մեկնաբանություն</span>
                  <div className="leading-relaxed font-sans">
                    {selectedVerb.regularity.startsWith('Irregular') ? (
                      <span>
                        Գրաբար/Անկանոն <strong>{selectedVerb.infinitive}</strong> բայը հանդիսանում է ուժեղ կամ ունի արմատական փոփոխություններ: 
                        Անցյալ ժամանակում ուշադրություն դարձրեք անորոշ հիմքի անցմանը դերբայի (Participio) ձևին, 
                        օրինակ՝ <em>volver</em> ➜ <strong>vuelto</strong>, <em>hacer</em> ➜ <strong>hecho</strong>: Ի տարբերություն կանոնավոր բայերի, սրանք հարկավոր է անգիր հիշել:
                      </span>
                    ) : (
                      <span>
                        <strong>{selectedVerb.infinitive}</strong> բայը պատկանում է կանոնավոր բայերի խմբին: 
                        Նրա Presente-ի ձևերը կազմվում են ստանդարտ եղանակով, իսկ անցյալ դերբայը 
                        պարզապես միացնում է <strong>-ado</strong> կամ <strong>-ido</strong> վերջավորությունը բայահիմքին:
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-lg p-10 text-center text-brand-charcoal/40 font-serif">
              Բայի տվյալների բեռնում...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
