import * as locales from './locales';

export interface PageContent {
  title: string;
  subtitle: string;
  content: string;
  [key: string]: any; // Allow for other properties
}

export const getPageTranslation = (countryCode: string, slug: string): PageContent => {
  const code = countryCode.toUpperCase();
  const localeKey = (locales.localeMap[code as keyof typeof locales.localeMap] || 'enIE') as keyof typeof locales;
  const localeData = locales[localeKey] as any;

  // If slug exists in content, return it
  if (localeData && localeData.content && localeData.content[slug]) {
    return localeData.content[slug];
  }

  // Fallback to English IE
  const englishData = locales.enIE as any;
  if (englishData && englishData.content && englishData.content[slug]) {
    return englishData.content[slug];
  }

  // Final fallback
  return {
    title: 'Information',
    subtitle: 'SHEIN',
    content: 'Innehåll kommer snart.'
  };
};
