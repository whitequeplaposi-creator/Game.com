# Footer Översättningsstruktur för EU-länder

## Översikt
Footer-översättningarna är nu organiserade i separata språkmappar för alla 27 EU-länder. Varje land har sin egen översättningsfil med automatisk översättning baserat på valt land.

## Struktur

```
src/translations/
├── locales/
│   ├── index.ts          # Central export för alla översättningar
│   ├── sv-SE.ts          # Svenska (Sverige)
│   ├── de-DE.ts          # Tyska (Tyskland)
│   ├── de-AT.ts          # Tyska (Österrike)
│   ├── fr-FR.ts          # Franska (Frankrike)
│   ├── fr-LU.ts          # Franska (Luxemburg)
│   ├── it-IT.ts          # Italienska (Italien)
│   ├── es-ES.ts          # Spanska (Spanien)
│   ├── nl-NL.ts          # Nederländska (Nederländerna)
│   ├── nl-BE.ts          # Nederländska (Belgien)
│   ├── pl-PL.ts          # Polska (Polen)
│   ├── da-DK.ts          # Danska (Danmark)
│   ├── fi-FI.ts          # Finska (Finland)
│   ├── nb-NO.ts          # Norska (Norge)
│   ├── en-IE.ts          # Engelska (Irland)
│   ├── en-MT.ts          # Engelska (Malta)
│   ├── pt-PT.ts          # Portugisiska (Portugal)
│   ├── el-GR.ts          # Grekiska (Grekland)
│   ├── el-CY.ts          # Grekiska (Cypern)
│   ├── cs-CZ.ts          # Tjeckiska (Tjeckien)
│   ├── hu-HU.ts          # Ungerska (Ungern)
│   ├── ro-RO.ts          # Rumänska (Rumänien)
│   ├── bg-BG.ts          # Bulgariska (Bulgarien)
│   ├── hr-HR.ts          # Kroatiska (Kroatien)
│   ├── sk-SK.ts          # Slovakiska (Slovakien)
│   ├── sl-SI.ts          # Slovenska (Slovenien)
│   ├── lt-LT.ts          # Litauiska (Litauen)
│   ├── lv-LV.ts          # Lettiska (Lettland)
│   └── et-EE.ts          # Estniska (Estland)
└── footer.ts             # Huvudfil som importerar alla översättningar

```

## Översättningsinnehåll

Varje språkfil innehåller översättningar för:

### OM OSS-sektion
- Om SHEIN
- Karriärer
- Press
- Hållbarhet

### KONTAKT-sektion
- Kontakta oss
- Vanliga frågor
- Frakt & leverans
- Returer

### JURIDIK-sektion
- Villkor
- Integritetspolicy
- Cookiepolicy
- Ansvarsfriskrivning

### NYHETSBREV-sektion
- Nyhetsbrev
- Prenumerationstext
- E-postplaceholder
- Prenumerera-knapp
- Framgångs-/felmeddelanden

### BETALNING & LEVERANS
- Betalningsmetoder
- Leveransalternativ
- Copyright-text

## Användning

Footer-komponenten använder automatiskt rätt översättning baserat på valt land:

\`\`\`typescript
import { useLocale } from '@/context/LocaleContext';
import { getFooterTranslation } from '@/translations/footer';

const { country } = useLocale();
const t = getFooterTranslation(country.code);
\`\`\`

## Länder som stöds

| Landskod | Land | Språk |
|----------|------|-------|
| SE | Sverige | Svenska |
| DE | Tyskland | Tyska |
| AT | Österrike | Tyska |
| FR | Frankrike | Franska |
| LU | Luxemburg | Franska |
| IT | Italien | Italienska |
| ES | Spanien | Spanska |
| NL | Nederländerna | Nederländska |
| BE | Belgien | Nederländska |
| PL | Polen | Polska |
| DK | Danmark | Danska |
| FI | Finland | Finska |
| NO | Norge | Norska |
| IE | Irland | Engelska |
| MT | Malta | Engelska |
| PT | Portugal | Portugisiska |
| GR | Grekland | Grekiska |
| CY | Cypern | Grekiska |
| CZ | Tjeckien | Tjeckiska |
| HU | Ungern | Ungerska |
| RO | Rumänien | Rumänska |
| BG | Bulgarien | Bulgariska |
| HR | Kroatien | Kroatiska |
| SK | Slovakien | Slovakiska |
| SI | Slovenien | Slovenska |
| LT | Litauen | Litauiska |
| LV | Lettland | Lettiska |
| EE | Estland | Estniska |

## Fallback

Om ett land inte har en specifik översättning, används engelska (IE) som fallback.

## Lägga till nya översättningar

1. Skapa en ny fil i `src/translations/locales/` med formatet `språk-LAND.ts`
2. Exportera översättningsobjektet med strukturen:
   \`\`\`typescript
   export const språkLAND = {
     footer: {
       aboutUs: '...',
       // ... resten av översättningarna
     }
   };
   \`\`\`
3. Lägg till exporten i `src/translations/locales/index.ts`
4. Uppdatera `src/translations/footer.ts` för att inkludera den nya översättningen

## Ikoner

Alla ikoner är SVG-baserade och finns i:
- `src/components/BrandIcons.tsx` - Betalnings- och leveransikoner
- `src/components/SocialIcons.tsx` - Sociala medier-ikoner
- `src/components/Icons/` - Övriga ikoner

Inga AI-genererade ikoner används.
