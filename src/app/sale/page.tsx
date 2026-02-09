import styles from '../info-page.module.css';

export default function SalePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Rea & Erbjudanden</h1>
        <p className={styles.description}>
          Spara stort på dina favoritprodukter med våra fantastiska erbjudanden!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pågående Kampanjer</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Flash Sale - Dagliga erbjudanden med upp till 80% rabatt</div>
            <div className={styles.card}>Veckans Deals - Nya erbjudanden varje måndag</div>
            <div className={styles.card}>Säsongrea - Stora besparingar vid säsongsskiften</div>
            <div className={styles.card}>Clearance - Sista chansen-produkter</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rabattkoder</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Nykundsrabatt:</strong> 15% på din första beställning
            </li>
            <li className={styles.listItem}>
              <strong>Nyhetsbrevsprenumeranter:</strong> Exklusiva koder varje vecka
            </li>
            <li className={styles.listItem}>
              <strong>VIP-medlemmar:</strong> Extra rabatter och tidig tillgång
            </li>
            <li className={styles.listItem}>
              <strong>Sociala medier:</strong> Följ oss för specialkoder
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Specialevenemang</h2>
          <p className={styles.text}>
            <strong>Black Friday:</strong> Årets största rea med oslagbara priser
          </p>
          <p className={styles.text}>
            <strong>Cyber Monday:</strong> Exklusiva online-erbjudanden
          </p>
          <p className={styles.text}>
            <strong>Singles Day (11/11):</strong> Globalt shoppingevenemang
          </p>
          <p className={styles.text}>
            <strong>Sommarrea:</strong> Rensa ut för nya kollektioner
          </p>
        </section>
      </div>
    </div>
  );
}
