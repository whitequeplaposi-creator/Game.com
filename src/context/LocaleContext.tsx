'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Country {
  code: string;
  name: string;
  language: string;
  currency: string;
  currencySymbol: string;
  flag: string;
}

export const EU_COUNTRIES: Country[] = [
  { code: 'SE', name: 'Sverige', language: 'Svenska', currency: 'SEK', currencySymbol: 'kr', flag: '🇸🇪' },
  { code: 'DE', name: 'Deutschland', language: 'Deutsch', currency: 'EUR', currencySymbol: '€', flag: '🇩🇪' },
  { code: 'FR', name: 'France', language: 'Français', currency: 'EUR', currencySymbol: '€', flag: '🇫🇷' },
  { code: 'IT', name: 'Italia', language: 'Italiano', currency: 'EUR', currencySymbol: '€', flag: '🇮🇹' },
  { code: 'ES', name: 'España', language: 'Español', currency: 'EUR', currencySymbol: '€', flag: '🇪🇸' },
  { code: 'NL', name: 'Nederland', language: 'Nederlands', currency: 'EUR', currencySymbol: '€', flag: '🇳🇱' },
  { code: 'BE', name: 'België', language: 'Nederlands/Français', currency: 'EUR', currencySymbol: '€', flag: '🇧🇪' },
  { code: 'AT', name: 'Österreich', language: 'Deutsch', currency: 'EUR', currencySymbol: '€', flag: '🇦🇹' },
  { code: 'PL', name: 'Polska', language: 'Polski', currency: 'PLN', currencySymbol: 'zł', flag: '🇵🇱' },
  { code: 'DK', name: 'Danmark', language: 'Dansk', currency: 'DKK', currencySymbol: 'kr', flag: '🇩🇰' },
  { code: 'FI', name: 'Suomi', language: 'Suomi', currency: 'EUR', currencySymbol: '€', flag: '🇫🇮' },
  { code: 'NO', name: 'Norge', language: 'Norsk', currency: 'NOK', currencySymbol: 'kr', flag: '🇳🇴' },
  { code: 'IE', name: 'Ireland', language: 'English', currency: 'EUR', currencySymbol: '€', flag: '🇮🇪' },
  { code: 'PT', name: 'Portugal', language: 'Português', currency: 'EUR', currencySymbol: '€', flag: '🇵🇹' },
  { code: 'GR', name: 'Ελλάδα', language: 'Ελληνικά', currency: 'EUR', currencySymbol: '€', flag: '🇬🇷' },
  { code: 'CZ', name: 'Česko', language: 'Čeština', currency: 'CZK', currencySymbol: 'Kč', flag: '🇨🇿' },
  { code: 'HU', name: 'Magyarország', language: 'Magyar', currency: 'HUF', currencySymbol: 'Ft', flag: '🇭🇺' },
  { code: 'RO', name: 'România', language: 'Română', currency: 'RON', currencySymbol: 'lei', flag: '🇷🇴' },
  { code: 'BG', name: 'България', language: 'Български', currency: 'BGN', currencySymbol: 'лв', flag: '🇧🇬' },
  { code: 'HR', name: 'Hrvatska', language: 'Hrvatski', currency: 'EUR', currencySymbol: '€', flag: '🇭🇷' },
  { code: 'SK', name: 'Slovensko', language: 'Slovenčina', currency: 'EUR', currencySymbol: '€', flag: '🇸🇰' },
  { code: 'SI', name: 'Slovenija', language: 'Slovenščina', currency: 'EUR', currencySymbol: '€', flag: '🇸🇮' },
  { code: 'LT', name: 'Lietuva', language: 'Lietuvių', currency: 'EUR', currencySymbol: '€', flag: '🇱🇹' },
  { code: 'LV', name: 'Latvija', language: 'Latviešu', currency: 'EUR', currencySymbol: '€', flag: '🇱🇻' },
  { code: 'EE', name: 'Eesti', language: 'Eesti', currency: 'EUR', currencySymbol: '€', flag: '🇪🇪' },
  { code: 'LU', name: 'Luxembourg', language: 'Français/Deutsch', currency: 'EUR', currencySymbol: '€', flag: '🇱🇺' },
  { code: 'MT', name: 'Malta', language: 'Malti/English', currency: 'EUR', currencySymbol: '€', flag: '🇲🇹' },
  { code: 'CY', name: 'Κύπρος', language: 'Ελληνικά', currency: 'EUR', currencySymbol: '€', flag: '🇨🇾' },
];

interface LocaleContextType {
  country: Country;
  setCountry: (country: Country) => void;
  formatPrice: (price: number) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<Country>(EU_COUNTRIES[0]); // Default to Sweden

  useEffect(() => {
    const saved = localStorage.getItem('selectedCountry');
    if (saved) {
      const savedCountry = JSON.parse(saved);
      setCountry(savedCountry);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCountry', JSON.stringify(country));
  }, [country]);

  const formatPrice = (price: number): string => {
    // Simple conversion rates (in real app, use API)
    const rates: { [key: string]: number } = {
      'SEK': 1,
      'EUR': 0.09,
      'PLN': 0.42,
      'DKK': 0.67,
      'NOK': 1.05,
      'CZK': 2.28,
      'HUF': 35.5,
      'RON': 0.45,
      'BGN': 0.18,
    };

    const convertedPrice = price * (rates[country.currency] || 1);
    const formatted = convertedPrice.toFixed(0);

    // Format based on currency
    if (country.currencySymbol === '€') {
      return `${formatted}${country.currencySymbol}`;
    } else if (country.currency === 'PLN') {
      return `${formatted} ${country.currencySymbol}`;
    } else {
      return `${formatted}${country.currencySymbol}`;
    }
  };

  return (
    <LocaleContext.Provider value={{ country, setCountry, formatPrice }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
