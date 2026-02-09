import styles from '../info-page.module.css';

export default function NewArrivalsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Nyheter</h1>
        <p className={styles.description}>
          Upptäck de senaste trenderna och nyheterna som just landat i vår butik!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Varje Vecka Nya Produkter</h2>
          <p className={styles.text}>
            Vi uppdaterar vårt sortiment kontinuerligt med hundratals nya produkter varje vecka. Från de senaste catwalktrenderna till streetstyle-favoriter - vi har allt du behöver för att hålla din garderob fräsch och uppdaterad.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kategorier</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Dammode - Klänningar, toppar, byxor, kjolar, jackor</div>
            <div className={styles.card}>Herrmode - Skjortor, t-shirts, jeans, jackor, kostymer</div>
            <div className={styles.card}>Accessoarer - Väskor, smycken, solglasögon, halsdukar</div>
            <div className={styles.card}>Skor - Sneakers, klackar, stövlar, sandaler</div>
            <div className={styles.card}>Skönhet - Makeup, hudvård, hårvård, nagelvård</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Trendspaning</h2>
          <p className={styles.text}>
            Vårt designteam följer noga modeveckorna i Paris, Milano, London och New York för att snabbt kunna erbjuda de senaste trenderna till överkomliga priser.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exklusiva Kollektioner</h2>
          <p className={styles.text}>
            Missa inte våra samarbeten med influencers och designers som lanserar exklusiva kollektioner endast på SHEIN.
          </p>
        </section>
      </div>
    </div>
  );
}
