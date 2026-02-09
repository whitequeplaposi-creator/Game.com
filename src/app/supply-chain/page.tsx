import styles from '../info-page.module.css';

export default function SupplyChainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Försörjningskedja</h1>
        <p className={styles.description}>
          SHEIN:s leveranskedja är byggd på principer om effektivitet, kvalitet och ansvarstagande.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Global Närvaro</h2>
          <p className={styles.text}>
            Vårt leveransnätverk sträcker sig över fem kontinenter med strategiskt placerade lager och distributionscenter. Detta gör det möjligt för oss att erbjuda snabb leverans till kunder över hela världen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kvalitetskontroll</h2>
          <p className={styles.text}>
            Varje produkt genomgår rigorösa kvalitetskontroller i flera steg - från råmaterial till färdig produkt. Vi har dedikerade team som inspekterar produkter för att säkerställa att de uppfyller våra höga standarder.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Teknologidriven Logistik</h2>
          <p className={styles.text}>
            Vi använder avancerad teknologi för att optimera vår leveranskedja. AI och maskininlärning hjälper oss att förutse efterfrågan, hantera lager effektivt och minimera leveranstider.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Partnerskap</h2>
          <p className={styles.text}>
            Vi samarbetar med ledande logistikföretag som DHL, PostNord och DB Schenker för att säkerställa pålitlig och spårbar leverans.
          </p>
        </section>
      </div>
    </div>
  );
}
