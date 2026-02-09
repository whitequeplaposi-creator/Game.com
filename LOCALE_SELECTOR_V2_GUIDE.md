# LocaleSelectorV2 - Implementeringsguide

## 🌐 Översikt

En förbättrad språk- och valutaväljare med jordglob-ikon och flaggor framför språken.

## ✨ Nya Funktioner

### 1. Jordglob-ikon
- Ersätter landsflaggan i huvudknappen
- Roterar 15° vid hover för interaktiv feedback
- Visar tydligt att det är en global/internationell väljare

### 2. Flaggor framför språk
- Varje språk visas med sin landsflagga
- Tydlig visuell koppling mellan land och språk
- Förbättrad användarupplevelse

### 3. Förbättrad layout
- Strukturerad visning av land, språk och valuta
- Valuta visas som badge med symbol
- Bättre spacing och typografi

## 📦 Filer som skapats

```
shein-ecommerce/src/components/LocaleSelector/
├── LocaleSelectorV2.tsx              # Huvudkomponent
├── LocaleSelectorV2.module.css       # Styling
├── LocaleSelectorDemo.tsx            # Demo-komponent
├── LocaleSelectorDemo.module.css     # Demo-styling
└── README_V2.md                      # Dokumentation
```

## 🚀 Snabbstart

### Steg 1: Importera komponenten

```tsx
import LocaleSelectorV2 from '@/components/LocaleSelector/LocaleSelectorV2';
```

### Steg 2: Använd i din komponent

```tsx
export default function Header() {
  return (
    <header>
      <nav>
        {/* Andra header-element */}
        <LocaleSelectorV2 />
      </nav>
    </header>
  );
}
```

### Steg 3: Testa komponenten

Komponenten fungerar direkt med befintlig `LocaleContext` - ingen ytterligare konfiguration behövs!

## 🎨 Visuell Design

### Knapp (stängd)
```
┌──────────────────────────┐
│ 🌐  Sverige          ▼   │
│     SEK                  │
└──────────────────────────┘
```

### Dropdown (öppen)
```
┌─────────────────────────────────────┐
│ 🌐 Välj land/region                 │
│ ┌─────────────────────────────────┐ │
│ │ Sök land, språk eller valuta... │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ 🇸🇪  Sverige                    ✓  │
│     🇸🇪 Svenska                     │
│     SEK (kr)                        │
├─────────────────────────────────────┤
│ 🇩🇪  Deutschland                   │
│     🇩🇪 Deutsch                     │
│     EUR (€)                         │
├─────────────────────────────────────┤
│ 🇫🇷  France                        │
│     🇫🇷 Français                    │
│     EUR (€)                         │
└─────────────────────────────────────┘
```

## 🔄 Ersätta befintlig komponent

### I Header.tsx

**Före:**
```tsx
import LocaleSelector from '@/components/LocaleSelector/LocaleSelector';

<LocaleSelector />
```

**Efter:**
```tsx
import LocaleSelectorV2 from '@/components/LocaleSelector/LocaleSelectorV2';

<LocaleSelectorV2 />
```

## 🎯 Funktioner

- ✅ Jordglob-ikon med rotation vid hover
- ✅ Flaggor framför varje språk
- ✅ Valuta visas som badge
- ✅ Sökfunktion (land, språk, valuta)
- ✅ Keyboard navigation
- ✅ Click outside to close
- ✅ Responsiv design
- ✅ Smooth animationer
- ✅ ARIA labels för tillgänglighet

## 📱 Responsiv Design

### Desktop (>768px)
- Full bredd dropdown (380px)
- Alla funktioner synliga

### Tablet (480-768px)
- Mindre dropdown (340px)
- Kompaktare knappar

### Mobil (<480px)
- Centrerad modal
- Full viewport-bredd
- Touch-optimerad

## 🎨 Anpassning

### Färger

Redigera `LocaleSelectorV2.module.css`:

```css
.trigger {
  border-color: #e0e0e0;    /* Kantfärg */
  background: transparent;   /* Bakgrund */
}

.trigger:hover {
  background: #f5f5f5;       /* Hover-färg */
  border-color: #ccc;        /* Hover-kant */
}

.globeIcon {
  color: #666;               /* Jordglob-färg */
}

.trigger:hover .globeIcon {
  color: #000;               /* Hover-jordglob */
}
```

### Storlekar

```css
.globeIcon {
  width: 24px;               /* Större jordglob */
  height: 24px;
}

.countryFlag {
  font-size: 32px;           /* Större flaggor */
}

.dropdown {
  width: 420px;              /* Bredare dropdown */
}
```

## 🧪 Testa komponenten

### Visa demo-sidan

Skapa en demo-sida för att testa:

```tsx
// src/app/demo/locale-selector/page.tsx
import LocaleSelectorDemo from '@/components/LocaleSelector/LocaleSelectorDemo';

export default function LocaleSelectorDemoPage() {
  return <LocaleSelectorDemo />;
}
```

Besök: `http://localhost:3000/demo/locale-selector`

## 📊 Jämförelse

| Funktion | Original | V2 |
|----------|----------|-----|
| Huvudikon | 🇸🇪 Landsflagga | 🌐 Jordglob |
| Språkvisning | Text endast | 🇸🇪 Flagga + text |
| Valutavisning | Inline text | Badge-stil |
| Header-ikon | Ingen | 🌐 Jordglob |
| Animationer | Grundläggande | Förbättrade |
| Layout | Enkel | Strukturerad |

## 🔧 Felsökning

### Komponenten visas inte
- Kontrollera att `LocaleProvider` är wrappat runt din app
- Verifiera import-sökvägen

### Styling ser fel ut
- Kontrollera att CSS-modulen importeras korrekt
- Verifiera att inga globala stilar överlappar

### Dropdown öppnas inte
- Kontrollera console för JavaScript-fel
- Verifiera att `useState` fungerar korrekt

## 🌍 Stödda länder

Komponenten stöder alla 28 EU-länder som definieras i `LocaleContext`:

- Sverige, Tyskland, Frankrike, Italien, Spanien
- Nederländerna, Belgien, Österrike, Polen, Danmark
- Finland, Norge, Irland, Portugal, Grekland
- Tjeckien, Ungern, Rumänien, Bulgarien, Kroatien
- Slovakien, Slovenien, Litauen, Lettland, Estland
- Luxemburg, Malta, Cypern

## 💡 Tips

1. **Placering**: Fungerar bäst i header, högst upp till höger
2. **Kontrast**: Se till att bakgrunden ger tillräcklig kontrast
3. **Mobil**: Testa på olika skärmstorlekar
4. **Tillgänglighet**: Komponenten är keyboard-navigerbar

## 📝 Nästa steg

1. Testa komponenten i din app
2. Anpassa färger efter ditt tema
3. Lägg till i header eller annan lämplig plats
4. Testa på olika enheter

## 🤝 Bidra

Har du förbättringsförslag? Skapa en issue eller pull request!

---

**Skapad:** 2026-02-07  
**Version:** 2.0.0  
**Status:** ✅ Redo för produktion
