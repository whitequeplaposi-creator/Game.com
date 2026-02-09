# Integration av Dynamisk Hero-sektion

## Snabb start

För att lägga till den dynamiska hero-sektionen på startsidan, importera och placera komponenten där du vill ha den.

### Exempel: Lägg till ovanför TrendsSlider

```tsx
// shein-ecommerce/src/app/page.tsx
import DynamicHero from '@/components/HeroSections/DynamicHero';
import TrendsSlider from '@/components/TrendsSlider/TrendsSlider';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import { products } from '@/data';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* NY: Dynamisk Hero-sektion */}
      <DynamicHero />
      
      {/* Befintlig TrendsSlider */}
      <TrendsSlider />

      <section className={styles.section}>
        <div className={styles.container}>
          <CategoryGrid />
        </div>
      </section>

      {/* Resten av innehållet... */}
    </div>
  );
}
```

### Exempel: Ersätt TrendsSlider (om önskat)

```tsx
// shein-ecommerce/src/app/page.tsx
import DynamicHero from '@/components/HeroSections/DynamicHero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import { products } from '@/data';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Använd DynamicHero istället för TrendsSlider */}
      <DynamicHero />

      <section className={styles.section}>
        <div className={styles.container}>
          <CategoryGrid />
        </div>
      </section>

      {/* Resten av innehållet... */}
    </div>
  );
}
```

## Placeringsalternativ

### 1. Överst på sidan (Rekommenderat)
Placera hero-sektionen som första element för maximal synlighet.

### 2. Efter header
Om du har en sticky header, placera hero-sektionen direkt efter den.

### 3. På specifika sidor
Använd hero-sektionen på landningssidor, kampanjsidor eller kategorisidor:

```tsx
// shein-ecommerce/src/app/trends/page.tsx
import DynamicHero from '@/components/HeroSections/DynamicHero';

export default function TrendsPage() {
  return (
    <div>
      <DynamicHero />
      {/* Trend-specifikt innehåll */}
    </div>
  );
}
```

## Anpassning av timing

För att ändra rotationshastigheten, redigera intervallet i `DynamicHero.tsx`:

```typescript
// Ändra från 5000ms (5 sekunder) till önskat värde
const interval = setInterval(() => {
  // ...
}, 5000); // <-- Ändra detta värde
```

## Styling-tips

### Lägg till marginal under hero-sektionen

```css
/* I din page.module.css eller global CSS */
.heroSpacing {
  margin-bottom: 3rem;
}
```

```tsx
<div className={styles.heroSpacing}>
  <DynamicHero />
</div>
```

### Anpassa höjden

Redigera `.heroContainer` i `DynamicHero.module.css`:

```css
.heroContainer {
  height: 600px; /* Ändra till önskad höjd */
}
```

## Kompatibilitet

- ✅ Fungerar med befintlig TrendsSlider
- ✅ Påverkar inte annan kod
- ✅ Responsiv design (mobil, tablet, desktop)
- ✅ Next.js 14+ App Router
- ✅ TypeScript-stöd

## Felsökning

### Bilder laddas inte
Kontrollera att bilderna är tillgängliga eller ersätt med egna bilder i `HERO_THEMES` arrayen.

### Övergångar fungerar inte
Kontrollera att CSS Modules är korrekt konfigurerade i Next.js.

### Layout-problem
Se till att hero-sektionen inte är inuti en container med begränsad bredd.
