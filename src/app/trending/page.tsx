import styles from '../info-page.module.css';

export default function TrendingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Trendigt Nu</h1>
        <p className={styles.description}>
          Se vad som är populärt just nu och vad andra shoppar!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mest Sålda Produkter</h2>
          <p className={styles.text}>
            Upptäck våra bästsäljare som älskas av tusentals kunder. Dessa produkter har höga betyg, fantastiska recensioner och säljer slut snabbt!
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Trendiga Stilar</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Y2K Revival - Nostalgi från 2000-talet</div>
            <div className={styles.card}>Cottagecore - Romantisk, lantlig estetik</div>
            <div className={styles.card}>Dark Academia - Klassisk, akademisk stil</div>
            <div className={styles.card}>Streetwear - Urban och bekväm</div>
            <div className={styles.card}>Minimalism - Ren och tidlös design</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Influencer-Favoriter</h2>
          <p className={styles.text}>
            Se vad populära influencers och kändisar bär. Få deras look till en bråkdel av priset!
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Säsongstrender</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Vår:</strong> Pastellfärger, blommönster, lätta tyger
            </li>
            <li className={styles.listItem}>
              <strong>Sommar:</strong> Strandkläder, shorts, luftiga klänningar
            </li>
            <li className={styles.listItem}>
              <strong>Höst:</strong> Jordtoner, stickade plagg, lager-på-lager
            </li>
            <li className={styles.listItem}>
              <strong>Vinter:</strong> Pälsar, stickade tröjor, varma jackor
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
