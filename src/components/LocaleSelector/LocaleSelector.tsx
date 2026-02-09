'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale, EU_COUNTRIES, Country } from '@/context/LocaleContext';
import styles from './LocaleSelector.module.css';

export default function LocaleSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { country, setCountry } = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = EU_COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={styles.localeSelector} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Välj land och språk"
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.globeIcon}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className={styles.languageText}>{country.language}</span>
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <h3>Välj land/region</h3>
            <input
              type="text"
              placeholder="Sök land..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              autoFocus
            />
          </div>

          <div className={styles.countryList}>
            {filteredCountries.map((c) => (
              <button
                key={c.code}
                className={`${styles.countryItem} ${c.code === country.code ? styles.active : ''}`}
                onClick={() => handleCountrySelect(c)}
              >
                <span className={styles.countryFlag}>{c.flag}</span>
                <div className={styles.countryDetails}>
                  <span className={styles.countryItemName}>{c.name}</span>
                  <span className={styles.countryMeta}>
                    {c.language} • {c.currency}
                  </span>
                </div>
                {c.code === country.code && (
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={styles.checkIcon}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
