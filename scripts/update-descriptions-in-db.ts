/**
 * Script för att uppdatera produktbeskrivningar direkt i Proloweel-databasen
 * 
 * Detta script:
 * 1. Hämtar produkter från proloweel-tabellen
 * 2. Genererar beskrivningar baserat på produktdata
 * 3. Uppdaterar beskrivningar direkt i databasen
 * 
 * Användning: npx tsx scripts/update-descriptions-in-db.ts
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Funktion för att generera produktbeskrivning
function generateDescription(product: any): string {
  const name = product.product_name || 'Produkt';
  const price = product.product_price || 0;
  
  // Skapa en beskrivning baserad på produktnamn
  let description = `${name} - `;
  
  // Lägg till beskrivande text baserat på produkttyp
  if (name.toLowerCase().includes('dress') || name.toLowerCase().includes('klänning')) {
    description += 'En elegant och stilren klänning som passar perfekt för både vardag och fest. ';
  } else if (name.toLowerCase().includes('shirt') || name.toLowerCase().includes('tröja') || name.toLowerCase().includes('top')) {
    description += 'En bekväm och snygg tröja i högkvalitativt material. ';
  } else if (name.toLowerCase().includes('pants') || name.toLowerCase().includes('byxor') || name.toLowerCase().includes('jeans')) {
    description += 'Bekväma byxor med perfekt passform för alla tillfällen. ';
  } else if (name.toLowerCase().includes('jacket') || name.toLowerCase().includes('jacka') || name.toLowerCase().includes('coat')) {
    description += 'En stilfull jacka som håller dig varm och trendig. ';
  } else if (name.toLowerCase().includes('shoes') || name.toLowerCase().includes('skor')) {
    description += 'Bekväma och snygga skor för vardagsbruk. ';
  } else if (name.toLowerCase().includes('bag') || name.toLowerCase().includes('väska')) {
    description += 'En praktisk och stilren väska för alla dina behov. ';
  } else if (name.toLowerCase().includes('watch') || name.toLowerCase().includes('klocka')) {
    description += 'En elegant klocka som kompletterar din stil. ';
  } else if (name.toLowerCase().includes('jewelry') || name.toLowerCase().includes('smycke')) {
    description += 'Ett vackert smycke som lyfter din outfit. ';
  } else {
    description += 'En högkvalitativ produkt som kombinerar stil och komfort. ';
  }
  
  description += 'Tillverkad med omsorg för att ge dig bästa möjliga kvalitet. ';
  
  if (price > 0) {
    description += `Utmärkt värde för pengarna till ${price} kr. `;
  }
  
  description += 'Perfekt för dig som värdesätter både stil och funktionalitet. Lätt att matcha med andra plagg i din garderob.';
  
  return description;
}

async function updateDescriptions() {
  try {
    console.log('🔄 Startar uppdatering av produktbeskrivningar i databasen...\n');
    
    const url = process.env.DATABASE_URL || '';
    const token = process.env.TURSO_AUTH_TOKEN || '';
    
    if (!url || !token) {
      console.error('❌ DATABASE_URL eller TURSO_AUTH_TOKEN saknas');
      process.exit(1);
    }
    
    const httpUrl = url.replace('libsql://', 'https://');
    
    // Hämta alla produkter
    console.log('📥 Hämtar produkter från databasen...');
    const response = await fetch(`${httpUrl}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        statements: ['SELECT id, product_name, product_price, product_description FROM proloweel LIMIT 100']
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const results = data[0]?.results;
    
    if (!results || !results.rows || results.rows.length === 0) {
      console.log('❌ Inga produkter hittades');
      return;
    }
    
    const rows = results.rows;
    const columns = results.columns;
    
    console.log(`✅ Hittade ${rows.length} produkter\n`);
    console.log('🔄 Uppdaterar beskrivningar...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // Uppdatera beskrivningar i batchar
    for (let i = 0; i < rows.length; i++) {
      const product: any = {};
      columns.forEach((col: string, idx: number) => {
        product[col] = rows[i][idx];
      });
      
      const description = generateDescription(product);
      
      try {
        // Uppdatera beskrivning i databasen
        const updateResponse = await fetch(`${httpUrl}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            statements: [
              {
                q: 'UPDATE proloweel SET product_description = ? WHERE id = ?',
                params: [description, product.id]
              }
            ]
          })
        });
        
        if (updateResponse.ok) {
          successCount++;
          console.log(`✅ [${i + 1}/${rows.length}] Uppdaterad: ID ${product.id} - ${product.product_name}`);
        } else {
          errorCount++;
          console.log(`❌ [${i + 1}/${rows.length}] Misslyckades: ID ${product.id}`);
        }
      } catch (error) {
        errorCount++;
        console.log(`❌ [${i + 1}/${rows.length}] Fel: ID ${product.id} - ${error}`);
      }
      
      // Liten paus för att inte överbelasta databasen
      if (i % 10 === 0 && i > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    console.log('\n' + '═'.repeat(60));
    console.log('📊 SAMMANFATTNING');
    console.log('═'.repeat(60));
    console.log(`✅ Lyckade uppdateringar: ${successCount}`);
    console.log(`❌ Misslyckade: ${errorCount}`);
    console.log(`📦 Totalt bearbetade: ${rows.length}`);
    console.log('═'.repeat(60));
    
    if (successCount > 0) {
      console.log('\n✅ Beskrivningar har uppdaterats direkt i databasen!');
      console.log('💡 Produkterna hämtas nu automatiskt med nya beskrivningar.');
    }
    
  } catch (error) {
    console.error('❌ Fel vid uppdatering:', error);
    process.exit(1);
  }
}

// Kör uppdateringen
updateDescriptions();
