# Dynamisk Hero-sektion för TRENDS

## Översikt
En roterande hero-sektion som visar fem olika trendteman med automatisk övergång var 5:e sekund.

## Teman

### 1. #Delikat Romantik
- **Färgschema**: Rosa pastelltoner (#fdf2f8, #831843)
- **Stil**: Mjuka toner & feminina detaljer
- **Fokus**: Romantiska plagg i pastellfärger och spets

### 2. #Sommar Vibes
- **Färgschema**: Gula/varma toner (#fef3c7, #92400e)
- **Stil**: Fräscha looks för soliga dagar
- **Fokus**: Lätta tyger och livfulla färger

### 3. #Urban Chic
- **Färgschema**: Grå/svarta toner (#f3f4f6, #111827)
- **Stil**: Streetstyle med attityd
- **Fokus**: Moderna silhuetter och djärva kombinationer

### 4. #Boho Dreams
- **Färgschema**: Beige/bruna toner (#fef7ed, #78350f)
- **Stil**: Frihetskänsla & bohemisk charm
- **Fokus**: Flödande tyger och etniska mönster

### 5. #Minimalist Style
- **Färgschema**: Vit/grå toner (#ffffff, #1f2937)
- **Stil**: Mindre är mer
- **Fokus**: Rena linjer och tidlös design

## Funktioner

- **Automatisk rotation**: Byter tema var 5:e sekund
- **Mjuka övergångar**: Fade-effekt mellan teman
- **Interaktiv navigation**: Klickbara punkter för manuell navigation
- **Zoom-animation**: Subtil zoom-effekt på bakgrundsbilden
- **Responsiv design**: Anpassar sig för mobil, tablet och desktop
- **Tillgänglighet**: ARIA-labels för navigation

## Användning

```tsx
import DynamicHero from '@/components/HeroSections/DynamicHero';

export default function Page() {
  return (
    <div>
      <DynamicHero />
      {/* Resten av innehållet */}
    </div>
  );
}
```

## Anpassning

För att ändra teman, redigera `HERO_THEMES` arrayen i `DynamicHero.tsx`:

```typescript
const HERO_THEMES: HeroTheme[] = [
  {
    id: 'unique-id',
    title: '#Tema Namn',
    subtitle: 'Kort beskrivning',
    description: 'Längre beskrivning',
    ctaText: 'Knapptext',
    ctaLink: '/catalog?trend=tema-id',
    backgroundImage: 'https://...',
    backgroundColor: '#hexfärg',
    textColor: '#hexfärg'
  }
];
```

## Tekniska detaljer

- **Framework**: Next.js 14+ med App Router
- **Styling**: CSS Modules
- **Bilder**: Next.js Image-komponent för optimering
- **Animation**: CSS transitions och keyframes
- **State management**: React hooks (useState, useEffect)

## Prestanda

- Bilder laddas med `priority` för första vyn
- Optimerade övergångar med CSS transforms
- Minimal JavaScript för rotation
- Responsiva bilder med Next.js Image
