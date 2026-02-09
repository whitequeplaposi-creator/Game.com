import styles from '../info-page.module.css';

export default function TrackOrderPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Spåra Din Beställning</h1>
        <p className={styles.description}>
          Håll koll på din beställning från det ögonblick den lämnar vårt lager tills den når din dörr.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spårningsmetoder</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Via Ditt Konto</strong>
              <p>Logga in och gå till "Mina beställningar" för att se realtidsuppdateringar</p>
            </div>
            <div className={styles.card}>
              <strong>Via E-post</strong>
              <p>Klicka på spårningslänken i din orderbekräftelse</p>
            </div>
            <div className={styles.card}>
              <strong>Via Leverantören</strong>
              <p>Använd spårningsnumret på leverantörens webbplats</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spårningsstatus</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Beställning mottagen</strong>
              Vi har mottagit din beställning och förbereder den
            </li>
            <li className={styles.listItem}>
              <strong>Bearbetning</strong>
              Din beställning packas i vårt lager
            </li>
            <li className={styles.listItem}>
              <strong>Skickad</strong>
              Din beställning har lämnats till fraktbolaget
            </li>
            <li className={styles.listItem}>
              <strong>I transit</strong>
              Din beställning är på väg till dig
            </li>
            <li className={styles.listItem}>
              <strong>Ute för leverans</strong>
              Din beställning levereras idag
            </li>
            <li className={styles.listItem}>
              <strong>Levererad</strong>
              Din beställning har levererats
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
