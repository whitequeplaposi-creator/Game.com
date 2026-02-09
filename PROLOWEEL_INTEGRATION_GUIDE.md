# Proloweel Integration Guide

## Översikt
Detta dokument beskriver hur Proloweel-produkter integreras med SHEIN e-handelssidan via Turso-databasen.

## Databaskonfiguration

### Miljövariabler
Följande miljövariabler är konfigurerade i `.env.local`:

```env
DATABASE_URL=libsql://dostar-dostar.aws-ap-northeast-1.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9...
```

## Installation

### 1. Installera Turso-klienten
```bash
cd shein-ecommerce
npm install @libsql/client
npm install -D tsx
```

### 2. Initiera databasen
Kör SQL-scriptet för att skapa produkttabellen:

```bash
# Använd Turso CLI eller kör SQL-filen direkt
turso db shell dostar < scripts/init-db.sql
```

Eller via Turso CLI:
```bash
turso db shell dostar
```

Sedan klistra in innehållet från `scripts/init-db.sql`.

### 3. Synkronisera Proloweel-produkter
```bash
npx tsx scripts/sync-proloweel.ts
```

## Databasstruktur

### Products-tabell
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  original_price REAL,
  description TEXT,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  images TEXT NOT NULL, -- JSON array
  sizes TEXT NOT NULL, -- JSON array
  colors TEXT NOT NULL, -- JSON array
  rating REAL DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT 1,
  is_hot BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Hämta alla produkter
```
GET /api/products
```

**Response:**
```json
{
  "products": [...],
  "success": true
}
```

### Hämta specifik produkt
```
GET /api/products/[id]
```

**Response:**
```json
{
  "product": {...},
  "success": true
}
```

## Användning i komponenter

### Hämta produkter från databasen
```typescript
import { getProducts, getProductById } from '@/lib/db';

// I en Server Component
const products = await getProducts();

// Hämta specifik produkt
const product = await getProductById('1');
```

### Hämta via API (Client Component)
```typescript
const response = await fetch('/api/products');
const { products } = await response.json();
```

## Synkronisering från Proloweel

### Manuell synkronisering
Redigera `scripts/sync-proloweel.ts` och lägg till produktdata från Proloweel:

```typescript
const prolloweelProducts = [
  {
    name: 'Produktnamn',
    price: 299.00,
    original_price: 399.00,
    description: 'Produktbeskrivning',
    category: 'Kategori',
    image: '/images/product.jpg',
    images: JSON.stringify(['/images/product1.jpg', '/images/product2.jpg']),
    sizes: JSON.stringify(['S', 'M', 'L']),
    colors: JSON.stringify(['Svart', 'Vit']),
    rating: 4.5,
    review_count: 120,
    in_stock: true,
    is_hot: true,
  },
  // Fler produkter...
];
```

Kör sedan:
```bash
npx tsx scripts/sync-proloweel.ts
```

### Automatisk synkronisering
För att automatisera synkroniseringen kan du:

1. **Skapa ett API-endpoint** som Proloweel kan anropa
2. **Använd en cron-job** för att regelbundet hämta produkter
3. **Webhooks** från Proloweel när produkter uppdateras

## Nästa steg

1. ✅ Databas konfigurerad
2. ✅ API endpoints skapade
3. ✅ Synkroniseringsscript skapat
4. ⏳ Installera dependencies (`npm install @libsql/client tsx`)
5. ⏳ Initiera databasen med SQL-scriptet
6. ⏳ Lägg till Proloweel-produktdata i sync-scriptet
7. ⏳ Kör synkroniseringen
8. ⏳ Uppdatera komponenter att använda databasprodukter

## Felsökning

### Anslutningsproblem
- Kontrollera att `DATABASE_URL` och `TURSO_AUTH_TOKEN` är korrekt konfigurerade
- Verifiera att Turso-databasen är aktiv

### Produkter visas inte
- Kontrollera att produkter finns i databasen: `turso db shell dostar "SELECT * FROM products;"`
- Verifiera att `in_stock` är satt till `1`

### API-fel
- Kontrollera server-loggar för felmeddelanden
- Verifiera att miljövariablerna är tillgängliga i runtime
