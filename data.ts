/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SentenceItem, ComparativeVerbPair, VocabWord } from './types';

export const text1Presente: SentenceItem[] = [
  {
    id: 't1s1',
    spanish: 'Hola. Me llamo Ernesto. Vivo en Ereván.',
    highlightedVerbs: [
      {
        word: 'llamo',
        infinitive: 'llamarse',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Reflexive verb "llamarse" (to be named). Present tense.',
        armenianExplanation: 'Անվանվել («կոչվել»): Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես անվանվում եմ / անունս է):'
      },
      {
        word: 'Vivo',
        infinitive: 'vivir',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "vivir" (to live). Present tense.',
        armenianExplanation: 'Ապրել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես ապրում եմ):'
      }
    ]
  },
  {
    id: 't1s2',
    spanish: 'Cada día me levanto a las siete de la mañana.',
    highlightedVerbs: [
      {
        word: 'levanto',
        infinitive: 'levantarse',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Reflexive verb "levantarse" (to get up). Present tense.',
        armenianExplanation: 'Արթնանալ/վեր կենալ (ինքնադարձ): Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես վեր եմ կենում):'
      }
    ]
  },
  {
    id: 't1s3',
    spanish: 'Desayuno en casa y bebo té.',
    highlightedVerbs: [
      {
        word: 'Desayuno',
        infinitive: 'desayunar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "desayunar" (to have breakfast). Present tense.',
        armenianExplanation: 'Նախաճաշել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես նախաճաշում եմ):'
      },
      {
        word: 'bebo',
        infinitive: 'beber',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "beber" (to drink). Present tense.',
        armenianExplanation: 'Խմել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես խմում եմ):'
      }
    ]
  },
  {
    id: 't1s4',
    spanish: 'Después voy a clase de español.',
    highlightedVerbs: [
      {
        word: 'voy',
        infinitive: 'ir',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Highly irregular verb "ir" (to go). Present tense.',
        armenianExplanation: 'Գնալ: Անկանոն բայ, սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես գնում եմ):'
      }
    ]
  },
  {
    id: 't1s5',
    spanish: 'Estudio español porque me gusta mucho este idioma.',
    highlightedVerbs: [
      {
        word: 'Estudio',
        infinitive: 'estudiar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "estudiar" (to study). Present tense.',
        armenianExplanation: 'Սովորել/ուսումնասիրել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես սովորում եմ):'
      },
      {
        word: 'gusta',
        infinitive: 'gustar',
        tense: 'Presente',
        conjugation: '3.ª persona singular (él/ella/usted)',
        explanation: 'Verb "gustar" (to like). Used with indirect object pronoun "me".',
        armenianExplanation: 'Դուր գալ: Սահմանական ներկա, 3-րդ դեմք, եզակի թիվ (ինձ դուր է գալիս):'
      }
    ]
  },
  {
    id: 't1s6',
    spanish: 'En la clase escucho, leo y hablo con la profesora.',
    highlightedVerbs: [
      {
        word: 'escucho',
        infinitive: 'escuchar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "escuchar" (to listen). Present tense.',
        armenianExplanation: 'Լսել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես լսում եմ):'
      },
      {
        word: 'leo',
        infinitive: 'leer',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb with spelling rule "leer" (to read). Present tense.',
        armenianExplanation: 'Կարդալ: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես կարդում եմ):'
      },
      {
        word: 'hablo',
        infinitive: 'hablar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "hablar" (to speak). Present tense.',
        armenianExplanation: 'Խոսել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես խոսում եմ):'
      }
    ]
  },
  {
    id: 't1s7',
    spanish: 'Después de la clase camino un poco y compro pan.',
    highlightedVerbs: [
      {
        word: 'camino',
        infinitive: 'caminar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "caminar" (to walk). Present tense.',
        armenianExplanation: 'Քայլել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես քայլում եմ):'
      },
      {
        word: 'compro',
        infinitive: 'comprar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "comprar" (to buy). Present tense.',
        armenianExplanation: 'Գնել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես գնում եմ / գնումներ եմ անում):'
      }
    ]
  },
  {
    id: 't1s8',
    spanish: 'Por la tarde vuelvo a casa.',
    highlightedVerbs: [
      {
        word: 'vuelvo',
        infinitive: 'volver',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Stem-changing verb "volver" (o -> ue) (to return). Present tense.',
        armenianExplanation: 'Վերադառնալ: Արմատական փոփոխությամբ բայ (o -> ue), ներկա ժամանակ, 1-ին դեմք, եզակի թիվ (ես վերադառնում եմ):'
      }
    ]
  },
  {
    id: 't1s9',
    spanish: 'Hago mis deberes y escucho música.',
    highlightedVerbs: [
      {
        word: 'Hago',
        infinitive: 'hacer',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Irregular first-person verb "hacer" (to do/make). Present tense.',
        armenianExplanation: 'Անել/պատրաստել: Անկանոն 1-ին դեմքով բայ (yo hago), ներկա, 1-ին դեմք, եզակի թիվ (ես անում եմ):'
      },
      {
        word: 'escucho',
        infinitive: 'escuchar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "escuchar" (to listen). Present tense.',
        armenianExplanation: 'Լսել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես լսում եմ):'
      }
    ]
  },
  {
    id: 't1s10',
    spanish: 'Normalmente ceno con mi familia.',
    highlightedVerbs: [
      {
        word: 'ceno',
        infinitive: 'cenar',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "cenar" (to have dinner). Present tense.',
        armenianExplanation: 'Ընթրել: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես ընթրում եմ):'
      }
    ]
  },
  {
    id: 't1s11',
    spanish: 'Por la noche leo un libro pequeño y me acuesto a las once.',
    highlightedVerbs: [
      {
        word: 'leo',
        infinitive: 'leer',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Regular verb "leer" (to read). Present tense.',
        armenianExplanation: 'Կարդալ: Սահմանական ներկա, 1-ին դեմք, եզակի թիվ (ես կարդում եմ):'
      },
      {
        word: 'acuesto',
        infinitive: 'acostarse',
        tense: 'Presente',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Reflexive + stem-changing verb "acostarse" (o -> ue) (to go to bed). Present tense.',
        armenianExplanation: 'Պառկել քնելու (ինքնադարձ, o -> ue արմատական փոփոխությամբ): Ներկա ժամանակ, 1-ին դեմք, եզակի թիվ (ես պառկում եմ քնելու):'
      }
    ]
  }
];

export const text2PreteritoPerfecto: SentenceItem[] = [
  {
    id: 't2s1',
    spanish: 'Hola. Hoy he tenido un día tranquilo.',
    highlightedVerbs: [
      {
        word: 'he tenido',
        infinitive: 'tener',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "tener" (tenido). Means "I have had".',
        armenianExplanation: 'Ունենալ: Սահմանական վաղակատար ներկա (Pretérito Perfecto), 1-ին դեմք, եզակի թիվ (ես այսօր ունեցել եմ):'
      }
    ]
  },
  {
    id: 't2s2',
    spanish: 'Me he levantado a las ocho de la mañana.',
    highlightedVerbs: [
      {
        word: 'Me he levantado',
        infinitive: 'levantarse',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Reflexive pronoun (me) + auxiliary "haber" (he) + past participle of "levantar" (levantado). Means "I have gotten up".',
        armenianExplanation: 'Արթնանալ/վեր կենալ (ինքնադարձ): Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես արթնացել եմ / վեր եմ կենցել):'
      }
    ]
  },
  {
    id: 't2s3',
    spanish: 'He desayunado en casa con mi familia.',
    highlightedVerbs: [
      {
        word: 'He desayunado',
        infinitive: 'desayunar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle (desayunado). Means "I have eaten breakfast".',
        armenianExplanation: 'Նախաճաշել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես նախաճաշել եմ):'
      }
    ]
  },
  {
    id: 't2s4',
    spanish: 'Después he ido a clase de español.',
    highlightedVerbs: [
      {
        word: 'he ido',
        infinitive: 'ir',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "ir" (ido). Means "I have gone".',
        armenianExplanation: 'Գնալ: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես գնացել եմ):'
      }
    ]
  },
  {
    id: 't2s5',
    spanish: 'En la clase he aprendido palabras nuevas.',
    highlightedVerbs: [
      {
        word: 'he aprendido',
        infinitive: 'aprender',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "aprender" (aprendido). Means "I have learned".',
        armenianExplanation: 'Սովորել/սերտել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես սովորել եմ):'
      }
    ]
  },
  {
    id: 't2s6',
    spanish: 'También he hablado un poco en español.',
    highlightedVerbs: [
      {
        word: 'he hablado',
        infinitive: 'hablar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "hablar" (hablado). Means "I have spoken".',
        armenianExplanation: 'Խոսել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես խոսել եմ):'
      }
    ]
  },
  {
    id: 't2s7',
    spanish: 'La profesora ha explicado una regla fácil.',
    highlightedVerbs: [
      {
        word: 'ha explicado',
        infinitive: 'explicar',
        tense: 'Pretérito Perfecto',
        conjugation: '3.ª persona singular (él/ella)',
        explanation: 'Auxiliary "haber" (ha) + past participle of "explicar" (explicado). Means "has explained".',
        armenianExplanation: 'Բացատրել: Վաղակատար ներկա, 3-րդ դեմք, եզակի թիվ (ուսուցչուհին բացատրել է):'
      }
    ]
  },
  {
    id: 't2s8',
    spanish: 'Después de la clase he comprado agua y pan.',
    highlightedVerbs: [
      {
        word: 'he comprado',
        infinitive: 'comprar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle (comprado). Means "I have bought".',
        armenianExplanation: 'Գնել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես գնել եմ):'
      }
    ]
  },
  {
    id: 't2s9',
    spanish: 'Luego he vuelto a casa en autobús.',
    highlightedVerbs: [
      {
        word: 'he vuelto',
        infinitive: 'volver',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + irregular past participle (vuelto). Means "I have returned".',
        armenianExplanation: 'Վերադառնալ (անկանոն հիմքով հարակատար դերբայ՝ vuelto): Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես վերադարձել եմ):'
      }
    ]
  },
  {
    id: 't2s10',
    spanish: 'Por la tarde he hecho mis deberes.',
    highlightedVerbs: [
      {
        word: 'he hecho',
        infinitive: 'hacer',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + irregular past participle of "hacer" (hecho). Means "I have done".',
        armenianExplanation: 'Անել/կատարել (անկանոն հիմքով հարակատար դերբայ՝ hecho): Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես արել եմ / կատարել եմ):'
      }
    ]
  },
  {
    id: 't2s11',
    spanish: 'He escuchado música y he descansado un poco.',
    highlightedVerbs: [
      {
        word: 'He escuchado',
        infinitive: 'escuchar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle (escuchado). Means "I have listened to".',
        armenianExplanation: 'Լսել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես երաժշտություն եմ լսել):'
      },
      {
        word: 'he descansado',
        infinitive: 'descansar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle (descansado). Means "I have rested".',
        armenianExplanation: 'Հանգստանալ: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես հանգստացել եմ):'
      }
    ]
  },
  {
    id: 't2s12',
    spanish: 'Por la noche he cenado con mi familia.',
    highlightedVerbs: [
      {
        word: 'he cenado',
        infinitive: 'cenar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "cenar" (cenado). Means "I have dined/eaten dinner".',
        armenianExplanation: 'Ընթրել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես ընթրել եմ):'
      }
    ]
  },
  {
    id: 't2s13',
    spanish: 'Hoy no he salido mucho, pero he estudiado bien.',
    highlightedVerbs: [
      {
        word: 'he salido',
        infinitive: 'salir',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "salir" (salido). Means "I have gone out".',
        armenianExplanation: 'Դուրս գալ / տնից դուրս գնալ: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես դուրս չեմ եկել շատ):'
      },
      {
        word: 'he estudiado',
        infinitive: 'estudiar',
        tense: 'Pretérito Perfecto',
        conjugation: '1.ª persona singular (yo)',
        explanation: 'Auxiliary "haber" (he) + past participle of "estudiar" (estudiado). Means "I have studied".',
        armenianExplanation: 'Սովորել: Վաղակատար ներկա, 1-ին դեմք, եզակի թիվ (ես լավ սովորել եմ):'
      }
    ]
  }
];

export const comparativeVerbs: ComparativeVerbPair[] = [
  {
    id: 'cv1',
    presentVerb: 'me levanto',
    pastVerb: 'me he levantado',
    infinitive: 'levantarse',
    presentEnglish: 'I get up',
    pastEnglish: 'I have gotten up',
    armenianTranslation: 'Վեր եմ կենում ➜ Վեր եմ կացել',
    regularity: 'Reflexivo',
    examplePresent: 'Cada día me levanto a las siete.',
    examplePast: 'Hoy me he levantado a las ocho.'
  },
  {
    id: 'cv2',
    presentVerb: 'desayuno',
    pastVerb: 'he desayunado',
    infinitive: 'desayunar',
    presentEnglish: 'I eat breakfast',
    pastEnglish: 'I have eaten breakfast',
    armenianTranslation: 'Նախաճաշում եմ ➜ Նախաճաշել եմ',
    regularity: 'Regular',
    examplePresent: 'Desayuno en casa.',
    examplePast: 'He desayunado en casa con mi familia.'
  },
  {
    id: 'cv3',
    presentVerb: 'voy',
    pastVerb: 'he ido',
    infinitive: 'ir',
    presentEnglish: 'I go',
    pastEnglish: 'I have gone',
    armenianTranslation: 'Գնում եմ ➜ Գնացել եմ',
    regularity: 'Irregular',
    examplePresent: 'Después voy a clase de español.',
    examplePast: 'Después he ido a clase de español.'
  },
  {
    id: 'cv4',
    presentVerb: 'estudio',
    pastVerb: 'he estudiado',
    infinitive: 'estudiar',
    presentEnglish: 'I study',
    pastEnglish: 'I have studied',
    armenianTranslation: 'Սովորում եմ ➜ Սովորել եմ',
    regularity: 'Regular',
    examplePresent: 'Estudio español porque me gusta.',
    examplePast: 'Hoy he estudiado bien.'
  },
  {
    id: 'cv5',
    presentVerb: 'escucho',
    pastVerb: 'he escuchado',
    infinitive: 'escuchar',
    presentEnglish: 'I listen',
    pastEnglish: 'I have listened',
    armenianTranslation: 'Լսում եմ ➜ Լսել եմ',
    regularity: 'Regular',
    examplePresent: 'Escucho música por la tarde.',
    examplePast: 'He escuchado música hoy.'
  },
  {
    id: 'cv6',
    presentVerb: 'hablo',
    pastVerb: 'he hablado',
    infinitive: 'hablar',
    presentEnglish: 'I speak',
    pastEnglish: 'I have spoken',
    armenianTranslation: 'Խոսում եմ ➜ Խոսել եմ',
    regularity: 'Regular',
    examplePresent: 'Hablo con la profesora.',
    examplePast: 'También he hablado un poco en español.'
  },
  {
    id: 'cv7',
    presentVerb: 'compro',
    pastVerb: 'he comprado',
    infinitive: 'comprar',
    presentEnglish: 'I buy',
    pastEnglish: 'I have bought',
    armenianTranslation: 'Գնում եմ ➜ Գնել եմ',
    regularity: 'Regular',
    examplePresent: 'Compro pan cada tarde.',
    examplePast: 'He comprado agua y pan.'
  },
  {
    id: 'cv8',
    presentVerb: 'vuelvo',
    pastVerb: 'he vuelto',
    infinitive: 'volver',
    presentEnglish: 'I return',
    pastEnglish: 'I have returned',
    armenianTranslation: 'Վերադառնում եմ ➜ Վերադարձել եմ',
    regularity: 'Irregular',
    examplePresent: 'Por la tarde vuelvo a casa.',
    examplePast: 'Luego he vuelto a casa en autobús.'
  },
  {
    id: 'cv9',
    presentVerb: 'hago',
    pastVerb: 'he hecho',
    infinitive: 'hacer',
    presentEnglish: 'I do / make',
    pastEnglish: 'I have done / made',
    armenianTranslation: 'Անում եմ ➜ Արել եմ',
    regularity: 'Irregular',
    examplePresent: 'Hago mis deberes.',
    examplePast: 'He hecho mis deberes.'
  },
  {
    id: 'cv10',
    presentVerb: 'ceno',
    pastVerb: 'he cenado',
    infinitive: 'cenar',
    presentEnglish: 'I eat dinner',
    pastEnglish: 'I have eaten dinner',
    armenianTranslation: 'Ընթրում եմ ➜ Ընթրել եմ',
    regularity: 'Regular',
    examplePresent: 'Normalmente ceno con mi familia.',
    examplePast: 'He cenado con mi familia.'
  },
  {
    id: 'cv11',
    presentVerb: 'me acuesto',
    pastVerb: 'me he acostado', // related reflexive action
    infinitive: 'acostarse',
    presentEnglish: 'I go to bed',
    pastEnglish: 'I have gone to bed',
    armenianTranslation: 'Պառկում եմ քնելու ➜ Պառկել եմ քնելու',
    regularity: 'Irregular-Reflexivo',
    examplePresent: 'Me acuesto a las once.',
    examplePast: 'Hoy me he acostado temprano (not in text).'
  }
];

export const vocabularyWords: VocabWord[] = [
  { id: 'v1', spanish: 'Día', armenian: 'Օր', partOfSpeech: 'Sustantivo (m)', category: 'Nouns' },
  { id: 'v2', spanish: 'Tranquilo', armenian: 'Հանգիստ / խաղաղ', partOfSpeech: 'Adjetivo', category: 'Others' },
  { id: 'v3', spanish: 'Mañana', armenian: 'Առավոտ (կամ վաղը)', partOfSpeech: 'Sustantivo (f)', category: 'Time Expressions' },
  { id: 'v4', spanish: 'Desayunar', armenian: 'Նախաճաշել', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v5', spanish: 'Clase', armenian: 'Դասագործընթաց / դասարան', partOfSpeech: 'Sustantivo (f)', category: 'Nouns' },
  { id: 'v6', spanish: 'Español', armenian: 'Իսպաներեն / իսպանական', partOfSpeech: 'Sustantivo / Adjetivo', category: 'Others' },
  { id: 'v7', spanish: 'Idioma', armenian: 'Լեզու', partOfSpeech: 'Sustantivo (m)', category: 'Nouns' },
  { id: 'v8', spanish: 'Aprender', armenian: 'Սովորել (գիտելիք ձեռք բերել)', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v9', spanish: 'Palabras nuevas', armenian: 'Նոր բառեր', partOfSpeech: 'Frase nominal', category: 'Nouns' },
  { id: 'v10', spanish: 'Profesora', armenian: 'Ուսուցչուհի / դասախոս', partOfSpeech: 'Sustantivo (f)', category: 'Nouns' },
  { id: 'v11', spanish: 'Explicar', armenian: 'Բացատրել', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v12', spanish: 'Regla fácil', armenian: 'Հեշտ կանոն', partOfSpeech: 'Frase nominal', category: 'Others' },
  { id: 'v13', spanish: 'Camino / Caminar', armenian: 'Քայլում եմ / քայլել', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v14', spanish: 'Comprar', armenian: 'Գնել', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v15', spanish: 'Pan', armenian: 'Հաց', partOfSpeech: 'Sustantivo (m)', category: 'Nouns' },
  { id: 'v16', spanish: 'Tarde', armenian: 'Կեսօրից հետո / երեկոյին նախորդող ժամանակ', partOfSpeech: 'Sustantivo (f)', category: 'Time Expressions' },
  { id: 'v17', spanish: 'Autobús', armenian: 'Ավտոբուս', partOfSpeech: 'Sustantivo (m)', category: 'Nouns' },
  { id: 'v18', spanish: 'Deberes', armenian: 'Տնային հանձնարարություններ', partOfSpeech: 'Sustantivo (m, pl)', category: 'Nouns' },
  { id: 'v19', spanish: 'Descansar', armenian: 'Հանգստանալ', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v20', spanish: 'Cenar / Cena', armenian: 'Ընթրել / ընթրիք', partOfSpeech: 'Verbo', category: 'Verbs' },
  { id: 'v21', spanish: 'Familia', armenian: 'Ընտանիք', partOfSpeech: 'Sustantivo (f)', category: 'Nouns' },
  { id: 'v22', spanish: 'Noche', armenian: 'Գիշեր', partOfSpeech: 'Sustantivo (f)', category: 'Time Expressions' },
  { id: 'v23', spanish: 'Libro pequeño', armenian: 'Փոքր գիրք', partOfSpeech: 'Frase nominal', category: 'Others' },
  { id: 'v24', spanish: 'Acostarse', armenian: 'Պառկել քնելու', partOfSpeech: 'Verbo (reflexivo)', category: 'Verbs' }
];

export const sentencePairComparisons = [
  {
    id: 'sp1',
    present: 'Cada día me levanto a las siete de la mañana.',
    past: 'Me he levantado a las ocho de la mañana.',
    concept: 'Time and Habit shift. "Each day" (habit) vs "Today" (specific event today).',
    armenianConcept: 'Սովորություն (ներկա) ➜ Այսօրվա կոնկրետ գործողություն (վաղակատար): «Ամեն օր ժամը 7-ին» ➜ «Այսօր ժամը 8-ին»:',
    verbPresent: 'me levanto',
    verbPast: 'me he levantado'
  },
  {
    id: 'sp2',
    present: 'Desayuno en casa y bebo té.',
    past: 'He desayunado en casa con mi familia.',
    concept: 'Expressing regular foods vs what was completed today.',
    armenianConcept: 'Նախաճաշելու սովորություն ➜ Ինչպես անցավ այսօրվա նախաճաշը (ընտանիքի հետ):',
    verbPresent: 'desayuno',
    verbPast: 'he desayunado'
  },
  {
    id: 'sp3',
    present: 'Después voy a clase de español.',
    past: 'Después he ido a clase de español.',
    concept: 'Going to class. A transition sequence step.',
    armenianConcept: 'Դասի գնալը: Ներկայում ընթացիկ գործողությունների հաջորդականություն ➜ Այսօր արդեն իսկ կատարված գնալը:',
    verbPresent: 'voy',
    verbPast: 'he ido'
  },
  {
    id: 'sp4',
    present: 'Después de la clase camino un poco y compro pan.',
    past: 'Después de la clase he comprado agua y pan.',
    concept: 'Routine actions vs finished purchases today.',
    armenianConcept: 'Սովորական քայլք և գնումներ ➜ Այսօրվա կոնկրետ գնումը (ջուր և հաց):',
    verbPresent: 'compro',
    verbPast: 'he comprado'
  },
  {
    id: 'sp5',
    present: 'Por la tarde vuelvo a casa.',
    past: 'Luego he vuelto a casa en autobús.',
    concept: 'Way of returning (regular vs specific method today: bus).',
    armenianConcept: 'Անգիր սովորական վերադարձ ➜ Այսօրվա վերադարձը կոնկրետ տրանսպորտային միջոցով (ավտոբուսով):',
    verbPresent: 'vuelvo',
    verbPast: 'he vuelto'
  },
  {
    id: 'sp6',
    present: 'Hago mis deberes y escucho música.',
    past: 'Por la tarde he hecho mis deberes.',
    concept: 'Homework as a repeated daily activity vs successfully completed task.',
    armenianConcept: 'Տնայինների կատարում ընթացիկ սովորության մեջ ➜ Կատարված տնային աշխատանք այսօր կեսօրից հետո:',
    verbPresent: 'hago',
    verbPast: 'he hecho'
  },
  {
    id: 'sp7',
    present: 'Normalmente ceno con mi familia.',
    past: 'Por la noche he cenado con mi familia.',
    concept: 'Dinner routine versus the dinner that took place this very evening.',
    armenianConcept: 'Սովորաբար ընթրում եմ (ներկա սովորություն) ➜ Այսօր երեկոյան արդեն ընթրել եմ ընտանիքի հետ:',
    verbPresent: 'ceno',
    verbPast: 'he cenado'
  }
];
