// Central export for all locale translations
import { footer as svSEFooter } from './sv-SE/footer';
import { content as svSEContent } from './sv-SE/content';
import { footer as deDEFooter } from './de-DE/footer';
import { content as deDEContent } from './de-DE/content';
import { footer as deATFooter } from './de-AT/footer';
import { content as deATContent } from './de-AT/content';
import { footer as frFRFooter } from './fr-FR/footer';
import { content as frFRContent } from './fr-FR/content';
import { footer as frLUFooter } from './fr-LU/footer';
import { content as frLUContent } from './fr-LU/content';
import { footer as itITFooter } from './it-IT/footer';
import { content as itITContent } from './it-IT/content';
import { footer as esESFooter } from './es-ES/footer';
import { content as esESContent } from './es-ES/content';
import { footer as nlNLFooter } from './nl-NL/footer';
import { content as nlNLContent } from './nl-NL/content';
import { footer as nlBEFooter } from './nl-BE/footer';
import { content as nlBEContent } from './nl-BE/content';
import { footer as plPLFooter } from './pl-PL/footer';
import { content as plPLContent } from './pl-PL/content';
import { footer as daDKFooter } from './da-DK/footer';
import { content as daDKContent } from './da-DK/content';
import { footer as fiFIFooter } from './fi-FI/footer';
import { content as fiFIContent } from './fi-FI/content';
import { footer as nbNOFooter } from './nb-NO/footer';
import { content as nbNOContent } from './nb-NO/content';
import { footer as enIEFooter } from './en-IE/footer';
import { content as enIEContent } from './en-IE/content';
import { footer as enMTFooter } from './en-MT/footer';
import { content as enMTContent } from './en-MT/content';
import { footer as ptPTFooter } from './pt-PT/footer';
import { content as ptPTContent } from './pt-PT/content';
import { footer as elGRFooter } from './el-GR/footer';
import { content as elGRContent } from './el-GR/content';
import { footer as elCYFooter } from './el-CY/footer';
import { content as elCYContent } from './el-CY/content';
import { footer as csCZFooter } from './cs-CZ/footer';
import { content as csCZContent } from './cs-CZ/content';
import { footer as huHUFooter } from './hu-HU/footer';
import { content as huHUContent } from './hu-HU/content';
import { footer as roROFooter } from './ro-RO/footer';
import { content as roROContent } from './ro-RO/content';
import { footer as bgBGFooter } from './bg-BG/footer';
import { content as bgBGContent } from './bg-BG/content';
import { footer as hrHRFooter } from './hr-HR/footer';
import { content as hrHRContent } from './hr-HR/content';
import { footer as skSKFooter } from './sk-SK/footer';
import { content as skSKContent } from './sk-SK/content';
import { footer as slSIFooter } from './sl-SI/footer';
import { content as slSIContent } from './sl-SI/content';
import { footer as ltLTFooter } from './lt-LT/footer';
import { content as ltLTContent } from './lt-LT/content';
import { footer as lvLVFooter } from './lv-LV/footer';
import { content as lvLVContent } from './lv-LV/content';
import { footer as etEEFooter } from './et-EE/footer';
import { content as etEEContent } from './et-EE/content';

export const svSE = { footer: svSEFooter, content: svSEContent };
export const deDE = { footer: deDEFooter, content: deDEContent };
export const deAT = { footer: deATFooter, content: deATContent };
export const frFR = { footer: frFRFooter, content: frFRContent };
export const frLU = { footer: frLUFooter, content: frLUContent };
export const itIT = { footer: itITFooter, content: itITContent };
export const esES = { footer: esESFooter, content: esESContent };
export const nlNL = { footer: nlNLFooter, content: nlNLContent };
export const nlBE = { footer: nlBEFooter, content: nlBEContent };
export const plPL = { footer: plPLFooter, content: plPLContent };
export const daDK = { footer: daDKFooter, content: daDKContent };
export const fiFI = { footer: fiFIFooter, content: fiFIContent };
export const nbNO = { footer: nbNOFooter, content: nbNOContent };
export const enIE = { footer: enIEFooter, content: enIEContent };
export const enMT = { footer: enMTFooter, content: enMTContent };
export const ptPT = { footer: ptPTFooter, content: ptPTContent };
export const elGR = { footer: elGRFooter, content: elGRContent };
export const elCY = { footer: elCYFooter, content: elCYContent };
export const csCZ = { footer: csCZFooter, content: csCZContent };
export const huHU = { footer: huHUFooter, content: huHUContent };
export const roRO = { footer: roROFooter, content: roROContent };
export const bgBG = { footer: bgBGFooter, content: bgBGContent };
export const hrHR = { footer: hrHRFooter, content: hrHRContent };
export const skSK = { footer: skSKFooter, content: skSKContent };
export const slSI = { footer: slSIFooter, content: slSIContent };
export const ltLT = { footer: ltLTFooter, content: ltLTContent };
export const lvLV = { footer: lvLVFooter, content: lvLVContent };
export const etEE = { footer: etEEFooter, content: etEEContent };

// Locale mapping for country codes to locale modules
export const localeMap = {
  SE: 'svSE',
  DE: 'deDE',
  AT: 'deAT',
  FR: 'frFR',
  LU: 'frLU',
  IT: 'itIT',
  ES: 'esES',
  NL: 'nlNL',
  BE: 'nlBE',
  PL: 'plPL',
  DK: 'daDK',
  FI: 'fiFI',
  NO: 'nbNO',
  IE: 'enIE',
  MT: 'enMT',
  PT: 'ptPT',
  GR: 'elGR',
  CY: 'elCY',
  CZ: 'csCZ',
  HU: 'huHU',
  RO: 'roRO',
  BG: 'bgBG',
  HR: 'hrHR',
  SK: 'skSK',
  SI: 'slSI',
  LT: 'ltLT',
  LV: 'lvLV',
  EE: 'etEE',
} as const;

export type LocaleCode = keyof typeof localeMap;
export type LocaleModule = typeof localeMap[LocaleCode];
