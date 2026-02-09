'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'en';
type Currency = 'SEK' | 'EUR' | 'USD';

interface LanguageContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  sv: {
    'header.search': 'Sök',
    'header.account': 'Konto',
    'header.cart': 'Varukorg',
    'hero.shopNow': 'HANDLA NU',
    'product.addToCart': 'Lägg i varukorg',
    'product.outOfStock': 'Slut i lager',
    'cart.empty': 'Din varukorg är tom',
    'cart.checkout': 'Gå till kassan',
    'footer.about': 'Om oss',
    'footer.contact': 'Kontakt',
    'footer.terms': 'Villkor',
  },
  en: {
    'header.search': 'Search',
    'header.account': 'Account',
    'header.cart': 'Cart',
    'hero.shopNow': 'SHOP NOW',
    'product.addToCart': 'Add to Cart',
    'product.outOfStock': 'Out of Stock',
    'cart.empty': 'Your cart is empty',
    'cart.checkout': 'Proceed to Checkout',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms & Conditions',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sv');
  const [currency, setCurrency] = useState<Currency>('SEK');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currency,
        setLanguage,
        setCurrency,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
