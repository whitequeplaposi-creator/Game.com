import styles from '../info-page.module.css';

export default function DisclaimerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Ansvarsfriskrivning</h1>
        <p className={styles.description}>
          Viktig juridisk information om användning av SHEIN:s webbplats och tjänster.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Allmän Ansvarsfriskrivning</h2>
          <p className={styles.text}>
            Informationen på denna webbplats tillhandahålls "som den är" utan garantier av något slag, vare sig uttryckliga eller underförstådda. SHEIN ansvarar inte för:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Felaktigheter eller utelämnanden i innehållet</li>
            <li className={styles.listItem}>Tekniska fel, avbrott eller otillgänglighet</li>
            <li className={styles.listItem}>Förlust av data eller information</li>
            <li className={styles.listItem}>Skador som uppstår från användning av webbplatsen</li>
            <li className={styles.listItem}>Virus eller skadlig kod som kan överföras</li>
          </ul>
          <p className={styles.text}>
            Användning av denna webbplats sker på egen risk. Vi rekommenderar att du använder uppdaterad antivirusmjukvara och säkerhetsåtgärder.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Produktinformation</h2>
          <p className={styles.text}>
            Vi strävar efter att tillhandahålla korrekt och aktuell produktinformation, men vi kan inte garantera att all information är helt korrekt eller komplett:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Produktbilder:</strong> Bilder är representativa men kan variera från den faktiska produkten. Färger kan se olika ut beroende på skärminställningar och belysning.
            </li>
            <li className={styles.listItem}>
              <strong>Produktbeskrivningar:</strong> Beskrivningar är så exakta som möjligt men kan innehålla fel eller vara ofullständiga. Vi ansvarar inte för felaktigheter i produktbeskrivningar.
            </li>
            <li className={styles.listItem}>
              <strong>Storlekar:</strong> Storlekar kan variera mellan olika produkter, tillverkare och länder. Använd alltid vår storleksguide och produktmått.
            </li>
            <li className={styles.listItem}>
              <strong>Material:</strong> Materialsammansättning kan variera något från vad som anges. Kontrollera alltid produktetiketten.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Priser och Tillgänglighet</h2>
          <p className={styles.text}>
            Priser och produkttillgänglighet kan ändras utan förvarning:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Prisfel:</strong> Vi ansvarar inte för prisfel eller tekniska fel som kan leda till felaktiga priser. Vi förbehåller oss rätten att avbryta beställningar med felaktiga priser.
            </li>
            <li className={styles.listItem}>
              <strong>Tillgänglighet:</strong> Produkttillgänglighet garanteras inte. Produkter kan bli slutsålda mellan beställning och leverans.
            </li>
            <li className={styles.listItem}>
              <strong>Kampanjer:</strong> Kampanjer och erbjudanden kan avslutas när som helst utan förvarning. Villkor kan ändras.
            </li>
            <li className={styles.listItem}>
              <strong>Valuta:</strong> Priser visas i SEK men kan påverkas av valutakursförändringar vid internationella transaktioner.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Länkar till Tredje Part</h2>
          <p className={styles.text}>
            Vår webbplats kan innehålla länkar till externa webbplatser som inte kontrolleras av SHEIN:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Vi ansvarar inte för innehåll på externa webbplatser</li>
            <li className={styles.listItem}>Vi ansvarar inte för integritetspraxis hos tredje part</li>
            <li className={styles.listItem}>Vi ansvarar inte för produkter eller tjänster från tredje part</li>
            <li className={styles.listItem}>Länkar innebär inte godkännande eller rekommendation</li>
          </ul>
          <p className={styles.text}>
            Besök externa webbplatser på egen risk och läs deras användarvillkor och integritetspolicyer.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Medicinska och Hälsopåståenden</h2>
          <p className={styles.text}>
            Produkter på vår webbplats är inte avsedda att diagnostisera, behandla, bota eller förebygga sjukdomar:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Konsultera alltid en läkare för medicinska frågor</li>
            <li className={styles.listItem}>Följ alltid produktinstruktioner och varningar</li>
            <li className={styles.listItem}>Sluta använda produkter om irritation uppstår</li>
            <li className={styles.listItem}>Håll produkter utom räckhåll för barn</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Användarinnehåll</h2>
          <p className={styles.text}>
            Recensioner, kommentarer och annat användarinnehåll på vår webbplats:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Representerar användarnas egna åsikter, inte SHEIN:s</li>
            <li className={styles.listItem}>Har inte verifierats av SHEIN för riktighet</li>
            <li className={styles.listItem}>Kan innehålla felaktig eller vilseledande information</li>
            <li className={styles.listItem}>Kan tas bort om de bryter mot våra riktlinjer</li>
          </ul>
          <p className={styles.text}>
            Vi ansvarar inte för innehåll som användare publicerar och förbehåller oss rätten att ta bort olämpligt innehåll.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tekniska Begränsningar</h2>
          <p className={styles.text}>
            Vi strävar efter att hålla webbplatsen tillgänglig dygnet runt, men:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Vi garanterar inte att webbplatsen alltid är tillgänglig</li>
            <li className={styles.listItem}>Underhåll och uppdateringar kan orsaka tillfälliga avbrott</li>
            <li className={styles.listItem}>Vi ansvarar inte för kompatibilitetsproblem med din enhet</li>
            <li className={styles.listItem}>Vi ansvarar inte för problem orsakade av din internetanslutning</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Immateriella Rättigheter</h2>
          <p className={styles.text}>
            Allt innehåll på webbplatsen skyddas av upphovsrätt och andra immateriella rättigheter:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Obehörig användning av vårt innehåll är förbjuden</li>
            <li className={styles.listItem}>Varumärken och logotyper är skyddade</li>
            <li className={styles.listItem}>Vi förbehåller oss rätten att vidta juridiska åtgärder vid intrång</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Jurisdiktion och Tillämplig Lag</h2>
          <p className={styles.text}>
            Denna ansvarsfriskrivning regleras av svensk lag. Användning av webbplatsen från andra länder sker på egen risk och du är ansvarig för att följa lokala lagar.
          </p>
          <p className={styles.text}>
            Om någon del av denna ansvarsfriskrivning bedöms vara ogiltig eller omöjlig att verkställa, ska de återstående delarna fortsätta att gälla.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ändringar</h2>
          <p className={styles.text}>
            Vi förbehåller oss rätten att när som helst ändra eller uppdatera denna ansvarsfriskrivning utan förvarning. Fortsatt användning av webbplatsen efter ändringar innebär acceptans av den uppdaterade ansvarsfriskrivningen.
          </p>
          <p className={styles.text}>
            Det är ditt ansvar att regelbundet granska denna sida för ändringar.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakt</h2>
          <p className={styles.text}>
            För frågor om denna ansvarsfriskrivning, kontakta oss:
          </p>
          <p className={styles.text}>
            E-post: legal@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            Adress: SHEIN Nordic AB, Storgatan 123, 111 22 Stockholm, Sverige
          </p>
          <p className={styles.text}>
            Senast uppdaterad: Februari 2026
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Viktig Påminnelse</h2>
          <p className={styles.text}>
            Genom att använda denna webbplats bekräftar du att du har läst, förstått och accepterat denna ansvarsfriskrivning tillsammans med våra användarvillkor och integritetspolicy.
          </p>
        </section>
      </div>
    </div>
  );
}
