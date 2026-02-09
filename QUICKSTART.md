# 🚀 Snabbstart - Visa Proloweel-produkter

## Steg 1: Starta lokalt (2 minuter)

```bash
cd shein-ecommerce
npm run dev
```

Öppna: **http://localhost:3000**

✅ Produkterna från Proloweel visas nu!

## Steg 2: Publicera på Vercel (5 minuter)

### Via Vercel Dashboard (Enklast)

1. **Gå till:** https://vercel.com/new
2. **Importera** ditt repository
3. **Konfigurera:**
   - Root Directory: `shein-ecommerce`
   - Framework: Next.js
4. **Lägg till miljövariabler:**
   ```
   DATABASE_URL=libsql://dostar-dostar.aws-ap-northeast-1.turso.io
   TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzA2NDYyNDksImlkIjoiMTAzMDhhMTMtZjk1Ni00YTcwLTk4ODQtYzc4NDU2YWIxMzRiIiwicmlkIjoiYTU4ZmNkMDQtOWVkMy00YzRkLWFhMjUtYjg0N2JjMDc5OTRkIn0.Gqm8wewmN_VjCvpefTqdPttWmx9PZKMHKUCyLS5Nq8tSJ9m19EHguwXrnQp3oEShFE6_2DLsxSaL9SfXTTl2BA
   ```
5. **Klicka:** Deploy

### Via CLI

```bash
npm install -g vercel
vercel login
cd shein-ecommerce
vercel
```

## Steg 3: Google-indexering (10 minuter)

### 3.1 Verifiera SEO-filer

Besök dessa URLs efter deployment:
- **Sitemap:** https://din-domän.vercel.app/sitemap.xml
- **Robots:** https://din-domän.vercel.app/robots.txt
- **Produktfeed:** https://din-domän.vercel.app/api/product-feed

### 3.2 Google Search Console

1. Gå till: https://search.google.com/search-console
2. Lägg till din Vercel-domän
3. Verifiera ägarskap
4. Skicka in sitemap: `https://din-domän.vercel.app/sitemap.xml`

### 3.3 Google Merchant Center (Valfritt)

För produktannonser på Google Shopping:

1. Gå till: https://merchants.google.com
2. Skapa konto
3. Lägg till webbplats
4. Skicka produktfeed: `https://din-domän.vercel.app/api/product-feed`

## 📊 Resultat

✅ **35,855 produkter** från Proloweel
✅ **Live på Vercel** med global CDN
✅ **SEO-optimerad** för Google
✅ **Produktfeed** för Google Shopping
✅ **Automatisk sitemap** för alla produkter

## 🔗 Viktiga länkar

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Google Search Console:** https://search.google.com/search-console
- **Google Merchant Center:** https://merchants.google.com
- **Deployment Guide:** Se `DEPLOYMENT_GUIDE.md`

## 💡 Tips

- **Prestanda:** Vercel cachar automatiskt
- **Bilder:** Optimeras via Next.js Image
- **SEO:** Meta-taggar genereras automatiskt
- **Analytics:** Aktivera Vercel Analytics

## ❓ Problem?

Se `DEPLOYMENT_GUIDE.md` för detaljerad felsökning.

---

**Klart på 17 minuter!** 🎉
