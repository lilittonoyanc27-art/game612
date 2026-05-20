/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SentenceItem {
  id: string;
  spanish: string;
  translationPart?: string; // Optional Armenian guidance if requested
  highlightedVerbs: Array<{
    word: string;
    infinitive: string;
    tense: 'Presente' | 'Pretérito Perfecto';
    conjugation: string; // e.g., "1st person singular"
    explanation: string;
    armenianExplanation?: string;
  }>;
}

export interface ComparativeVerbPair {
  id: string;
  presentVerb: string;
  pastVerb: string;
  infinitive: string;
  presentEnglish: string;
  pastEnglish: string;
  armenianTranslation: string;
  regularity: 'Regular' | 'Irregular' | 'Reflexivo' | 'Irregular-Reflexivo';
  examplePresent: string;
  examplePast: string;
}

export interface VocabWord {
  id: string;
  spanish: string;
  armenian: string;
  pronunciationHint?: string;
  partOfSpeech: string;
  category: 'Verbs' | 'Nouns' | 'Time Expressions' | 'Others';
}
