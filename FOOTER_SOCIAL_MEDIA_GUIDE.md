# Footer Social Media Implementation Guide

## Översikt
Footern innehåller redan en komplett implementation av sociala medier-ikoner i "FÖLJ OSS"-sektionen.

## Nuvarande Implementation

### Plats i Footer
Sociala medier-ikonerna finns i den mellersta sektionen av footern (`middleRow`), tillsammans med nyhetsbrevsprenumerationen.

### Inkluderade Plattformar
1. **Facebook** - https://facebook.com
2. **Instagram** - https://instagram.com  
3. **Twitter/X** - https://twitter.com
4. **TikTok** - https://tiktok.com

### Komponenter

#### SocialIcons.tsx
Filen `src/components/SocialIcons.tsx` innehåller alla sociala medier-ikoner:
- `FacebookIcon` - Blå cirkel med vit F-logotyp
- `InstagramIcon` - Gradient (rosa/lila/blå) med kamera-ikon
- `TwitterIcon` - Svart bakgrund med vit X-logotyp
- `TikTokIcon` - Svart bakgrund med vit musiknot-logotyp
- `YouTubeIcon` - Röd bakgrund med vit play-knapp (finns men används inte ännu)

#### Footer.tsx
I `src/components/Footer/Footer.tsx` renderas ikonerna i `socialSection`:

```tsx
<div className={styles.socialSection}>
  <h3 className={styles.sectionTitle}>{t.followUs || 'FÖLJ OSS'}</h3>
  <div className={styles.socialMedia}>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FacebookIcon />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <InstagramIcon />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <TwitterIcon />
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <TikTokIcon />
    </a>
  </div>
</div>
```

## Översättningar

Texten "FÖLJ OSS" är översatt via `getFooterTranslation()` och stöder flera språk:
- Svenska: "FÖLJ OSS"
- Engelska: "FOLLOW US"
- Tyska: "FOLGE UNS"
- Franska: "SUIVEZ-NOUS"
- Spanska: "SÍGUENOS"
- Italienska: "SEGUICI"
- Nederländska: "VOLG ONS"
- Polska: "ŚLEDŹ NAS"
- Danska: "FØLG OS"
- Norska: "FØLG OSS"
- Finska: "SEURAA MEITÄ"

## Tillgänglighet

Varje social media-länk har:
- `target="_blank"` - Öppnas i ny flik
- `rel="noopener noreferrer"` - Säkerhet och integritet
- `aria-label` - Beskrivande text för skärmläsare

## Hur man Lägger Till Fler Plattformar

### 1. Lägg till ikon i SocialIcons.tsx
```tsx
export const PinterestIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style}>
    {/* SVG-innehåll här */}
  </svg>
);
```

### 2. Importera i Footer.tsx
```tsx
import { FacebookIcon, InstagramIcon, TwitterIcon, TikTokIcon, PinterestIcon } from '../SocialIcons';
```

### 3. Lägg till länk i socialMedia-sektionen
```tsx
<a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
  <PinterestIcon />
</a>
```

## Tillgängliga men Oanvända Ikoner

- **YouTubeIcon** - Finns i SocialIcons.tsx men används inte i footern ännu
- **GooglePlayIcon** - Finns i SocialIcons.tsx, kan användas för app-nedladdningar

## Styling

Ikonerna stylas via CSS-moduler i `Footer.module.css`:
- `.socialMedia` - Container för ikoner
- `.socialMedia a` - Länk-styling med hover-effekter
- `.socialMedia svg` - Ikon-storlek och spacing

## Rekommendationer

### För Produktion
1. **Uppdatera URL:er** - Byt ut generiska URL:er mot faktiska företagsprofiler:
   ```tsx
   <a href="https://facebook.com/shein" target="_blank">
   <a href="https://instagram.com/shein_official" target="_blank">
   ```

2. **Lägg till YouTube** - Om företaget har en YouTube-kanal:
   ```tsx
   <a href="https://youtube.com/@shein" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
     <YouTubeIcon />
   </a>
   ```

3. **Tracking** - Lägg till analytics-tracking på klick:
   ```tsx
   onClick={() => trackEvent('social_click', { platform: 'facebook' })}
   ```

4. **Dynamiska länkar** - Gör URL:er konfigurerbara via miljövariabler eller CMS

## Sammanfattning

Footern har redan en komplett och väl implementerad social media-sektion med:
- ✅ 4 populära plattformar (Facebook, Instagram, Twitter, TikTok)
- ✅ Professionella SVG-ikoner med officiella färger
- ✅ Flerspråkigt stöd
- ✅ Tillgänglighetsoptimerad
- ✅ Responsiv design
- ✅ Säkra externa länkar

Inga kodändringar behövs - implementationen är redan klar och produktionsklar!
