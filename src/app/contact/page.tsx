import styles from '../info-page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Kontakta Oss</h1>
        <p className={styles.description}>
          Vi finns här för att hjälpa dig! Kontakta oss via någon av följande metoder så återkommer vi så snart som möjligt.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kundservice</h2>
          <p className={styles.text}>
            Vårt kundserviceteam finns tillgängligt för att hjälpa dig med alla frågor om beställningar, produkter, leveranser och returer.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>E-post</strong>
              <p>support@shein.com</p>
              <p style={{fontSize: '13px', color: '#666'}}>Svar inom 24 timmar</p>
            </div>
            <div className={styles.card}>
              <strong>Telefon</strong>
              <p>+46 8 123 456 78</p>
              <p style={{fontSize: '13px', color: '#666'}}>Mån-Fre 09:00-18:00</p>
            </div>
            <div className={styles.card}>
              <strong>Live Chat</strong>
              <p>Tillgänglig på webbplatsen</p>
              <p style={{fontSize: '13px', color: '#666'}}>24/7 support</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontaktmetoder</h2>
          
          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Live Chat</h3>
          <p className={styles.text}>
            Vår live chat är det snabbaste sättet att få hjälp. Tillgänglig 24/7 direkt på vår webbplats. Klicka på chat-ikonen i nedre högra hörnet för att starta en konversation med en av våra kundservicerepresentanter.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Omedelbar respons</li>
            <li className={styles.listItem}>Tillgänglig dygnet runt</li>
            <li className={styles.listItem}>Support på svenska</li>
            <li className={styles.listItem}>Dela skärmdumpar och bilder</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>E-post</h3>
          <p className={styles.text}>
            Skicka ett e-postmeddelande till support@shein.com med ditt ärende. Vi svarar vanligtvis inom 24 timmar. Inkludera gärna ditt ordernummer för snabbare hantering.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Svar inom 24 timmar</li>
            <li className={styles.listItem}>Detaljerade svar</li>
            <li className={styles.listItem}>Möjlighet att bifoga filer</li>
            <li className={styles.listItem}>Skriftlig dokumentation</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Telefon</h3>
          <p className={styles.text}>
            Ring oss på +46 8 123 456 78 för direkt hjälp. Våra telefonlinjer är öppna måndag till fredag mellan 09:00 och 18:00 CET.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Omedelbar respons under öppettider</li>
            <li className={styles.listItem}>Personlig service</li>
            <li className={styles.listItem}>Svensktalande personal</li>
            <li className={styles.listItem}>Perfekt för komplexa ärenden</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Sociala Medier</h3>
          <p className={styles.text}>
            Du kan också kontakta oss via våra sociala medier-kanaler. Vi svarar vanligtvis inom 48 timmar.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Facebook: facebook.com/shein</li>
            <li className={styles.listItem}>Instagram: @shein (via DM)</li>
            <li className={styles.listItem}>Twitter: @shein</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vanliga Ärenden</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Orderstatus</strong>
              <p>Frågor om var din beställning är och när den levereras</p>
            </div>
            <div className={styles.card}>
              <strong>Returer</strong>
              <p>Hjälp med att returnera produkter och få återbetalning</p>
            </div>
            <div className={styles.card}>
              <strong>Produktfrågor</strong>
              <p>Information om storlekar, material och tillgänglighet</p>
            </div>
            <div className={styles.card}>
              <strong>Betalning</strong>
              <p>Problem med betalning eller fakturor</p>
            </div>
            <div className={styles.card}>
              <strong>Konto</strong>
              <p>Hjälp med inloggning, lösenord och kontoinställningar</p>
            </div>
            <div className={styles.card}>
              <strong>Teknisk Support</strong>
              <p>Problem med webbplatsen eller appen</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontaktformulär</h2>
          <p className={styles.text}>
            Fyll i vårt kontaktformulär för att skicka ett meddelande till oss. Vi återkommer så snart som möjligt.
          </p>
          <p className={styles.text}>
            <strong>Inkludera följande information:</strong>
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ditt namn och e-postadress</li>
            <li className={styles.listItem}>Ordernummer (om relevant)</li>
            <li className={styles.listItem}>Ämne för ditt ärende</li>
            <li className={styles.listItem}>Detaljerad beskrivning av problemet eller frågan</li>
            <li className={styles.listItem}>Bifoga bilder om nödvändigt</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontorinformation</h2>
          <p className={styles.text}>
            <strong>SHEIN Nordic AB</strong><br />
            Storgatan 123<br />
            111 22 Stockholm<br />
            Sverige
          </p>
          <p className={styles.text}>
            <strong>Organisationsnummer:</strong> 556XXX-XXXX<br />
            <strong>Momsregistreringsnummer:</strong> SE556XXXXXXX01
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Öppettider</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Kundservice (Telefon):</strong> Måndag - Fredag, 09:00 - 18:00 CET
            </li>
            <li className={styles.listItem}>
              <strong>Live Chat:</strong> 24/7, alla dagar
            </li>
            <li className={styles.listItem}>
              <strong>E-post:</strong> Svar inom 24 timmar, alla dagar
            </li>
            <li className={styles.listItem}>
              <strong>Sociala Medier:</strong> Svar inom 48 timmar
            </li>
          </ul>
          <p className={styles.text}>
            Observera att svarstider kan vara längre under helgdagar och högsäsong.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Specialiserade Kontakter</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Press & Media:</strong> press@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Partnerskap & Samarbeten:</strong> partnerships@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Karriärer:</strong> careers@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Hållbarhet:</strong> sustainability@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Juridiska Frågor:</strong> legal@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Integritet:</strong> privacy@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Leveransfrågor:</strong> shipping@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Returer:</strong> returns@shein.com
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Innan Du Kontaktar Oss</h2>
          <p className={styles.text}>
            För att få snabbare hjälp, kolla först om ditt ärende kan lösas via:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>FAQ:</strong> Svar på vanliga frågor finns i vår FAQ-sektion
            </li>
            <li className={styles.listItem}>
              <strong>Mitt Konto:</strong> Spåra beställningar, hantera returer och uppdatera information
            </li>
            <li className={styles.listItem}>
              <strong>Hjälpcenter:</strong> Guider och instruktioner för vanliga ärenden
            </li>
            <li className={styles.listItem}>
              <strong>Storleksguide:</strong> Information om storlekar och passform
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Feedback & Förslag</h2>
          <p className={styles.text}>
            Vi värdesätter din feedback! Om du har förslag på hur vi kan förbättra vår service eller produkter, hör gärna av dig till feedback@shein.com
          </p>
          <p className={styles.text}>
            Din åsikt hjälper oss att bli bättre och erbjuda en ännu bättre shoppingupplevelse.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Klagomål</h2>
          <p className={styles.text}>
            Om du inte är nöjd med vår service eller har ett klagomål, kontakta oss på complaints@shein.com. Vi tar alla klagomål på allvar och arbetar för att lösa dem så snabbt som möjligt.
          </p>
          <p className={styles.text}>
            Om du inte är nöjd med hur ditt klagomål hanteras kan du kontakta Allmänna Reklamationsnämnden (ARN) för konsumenttvistelösning.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vi Ser Fram Emot Att Höra Från Dig!</h2>
          <p className={styles.text}>
            Oavsett om du har en fråga, behöver hjälp eller bara vill säga hej - vi finns här för dig. Tveka inte att kontakta oss via någon av våra kanaler.
          </p>
          <p className={styles.text}>
            Tack för att du handlar hos SHEIN!
          </p>
        </section>
      </div>
    </div>
  );
}
