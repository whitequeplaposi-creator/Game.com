# Deployment Guide - SHEIN E-commerce med Proloweel-produkter

## 📋 Översikt
Denna guide beskriver hur du visar Proloweel-produkterna lokalt och publicerar dem på Vercel med Google-indexering.

## 🚀 Steg 1: Visa produkter lokalt

### Starta utvecklingsservern
```bash
cd shein-ecommerce
npm run dev
```

Öppna webbläsaren på: http://localhost:3000

Produkterna från Proloweel-databasen visas nu på:
- Startsidan: http://localhost:3000
- Katalog: http://localhost:3000/catalog
- Produktsidor: http://localhost:3000/product/[id]

## 📦 Steg 2: Förbered för Vercel-deployment

### 2.1 Installera Vercel CLI (valfritt)
```bash
npm install -g vercel
```

### 2.2 Logga in på Vercel
```bash
vercel login
```

### 2.3 Konfigurera miljövariabler på Vercel

Gå till Vercel Dashboard och lägg till följande miljövariabler:

```
DATABASE_URL=libsql://dostar-dostar.aws-ap-northeast-1.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzA2NDYyNDksImlkIjoiMTAzMDhhMTMtZjk1Ni00YTcwLTk4ODQtYzc4NDU2YWIxMzRiIiwicmlkIjoiYTU4ZmNkMDQtOWVkMy00YzRkLWFhMjUtYjg0N2JjMDc5OTRkIn0.Gqm8wewmN_VjCvpefTqdPttWmx9PZKMHKUCyLS5Nq8tSJ9m19EHguwXrnQp3oEShFE6_2DLsxSaL9SfXTTl2BA
NEXT_PUBLIC_API_URL=https://din-domän.vercel.app/api
```

## 🌐 Steg 3: Publicera på Vercel

### Metod 1: Via Vercel Dashboard (Rekommenderat)

1. Gå till https://vercel.com/new
2. Importera ditt GitHub/GitLab-repository
3. Konfigurera projektet:
   - Framework Preset: Next.js
   - Root Directory: shein-ecommerce
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Lägg till miljövariabler (se 2.3)
5. Klicka på "Deploy"

### Metod 2: Via CLI

```bash
cd shein-ecommerce
vercel
```

Följ instruktionerna i terminalen.

## 🔍 Steg 4: Google-indexering

### 4.1 Skapa sitemap.xml

Sitemap genereras automatiskt via `/sitemap.xml` endpoint.

Verifiera: https://din-domän.vercel.app/sitemap.xml

### 4.2 Skapa robots.txt

Robots.txt finns på `/robots.txt`.

Verifiera: https://din-domän.vercel.app/robots.txt

### 4.3 Registrera på Google Search Console

1. Gå till https://search.google.com/search-console
2. Lägg till din Vercel-domän
3. Verifiera ägarskap (via DNS eller HTML-fil)
4. Skicka in sitemap: https://din-domän.vercel.app/sitemap.xml

### 4.4 Google Merchant Center (för produkter)

1. Gå till https://merchants.google.com
2. Skapa ett konto
3. Lägg till din webbplats
4. Skicka in produktfeed: https://din-domän.vercel.app/api/product-feed

## 📊 Steg 5: SEO-optimering

### Meta-taggar
Alla produktsidor har automatiskt:
- Title tags
- Meta descriptions
- Open Graph tags
- Schema.org markup

### Produktschema
Varje produkt har strukturerad data för Google:
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Produktnamn",
  "image": "produktbild-url",
  "description": "Produktbeskrivning",
  "offers": {
    "@type": "Offer",
    "price": "299.00",
    "priceCurrency": "SEK"
  }
}
```

## 🔧 Steg 6: Prestanda-optimering

### Bildoptimering
Next.js Image-komponenten optimerar automatiskt alla produktbilder.

### Caching
Vercel cachar automatiskt statiska sidor och API-routes.

### Edge Functions
API-endpoints körs på Vercel Edge Network för snabb respons.

## 📈 Steg 7: Övervaka deployment

### Vercel Dashboard
- Besök: https://vercel.com/dashboard
- Se deployment-status
- Kontrollera loggar
- Övervaka prestanda

### Analytics
Aktivera Vercel Analytics:
```bash
npm install @vercel/analytics
```

## 🐛 Felsökning

### Produkter visas inte
1. Kontrollera att miljövariabler är korrekt konfigurerade
2. Verifiera databasanslutning
3. Kontrollera build-loggar på Vercel

### Långsam laddning
1. Aktivera ISR (Incremental Static Regeneration)
2. Optimera bildstorlekar
3. Använd CDN för statiska assets

### Google indexerar inte
1. Vänta 24-48 timmar efter submission
2. Kontrollera robots.txt
3. Verifiera sitemap i Search Console

## 📝 Checklista före publicering

- [ ] Miljövariabler konfigurerade på Vercel
- [ ] Produkter hämtas från databasen
- [ ] Bilder laddas korrekt
- [ ] SEO meta-taggar på plats
- [ ] Sitemap.xml fungerar
- [ ] Robots.txt konfigurerad
- [ ] Google Search Console verifierad
- [ ] Prestanda-test genomfört
- [ ] Mobil-responsivitet testad
- [ ] Checkout-flöde fungerar

## 🎉 Klart!

Din SHEIN e-handelssida med Proloweel-produkter är nu live på Vercel och redo för Google-indexering!

**Live URL:** https://din-domän.vercel.app
**Admin:** https://vercel.com/dashboard
