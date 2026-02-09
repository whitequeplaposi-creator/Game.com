# Proloweel Setup - Nästa Steg

## ✅ Vad som är klart

1. **Databaskonfiguration** - Turso-uppgifter är tillagda i `.env.local`
2. **Databasklient** - `src/lib/db.ts` skapad för att kommunicera med Turso
3. **API Endpoints** - `/api/products` och `/api/products/[id]` skapade
4. **SQL Schema** - `scripts/init-db.sql` för att skapa produkttabellen
5. **Synkroniseringsscript** - `scripts/sync-proloweel.ts` för att lägga till produkter

## 📋 Nästa steg för att publicera Proloweel-produkter

### Steg 1: Installera dependencies
```bash
cd shein-ecommerce
npm install @libsql/client
npm install -D tsx
```

### Steg 2: Skapa produkttabellen i Turso
Du har två alternativ:

**Alternativ A: Via Turso CLI**
```bash
turso db shell dostar < scripts/init-db.sql
```

**Alternativ B: Manuellt via Turso Dashboard**
1. Gå till [Turso Dashboard](https://turso.tech/app)
2. Välj din databas "dostar"
3. Öppna SQL-editorn
4. Kopiera och kör innehållet från `scripts/init-db.sql`

### Steg 3: Lägg till Proloweel-produktdata

Öppna `scripts/sync-proloweel.ts` och ersätt exempel-produkterna med faktiska Proloweel-produkter:

```typescript
const prolloweelProducts = [
  {
    name: 'Din Proloweel-produkt',
    price: 299.00,
    original_price: 399.00,
    description: 'Produktbeskrivning',
    category: 'Kläder',
    image: '/images/product.jpg',
    images: JSON.stringify(['/images/product1.jpg', '/images/product2.jpg']),
    sizes: JSON.stringify(['S', 'M', 'L', 'XL']),
    colors: JSON.stringify(['Svart', 'Vit', 'Grå']),
    rating: 4.5,
    review_count: 120,
    in_stock: true,
    is_hot: true,
  },
  // Lägg till fler produkter här
];
```

### Steg 4: Kör synkroniseringen
```bash
npx tsx scripts/sync-proloweel.ts
```

### Steg 5: Verifiera att produkterna finns i databasen
```bash
turso db shell dostar "SELECT * FROM products;"
```

### Steg 6: Testa API-endpoints

Starta utvecklingsservern:
```bash
npm run dev
```

Testa endpoints:
- http://localhost:3000/api/products (alla produkter)
- http://localhost:3000/api/products/1 (specifik produkt)

## 🔄 Uppdatera komponenter att använda databasprodukter

När produkterna är i databasen kan du uppdatera komponenterna:

### Server Components (Rekommenderat)
```typescript
import { getProducts } from '@/lib/db';

export default async function HomePage() {
  const products = await getProducts();
  return <ProductGrid products={products} />;
}
```

### Client Components
```typescript
'use client';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);
  
  return <ProductGrid products={products} />;
}
```

## 📝 Viktiga filer

- `src/lib/db.ts` - Databasklient och funktioner
- `src/app/api/products/route.ts` - API för alla produkter
- `src/app/api/products/[id]/route.ts` - API för specifik produkt
- `scripts/init-db.sql` - SQL för att skapa tabeller
- `scripts/sync-proloweel.ts` - Script för att synkronisera produkter
- `.env.local` - Miljövariabler (DATABASE_URL, TURSO_AUTH_TOKEN)

## ❓ Frågor att besvara

För att slutföra integrationen behöver jag veta:

1. **Var finns Proloweel-produktdata?**
   - Har du en fil med produkter?
   - Finns det ett API att hämta från?
   - Ska jag hjälpa dig skapa produktdata?

2. **Produktbilder**
   - Var finns bilderna?
   - Ska de laddas upp till projektet eller länkas externt?

3. **Kategorier**
   - Vilka kategorier har Proloweel-produkterna?

Låt mig veta så kan jag hjälpa dig vidare! 🚀
