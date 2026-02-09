'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, currency, setLanguage, setCurrency } = useLanguage();

  const languages = [
    { code: 'sv', label: 'Svenska' },
    { code: 'en', label: 'English' },
  ];

  const currencies = [
    { code: 'SEK', label: 'SEK' },
    { code: 'EUR', label: 'EUR' },
    { code: 'USD', label: 'USD' },
  ];

  return (
    <div className={styles.selector}>
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language and currency selector"
        aria-expanded={isOpen}
      >
        <span>{language.toUpperCase()}</span>
        <span className={styles.separator}>|</span>
        <span>{currency}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Språk</div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.option} ${language === lang.code ? styles.active : ''}`}
                onClick={() => {
                  setLanguage(lang.code as 'sv' | 'en');
                  setIsOpen(false);
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Valuta</div>
            {currencies.map((curr) => (
              <button
                key={curr.code}
                className={`${styles.option} ${currency === curr.code ? styles.active : ''}`}
                onClick={() => {
                  setCurrency(curr.code as 'SEK' | 'EUR' | 'USD');
                  setIsOpen(false);
                }}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
