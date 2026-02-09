import styles from '../info-page.module.css';

export default function ShippingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Fraktinformation</h1>
        <p className={styles.description}>
          Vi erbjuder pålitlig och spårbar leverans till kunder över hela världen. Vår målsättning är att du ska få dina produkter snabbt och säkert.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveransalternativ</h2>
          
          <div style={{marginBottom: '25px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Standard Leverans (7-15 arbetsdagar)</h3>
            <p className={styles.text}>
              Vårt mest prisvärda alternativ för icke-brådskande beställningar. Perfekt när du planerar i förväg och vill spara pengar på frakten.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Leveranstid: 7-15 arbetsdagar</li>
              <li className={styles.listItem}>Fraktkostnad: 49 kr (fri frakt vid köp över 500 kr)</li>
              <li className={styles.listItem}>Spårning: Fullständig spårning inkluderad</li>
              <li className={styles.listItem}>Leverantörer: PostNord, DB Schenker</li>
            </ul>
          </div>

          <div style={{marginBottom: '25px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Express Leverans (3-7 arbetsdagar)</h3>
            <p className={styles.text}>
              Snabbare leverans för när du behöver dina produkter snabbt. Idealisk för sista-minuten-shopping eller när du inte vill vänta.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Leveranstid: 3-7 arbetsdagar</li>
              <li className={styles.listItem}>Fraktkostnad: 99 kr (fri frakt vid köp över 800 kr)</li>
              <li className={styles.listItem}>Spårning: Fullständig spårning inkluderad</li>
              <li className={styles.listItem}>Leverantörer: DHL Express, PostNord</li>
            </ul>
          </div>

          <div style={{marginBottom: '25px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Premium Leverans (1-3 arbetsdagar)</h3>
            <p className={styles.text}>
              Vår snabbaste leveransmetod för brådskande beställningar. Få dina produkter inom några dagar.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Leveranstid: 1-3 arbetsdagar</li>
              <li className={styles.listItem}>Fraktkostnad: 149 kr</li>
              <li className={styles.listItem}>Spårning: Realtidsspårning inkluderad</li>
              <li className={styles.listItem}>Leverantörer: DHL Express</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fraktkostnader</h2>
          <p className={styles.text}>
            Fraktkostnaderna beräknas baserat på din plats, beställningens vikt och vald leveransmetod. Vi erbjuder ofta fri frakt vid beställningar över ett visst belopp - håll utkik efter kampanjer!
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Fri Frakt</strong>
              <p>Standard: Över 500 kr<br />Express: Över 800 kr</p>
            </div>
            <div className={styles.card}>
              <strong>Kampanjer</strong>
              <p>Regelbundna fri frakt-kampanjer och rabatter</p>
            </div>
            <div className={styles.card}>
              <strong>VIP-Medlemmar</strong>
              <p>Exklusiva fraktrabatter och förmåner</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spårning</h2>
          <p className={styles.text}>
            Alla beställningar inkluderar spårningsinformation så att du kan följa din försändelse i realtid:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Spårningsnummer:</strong> Du får ett spårningsnummer via e-post när din beställning skickas
            </li>
            <li className={styles.listItem}>
              <strong>Realtidsuppdateringar:</strong> Spåra din försändelse via vår webbplats eller leverantörens spårningssystem
            </li>
            <li className={styles.listItem}>
              <strong>E-postnotiser:</strong> Få automatiska uppdateringar om din försändelses status
            </li>
            <li className={styles.listItem}>
              <strong>SMS-notiser:</strong> Valfria SMS-uppdateringar när paketet är ute för leverans
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Internationell Leverans</h2>
          <p className={styles.text}>
            Vi levererar till över 150 länder världen över. Observera följande för internationella beställningar:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Tullavgifter:</strong> Internationella beställningar kan vara föremål för tullavgifter och importskatter som är kundens ansvar
            </li>
            <li className={styles.listItem}>
              <strong>Leveranstider:</strong> Kan variera beroende på destination och tullhantering
            </li>
            <li className={styles.listItem}>
              <strong>Dokumentation:</strong> Se till att din leveransadress är korrekt och komplett
            </li>
            <li className={styles.listItem}>
              <strong>Begränsningar:</strong> Vissa produkter kan ha exportbegränsningar
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveranstider</h2>
          <p className={styles.text}>
            Leveranstiderna är uppskattningar och kan variera beroende på flera faktorer:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Bearbetningstid:</strong> 1-2 arbetsdagar för att förbereda och packa din beställning
            </li>
            <li className={styles.listItem}>
              <strong>Transittid:</strong> Beroende på vald leveransmetod och destination
            </li>
            <li className={styles.listItem}>
              <strong>Helgdagar:</strong> Leveranser kan försenas under helgdagar och högsäsong
            </li>
            <li className={styles.listItem}>
              <strong>Force Majeure:</strong> Väderförhållanden eller andra omständigheter utanför vår kontroll kan påverka leveranstider
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveransadress</h2>
          <p className={styles.text}>
            För att säkerställa smidig leverans, se till att:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ange fullständig och korrekt leveransadress</li>
            <li className={styles.listItem}>Inkludera telefonnummer för kontakt vid leverans</li>
            <li className={styles.listItem}>Ange portkod eller andra leveransinstruktioner om nödvändigt</li>
            <li className={styles.listItem}>Kontrollera att någon kan ta emot paketet vid leverans</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveranspartners</h2>
          <p className={styles.text}>
            Vi samarbetar med ledande logistikföretag för att säkerställa pålitlig leverans:
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>PostNord</strong>
              <p>Pålitlig leverans i Norden med utmärkt täckning</p>
            </div>
            <div className={styles.card}>
              <strong>DHL</strong>
              <p>Global express-leverans med snabb hantering</p>
            </div>
            <div className={styles.card}>
              <strong>DB Schenker</strong>
              <p>Professionell logistik med hög kvalitet</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missade Leveranser</h2>
          <p className={styles.text}>
            Om du missar en leverans:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Avisering:</strong> Du får en avisering i brevlådan med instruktioner
            </li>
            <li className={styles.listItem}>
              <strong>Ombud:</strong> Paketet lämnas vanligtvis till närmaste ombud
            </li>
            <li className={styles.listItem}>
              <strong>Hämtningstid:</strong> Du har vanligtvis 14 dagar på dig att hämta paketet
            </li>
            <li className={styles.listItem}>
              <strong>Ombokning:</strong> Kontakta leverantören för att boka om leverans
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem med Leverans</h2>
          <p className={styles.text}>
            Om du upplever problem med din leverans:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Förseningar:</strong> Kontakta kundservice om spårningen inte uppdateras efter 3 dagar
            </li>
            <li className={styles.listItem}>
              <strong>Skadade Paket:</strong> Fotografera skadan och kontakta oss omedelbart
            </li>
            <li className={styles.listItem}>
              <strong>Saknade Produkter:</strong> Kontrollera paketet noggrant och kontakta oss inom 48 timmar
            </li>
            <li className={styles.listItem}>
              <strong>Fel Adress:</strong> Kontakta oss inom 24 timmar efter beställning för att ändra
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Miljövänlig Leverans</h2>
          <p className={styles.text}>
            Vi arbetar för att göra våra leveranser mer miljövänliga:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Återvinningsbara förpackningsmaterial</li>
            <li className={styles.listItem}>Optimerade leveransrutter för att minska utsläpp</li>
            <li className={styles.listItem}>Samarbete med miljöcertifierade leverantörer</li>
            <li className={styles.listItem}>Investering i elfordon för lokala leveranser</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakta Oss</h2>
          <p className={styles.text}>
            Har du frågor om leverans? Kontakta vår kundservice:
          </p>
          <p className={styles.text}>
            E-post: shipping@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Live Chat: Tillgänglig 24/7 på vår webbplats
          </p>
        </section>
      </div>
    </div>
  );
}
