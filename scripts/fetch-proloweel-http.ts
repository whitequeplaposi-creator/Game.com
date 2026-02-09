/**
 * Script för att hämta produkter från Proloweel-databasen via HTTP API
 * 
 * Användning: npx tsx scripts/fetch-proloweel-http.ts
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

// Ladda miljövariabler från .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Funktion för att generera produktbeskrivning
function generateDescription(product: any): string {
  const name = product.name || 'Produkt';
  const price = product.price || product.selling_price || 0;
  const colors = product.color || '';
  const sizes = product.size || '';
  
  let description = `${name} - En högkvalitativ produkt som kombinerar stil och komfort. `;
  
  if (colors && colors.length > 0) {
    description += `Tillgänglig i flera färgalternativ för att passa din personliga stil. `;
  }
  
  if (sizes && sizes.length > 0) {
    description += `Finns i olika storlekar för perfekt passform. `;
  }
  
  if (price > 0) {
    description += `Utmärkt värde för pengarna till ${price} kr. `;
  }
  
  description += `Perfekt för vardagsbruk och speciella tillfällen. Hög kvalitet och hållbarhet garanterad.`;
  
  return description;
}

async function fetchProducts() {
  try {
    console.log('🔍 Hämtar produkter från Proloweel-databasen via HTTP...\n');
    
    const url = process.env.DATABASE_URL || '';
    const token = process.env.TURSO_AUTH_TOKEN || '';
    
    if (!url || !token) {
      console.error('❌ DATABASE_URL eller TURSO_AUTH_TOKEN saknas i .env.local');
      process.exit(1);
    }
    
    // Konvertera libsql:// till https://
    const httpUrl = url.replace('libsql://', 'https://');
    
    const response = await fetch(`${httpUrl}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        statements: ['SELECT * FROM proloweel']
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const results = data[0]?.results;
    
    if (!results || !results.rows || results.rows.length === 0) {
      console.log('❌ Inga produkter hittades i databasen.');
      console.log('📋 Försöker lista tabeller...\n');
      
      // Lista tabeller
      const tablesResponse = await fetch(`${httpUrl}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          statements: ["SELECT name FROM sqlite_master WHERE type='table'"]
        })
      });
      
      const tablesData = await tablesResponse.json();
      console.log('Tillgängliga tabeller:', tablesData);
      return;
    }
    
    const rows = results.rows;
    const columns = results.columns;
    
    console.log(`✅ Hittade ${rows.length} produkter\n`);
    console.log('═'.repeat(80));
    
    const productsWithDescriptions: any[] = [];
    
    rows.forEach((row: any[], index: number) => {
      // Mappa kolumner till objekt
      const product: any = {};
      columns.forEach((col: string, i: number) => {
        product[col] = row[i];
      });
      
      const generatedDescription = generateDescription(product);
      
      console.log(`\n📦 PRODUKT ${index + 1}`);
      console.log('─'.repeat(80));
      console.log(`ID: ${product.id}`);
      console.log(`Namn: ${product.name}`);
      console.log(`Pris: ${product.price || product.selling_price} kr`);
      console.log(`Färg: ${product.color || 'Ej specificerad'}`);
      console.log(`Storlek: ${product.size || 'Ej specificerad'}`);
      console.log(`Produktbild: ${product.product_image || 'Ingen bild'}`);
      console.log(`Produktvarianter: ${product.product_variants || 'Inga varianter'}`);
      console.log(`Video: ${product.video || 'Ingen video'}`);
      console.log(`\n📝 GENERERAD BESKRIVNING:`);
      console.log(generatedDescription);
      console.log('═'.repeat(80));
      
      productsWithDescriptions.push({
        id: product.id,
        name: product.name,
        description: generatedDescription,
        price: product.price || product.selling_price,
        color: product.color,
        size: product.size,
        product_image: product.product_image,
        product_variants: product.product_variants,
        video: product.video,
      });
    });
    
    console.log(`\n✅ Totalt ${rows.length} produkter hämtade och beskrivningar genererade!`);
    
    // Exportera till JSON
    const fs = require('fs');
    const outputPath = 'proloweel-products.json';
    fs.writeFileSync(outputPath, JSON.stringify(productsWithDescriptions, null, 2));
    console.log(`\n💾 Produkter exporterade till: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Fel vid hämtning av produkter:', error);
    process.exit(1);
  }
}

fetchProducts();
