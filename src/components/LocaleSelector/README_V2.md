# LocaleSelectorV2 - Förbättrad Språk- och Valutaväljare

## Översikt

LocaleSelectorV2 är en förbättrad version av språk- och valutaväljaren med följande nya funktioner:

### Nya Funktioner

1. **Jordglob-ikon** - En elegant jordglob-ikon som roterar vid hover
2. **Flaggor framför språk** - Varje språk visas med sin landsflagga
3. **Förbättrad layout** - Tydligare struktur med flagga, språk och valuta
4. **Bättre visuell feedback** - Animationer och hover-effekter
5. **Responsiv design** - Fungerar perfekt på mobil, tablet och desktop

## Användning

### Importera komponenten

```tsx
import LocaleSelectorV2 from '@/components/LocaleSelector/LocaleSelectorV2';
```

### Använd i din komponent

```tsx
export default function Header() {
  return (
    <header>
      <LocaleSelectorV2 />
    </header>
  );
}
```

## Funktioner

### Jordglob-ikon
- Visas i knappen istället för landsflaggan
- Roterar 15° vid hover för en interaktiv känsla
- Visar att det är en global/internationell väljare

### Flaggor framför språk
- Varje land visas med sin flagga
- Språket visas med en mindre flagga framför texten
- Tydlig visuell koppling mellan land och språk

### Layout
```
┌─────────────────────────────────┐
│ 🌐  Sverige                  ▼  │
│     SEK                          │
└─────────────────────────────────┘

När öppen:
┌─────────────────────────────────────┐
│ 🌐 Välj land/region                 │
│ [Sök land, språk eller valuta...]   │
├─────────────────────────────────────┤
│ 🇸🇪  Sverige                    ✓  │
│     🇸🇪 Svenska                     │
│     SEK (kr)                        │
├─────────────────────────────────────┤
│ 🇩🇪  Deutschland                   │
│     🇩🇪 Deutsch                     │
│     EUR (€)                         │
└─────────────────────────────────────┘
```

## Styling

Komponenten använder CSS-moduler för isolerad styling:
- `LocaleSelectorV2.module.css` - Alla stilar
- Responsiv design med breakpoints för mobil och tablet
- Smooth animationer och övergångar
- Tillgänglig med keyboard navigation

## Skillnader från Original

| Funktion | Original | V2 |
|----------|----------|-----|
| Huvudikon | Landsflagga | Jordglob 🌐 |
| Språkvisning | Text endast | Flagga + text |
| Valutavisning | Inline text | Badge-stil |
| Header-ikon | Ingen | Jordglob |
| Layout | Enkel | Strukturerad |

## Anpassning

### Ändra färger
Redigera CSS-variablerna i `LocaleSelectorV2.module.css`:

```css
.trigger {
  border-color: #e0e0e0; /* Ändra kantfärg */
  background: transparent; /* Ändra bakgrund */
}

.trigger:hover {
  background: #f5f5f5; /* Ändra hover-färg */
}
```

### Ändra storlek
```css
.globeIcon {
  width: 24px; /* Större jordglob */
  height: 24px;
}

.countryFlag {
  font-size: 32px; /* Större flaggor */
}
```

## Tillgänglighet

- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus states
- ✅ Screen reader friendly
- ✅ Click outside to close

## Browser-stöd

- ✅ Chrome/Edge (senaste)
- ✅ Firefox (senaste)
- ✅ Safari (senaste)
- ✅ Mobile browsers

## Integration

För att ersätta den gamla komponenten i Header:

```tsx
// Före
import LocaleSelector from '@/components/LocaleSelector/LocaleSelector';

// Efter
import LocaleSelectorV2 from '@/components/LocaleSelector/LocaleSelectorV2';

// Använd
<LocaleSelectorV2 />
```

## Demo

Se komponenten i aktion genom att importera den i din Header eller annan komponent där du vill visa språk- och valutaväljaren.
