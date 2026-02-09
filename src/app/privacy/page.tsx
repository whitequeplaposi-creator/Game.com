import styles from '../info-page.module.css';

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Integritetspolicy</h1>
        <p className={styles.description}>
          Din integritet är viktig för oss. Denna policy förklarar hur vi samlar in, använder och skyddar din personliga information.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information Vi Samlar In</h2>
          <p className={styles.text}>
            <strong>Information du ger oss:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Namn, e-postadress och telefonnummer</li>
            <li className={styles.listItem}>Leverans- och fakturaadress</li>
            <li className={styles.listItem}>Betalningsinformation (kreditkort, bankkonto)</li>
            <li className={styles.listItem}>Kontoinformation (användarnamn, lösenord)</li>
            <li className={styles.listItem}>Kommunikationspreferenser</li>
            <li className={styles.listItem}>Recensioner och kommentarer</li>
          </ul>
          <p className={styles.text}>
            <strong>Information vi samlar automatiskt:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>IP-adress och webbläsarinformation</li>
            <li className={styles.listItem}>Cookies och spårningsteknologier</li>
            <li className={styles.listItem}>Köphistorik och beteende på webbplatsen</li>
            <li className={styles.listItem}>Enhetsinformation (typ, operativsystem)</li>
            <li className={styles.listItem}>Platsdata (om du ger tillstånd)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Hur Vi Använder Din Information</h2>
          <p className={styles.text}>
            Vi använder din information för att:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Behandla och leverera dina beställningar</li>
            <li className={styles.listItem}>Kommunicera om din beställning och leveransstatus</li>
            <li className={styles.listItem}>Tillhandahålla kundservice och support</li>
            <li className={styles.listItem}>Förbättra vår webbplats och tjänster</li>
            <li className={styles.listItem}>Personalisera din shoppingupplevelse</li>
            <li className={styles.listItem}>Skicka marknadsföringsmaterial (med ditt samtycke)</li>
            <li className={styles.listItem}>Förebygga bedrägeri och säkerhetshot</li>
            <li className={styles.listItem}>Följa juridiska krav och förpliktelser</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Delning av Information</h2>
          <p className={styles.text}>
            Vi delar aldrig din information för marknadsföringsändamål utan ditt samtycke. Vi kan dela information med:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Leveranspartners:</strong> För att leverera din beställning (DHL, PostNord, DB Schenker)
            </li>
            <li className={styles.listItem}>
              <strong>Betalningsprocessorer:</strong> För att hantera transaktioner säkert
            </li>
            <li className={styles.listItem}>
              <strong>Tjänsteleverantörer:</strong> Som hjälper oss driva verksamheten (IT-support, analys)
            </li>
            <li className={styles.listItem}>
              <strong>Myndigheter:</strong> När det krävs enligt lag eller för att skydda våra rättigheter
            </li>
            <li className={styles.listItem}>
              <strong>Affärspartners:</strong> Vid fusion, förvärv eller försäljning av tillgångar
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Dina Rättigheter (GDPR)</h2>
          <p className={styles.text}>
            Enligt GDPR har du följande rättigheter:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Rätt till tillgång:</strong> Du kan begära en kopia av all information vi har om dig
            </li>
            <li className={styles.listItem}>
              <strong>Rätt till rättelse:</strong> Du kan begära att vi korrigerar felaktig information
            </li>
            <li className={styles.listItem}>
              <strong>Rätt till radering:</strong> Du kan begära att vi tar bort din information
            </li>
            <li className={styles.listItem}>
              <strong>Rätt till begränsning:</strong> Du kan begära att vi begränsar hur vi använder din information
            </li>
            <li className={styles.listItem}>
              <strong>Rätt till dataportabilitet:</strong> Du kan få din information i ett strukturerat format
            </li>
            <li className={styles.listItem}>
              <strong>Rätt att invända:</strong> Du kan invända mot viss behandling av din information
            </li>
            <li className={styles.listItem}>
              <strong>Rätt att återkalla samtycke:</strong> Du kan när som helst återkalla ditt samtycke
            </li>
          </ul>
          <p className={styles.text}>
            För att utöva dina rättigheter, kontakta oss på: privacy@shein.com
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Cookies och Spårningsteknologier</h2>
          <p className={styles.text}>
            Vi använder cookies och liknande teknologier för att förbättra din upplevelse. Cookies hjälper oss att:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Komma ihåg dina preferenser och inställningar</li>
            <li className={styles.listItem}>Förstå hur du använder vår webbplats</li>
            <li className={styles.listItem}>Visa relevanta annonser</li>
            <li className={styles.listItem}>Förbättra webbplatsens prestanda</li>
          </ul>
          <p className={styles.text}>
            Du kan hantera cookie-inställningar i din webbläsare. Observera att vissa funktioner kanske inte fungerar korrekt om du blockerar cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Säkerhet</h2>
          <p className={styles.text}>
            Vi tar säkerheten för din information på största allvar och använder branschstandard säkerhetsåtgärder:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>SSL-kryptering för all dataöverföring</li>
            <li className={styles.listItem}>Säkra servrar med brandväggar</li>
            <li className={styles.listItem}>Regelbundna säkerhetsgranskningar</li>
            <li className={styles.listItem}>Begränsad åtkomst till personlig information</li>
            <li className={styles.listItem}>PCI DSS-kompatibel betalningshantering</li>
          </ul>
          <p className={styles.text}>
            Ingen metod för överföring över internet är 100% säker, men vi gör vårt bästa för att skydda din information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Barn</h2>
          <p className={styles.text}>
            Vår webbplats är inte avsedd för barn under 16 år. Vi samlar inte medvetet in personlig information från barn. Om du är förälder eller vårdnadshavare och tror att ditt barn har gett oss personlig information, kontakta oss omedelbart.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Internationella Överföringar</h2>
          <p className={styles.text}>
            Din information kan överföras till och lagras i länder utanför EU/EES. Vi säkerställer lämpliga skyddsåtgärder genom standardavtalsklausuler och andra juridiska mekanismer för att skydda din information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Datalagring</h2>
          <p className={styles.text}>
            Vi behåller din information så länge det är nödvändigt för att tillhandahålla våra tjänster och uppfylla juridiska förpliktelser. När information inte längre behövs raderas den säkert.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Ändringar av Policyn</h2>
          <p className={styles.text}>
            Vi kan uppdatera denna integritetspolicy från tid till annan. Vi kommer att meddela dig om väsentliga ändringar via e-post eller genom ett meddelande på vår webbplats. Fortsatt användning av webbplatsen efter ändringar innebär acceptans av den nya policyn.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Kontakt</h2>
          <p className={styles.text}>
            För frågor om denna integritetspolicy eller hur vi hanterar din information, kontakta oss:
          </p>
          <p className={styles.text}>
            E-post: privacy@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Adress: SHEIN Nordic AB, Storgatan 123, 111 22 Stockholm, Sverige
          </p>
          <p className={styles.text}>
            Senast uppdaterad: Februari 2026
          </p>
        </section>
      </div>
    </div>
  );
}
