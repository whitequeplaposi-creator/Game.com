'use client';

import React from 'react';
import LocaleSelectorV2 from './LocaleSelectorV2';
import styles from './LocaleSelectorDemo.module.css';

import { GlobeIcon, MobileIcon } from '../Icons/InfoIcons';

// Search icon component
const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Check icon component
const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Currency icon component
const CurrencyIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6v12M15 9H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * Demo-komponent som visar LocaleSelectorV2 i olika kontexter
 * 
 * Användning:
 * import LocaleSelectorDemo from '@/components/LocaleSelector/LocaleSelectorDemo';
 * 
 * <LocaleSelectorDemo />
 */
export default function LocaleSelectorDemo() {
  return (
    <div className={styles.demoContainer}>
      <div className={styles.demoSection}>
        <h2>LocaleSelectorV2 - Demo</h2>
        <p>Ny version med jordglob-ikon och flaggor framför språken</p>
      </div>

      <div className={styles.demoSection}>
        <h3>I Header-kontext</h3>
        <div className={styles.headerDemo}>
          <div className={styles.headerLeft}>
            <span className={styles.logo}>SHEIN</span>
          </div>
          <div className={styles.headerRight}>
            <LocaleSelectorV2 />
          </div>
        </div>
      </div>

      <div className={styles.demoSection}>
        <h3>Standalone</h3>
        <div className={styles.standaloneDemo}>
          <LocaleSelectorV2 />
        </div>
      </div>

      <div className={styles.demoSection}>
        <h3>Funktioner</h3>
        <ul className={styles.featureList}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GlobeIcon size={20} />
            <strong>Jordglob-ikon</strong> - Visar global karaktär, roterar vid hover
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>🇸🇪</span>
            <strong>Flaggor framför språk</strong> - Tydlig visuell koppling
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CurrencyIcon size={20} />
            <strong>Valutainformation</strong> - Visas som badge med symbol
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SearchIcon size={20} />
            <strong>Sökfunktion</strong> - Filtrera på land, språk eller valuta
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckIcon size={20} />
            <strong>Aktiv markering</strong> - Visar valt land med checkmark
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MobileIcon size={20} />
            <strong>Responsiv</strong> - Fungerar på alla skärmstorlekar
          </li>
        </ul>
      </div>

      <div className={styles.demoSection}>
        <h3>Jämförelse</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4>Original</h4>
            <ul>
              <li>Landsflagga i knapp</li>
              <li>Enkel textvisning</li>
              <li>Grundläggande layout</li>
            </ul>
          </div>
          <div className={styles.comparisonItem}>
            <h4>V2 (Ny)</h4>
            <ul>
              <li>Jordglob-ikon i knapp</li>
              <li>Flaggor + språktext</li>
              <li>Strukturerad layout</li>
              <li>Valuta som badge</li>
              <li>Förbättrade animationer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.demoSection}>
        <h3>Användning i kod</h3>
        <pre className={styles.codeBlock}>
{`import LocaleSelectorV2 from '@/components/LocaleSelector/LocaleSelectorV2';

export default function Header() {
  return (
    <header>
      <LocaleSelectorV2 />
    </header>
  );
}`}
        </pre>
      </div>
    </div>
  );
}
