import styles from '../info-page.module.css';

export default function ReturnsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Retur & Återbetalning</h1>
        <p className={styles.description}>
          Din tillfredsställelse är vår prioritet. Om du inte är helt nöjd med ditt köp erbjuder vi en generös returpolicy.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returpolicy</h2>
          <p className={styles.text}>
            Vi vill att du ska vara helt nöjd med ditt köp. Om du av någon anledning inte är det, kan du returnera produkter enligt följande villkor:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>30 dagars returrätt:</strong> Du har 30 dagar från leveransdatum att returnera produkter
            </li>
            <li className={styles.listItem}>
              <strong>Oanvända produkter:</strong> Produkter måste vara oanvända, otvättade och i originalskick
            </li>
            <li className={styles.listItem}>
              <strong>Originalförpackning:</strong> Produkter måste returneras i originalförpackning med alla etiketter intakta
            </li>
            <li className={styles.listItem}>
              <strong>Kvitto:</strong> Bifoga kvitto eller orderbekräftelse
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Produkter Som Inte Kan Returneras</h2>
          <p className={styles.text}>
            Av hygieniska och säkerhetsskäl kan vissa produkter inte returneras:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Underkläder och badkläder (om förseglingen är bruten)</li>
            <li className={styles.listItem}>Örhängen och piercingsmycken</li>
            <li className={styles.listItem}>Skönhetsprodukter och kosmetika (om förpackningen är öppnad)</li>
            <li className={styles.listItem}>Personliga hygienartiklar</li>
            <li className={styles.listItem}>Slutreaprodukter (markerade som "Final Sale")</li>
            <li className={styles.listItem}>Presentkort</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Returnerar</h2>
          <p className={styles.text}>
            Följ dessa enkla steg för att returnera dina produkter:
          </p>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>Steg 1: Logga in</strong><br />
              Logga in på ditt konto på SHEIN.com och gå till "Mina beställningar"
            </li>
            <li className={styles.listItem}>
              <strong>Steg 2: Välj beställning</strong><br />
              Välj den beställning du vill returnera och klicka på "Returnera produkter"
            </li>
            <li className={styles.listItem}>
              <strong>Steg 3: Välj produkter</strong><br />
              Välj vilka produkter du vill returnera och ange returorsak
            </li>
            <li className={styles.listItem}>
              <strong>Steg 4: Skriv ut returetiketten</strong><br />
              Ladda ner och skriv ut returetiketten som genereras
            </li>
            <li className={styles.listItem}>
              <strong>Steg 5: Packa produkterna</strong><br />
              Packa produkterna säkert i originalförpackningen eller en lämplig kartong
            </li>
            <li className={styles.listItem}>
              <strong>Steg 6: Fäst returetiketten</strong><br />
              Fäst returetiketten på utsidan av paketet
            </li>
            <li className={styles.listItem}>
              <strong>Steg 7: Lämna paketet</strong><br />
              Lämna paketet hos närmaste ombud eller postkontor
            </li>
            <li className={styles.listItem}>
              <strong>Steg 8: Spåra returen</strong><br />
              Spåra din retur via ditt konto
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Återbetalning</h2>
          <p className={styles.text}>
            När vi mottagit och godkänt din retur behandlas återbetalningen enligt följande:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Handläggningstid:</strong> 5-10 arbetsdagar efter att vi mottagit returen
            </li>
            <li className={styles.listItem}>
              <strong>Återbetalningsmetod:</strong> Pengarna återförs till din ursprungliga betalningsmetod
            </li>
            <li className={styles.listItem}>
              <strong>Banktid:</strong> Det kan ta ytterligare 3-5 arbetsdagar innan pengarna syns på ditt konto
            </li>
            <li className={styles.listItem}>
              <strong>E-postbekräftelse:</strong> Du får en e-postbekräftelse när återbetalningen har behandlats
            </li>
            <li className={styles.listItem}>
              <strong>Fraktkostnad:</strong> Ursprunglig fraktkostnad återbetalas inte (om inte returen beror på vårt fel)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Byten</h2>
          <p className={styles.text}>
            För närvarande erbjuder vi inte direkta byten. Om du vill ha en annan storlek, färg eller produkt:
          </p>
          <ol className={styles.list}>
            <li className={styles.listItem}>Returnera originalprodukten enligt instruktionerna ovan</li>
            <li className={styles.listItem}>Gör en ny beställning för den produkt du vill ha</li>
            <li className={styles.listItem}>När returen är godkänd får du återbetalning</li>
          </ol>
          <p className={styles.text}>
            Tips: För att undvika att produkten blir slutsåld, lägg den nya beställningen innan du returnerar originalet.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returkostnader</h2>
          <p className={styles.text}>
            Returfrakt kan vara kundens ansvar beroende på returorsak och plats:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Ångerköp:</strong> Kunden betalar returfrakt (ca 49 kr inom Sverige)
            </li>
            <li className={styles.listItem}>
              <strong>Fel produkt/Defekt:</strong> Vi står för returkostnaden
            </li>
            <li className={styles.listItem}>
              <strong>VIP-medlemmar:</strong> Kan ha fri retur som förmån
            </li>
            <li className={styles.listItem}>
              <strong>Kampanjer:</strong> Håll utkik efter fri retur-kampanjer
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Defekta eller Felaktiga Produkter</h2>
          <p className={styles.text}>
            Om du mottagit en defekt eller felaktig produkt:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Kontakta oss omedelbart:</strong> Inom 48 timmar efter mottagande
            </li>
            <li className={styles.listItem}>
              <strong>Fotografera:</strong> Ta tydliga bilder av defekten eller felet
            </li>
            <li className={styles.listItem}>
              <strong>Beskrivning:</strong> Beskriv problemet detaljerat
            </li>
            <li className={styles.listItem}>
              <strong>Lösning:</strong> Vi erbjuder full återbetalning eller ersättning
            </li>
            <li className={styles.listItem}>
              <strong>Returfrakt:</strong> Vi står för alla returkostnader
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Internationella Returer</h2>
          <p className={styles.text}>
            För internationella returer gäller särskilda villkor:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Samma 30 dagars returrätt</li>
            <li className={styles.listItem}>Returadress kan variera beroende på land</li>
            <li className={styles.listItem}>Tullavgifter återbetalas inte</li>
            <li className={styles.listItem}>Längre handläggningstid kan förekomma</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returstatus</h2>
          <p className={styles.text}>
            Följ din returs status via ditt konto:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Retur initierad:</strong> Du har startat returprocessen
            </li>
            <li className={styles.listItem}>
              <strong>Paket skickat:</strong> Du har lämnat paketet för retur
            </li>
            <li className={styles.listItem}>
              <strong>Mottaget:</strong> Vi har mottagit din retur
            </li>
            <li className={styles.listItem}>
              <strong>Under granskning:</strong> Vi inspekterar produkterna
            </li>
            <li className={styles.listItem}>
              <strong>Godkänd:</strong> Returen är godkänd och återbetalning behandlas
            </li>
            <li className={styles.listItem}>
              <strong>Återbetald:</strong> Pengarna har återförts till ditt konto
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tips för Smidig Retur</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Behåll originalförpackningen tills du är säker på att du vill behålla produkten</li>
            <li className={styles.listItem}>Ta bilder av produkterna innan du returnerar dem</li>
            <li className={styles.listItem}>Spara spårningsnumret för returen</li>
            <li className={styles.listItem}>Packa produkterna säkert för att undvika skador under transport</li>
            <li className={styles.listItem}>Initiera returen så snart som möjligt inom 30-dagarsperioden</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vanliga Frågor om Returer</h2>
          <div className={styles.listItem}>
            <strong>Q: Kan jag returnera produkter köpta på rea?</strong><br />
            A: Ja, med undantag för produkter markerade som "Final Sale". Kontrollera produktbeskrivningen.
          </div>
          <div className={styles.listItem}>
            <strong>Q: Vad händer om jag missar 30-dagarsfristen?</strong><br />
            A: Kontakta kundservice. Vi kan göra undantag i vissa fall.
          </div>
          <div className={styles.listItem}>
            <strong>Q: Kan jag returnera en presentkortprodukt?</strong><br />
            A: Ja, om produkten uppfyller returvillkoren. Återbetalningen går till den ursprungliga betalningsmetoden.
          </div>
          <div className={styles.listItem}>
            <strong>Q: Hur länge tar det att få pengarna tillbaka?</strong><br />
            A: Vanligtvis 5-10 arbetsdagar efter att vi mottagit returen, plus 3-5 dagar för banköverföring.
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakta Oss</h2>
          <p className={styles.text}>
            Har du frågor om returer eller återbetalningar? Kontakta vår kundservice:
          </p>
          <p className={styles.text}>
            E-post: returns@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Live Chat: Tillgänglig 24/7 på vår webbplats
          </p>
        </section>
      </div>
    </div>
  );
}
