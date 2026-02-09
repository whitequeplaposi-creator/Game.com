import * as locales from './locales';

export interface FooterTranslation {
  companyInfo: string;
  aboutShein: string;
  socialResponsibility: string;
  fashionBlogger: string;
  supplyChain: string;
  careers: string;
  sustainability: string;
  press: string;
  helpSupport: string;
  shippingInfo: string;
  returns: string;
  howToOrder: string;
  trackOrder: string;
  sizeGuide: string;
  sheinVip: string;
  customerService: string;
  contactUs: string;
  paymentMethod: string;
  bonusPoints: string;
  faq: string;
  shopping: string;
  newArrivals: string;
  sale: string;
  trending: string;
  giftCards: string;
  studentDiscount: string;
  legal: string;
  terms: string;
  privacy: string;
  cookies: string;
  disclaimer: string;
  newsletter: string;
  newsletterText: string;
  emailPlaceholder: string;
  subscribe: string;
  followUs: string;
  app: string;
  downloadApp: string;
  copyright: string;
  payment: string;
  delivery: string;
  subscribeSuccess: string;
  subscribeError: string;
}

// Map from country code to actual translation object
export const getFooterTranslation = (countryCode: string): FooterTranslation => {
  const code = countryCode.toUpperCase() as keyof typeof locales.localeMap;
  const localeKey = (locales.localeMap[code] || 'enIE') as keyof typeof locales;
  const localeData = locales[localeKey] as any;

  if (localeData && localeData.footer) {
    return localeData.footer;
  }

  // Final safety fallback (Swedish is most complete)
  return (locales.svSE as any).footer;
};


