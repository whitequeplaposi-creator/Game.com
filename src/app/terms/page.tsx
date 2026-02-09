import styles from '../info-page.module.css';

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Användarvillkor</h1>
        <p className={styles.description}>
          Välkommen till SHEIN. Genom att använda vår webbplats godkänner du följande användarvillkor.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Allmänna Villkor</h2>
          <p className={styles.text}>
            Dessa villkor reglerar din användning av SHEIN:s webbplats och tjänster. Genom att besöka vår webbplats och/eller köpa något från oss accepterar du dessa villkor. Om du inte accepterar någon del av dessa villkor, får du inte använda vår webbplats.
          </p>
          <p className={styles.text}>
            Vi förbehåller oss rätten att uppdatera, ändra eller ersätta någon del av dessa användarvillkor genom att publicera uppdateringar och ändringar på vår webbplats. Det är ditt ansvar att regelbundet kontrollera vår webbplats för ändringar.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Användning av Webbplatsen</h2>
          <p className={styles.text}>
            Du måste vara minst 18 år eller ha målsmans tillstånd för att använda denna webbplats. Du ansvarar för att hålla ditt konto säkert och för all aktivitet som sker under ditt konto.
          </p>
          <p className={styles.text}>
            Du får inte använda webbplatsen för olagliga ändamål eller för att bryta mot några lagar i din jurisdiktion. Du får inte överföra virus, maskar eller annan skadlig kod. Ett brott mot eller missbruk av någon av villkoren kommer att resultera i omedelbar uppsägning av dina tjänster.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Produkter och Priser</h2>
          <p className={styles.text}>
            Vi förbehåller oss rätten att ändra priser när som helst utan förvarning. Produktbilder är så exakta som möjligt men kan variera från den faktiska produkten. Vi garanterar inte att alla produkter alltid finns i lager.
          </p>
          <p className={styles.text}>
            Priser inkluderar inte frakt, tullavgifter eller andra avgifter som kan tillkomma. Alla priser är i svenska kronor (SEK) om inte annat anges.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Beställningar</h2>
          <p className={styles.text}>
            En beställning är ett bindande avtal mellan dig och SHEIN. Vi förbehåller oss rätten att vägra eller avbryta beställningar av olika anledningar, inklusive men inte begränsat till produkttillgänglighet, fel i produktbeskrivning eller pris, eller misstänkt bedräglig aktivitet.
          </p>
          <p className={styles.text}>
            Beställningsbekräftelse skickas via e-post efter att beställningen lagts. Betalning måste göras vid beställning. Vi accepterar inte beställningar förrän betalning har mottagits och verifierats.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Leverans</h2>
          <p className={styles.text}>
            Vi strävar efter att leverera alla beställningar inom den angivna tidsramen, men vi kan inte garantera leveransdatum. Vi ansvarar inte för förseningar orsakade av tredje part, tullen eller force majeure.
          </p>
          <p className={styles.text}>
            Risken för produkter övergår till dig vid leverans. Du är ansvarig för att tillhandahålla korrekt leveransadress.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Returer och Återbetalningar</h2>
          <p className={styles.text}>
            Du har 30 dagar från leveransdatum att returnera produkter. Produkter måste vara oanvända, otvättade och i originalförpackning. Vissa produkter kan inte returneras av hygieniska skäl.
          </p>
          <p className={styles.text}>
            Återbetalning behandlas inom 5-10 arbetsdagar efter att vi mottagit och godkänt returen. Returfrakt kan vara kundens ansvar beroende på returorsak.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Immateriella Rättigheter</h2>
          <p className={styles.text}>
            Allt innehåll på webbplatsen, inklusive text, grafik, logotyper, ikoner, bilder och mjukvara, ägs av SHEIN eller dess innehållsleverantörer och skyddas av internationella upphovsrättslagar.
          </p>
          <p className={styles.text}>
            Du får inte kopiera, reproducera, distribuera, överföra, visa, utföra, publicera eller skapa härledda verk från något innehåll på webbplatsen utan vårt skriftliga tillstånd.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Användarinnehåll</h2>
          <p className={styles.text}>
            Genom att skicka in innehåll till vår webbplats (recensioner, kommentarer, bilder), ger du SHEIN en icke-exklusiv, royaltyfri, evig, oåterkallelig och fullt underlicensierbar rätt att använda, reproducera, modifiera och distribuera sådant innehåll.
          </p>
          <p className={styles.text}>
            Du garanterar att du äger eller har rätt att använda allt innehåll du skickar in och att innehållet inte kränker någon tredje parts rättigheter.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Ansvarsbegränsning</h2>
          <p className={styles.text}>
            SHEIN ansvarar inte för indirekta, tillfälliga, speciella eller följdskador som uppstår från användningen av eller oförmågan att använda webbplatsen eller produkterna.
          </p>
          <p className={styles.text}>
            Vår totala ansvarighet är begränsad till det belopp du betalat för produkten. Vissa jurisdiktioner tillåter inte begränsning av ansvar, så dessa begränsningar kanske inte gäller dig.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Tillämplig Lag</h2>
          <p className={styles.text}>
            Dessa villkor regleras av och tolkas i enlighet med svensk lag. Tvister ska lösas i svenska domstolar. Om någon bestämmelse i dessa villkor bedöms vara ogiltig eller omöjlig att verkställa, ska de återstående bestämmelserna fortsätta att gälla.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Kontakt</h2>
          <p className={styles.text}>
            För frågor om dessa användarvillkor, kontakta oss på: legal@shein.com
          </p>
          <p className={styles.text}>
            Senast uppdaterad: Februari 2026
          </p>
        </section>
      </div>
    </div>
  );
}
