import styles from '../info-page.module.css';

export default function StudentDiscountPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Studentrabatt</h1>
        <p className={styles.description}>
          Studerar du? Få 15% extra rabatt på alla dina köp!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vem Kvalificerar?</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Gymnasieelever</li>
            <li className={styles.listItem}>Universitetsstudenter</li>
            <li className={styles.listItem}>Högskolestudenter</li>
            <li className={styles.listItem}>Yrkeshögskolestudenter</li>
            <li className={styles.listItem}>Doktorander</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Man Registrerar Sig</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>Verifiera din studentstatus via Student Beans eller UNiDAYS</li>
            <li className={styles.listItem}>Få din unika rabattkod</li>
            <li className={styles.listItem}>Använd koden vid varje köp</li>
            <li className={styles.listItem}>Njut av 15% rabatt!</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fördelar</h2>
          <div className={styles.grid}>
            <div className={styles.card}>15% rabatt på alla produkter (även reavaror!)</div>
            <div className={styles.card}>Exklusiva studentevenemang</div>
            <div className={styles.card}>Tidig tillgång till nya kollektioner</div>
            <div className={styles.card}>Specialerbjudanden för studenter</div>
            <div className={styles.card}>Gratis frakt vid köp över 500 kr</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Verifiering</h2>
          <p className={styles.text}>
            Verifieringen är enkel och säker genom våra partners Student Beans eller UNiDAYS. Du behöver giltig student-e-post (.edu eller .ac) eller studentlegitimation. Verifieringen förnyas årligen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Studentbudget-Tips</h2>
          <p className={styles.text}>
            Handla under reor för maximal besparing. Använd bonuspoäng tillsammans med studentrabatten. Följ oss på sociala medier för extra koder. Dela beställningar med vänner för fri frakt.
          </p>
        </section>
      </div>
    </div>
  );
}
