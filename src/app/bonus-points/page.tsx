import styles from '../info-page.module.css';

export default function BonusPointsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Bonuspoäng Program</h1>
        <p className={styles.description}>
          Tjäna poäng på varje köp och lås upp fantastiska belöningar!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Det Fungerar</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>Skapa ett konto eller logga in</li>
            <li className={styles.listItem}>Handla som vanligt</li>
            <li className={styles.listItem}>Tjäna poäng automatiskt</li>
            <li className={styles.listItem}>Använd poäng för rabatter</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sätt att Tjäna Poäng</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Shopping:</strong> 1 poäng för varje 10 kr du spenderar
            </li>
            <li className={styles.listItem}>
              <strong>Recensioner:</strong> 10-30 poäng per recension
            </li>
            <li className={styles.listItem}>
              <strong>Sociala medier:</strong> 50-100 poäng för att följa och dela
            </li>
            <li className={styles.listItem}>
              <strong>Hänvisningar:</strong> 200 poäng när en vän gör sitt första köp
            </li>
            <li className={styles.listItem}>
              <strong>Dagliga aktiviteter:</strong> 5-10 poäng för att logga in
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Använd Dina Poäng</h2>
          <div className={styles.grid}>
            <div className={styles.card}>100 poäng = 10 kr rabatt</div>
            <div className={styles.card}>500 poäng = 50 kr rabatt</div>
            <div className={styles.card}>1000 poäng = 100 kr rabatt</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Poängregler</h2>
          <p className={styles.text}>
            Poäng krediteras inom 24 timmar efter köp. Poäng från returer dras av. Poäng upphör inte att gälla vid aktivt konto. Poäng kan inte överföras eller bytas mot kontanter.
          </p>
        </section>
      </div>
    </div>
  );
}
