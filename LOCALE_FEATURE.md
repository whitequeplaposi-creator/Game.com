# Språk- och Valutaval för EU-länder

## Översikt
Implementerat ett komplett språk- och valutaval för alla 28 EU-länder med automatisk priskonvertering.

## Funktioner

### ✅ Implementerade länder
- **27 EU-länder** + Norge (EES)
- Varje land har:
  - Flagga emoji
  - Lokalt språk
  - Lokal valuta med symbol
  - Valutakurs för priskonvertering

### ✅ Komponenter

#### LocaleContext (`src/context/LocaleContext.tsx`)
- Hanterar valt land och valuta
- Sparar val i localStorage
- Tillhandahåller `formatPrice()` funktion för priskonvertering
- Innehåller alla EU-länder med metadata

#### LocaleSelector (`src/components/LocaleSelector/LocaleSelector.tsx`)
- Dropdown-väljare i header
- Sökfunktion för att filtrera länder
- Visar flagga, land, språk och valuta
- Responsiv design (modal på mobil)
- Markerar aktivt land

### ✅ Priskonvertering
Automatisk konvertering från SEK till:
- EUR (Euro)
- PLN (Polska zloty)
- DKK (Danska kronor)
- NOK (Norska kronor)
- CZK (Tjeckiska kronor)
- HUF (Ungerska forint)
- RON (Rumänska leu)
- BGN (Bulgariska lev)

### ✅ Integration
- Integrerad i Header (topBar höger)
- Används i ProductCard för prisvisning
- Kan enkelt användas i alla komponenter via `useLocale()` hook

## Användning

### I komponenter
```tsx
import { useLocale } from '@/context/LocaleContext';

function MyComponent() {
  const { country, formatPrice } = useLocale();
  
  return (
    <div>
      <p>Valt land: {country.name}</p>
      <p>Pris: {formatPrice(299)}</p>
    </div>
  );
}
```

### Byta land programmatiskt
```tsx
import { useLocale, EU_COUNTRIES } from '@/context/LocaleContext';

function MyComponent() {
  const { setCountry } = useLocale();
  
  const switchToGermany = () => {
    const germany = EU_COUNTRIES.find(c => c.code === 'DE');
    if (germany) setCountry(germany);
  };
}
```

## Länder som stöds

| Land | Kod | Språk | Valuta |
|------|-----|-------|--------|
| Sverige | SE | Svenska | SEK (kr) |
| Tyskland | DE | Deutsch | EUR (€) |
| Frankrike | FR | Français | EUR (€) |
| Italien | IT | Italiano | EUR (€) |
| Spanien | ES | Español | EUR (€) |
| Nederländerna | NL | Nederlands | EUR (€) |
| Belgien | BE | Nederlands/Français | EUR (€) |
| Österrike | AT | Deutsch | EUR (€) |
| Polen | PL | Polski | PLN (zł) |
| Danmark | DK | Dansk | DKK (kr) |
| Finland | FI | Suomi | EUR (€) |
| Norge | NO | Norsk | NOK (kr) |
| Irland | IE | English | EUR (€) |
| Portugal | PT | Português | EUR (€) |
| Grekland | GR | Ελληνικά | EUR (€) |
| Tjeckien | CZ | Čeština | CZK (Kč) |
| Ungern | HU | Magyar | HUF (Ft) |
| Rumänien | RO | Română | RON (lei) |
| Bulgarien | BG | Български | BGN (лв) |
| Kroatien | HR | Hrvatski | EUR (€) |
| Slovakien | SK | Slovenčina | EUR (€) |
| Slovenien | SI | Slovenščina | EUR (€) |
| Litauen | LT | Lietuvių | EUR (€) |
| Lettland | LV | Latviešu | EUR (€) |
| Estland | EE | Eesti | EUR (€) |
| Luxemburg | LU | Français/Deutsch | EUR (€) |
| Malta | MT | Malti/English | EUR (€) |
| Cypern | CY | Ελληνικά | EUR (€) |

## Framtida förbättringar
- [ ] Hämta valutakurser från API (t.ex. ECB eller Fixer.io)
- [ ] Lägg till fler språköversättningar för UI
- [ ] Spara språkpreferens och visa UI på valt språk
- [ ] Lägg till fler valutor (GBP för Storbritannien, etc.)
- [ ] Implementera i18n för fullständig översättning
