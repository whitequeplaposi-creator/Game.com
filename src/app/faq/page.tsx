import styles from '../info-page.module.css';

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Vanliga Frågor (FAQ)</h1>
        <p className={styles.description}>
          Här hittar du svar på de vanligaste frågorna om shopping på SHEIN. Om du inte hittar svaret du söker, kontakta gärna vår kundservice.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Beställning & Betalning</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Vilka betalningsmetoder accepterar ni?</strong><br />
            <p className={styles.text}>
              A: Vi accepterar Visa, Mastercard, American Express, PayPal, Klarna, Swish och banköverföring. Alla betalningar är säkra och krypterade.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Är det säkert att handla på SHEIN?</strong><br />
            <p className={styles.text}>
              A: Ja, vi använder SSL-kryptering och följer PCI DSS-standarder för att skydda din betalningsinformation. Vi sparar aldrig fullständiga kortuppgifter.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag ändra eller avbryta min beställning?</strong><br />
            <p className={styles.text}>
              A: Du kan ändra eller avbryta din beställning inom 24 timmar efter att den lagts. Kontakta kundservice omedelbart via live chat eller e-post.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Får jag en faktura?</strong><br />
            <p className={styles.text}>
              A: Ja, en digital faktura skickas till din e-post efter att beställningen skickats. Du kan också ladda ner fakturan från ditt konto.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag använda flera rabattkoder?</strong><br />
            <p className={styles.text}>
              A: Vanligtvis kan endast en rabattkod användas per beställning. Vissa kampanjer kan dock kombineras - kontrollera villkoren för varje kod.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad händer om betalningen misslyckas?</strong><br />
            <p className={styles.text}>
              A: Kontrollera att kortuppgifterna är korrekta och att du har tillräckligt med pengar på kontot. Kontakta din bank om problemet kvarstår.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leverans</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Hur lång tid tar leveransen?</strong><br />
            <p className={styles.text}>
              A: Standard leverans tar 7-15 arbetsdagar, express 3-7 dagar, och premium 1-3 dagar. Leveranstider kan variera beroende på destination.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Levererar ni till min adress?</strong><br />
            <p className={styles.text}>
              A: Vi levererar till över 150 länder. Ange din adress vid kassan för att se tillgängliga leveransalternativ och kostnader.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad händer om mitt paket är försenat?</strong><br />
            <p className={styles.text}>
              A: Kontakta vår kundservice med ditt ordernummer så hjälper vi dig att spåra paketet. Om spårningen inte uppdateras efter 3 dagar, kontakta oss.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag ändra leveransadress efter att beställningen lagts?</strong><br />
            <p className={styles.text}>
              A: Kontakta oss inom 24 timmar så försöker vi ändra adressen innan paketet skickas. Efter att paketet skickats kan adressen inte ändras.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad händer om jag missar leveransen?</strong><br />
            <p className={styles.text}>
              A: Du får en avisering i brevlådan. Paketet lämnas vanligtvis till närmaste ombud där du kan hämta det inom 14 dagar.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Måste jag betala tullavgifter?</strong><br />
            <p className={styles.text}>
              A: För beställningar inom EU/EES ingår vanligtvis inga tullavgifter. För internationella beställningar kan tullavgifter tillkomma som är kundens ansvar.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returer & Byten</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Hur returnerar jag en produkt?</strong><br />
            <p className={styles.text}>
              A: Logga in på ditt konto, gå till "Mina beställningar", välj produkter att returnera och följ instruktionerna. Du får en returetikettsom du skriver ut och fäster på paketet.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur lång tid tar återbetalningen?</strong><br />
            <p className={styles.text}>
              A: Återbetalning behandlas inom 5-10 arbetsdagar efter att vi mottagit returen. Det kan ta ytterligare 3-5 dagar innan pengarna syns på ditt konto.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag byta en produkt?</strong><br />
            <p className={styles.text}>
              A: Vi erbjuder inte direkta byten. Returnera produkten och gör en ny beställning för den produkt du vill ha.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vem betalar returfrakt?</strong><br />
            <p className={styles.text}>
              A: För ångerköp betalar kunden returfrakt (ca 49 kr). Om produkten är defekt eller felaktig står vi för returkostnaden.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag returnera reaprodukter?</strong><br />
            <p className={styles.text}>
              A: Ja, med undantag för produkter markerade som "Final Sale". Kontrollera produktbeskrivningen innan köp.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad händer om jag missar 30-dagarsfristen?</strong><br />
            <p className={styles.text}>
              A: Kontakta kundservice. Vi kan göra undantag i vissa fall, men vi kan inte garantera att returen accepteras.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Produkter</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Är produkterna äkta?</strong><br />
            <p className={styles.text}>
              A: Ja, alla produkter på SHEIN är äkta och kommer från våra verifierade leverantörer. Vi garanterar kvaliteten på alla våra produkter.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur vet jag vilken storlek jag ska välja?</strong><br />
            <p className={styles.text}>
              A: Använd vår storleksguide som finns på varje produktsida. Läs också kundrecensioner för passforminformation. Vid tvivel, kontakta kundservice.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kommer produkten se ut som på bilden?</strong><br />
            <p className={styles.text}>
              A: Vi strävar efter att visa produkter så exakt som möjligt. Färger kan variera något beroende på skärminställningar. Läs produktbeskrivningen noggrant.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad betyder "One Size"?</strong><br />
            <p className={styles.text}>
              A: "One Size" betyder att produkten passar de flesta storlekar. Kontrollera produktmåtten i beskrivningen för att se om den passar dig.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Är produkterna av bra kvalitet?</strong><br />
            <p className={styles.text}>
              A: Ja, alla produkter genomgår kvalitetskontroller. Läs kundrecensioner för att få en uppfattning om kvaliteten. Vi erbjuder full återbetalning om du inte är nöjd.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur ofta kommer nya produkter?</strong><br />
            <p className={styles.text}>
              A: Vi lanserar tusentals nya produkter varje vecka. Följ oss på sociala medier eller prenumerera på nyhetsbrevet för att få uppdateringar.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Konto & Medlemskap</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Måste jag skapa ett konto för att handla?</strong><br />
            <p className={styles.text}>
              A: Nej, du kan handla som gäst. Men med ett konto får du tillgång till orderhistorik, snabbare checkout och exklusiva erbjudanden.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur fungerar bonuspoäng-programmet?</strong><br />
            <p className={styles.text}>
              A: Du tjänar 1 poäng för varje 10 kr du spenderar. 100 poäng = 10 kr rabatt. Du kan också tjäna poäng genom recensioner och sociala medier.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Vad är SHEIN VIP?</strong><br />
            <p className={styles.text}>
              A: SHEIN VIP är vårt lojalitetsprogram med olika nivåer (Bronze, Silver, Gold, Platinum). Ju mer du handlar, desto fler förmåner får du.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur ändrar jag mitt lösenord?</strong><br />
            <p className={styles.text}>
              A: Logga in på ditt konto, gå till "Kontoinställningar" och välj "Ändra lösenord". Du kan också återställa lösenordet via e-post.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag radera mitt konto?</strong><br />
            <p className={styles.text}>
              A: Ja, kontakta kundservice för att radera ditt konto. Observera att all orderhistorik och poäng kommer att förloras.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rabatter & Kampanjer</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Hur får jag rabattkoder?</strong><br />
            <p className={styles.text}>
              A: Prenumerera på vårt nyhetsbrev, följ oss på sociala medier, bli VIP-medlem eller håll utkik efter kampanjer på webbplatsen.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Varför fungerar inte min rabattkod?</strong><br />
            <p className={styles.text}>
              A: Kontrollera att koden är giltig, inte har utgått och att du uppfyller villkoren (t.ex. minimiköp). Vissa koder kan inte kombineras med rea.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: När har ni rea?</strong><br />
            <p className={styles.text}>
              A: Vi har regelbundna reor och kampanjer. Stora reor under Black Friday, Cyber Monday, Singles Day (11/11) och säsongsskiften.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag få studentrabatt?</strong><br />
            <p className={styles.text}>
              A: Ja! Studenter får 15% extra rabatt. Verifiera din studentstatus via Student Beans eller UNiDAYS för att få din rabattkod.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kundservice</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Hur kontaktar jag kundservice?</strong><br />
            <p className={styles.text}>
              A: Via live chat (24/7), e-post (support@shein.com), telefon (+46 8 123 456 78) eller sociala medier.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur snabbt får jag svar?</strong><br />
            <p className={styles.text}>
              A: Live chat: Omedelbart. E-post: Inom 24 timmar. Telefon: Omedelbart under öppettider (Mån-Fre 9-18). Sociala medier: Inom 48 timmar.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Kan jag få hjälp på svenska?</strong><br />
            <p className={styles.text}>
              A: Ja, vår kundservice finns tillgänglig på svenska via alla kontaktkanaler.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Säkerhet & Integritet</h2>
          
          <div className={styles.listItem}>
            <strong>Q: Hur skyddar ni min personliga information?</strong><br />
            <p className={styles.text}>
              A: Vi använder SSL-kryptering, följer GDPR och har strikta säkerhetsrutiner. Läs vår integritetspolicy för mer information.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Säljer ni min information till tredje part?</strong><br />
            <p className={styles.text}>
              A: Nej, vi delar aldrig din information för marknadsföringsändamål. Vi delar endast nödvändig information med leveranspartners och betalningsprocessorer.
            </p>
          </div>

          <div className={styles.listItem}>
            <strong>Q: Hur hanterar ni cookies?</strong><br />
            <p className={styles.text}>
              A: Vi använder cookies för att förbättra din upplevelse. Du kan hantera cookie-inställningar i din webbläsare. Läs vår cookiepolicy för mer information.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hittade Du Inte Svaret?</h2>
          <p className={styles.text}>
            Om du inte hittade svaret på din fråga, tveka inte att kontakta vår kundservice. Vi finns här för att hjälpa dig!
          </p>
          <p className={styles.text}>
            E-post: support@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Live Chat: Tillgänglig 24/7 på vår webbplats<br />
            Öppettider: Måndag - Fredag, 09:00 - 18:00 CET
          </p>
        </section>
      </div>
    </div>
  );
}
