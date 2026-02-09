# LocaleSelectorV2 - Anpassningsguide

## 🎨 Färganpassningar

### Tema 1: Dark Mode

```css
/* LocaleSelectorV2.module.css */

.trigger {
  background: #1a1a1a;
  border-color: #333;
  color: #fff;
}

.trigger:hover {
  background: #2a2a2a;
  border-color: #444;
}

.globeIcon {
  color: #999;
}

.trigger:hover .globeIcon {
  color: #fff;
}

.dropdown {
  background: #1a1a1a;
  border-color: #333;
}

.dropdownHeader {
  background: linear-gradient(to bottom, #222, #1a1a1a);
  border-bottom-color: #333;
}

.searchInput {
  background: #2a2a2a;
  border-color: #444;
  color: #fff;
}

.countryItem:hover {
  background: #2a2a2a;
}

.countryItem.active {
  background: #333;
  border-color: #444;
}
```

### Tema 2: Färgglad

```css
.trigger {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

.trigger:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.globeIcon {
  color: rgba(255, 255, 255, 0.9);
}

.dropdown {
  border: 2px solid #667eea;
}

.dropdownHeader {
  background: linear-gradient(to bottom, #f0f0ff, #ffffff);
}

.countryItem.active {
  background: linear-gradient(135deg, #667eea15, #764ba215);
  border-color: #667eea;
}

.checkIcon {
  color: #667eea;
}
```

### Tema 3: Minimalistisk

```css
.trigger {
  background: white;
  border: 1px solid #000;
  border-radius: 0;
}

.trigger:hover {
  background: #000;
  color: white;
}

.trigger:hover .globeIcon {
  color: white;
}

.dropdown {
  border: 2px solid #000;
  border-radius: 0;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1);
}

.countryItem {
  border-radius: 0;
}

.countryItem.active {
  background: #000;
  color: white;
}
```

---

## 📏 Storleksanpassningar

### Kompakt version

```css
.trigger {
  padding: 6px 10px;
  min-width: 140px;
  font-size: 12px;
}

.globeIcon {
  width: 16px;
  height: 16px;
}

.countryName {
  font-size: 12px;
}

.currency {
  font-size: 10px;
}

.dropdown {
  width: 320px;
}

.countryFlag {
  font-size: 22px;
}

.countryItem {
  padding: 8px 10px;
}
```

### Stor version

```css
.trigger {
  padding: 12px 16px;
  min-width: 220px;
  font-size: 16px;
}

.globeIcon {
  width: 24px;
  height: 24px;
}

.countryName {
  font-size: 16px;
}

.currency {
  font-size: 13px;
}

.dropdown {
  width: 440px;
}

.countryFlag {
  font-size: 36px;
}

.countryItem {
  padding: 16px 18px;
}
```

---

## 🎭 Animationsanpassningar

### Snabbare animationer

```css
.trigger,
.arrow,
.globeIcon {
  transition: all 0.15s ease;
}

.dropdown {
  animation: slideDown 0.15s ease;
}
```

### Långsammare, mjukare animationer

```css
.trigger,
.arrow,
.globeIcon {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown {
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Bounce-effekt

```css
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  60% {
    transform: translateY(5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Fade-in effekt

```css
@keyframes slideDown {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## 🌐 Jordglob-anpassningar

### Pulsande jordglob

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.globeIcon {
  animation: pulse 2s infinite;
}
```

### Roterande jordglob

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.globeIcon {
  animation: rotate 20s linear infinite;
}
```

### Färgglad jordglob

```css
.globeIcon {
  stroke: url(#gradient);
}

/* Lägg till i SVG */
<svg>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  {/* ... resten av SVG */}
</svg>
```

---

## 🎯 Layout-anpassningar

### Vänsterjusterad dropdown

```css
.dropdown {
  left: 0;
  right: auto;
}
```

### Centrerad dropdown

```css
.dropdown {
  left: 50%;
  transform: translateX(-50%);
  right: auto;
}
```

### Full bredd dropdown

```css
.dropdown {
  width: 100%;
  max-width: 600px;
}
```

### Två-kolumns layout

```css
.countryList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 12px;
}

.countryItem {
  padding: 10px;
}

.countryDetails {
  gap: 4px;
}

.countryItemName {
  font-size: 13px;
}
```

---

## 🔤 Typografi-anpassningar

### Serif-font

```css
.localeSelector {
  font-family: 'Georgia', 'Times New Roman', serif;
}

.countryName {
  font-family: 'Georgia', serif;
  font-weight: 700;
}
```

### Monospace-font

```css
.currency,
.currencyInfo {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
}
```

### Större line-height

```css
.countryDetails {
  line-height: 1.8;
}

.countryMainInfo {
  gap: 8px;
}
```

---

## 🎨 Badge-anpassningar

### Rundad badge

```css
.currencyInfo {
  border-radius: 12px;
  padding: 4px 10px;
}
```

### Färgglad badge

```css
.currencyInfo {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-weight: 600;
}
```

### Outline badge

```css
.currencyInfo {
  background: transparent;
  border: 1px solid #000;
  color: #000;
}
```

---

## 🖼️ Flagg-anpassningar

### Större flaggor

```css
.countryFlag {
  font-size: 36px;
}

.languageFlag {
  font-size: 20px;
}
```

### Rundade flaggor

```css
.countryFlag,
.languageFlag {
  border-radius: 50%;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### Skugga på flaggor

```css
.countryFlag {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
```

---

## 📱 Mobil-anpassningar

### Fullskärm på mobil

```css
@media (max-width: 480px) {
  .dropdown {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-height: 100vh;
    border-radius: 0;
    transform: none;
  }
}
```

### Bottom sheet på mobil

```css
@media (max-width: 480px) {
  .dropdown {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    width: 100%;
    max-height: 70vh;
    border-radius: 20px 20px 0 0;
    animation: slideUp 0.3s ease;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
}
```

---

## 🎪 Avancerade anpassningar

### Glassmorphism-effekt

```css
.dropdown {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dropdownHeader {
  background: rgba(250, 250, 250, 0.6);
}

.countryItem:hover {
  background: rgba(248, 248, 248, 0.8);
}
```

### Neomorphism-effekt

```css
.trigger {
  background: #e0e0e0;
  border: none;
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.7);
}

.trigger:hover {
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.7);
}

.dropdown {
  background: #e0e0e0;
  border: none;
  box-shadow: 
    12px 12px 24px rgba(0, 0, 0, 0.1),
    -12px -12px 24px rgba(255, 255, 255, 0.7);
}
```

### Gradient border

```css
.trigger {
  position: relative;
  background: white;
  border: none;
}

.trigger::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 6px;
  padding: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

---

## 💡 Exempel: Komplett tema

### Elegant Dark Theme

```css
/* Komplett dark theme */
.localeSelector {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.trigger {
  background: #1e1e1e;
  border: 1px solid #333;
  color: #fff;
  padding: 10px 14px;
  transition: all 0.3s ease;
}

.trigger:hover {
  background: #2a2a2a;
  border-color: #444;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.globeIcon {
  color: #888;
  transition: all 0.3s ease;
}

.trigger:hover .globeIcon {
  color: #fff;
  transform: rotate(15deg);
}

.countryName {
  color: #fff;
  font-weight: 600;
}

.currency {
  color: #888;
}

.dropdown {
  background: #1e1e1e;
  border: 1px solid #333;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}

.dropdownHeader {
  background: linear-gradient(to bottom, #252525, #1e1e1e);
  border-bottom-color: #333;
}

.dropdownHeader h3 {
  color: #fff;
}

.headerGlobe {
  color: #fff;
}

.searchInput {
  background: #2a2a2a;
  border-color: #444;
  color: #fff;
}

.searchInput::placeholder {
  color: #666;
}

.searchInput:focus {
  border-color: #555;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
}

.countryList::-webkit-scrollbar-track {
  background: #252525;
}

.countryList::-webkit-scrollbar-thumb {
  background: #444;
}

.countryItem {
  color: #fff;
}

.countryItem:hover {
  background: #2a2a2a;
}

.countryItem.active {
  background: #333;
  border-color: #444;
}

.countryItemName {
  color: #fff;
}

.languageWithFlag {
  color: #aaa;
}

.currencyInfo {
  background: #2a2a2a;
  color: #aaa;
}

.checkIcon {
  color: #fff;
}

.noResults p {
  color: #888;
}

.noResultsHint {
  color: #666;
}
```

---

## 🚀 Hur applicera anpassningar

### Metod 1: Direkt i CSS-filen

Redigera `LocaleSelectorV2.module.css` direkt.

### Metod 2: Skapa tema-fil

```css
/* themes/dark.module.css */
@import '../LocaleSelectorV2.module.css';

/* Överskrid med dina anpassningar */
.trigger {
  background: #1e1e1e;
  /* ... */
}
```

### Metod 3: CSS Variables

```css
/* LocaleSelectorV2.module.css */
.trigger {
  background: var(--locale-bg, transparent);
  border-color: var(--locale-border, #e0e0e0);
  color: var(--locale-text, #333);
}

/* I din app */
:root {
  --locale-bg: #1e1e1e;
  --locale-border: #333;
  --locale-text: #fff;
}
```

---

**Tips:** Börja med små ändringar och testa på olika enheter!
