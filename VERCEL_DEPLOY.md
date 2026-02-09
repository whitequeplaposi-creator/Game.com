# 🚀 Vercel Deployment - Steg för steg

## Metod 1: Via Vercel Dashboard (Enklast - 5 minuter)

### Steg 1: Förbered repository
```bash
git add .
git commit -m "Add Proloweel products integration"
git push origin main
```

### Steg 2: Gå till Vercel
Öppna: https://vercel.com/new

### Steg 3: Importera projekt
1. Klicka på "Import Project"
2. Välj ditt Git-repository (GitHub/GitLab/Bitbucket)
3. Välj repository med SHEIN-projektet

### Steg 4: Konfigurera projekt
```
Project Name: shein-ecommerce
Framework Preset: Next.js
Root Directory: shein-ecommerce
Build Command: npm run build
Output Directory: .next
Install Command: npm install --legacy-peer-deps
```

### Steg 5: Lägg till miljövariabler
Klicka på "Environment Variables" och lägg till:

```
Name: DATABASE_URL
Value: libsql://dostar-dostar.aws-ap-northeast-1.turso.io

Name: TURSO_AUTH_TOKEN
Value: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzA2NDYyNDksImlkIjoiMTAzMDhhMTMtZjk1Ni00YTcwLTk4ODQtYzc4NDU2YWIxMzRiIiwicmlkIjoiYTU4ZmNkMDQtOWVkMy00YzRkLWFhMjUtYjg0N2JjMDc5OTRkIn0.Gqm8wewmN_VjCvpefTqdPttWmx9PZKMHKUCyLS5Nq8tSJ9m19EHguwXrnQp3oEShFE6_2DLsxSaL9SfXTTl2BA

Name: NEXT_PUBLIC_API_URL
Value: https://din-domän.vercel.app/api
```

**OBS:** Ersätt `din-domän` med din faktiska Vercel-domän efter deployment.

### Steg 6: Deploy
Klicka på "Deploy" och vänta 2-3 minuter.

### Steg 7: Verifiera
När deployment är klar:
1. Besök din live-URL
2. Kontrollera att produkter visas
3. Testa några produktsidor

---

## Metod 2: Via Vercel CLI (Avancerat)

### Steg 1: Installera Vercel CLI
```bash
npm install -g vercel
```

### Steg 2: Logga in
```bash
vercel login
```

### Steg 3: Deploy
```bash
cd shein-ecommerce
vercel
```

Följ instruktionerna:
- Set up and deploy? **Y**
- Which scope? Välj ditt konto
- Link to existing project? **N**
- What's your project's name? **shein-ecommerce**
- In which directory is your code located? **.**
- Want to override the settings? **N**

### Steg 4: Lägg till miljövariabler
```bash
vercel env add DATABASE_URL
# Klistra in: libsql://dostar-dostar.aws-ap-northeast-1.turso.io

vercel env add TURSO_AUTH_TOKEN
# Klistra in token

vercel env add NEXT_PUBLIC_API_URL
# Klistra in: https://din-domän.vercel.app/api
```

### Steg 5: Deploy igen med miljövariabler
```bash
vercel --prod
```

---

## Efter Deployment

### 1. Uppdatera NEXT_PUBLIC_API_URL
1. Gå till Vercel Dashboard
2. Välj ditt projekt
3. Gå till Settings → Environment Variables
4. Uppdatera `NEXT_PUBLIC_API_URL` med din faktiska domän
5. Redeploy projektet

### 2. Konfigurera Custom Domain (Valfritt)
1. Gå till Settings → Domains
2. Lägg till din egen domän
3. Följ DNS-instruktionerna

### 3. Aktivera Analytics (Valfritt)
```bash
npm install @vercel/analytics
```

Lägg till i `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Vercel Dashboard - Viktiga funktioner

### Deployments
- Se alla deployments
- Rollback till tidigare version
- Preview URLs för branches

### Settings
- Environment Variables
- Domains
- Git Integration
- Build & Development Settings

### Analytics
- Page views
- Unique visitors
- Top pages
- Performance metrics

### Logs
- Build logs
- Runtime logs
- Error tracking

---

## Automatisk Deployment

### Git Integration
Vercel deployer automatiskt när du pushar till Git:

```bash
git add .
git commit -m "Update products"
git push origin main
```

Vercel kommer automatiskt:
1. Bygga projektet
2. Köra tester
3. Deploya till produktion
4. Skicka notifikation

### Preview Deployments
Varje branch får sin egen preview-URL:
```bash
git checkout -b feature/new-design
git push origin feature/new-design
```

Vercel skapar: `https://shein-ecommerce-git-feature-new-design.vercel.app`

---

## Felsökning

### Build Failed
1. Kontrollera build-loggar i Vercel Dashboard
2. Verifiera att alla dependencies finns i package.json
3. Testa `npm run build` lokalt

### Produkter visas inte
1. Kontrollera Environment Variables
2. Verifiera databasanslutning
3. Kontrollera Runtime Logs

### 500 Internal Server Error
1. Kontrollera Runtime Logs
2. Verifiera API-routes
3. Testa endpoints lokalt

### Långsam laddning
1. Aktivera Edge Caching
2. Optimera bilder
3. Använd ISR (Incremental Static Regeneration)

---

## Prestanda-optimering

### Edge Functions
API-routes körs automatiskt på Vercel Edge Network.

### Image Optimization
Next.js Image-komponenten optimerar automatiskt.

### Caching
Konfigurera i `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, s-maxage=60, stale-while-revalidate=120"
        }
      ]
    }
  ]
}
```

---

## Checklista

- [ ] Repository pushat till Git
- [ ] Projekt importerat till Vercel
- [ ] Miljövariabler konfigurerade
- [ ] Första deployment lyckad
- [ ] Produkter visas på live-URL
- [ ] NEXT_PUBLIC_API_URL uppdaterad
- [ ] Sitemap fungerar (/sitemap.xml)
- [ ] Robots.txt fungerar (/robots.txt)
- [ ] Produktfeed fungerar (/api/product-feed)
- [ ] Custom domain konfigurerad (valfritt)
- [ ] Analytics aktiverad (valfritt)

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support

---

**Din SHEIN e-handelssida är nu live på Vercel!** 🎉

**Live URL:** https://din-domän.vercel.app
