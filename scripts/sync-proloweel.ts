/**
 * Script för att synkronisera produkter från Proloweel till Turso-databasen
 * 
 * Användning:
 * 1. Installera dependencies: npm install @libsql/client tsx
 * 2. Kör scriptet: npx tsx scripts/sync-proloweel.ts
 */

import { createClient } from '@libsql/client';

// Anslut till Turso-databasen
const db = createClient({
  url: process.env.DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

// Exempel på produktdata från Proloweel
// Ersätt detta med faktisk data från Proloweel API eller databas
const prolloweelProducts = [
  {
    name: 'Proloweel Premium T-shirt',
    price: 299.00,
    original_price: 399.00,
    description: 'Högkvalitativ t-shirt från Proloweel med bekväm passform',
    category: 'Kläder',
    image: '/images/proloweel-tshirt.jpg',
    images: JSON.stringify(['/images/proloweel-tshirt.jpg', '/images/proloweel-tshirt-2.jpg']),
    sizes: JSON.stringify(['XS', 'S', 'M', 'L', 'XL']),
    colors: JSON.stringify(['Svart', 'Vit', 'Grå']),
    rating: 4.5,
    review_count: 120,
    in_stock: true,
    is_hot: true,
  },
  // Lägg till fler produkter här
];

async function syncProducts() {
  try {
    console.log('🔄 Startar synkronisering av Proloweel-produkter...');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const product of prolloweelProducts) {
      try {
        await db.execute({
          sql: `
            INSERT INTO products (
              name, price, original_price, description, category, 
              image, images, sizes, colors, rating, review_count, 
              in_stock, is_hot
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          args: [
            product.name,
            product.price,
            product.original_price,
            product.description,
            product.category,
            product.image,
            product.images,
            product.sizes,
            product.colors,
            product.rating,
            product.review_count,
            product.in_stock ? 1 : 0,
            product.is_hot ? 1 : 0,
          ],
        });
        
        successCount++;
        console.log(`✅ Lade till: ${product.name}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Fel vid tillägg av ${product.name}:`, error);
      }
    }
    
    console.log('\n📊 Synkronisering klar!');
    console.log(`✅ Lyckade: ${successCount}`);
    console.log(`❌ Misslyckade: ${errorCount}`);
    
  } catch (error) {
    console.error('❌ Fel vid synkronisering:', error);
    process.exit(1);
  }
}

// Kör synkroniseringen
syncProducts();
