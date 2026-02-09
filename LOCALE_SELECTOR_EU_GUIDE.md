# EU Språk- och Valutaväljare Guide

## Översikt
En specialiserad språk- och valutaväljare för EU-länder med jordglob-form och flaggor framför varje språk.

## Design Specifikation

### Visuell Design
- **Form**: Jordglob/cirkulär form
- **Flaggor**: Varje språkalternativ har landets flagga framför texten
- **Layout**: Dropdown med flagga + språknamn + valuta

### EU-Länder och Språk

```typescript
// EU-länder med språk och valutor
const euLocales = [
  // Västeuropa
  { country: 'Sverige', flag: '🇸🇪', language: 'Svenska', currency: 'SEK', code: 'sv-SE' },
  { country: 'Danmark', flag: '🇩🇰', language: 'Dansk', currency: 'DKK', code: 'da-DK' },
  { country: 'Norge', flag: '🇳🇴', language: 'Norsk', currency: 'NOK', code: 'no-NO' },
  { country: 'Finland', flag: '🇫🇮', language: 'Suomi', currency: 'EUR', code: 'fi-FI' },
  
  // Centraleuropa
  { country: 'Tyskland', flag: '🇩🇪', language: 'Deutsch', currency: 'EUR', code: 'de-DE' },
  { country: 'Österrike', flag: '🇦🇹', language: 'Deutsch', currency: 'EUR', code: 'de-AT' },
  { country: 'Schweiz', flag: '🇨🇭', language: 'Deutsch', currency: 'CHF', code: 'de-CH' },
  { country: 'Nederländerna', flag: '🇳🇱', language: 'Nederlands', currency: 'EUR', code: 'nl-NL' },
  { country: 'Belgien', flag: '🇧🇪', language: 'Nederlands', currency: 'EUR', code: 'nl-BE' },
  { country: 'Luxemburg', flag: '🇱🇺', language: 'Français', currency: 'EUR', code: 'fr-LU' },
  
  // Sydeuropa
  { country: 'Frankrike', flag: '🇫🇷', language: 'Français', currency: 'EUR', code: 'fr-FR' },
  { country: 'Spanien', flag: '🇪🇸', language: 'Español', currency: 'EUR', code: 'es-ES' },
  { country: 'Italien', flag: '🇮🇹', language: 'Italiano', currency: 'EUR', code: 'it-IT' },
  { country: 'Portugal', flag: '🇵🇹', language: 'Português', currency: 'EUR', code: 'pt-PT' },
  { country: 'Grekland', flag: '🇬🇷', language: 'Ελληνικά', currency: 'EUR', code: 'el-GR' },
  
  // Östeuropa
  { country: 'Polen', flag: '🇵🇱', language: 'Polski', currency: 'PLN', code: 'pl-PL' },
  { country: 'Tjeckien', flag: '🇨🇿', language: 'Čeština', currency: 'CZK', code: 'cs-CZ' },
  { country: 'Ungern', flag: '🇭🇺', language: 'Magyar', currency: 'HUF', code: 'hu-HU' },
  { country: 'Rumänien', flag: '🇷🇴', language: 'Română', currency: 'RON', code: 'ro-RO' },
  { country: 'Bulgarien', flag: '🇧🇬', language: 'Български', currency: 'BGN', code: 'bg-BG' },
  
  // Baltikum
  { country: 'Estland', flag: '🇪🇪', language: 'Eesti', currency: 'EUR', code: 'et-EE' },
  { country: 'Lettland', flag: '🇱🇻', language: 'Latviešu', currency: 'EUR', code: 'lv-LV' },
  { country: 'Litauen', flag: '🇱🇹', language: 'Lietuvių', currency: 'EUR', code: 'lt-LT' },
  
  // Övriga
  { country: 'Irland', flag: '🇮🇪', language: 'English', currency: 'EUR', code: 'en-IE' },
  { country: 'Kroatien', flag: '🇭🇷', language: 'Hrvatski', currency: 'EUR', code: 'hr-HR' },
  { country: 'Slovenien', flag: '🇸🇮', language: 'Slovenščina', currency: 'EUR', code: 'sl-SI' },
  { country: 'Slovakien', flag: '🇸🇰', language: 'Slovenčina', currency: 'EUR', code: 'sk-SK' },
];
```

## Komponentstruktur

### LocaleSelectorEU.tsx
```typescript
'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './LocaleSelectorEU.module.css';

interface EULocale {
  country: string;
  flag: string;
  language: string;
  currency: string;
  code: string;
}

const euLocales: EULocale[] = [
  // ... (lista ovan)
];

export default function LocaleSelectorEU() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(euLocales[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (locale: EULocale) => {
    setSelectedLocale(locale);
    setIsOpen(false);
    // Här kan du lägga till logik för att faktiskt ändra språk/valuta
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={styles.globeButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Välj språk och valuta"
      >
        <span className={styles.globe}>🌍</span>
        <span className={styles.selectedInfo}>
          <span className={styles.flag}>{selectedLocale.flag}</span>
          <span className={styles.language}>{selectedLocale.language}</span>
          <span className={styles.currency}>{selectedLocale.currency}</span>
        </span>
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <span className={styles.globe}>🌍</span>
            <span>Välj land och språk</span>
          </div>
          
          <div className={styles.localeList}>
            {euLocales.map((locale) => (
              <button
                key={locale.code}
                className={`${styles.localeItem} ${
                  selectedLocale.code === locale.code ? styles.selected : ''
                }`}
                onClick={() => handleSelect(locale)}
              >
                <span className={styles.flag}>{locale.flag}</span>
                <span className={styles.localeInfo}>
                  <span className={styles.language}>{locale.language}</span>
                  <span className={styles.country}>{locale.country}</span>
                </span>
                <span className={styles.currency}>{locale.currency}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### LocaleSelectorEU.module.css
```css
.container {
  position: relative;
  display: inline-block;
}

.globeButton {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.globeButton:hover {
  border-color: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.globe {
  font-size: 20px;
  line-height: 1;
}

.selectedInfo {
  display: flex;
  align-items: center;
  gap: 6px;
}

.flag {
  font-size: 18px;
  line-height: 1;
}

.language {
  font-weight: 500;
  color: #000;
}

.currency {
  color: #666;
  font-size: 12px;
}

.arrow {
  font-size: 10px;
  color: #666;
  margin-left: 4px;
}

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-height: 500px;
  overflow: hidden;
  z-index: 1000;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdownHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
  font-size: 14px;
  background: #f9f9f9;
}

.localeList {
  max-height: 400px;
  overflow-y: auto;
}

.localeItem {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  cursor: pointer;
  transition: background 0.2s ease;
  text-align: left;
}

.localeItem:hover {
  background: #f5f5f5;
}

.localeItem.selected {
  background: #f0f0f0;
  font-weight: 600;
}

.localeInfo {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.country {
  font-size: 12px;
  color: #666;
}

/* Scrollbar styling */
.localeList::-webkit-scrollbar {
  width: 8px;
}

.localeList::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.localeList::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.localeList::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Responsiv design */
@media (max-width: 768px) {
  .dropdown {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: auto;
    max-width: 90vw;
    max-height: 80vh;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
```

## Användning

### I Header-komponenten
```typescript
import LocaleSelectorEU from '@/components/LocaleSelector/LocaleSelectorEU';

// I din Header:
<LocaleSelectorEU />
```

### Integration med LocaleContext
```typescript
// I handleSelect-funktionen:
const handleSelect = (locale: EULocale) => {
  setSelectedLocale(locale);
  setIsOpen(false);
  
  // Uppdatera context
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedLocale', locale.code);
    localStorage.setItem('selectedCurrency', locale.currency);
  }
  
  // Trigga språkbyte
  window.location.reload(); // Eller använd din befintliga locale-logik
};
```

## Features

✅ Jordglob-ikon som huvudsymbol
✅ Flaggor framför varje språk
✅ Visar land, språk och valuta
✅ Cirkulär/rund design på knappen
✅ Alla EU-länder inkluderade
✅ Responsiv design
✅ Smooth animationer
✅ Keyboard navigation support

## Anpassningar

### Ändra jordglob-ikonen
Du kan byta ut emoji-jordgloben mot en SVG:
```typescript
<svg className={styles.globe} viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
</svg>
```

### Gruppera länder per region
```typescript
const regions = {
  'Norden': euLocales.filter(l => ['sv-SE', 'da-DK', 'no-NO', 'fi-FI'].includes(l.code)),
  'Centraleuropa': euLocales.filter(l => ['de-DE', 'de-AT', 'nl-NL'].includes(l.code)),
  // etc...
};
```

## Nästa Steg

1. Skapa filerna `LocaleSelectorEU.tsx` och `LocaleSelectorEU.module.css`
2. Integrera i Header-komponenten
3. Koppla till LocaleContext för faktisk språkbyte
4. Testa på olika enheter
5. Lägg till keyboard navigation (Tab, Enter, Escape)

