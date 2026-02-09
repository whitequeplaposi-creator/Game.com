import styles from '../info-page.module.css';

export default function SheinVIPPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>SHEIN VIP Program</h1>
        <p className={styles.description}>
          Bli en VIP-medlem och njut av exklusiva förmåner, belöningar och privilegier!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Medlemsnivåer</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Bronze (0-999 poäng)</strong>
              <p>5% rabatt, tidig tillgång till reor, födelsedagsrabatt</p>
            </div>
            <div className={styles.card}>
              <strong>Silver (1000-2999 poäng)</strong>
              <p>10% rabatt, gratis standardfrakt, prioriterad kundservice</p>
            </div>
            <div className={styles.card}>
              <strong>Gold (3000-5999 poäng)</strong>
              <p>15% rabatt, gratis expressfrakt, dubbla poäng, VIP-kundservice 24/7</p>
            </div>
            <div className={styles.card}>
              <strong>Platinum (6000+ poäng)</strong>
              <p>20% rabatt, gratis premium-frakt, tredubbla poäng, personlig stylist</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Tjänar Poäng</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>1 poäng för varje 10 kr spenderat</li>
            <li className={styles.listItem}>Bonuspoäng för produktrecensioner</li>
            <li className={styles.listItem}>Poäng för att dela på sociala medier</li>
            <li className={styles.listItem}>Poäng för att bjuda in vänner</li>
            <li className={styles.listItem}>Specialkampanjer med dubbla/tredubbla poäng</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Använder Poäng</h2>
          <p className={styles.text}>
            100 poäng = 10 kr rabatt. Använd poäng vid kassan. Kombinera med andra erbjudanden. Poäng upphör inte att gälla så länge kontot är aktivt.
          </p>
        </section>
      </div>
    </div>
  );
}
