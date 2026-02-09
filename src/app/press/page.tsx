import styles from '../info-page.module.css';

export default function PressPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Press & Nyheter</h1>
        <p className={styles.description}>
          Håll dig uppdaterad med de senaste nyheterna, pressmeddelanden och uppdateringarna från SHEIN.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Senaste Nyheterna</h2>
          
          <article style={{marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #eee'}}>
            <div style={{fontSize: '14px', color: '#999', marginBottom: '10px'}}>Februari 2026</div>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '15px'}}>SHEIN Lanserar Ny Hållbar Kollektion</h3>
            <p className={styles.text}>
              SHEIN är stolta över att presentera vår nya hållbara kollektion, tillverkad av 100% återvunna och ekologiska material. Kollektionen omfattar över 500 produkter och representerar ett viktigt steg i vår hållbarhetsresa.
            </p>
            <p className={styles.text}>
              "Vi är engagerade i att göra mode mer hållbart utan att kompromissa med stil eller överkomlighet," säger vår VD. "Denna kollektion visar att hållbart mode kan vara både trendigt och prisvärt."
            </p>
          </article>

          <article style={{marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #eee'}}>
            <div style={{fontSize: '14px', color: '#999', marginBottom: '10px'}}>Januari 2026</div>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '15px'}}>SHEIN Expanderar till Nya Marknader</h3>
            <p className={styles.text}>
              SHEIN fortsätter sin globala expansion med lansering i fem nya länder under första kvartalet 2026. Detta innebär att vi nu betjänar kunder i över 150 länder världen över.
            </p>
            <p className={styles.text}>
              Expansionen inkluderar nya distributionscenter och lokaliserade shoppingupplevelser för att bättre betjäna våra internationella kunder.
            </p>
          </article>

          <article style={{marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #eee'}}>
            <div style={{fontSize: '14px', color: '#999', marginBottom: '10px'}}>December 2025</div>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '15px'}}>SHEIN Når Miljonstolpe i Kundnöjdhet</h3>
            <p className={styles.text}>
              Vi är glada att meddela att SHEIN har nått en viktig milstolpe med över 10 miljoner nöjda kunder globalt. Detta är ett bevis på vårt teams hårda arbete och vårt engagemang för kundnöjdhet.
            </p>
          </article>

          <article style={{marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #eee'}}>
            <div style={{fontSize: '14px', color: '#999', marginBottom: '10px'}}>November 2025</div>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '15px'}}>SHEIN Investerar i AI-Teknologi</h3>
            <p className={styles.text}>
              SHEIN tillkännager en betydande investering i artificiell intelligens och maskininlärning för att förbättra kundupplevelsen. Den nya teknologin kommer att möjliggöra mer personaliserade rekommendationer och bättre efterfrågeprognostisering.
            </p>
          </article>

          <article style={{marginBottom: '30px'}}>
            <div style={{fontSize: '14px', color: '#999', marginBottom: '10px'}}>Oktober 2025</div>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '15px'}}>SHEIN Lanserar Välgörenhetsinitiativ</h3>
            <p className={styles.text}>
              SHEIN startar ett nytt välgörenhetsinitiativ för att stödja utbildning och kvinnors rättigheter i utvecklingsländer. Programmet kommer att donera en del av försäljningen till utvalda organisationer.
            </p>
          </article>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Presskontakt</h2>
          <p className={styles.text}>
            För mediaförfrågningar, intervjuer eller pressmeddelanden, kontakta vårt pressteam:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>E-post:</strong> press@shein.com
            </li>
            <li className={styles.listItem}>
              <strong>Telefon:</strong> +46 8 123 456 78
            </li>
            <li className={styles.listItem}>
              <strong>Presstjänst:</strong> Måndag - Fredag, 09:00 - 18:00 CET
            </li>
            <li className={styles.listItem}>
              <strong>Adress:</strong> SHEIN Nordic AB, Storgatan 123, 111 22 Stockholm, Sverige
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mediaresurser</h2>
          <p className={styles.text}>
            Vi tillhandahåller följande resurser för journalister och mediarepresentanter:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Högupplösta Bilder:</strong> Produktbilder, företagslogotyper och kampanjmaterial
            </li>
            <li className={styles.listItem}>
              <strong>Företagsinformation:</strong> Faktablad, företagshistorik och nyckeltal
            </li>
            <li className={styles.listItem}>
              <strong>Pressmeddelanden:</strong> Arkiv med alla tidigare pressmeddelanden
            </li>
            <li className={styles.listItem}>
              <strong>Intervjumöjligheter:</strong> Tillgång till företagsledning och experter
            </li>
            <li className={styles.listItem}>
              <strong>Hållbarhetsrapporter:</strong> Årliga rapporter om vårt hållbarhetsarbete
            </li>
          </ul>
          <p className={styles.text}>
            Kontakta vårt pressteam för att få tillgång till mediaresurser.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Evenemang</h2>
          <p className={styles.text}>
            SHEIN arrangerar och deltar i modeevenemang, mässor och konferenser runt om i världen:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Modeveckor:</strong> Närvaro vid stora modeveckor i Paris, Milano, London och New York
            </li>
            <li className={styles.listItem}>
              <strong>Branschmässor:</strong> Deltagande i internationella textil- och modemässor
            </li>
            <li className={styles.listItem}>
              <strong>Hållbarhetskonferenser:</strong> Representation vid globala hållbarhetsforum
            </li>
            <li className={styles.listItem}>
              <strong>Produktlanseringar:</strong> Exklusiva evenemang för nya kollektioner
            </li>
            <li className={styles.listItem}>
              <strong>Influencer-events:</strong> Samarbeten och evenemang med modeinfluencers
            </li>
          </ul>
          <p className={styles.text}>
            Kontakta oss för information om kommande evenemang och möjligheter till medieackreditering.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Företagsinformation</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Företagsnamn:</strong> SHEIN Nordic AB
            </li>
            <li className={styles.listItem}>
              <strong>Grundat:</strong> 2008
            </li>
            <li className={styles.listItem}>
              <strong>Huvudkontor:</strong> Stockholm, Sverige
            </li>
            <li className={styles.listItem}>
              <strong>Verksamhet:</strong> E-handel inom mode och accessoarer
            </li>
            <li className={styles.listItem}>
              <strong>Marknader:</strong> Över 150 länder globalt
            </li>
            <li className={styles.listItem}>
              <strong>Anställda:</strong> Över 10,000 globalt
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sociala Medier</h2>
          <p className={styles.text}>
            Följ oss på sociala medier för de senaste uppdateringarna:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Instagram:</strong> @shein
            </li>
            <li className={styles.listItem}>
              <strong>Facebook:</strong> facebook.com/shein
            </li>
            <li className={styles.listItem}>
              <strong>Twitter:</strong> @shein
            </li>
            <li className={styles.listItem}>
              <strong>TikTok:</strong> @shein
            </li>
            <li className={styles.listItem}>
              <strong>YouTube:</strong> @shein
            </li>
            <li className={styles.listItem}>
              <strong>LinkedIn:</strong> SHEIN
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pressriktlinjer</h2>
          <p className={styles.text}>
            När du rapporterar om SHEIN, vänligen följ dessa riktlinjer:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Använd officiella logotyper och bilder från vårt mediakit</li>
            <li className={styles.listItem}>Citera korrekt från våra pressmeddelanden</li>
            <li className={styles.listItem}>Kontakta oss för verifiering av fakta</li>
            <li className={styles.listItem}>Respektera embargotider för pressmeddelanden</li>
            <li className={styles.listItem}>Länka till vår officiella webbplats när möjligt</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prenumerera på Pressmeddelanden</h2>
          <p className={styles.text}>
            Vill du få våra pressmeddelanden direkt i din inkorg? Skicka ett e-postmeddelande till press@shein.com med ämnesraden "Prenumerera på pressmeddelanden" och inkludera:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ditt namn</li>
            <li className={styles.listItem}>Publikation/Media</li>
            <li className={styles.listItem}>E-postadress</li>
            <li className={styles.listItem}>Telefonnummer</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
