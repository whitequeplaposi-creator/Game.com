# 📝 Guide: Uppdatera produktbeskrivningar i databasen

## Översikt
Detta script uppdaterar produktbeskrivningar direkt i Proloweel-databasen utan att använda JSON-filer eller separera data.

## ✅ Vad scriptet gör

1. **Hämtar produkter** från `proloweel`-tabellen
2. **Genererar beskrivningar** baserat på:
   - Produktnamn
   - Produkttyp (klänning, tröja, byxor, etc.)
   - Pris
3. **Uppdaterar direkt** i databasen med SQL UPDATE
4. **Ingen JSON-fil** - all data hanteras i databasen

## 🚀 Kör uppdateringen

### Steg 1: Kör scriptet
```bash
npm run db:update-descriptions
```

### Steg 2: Vänta på uppdatering
Scriptet kommer att:
- Visa progress för varje produkt
- Uppdatera 100 produkter åt gången (kan justeras)
- Visa sammanfattning när klart

### Exempel på output:
```
🔄 Startar uppdatering av produktbeskrivningar i databasen...

📥 Hämtar produkter från databasen...
✅ Hittade 100 produkter

🔄 Uppdaterar beskrivningar...

✅ [1/100] Uppdaterad: ID 1 - Elegant Summer Dress
✅ [2/100] Uppdaterad: ID 2 - Casual T-Shirt
✅ [3/100] Uppdaterad: ID 3 - Denim Jeans
...

═══════════════════════════════════════════════════════════
📊 SAMMANFATTNING
═══════════════════════════════════════════════════════════
✅ Lyckade uppdateringar: 98
❌ Misslyckade: 2
📦 Totalt bearbetade: 100
═══════════════════════════════════════════════════════════

✅ Beskrivningar har uppdaterats direkt i databasen!
💡 Produkterna hämtas nu automatiskt med nya beskrivningar.
```

## 📊 Beskrivningsgenerering

Scriptet genererar beskrivningar baserat på produkttyp:

### Klänningar
```
"Elegant Summer Dress - En elegant och stilren klänning som passar 
perfekt för både vardag och fest. Tillverkad med omsorg för att ge 
dig bästa möjliga kvalitet. Utmärkt värde för pengarna. Perfekt för 
dig som värdesätter både stil och funktionalitet."
```

### Tröjor
```
"Casual T-Shirt - En bekväm och snygg tröja i högkvalitativt material. 
Tillverkad med omsorg för att ge dig bästa möjliga kvalitet. Perfekt 
för dig som värdesätter både stil och funktionalitet."
```

### Byxor
```
"Denim Jeans - Bekväma byxor med perfekt passform för alla tillfällen. 
Tillverkad med omsorg för att ge dig bästa möjliga kvalitet. Lätt att 
matcha med andra plagg i din garderob."
```

## ⚙️ Anpassa scriptet

### Ändra antal produkter per körning
Öppna `scripts/update-descriptions-in-db.ts` och ändra:
```typescript
// Från:
statements: ['SELECT id, name, price, selling_price FROM proloweel LIMIT 100']

// Till (för alla produkter):
statements: ['SELECT id, name, price, selling_price FROM proloweel']
```

### Anpassa beskrivningar
Redigera `generateDescription`-funktionen i scriptet för att ändra hur beskrivningar genereras.

## 🔍 Verifiera uppdateringar

### Kontrollera i databasen
```bash
# Via Turso CLI
turso db shell dostar "SELECT id, name, description FROM proloweel LIMIT 5;"
```

### Kontrollera på webbplatsen
1. Starta utvecklingsservern: `npm run dev`
2. Besök: http://localhost:3000
3. Klicka på en produkt
4. Verifiera att beskrivningen visas

## 📈 Uppdatera alla produkter

För att uppdatera alla 35,855 produkter:

### Metod 1: Kör flera gånger
```bash
# Kör scriptet flera gånger
npm run db:update-descriptions
npm run db:update-descriptions
npm run db:update-descriptions
```

### Metod 2: Ändra LIMIT
Redigera scriptet och ta bort `LIMIT 100` för att uppdatera alla:
```typescript
statements: ['SELECT id, name, price, selling_price FROM proloweel']
```

**OBS:** Detta kan ta längre tid (ca 10-15 minuter för 35,855 produkter)

## 🛡️ Säkerhet

- Scriptet använder **UPDATE** statements - ändrar endast beskrivningar
- Ingen data raderas eller skapas
- Alla ändringar loggas i konsolen
- Kan köras flera gånger utan problem

## ❓ Felsökning

### "Inga produkter hittades"
- Kontrollera att tabellen heter `proloweel`
- Verifiera databasanslutning

### "Misslyckade uppdateringar"
- Kontrollera nätverksanslutning
- Verifiera TURSO_AUTH_TOKEN
- Kör scriptet igen för misslyckade produkter

### Långsam uppdatering
- Scriptet pausar var 10:e produkt för att inte överbelasta databasen
- Detta är normalt och förväntat

## ✅ Resultat

Efter körning:
- ✅ Beskrivningar uppdaterade direkt i databasen
- ✅ Ingen JSON-fil skapad
- ✅ All data hanteras från databasen
- ✅ Produkter visas med nya beskrivningar automatiskt

---

**Kör nu:** `npm run db:update-descriptions` 🚀
