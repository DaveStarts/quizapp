import { anatomieFragen } from './Anatomie&Physiologie';
import { arzneimittellehreFragen } from './Arzneimittellehre';
import { ersteHilfeFragen } from './ErsteHilfe';
import { hygieneFragen } from './Hygiene';
import { kommunikationFragen } from './Kommunikation&Beratung';
import { pflegeTheorieFragen } from './Pflegetheorie';
import { pflegeWissenschaftFragen } from './Pflegewissenschaft';
import { rechtFragen } from './Recht';
import { speziellePflegeFragen } from './SpeziellePflege';
import { rahmenBedingungenFragen } from './Rahmenbedingungen';
import { pflegebasismaßnahmenFragen } from './Pflegebasismaßnahmen';
import { pflegeTechnikenFragen } from './Pflegetechniken';
import { spezielleErkrankungenFragen } from './SpezielleErkrankungen';

export type Question = {
  q: string;
  a: string[];
  correct: number;
};

export const getQuestionsForTopic = (topic: string) => {
  for (const mainCategory in ALL_QUESTIONS) {
    if (ALL_QUESTIONS[mainCategory][topic]) {
      return ALL_QUESTIONS[mainCategory][topic];
    }
  }
  return []; // Fallback, falls mal was schiefgeht
};

export const ALL_QUESTIONS: Record<string, Record<string, any[]>> = {
  'Anatomie&Physiologie': anatomieFragen,
  Arzneimittellehre: arzneimittellehreFragen,
  ErsteHilfe: ersteHilfeFragen,
  Hygiene: hygieneFragen,
  'Kommunikation&Beratung': kommunikationFragen,
  Pflegetheorie: pflegeTheorieFragen,
  Pflegewissenschaft: pflegeWissenschaftFragen,
  Recht: rechtFragen,
  'Kap3: Rahmenbedingungen': rahmenBedingungenFragen,
  'Kap4: Pflegebasismaßnahmen': pflegebasismaßnahmenFragen,
  'Kap5: Pflegetechniken': pflegeTechnikenFragen,
  'Kap6: Spezielle Pflegesituationen': speziellePflegeFragen,
  'Kap7: Pflege bei spez. Erkrankungen': spezielleErkrankungenFragen,
};
