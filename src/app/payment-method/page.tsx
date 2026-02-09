import styles from '../info-page.module.css';

export default function PaymentMethodPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Betalningsmetoder</h1>
        <p className={styles.description}>
          Vi erbjuder flera säkra och bekväma betalningsalternativ för att göra din shopping enkel.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kreditkort & Debitkort</h2>
          <div className={styles.grid}>
            <div className={styles.card}>Visa</div>
            <div className={styles.card}>Mastercard</div>
            <div className={styles.card}>American Express</div>
            <div className={styles.card}>Maestro</div>
          </div>
          <p className={styles.text}>
            Alla korttransaktioner är krypterade med SSL-teknologi och följer PCI DSS-standarder.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Digitala Plånböcker</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>PayPal</strong>
              Snabb och säker betalning med ditt PayPal-konto
            </li>
            <li className={styles.listItem}>
              <strong>Apple Pay</strong>
              Betala med ett klick på Apple-enheter
            </li>
            <li className={styles.listItem}>
              <strong>Google Pay</strong>
              Snabb checkout med Google Pay
            </li>
            <li className={styles.listItem}>
              <strong>Swish</strong>
              Populär svensk mobilbetalning
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Köp Nu, Betala Senare</h2>
          <p className={styles.text}>
            <strong>Klarna:</strong> Dela upp betalningen i 3 räntefria delbetalningar
          </p>
          <p className={styles.text}>
            <strong>Afterpay:</strong> Betala i 4 delbetalningar utan ränta
          </p>
          <p className={styles.text}>
            Inga dolda avgifter eller räntekostnader vid betalning i tid.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Säkerhet</h2>
          <p className={styles.text}>
            All betalningsinformation krypteras. Vi sparar aldrig fullständiga kortuppgifter. 3D Secure-verifiering för extra säkerhet. Bedrägeriövervakning i realtid.
          </p>
        </section>
      </div>
    </div>
  );
}
