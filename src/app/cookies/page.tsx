import styles from '../info-page.module.css';

export default function CookiesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Cookiepolicy</h1>
        <p className={styles.description}>
          Denna policy förklarar hur SHEIN använder cookies och liknande teknologier på vår webbplats.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vad är Cookies?</h2>
          <p className={styles.text}>
            Cookies är små textfiler som lagras på din enhet (dator, surfplatta eller mobiltelefon) när du besöker en webbplats. De hjälper webbplatsen att komma ihåg dina preferenser och förbättra din upplevelse.
          </p>
          <p className={styles.text}>
            Cookies kan vara "sessionscookies" som raderas när du stänger webbläsaren, eller "permanenta cookies" som förblir på din enhet i en bestämd tid eller tills du raderar dem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typer av Cookies Vi Använder</h2>
          
          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>1. Nödvändiga Cookies</h3>
          <p className={styles.text}>
            Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De möjliggör grundläggande funktioner som:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Inloggning och kontohantering</li>
            <li className={styles.listItem}>Varukorg och checkout-process</li>
            <li className={styles.listItem}>Säkerhet och autentisering</li>
            <li className={styles.listItem}>Lastbalansering och prestanda</li>
            <li className={styles.listItem}>Sessionshantering</li>
          </ul>
          <p className={styles.text}>
            Dessa cookies kan inte stängas av eftersom webbplatsen inte skulle fungera utan dem.
          </p>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>2. Funktionella Cookies</h3>
          <p className={styles.text}>
            Dessa cookies förbättrar funktionaliteten genom att komma ihåg dina val och preferenser:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Språkpreferenser</li>
            <li className={styles.listItem}>Valutainställningar</li>
            <li className={styles.listItem}>Tidigare sökningar och filter</li>
            <li className={styles.listItem}>Sparade adresser och betalningsmetoder</li>
            <li className={styles.listItem}>Önskelista och favoriter</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>3. Prestanda Cookies</h3>
          <p className={styles.text}>
            Dessa cookies hjälper oss förstå hur besökare använder webbplatsen så att vi kan förbättra den:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Sidvisningar och klickmönster</li>
            <li className={styles.listItem}>Tid på webbplatsen och avvisningsfrekvens</li>
            <li className={styles.listItem}>Felrapporter och tekniska problem</li>
            <li className={styles.listItem}>Laddningstider och prestanda</li>
            <li className={styles.listItem}>Populära produkter och sidor</li>
          </ul>
          <p className={styles.text}>
            All information som samlas in är anonym och används endast för statistiska ändamål.
          </p>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>4. Marknadsföringscookies</h3>
          <p className={styles.text}>
            Dessa cookies används för att visa relevanta annonser och mäta effektiviteten av våra marknadsföringskampanjer:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Spåra besök på olika webbplatser</li>
            <li className={styles.listItem}>Visa personaliserade annonser baserat på dina intressen</li>
            <li className={styles.listItem}>Mäta annonseffektivitet och ROI</li>
            <li className={styles.listItem}>Retargeting och remarketing</li>
            <li className={styles.listItem}>Sociala medier-integration</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tredjepartscookies</h2>
          <p className={styles.text}>
            Vi använder tjänster från tredje part som kan sätta egna cookies på din enhet:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Google Analytics:</strong> För webbplatsanalys och statistik
            </li>
            <li className={styles.listItem}>
              <strong>Facebook Pixel:</strong> För annonsering och målgruppsanpassning
            </li>
            <li className={styles.listItem}>
              <strong>Google Ads:</strong> För att visa relevanta annonser
            </li>
            <li className={styles.listItem}>
              <strong>Hotjar:</strong> För att förstå användarupplevelse
            </li>
            <li className={styles.listItem}>
              <strong>Trustpilot:</strong> För att samla in och visa recensioner
            </li>
            <li className={styles.listItem}>
              <strong>PayPal/Klarna:</strong> För betalningshantering
            </li>
          </ul>
          <p className={styles.text}>
            Dessa tredje parter har sina egna integritetspolicyer och vi rekommenderar att du läser dem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hantera Cookies</h2>
          <p className={styles.text}>
            Du har flera alternativ för att hantera cookies:
          </p>
          
          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Via Vår Cookie-Banner</h3>
          <p className={styles.text}>
            När du besöker vår webbplats första gången visas en cookie-banner där du kan välja vilka typer av cookies du vill acceptera. Du kan när som helst ändra dina preferenser genom vårt cookie-preferenscenter.
          </p>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Via Din Webbläsare</h3>
          <p className={styles.text}>
            De flesta webbläsare tillåter dig att kontrollera cookies genom inställningarna:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Chrome:</strong> Inställningar → Sekretess och säkerhet → Cookies och andra webbplatsdata
            </li>
            <li className={styles.listItem}>
              <strong>Firefox:</strong> Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata
            </li>
            <li className={styles.listItem}>
              <strong>Safari:</strong> Inställningar → Sekretess → Hantera webbplatsdata
            </li>
            <li className={styles.listItem}>
              <strong>Edge:</strong> Inställningar → Cookies och webbplatsbehörigheter
            </li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Via Opt-Out-Verktyg</h3>
          <p className={styles.text}>
            Du kan använda opt-out-verktyg från branschorganisationer:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Network Advertising Initiative (NAI): www.networkadvertising.org/choices</li>
            <li className={styles.listItem}>Digital Advertising Alliance (DAA): www.aboutads.info/choices</li>
            <li className={styles.listItem}>European Interactive Digital Advertising Alliance (EDAA): www.youronlinechoices.eu</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Konsekvenser av att Blockera Cookies</h2>
          <p className={styles.text}>
            Om du väljer att blockera eller radera cookies kan vissa funktioner på webbplatsen påverkas:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Du kan behöva logga in varje gång du besöker webbplatsen</li>
            <li className={styles.listItem}>Dina preferenser och inställningar sparas inte</li>
            <li className={styles.listItem}>Varukorgen kanske inte fungerar korrekt</li>
            <li className={styles.listItem}>Vissa funktioner kan vara otillgängliga</li>
            <li className={styles.listItem}>Webbplatsen kan laddas långsammare</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookie-Livslängd</h2>
          <p className={styles.text}>
            Olika cookies har olika livslängd:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Sessionscookies:</strong> Raderas automatiskt när du stänger webbläsaren
            </li>
            <li className={styles.listItem}>
              <strong>Permanenta cookies:</strong> Förblir på din enhet i upp till 2 år eller tills du raderar dem
            </li>
          </ul>
          <p className={styles.text}>
            Vi granskar regelbundet våra cookies och tar bort de som inte längre behövs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Uppdateringar av Denna Policy</h2>
          <p className={styles.text}>
            Vi kan uppdatera denna cookiepolicy från tid till annan för att återspegla ändringar i vår användning av cookies eller av juridiska skäl. Vi rekommenderar att du regelbundet granskar denna sida för att hålla dig informerad.
          </p>
          <p className={styles.text}>
            Senaste uppdatering: Februari 2026
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakt</h2>
          <p className={styles.text}>
            Om du har frågor om vår användning av cookies, kontakta oss:
          </p>
          <p className={styles.text}>
            E-post: privacy@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Adress: SHEIN Nordic AB, Storgatan 123, 111 22 Stockholm, Sverige
          </p>
        </section>
      </div>
    </div>
  );
}
