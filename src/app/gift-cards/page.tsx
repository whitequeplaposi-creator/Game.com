import styles from '../info-page.module.css';

export default function GiftCardsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Presentkort</h1>
        <p className={styles.description}>
          Det perfekta presentalternativet för modeälskaren i ditt liv!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Varför Välja SHEIN Presentkort?</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Låt mottagaren välja exakt vad de vill ha</li>
            <li className={styles.listItem}>Aldrig fel storlek eller stil</li>
            <li className={styles.listItem}>Kan användas på hela sortimentet</li>
            <li className={styles.listItem}>Inget utgångsdatum</li>
            <li className={styles.listItem}>Digitalt eller fysiskt kort</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Värden</h2>
          <div className={styles.grid}>
            <div className={styles.card}>100 kr</div>
            <div className={styles.card}>250 kr</div>
            <div className={styles.card}>500 kr</div>
            <div className={styles.card}>1000 kr</div>
            <div className={styles.card}>2000 kr</div>
            <div className={styles.card}>Anpassat belopp (100-5000 kr)</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Digitala Presentkort</h2>
          <p className={styles.text}>
            Levereras omedelbart via e-post. Perfekt för sista-minuten-presenter. Kan schemaläggas för leverans på specifikt datum. Personligt meddelande inkluderat. Kan användas direkt online.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fysiska Presentkort</h2>
          <p className={styles.text}>
            Vackert designade kort. Levereras i presentförpackning. Perfekt att ge bort personligen. Kan användas både online och i butik.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Använder</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>Välj produkter som vanligt</li>
            <li className={styles.listItem}>Vid kassan, ange presentkortskoden</li>
            <li className={styles.listItem}>Saldot dras automatiskt från totalen</li>
            <li className={styles.listItem}>Resterande saldo sparas för framtida köp</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
