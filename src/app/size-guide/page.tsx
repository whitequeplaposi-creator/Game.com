import styles from '../info-page.module.css';

export default function SizeGuidePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Storleksguide</h1>
        <p className={styles.description}>
          Att hitta rätt storlek är avgörande för en bra shoppingupplevelse. Vår omfattande storleksguide hjälper dig att välja perfekt passform.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Mäter</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Byst</strong>
              Mät runt den fullaste delen av bysten
            </li>
            <li className={styles.listItem}>
              <strong>Midja</strong>
              Mät runt den smalaste delen av midjan
            </li>
            <li className={styles.listItem}>
              <strong>Höfter</strong>
              Mät runt den fullaste delen av höfterna
            </li>
            <li className={styles.listItem}>
              <strong>Innerbenlängd</strong>
              Mät från grenen till ankeln
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tips för Rätt Passform</h2>
          <p className={styles.text}>
            Läs produktrecensioner för passforminformation. Kontrollera produktmått i produktbeskrivningen. Vissa produkter kan vara mindre eller större än standard. Vid tvivel, kontakta vår kundservice för råd.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Specialstorlekar</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Petite - För kortare personer</div>
            <div className={styles.card}>Tall - För längre personer</div>
            <div className={styles.card}>Plus-size - Storlekar upp till 5XL</div>
            <div className={styles.card}>Maternity - För gravida</div>
          </div>
        </section>
      </div>
    </div>
  );
}
