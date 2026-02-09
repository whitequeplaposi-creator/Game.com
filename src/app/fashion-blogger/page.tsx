import styles from '../info-page.module.css';

export default function FashionBloggerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Fashion Blogger Program</h1>
        <p className={styles.description}>
          Bli en del av SHEIN Fashion Blogger-communityt och dela din passion för mode med världen!
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fördelar med Programmet</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Exklusiv tillgång</strong>
              Få tillgång till nya kollektioner innan de lanseras
            </li>
            <li className={styles.listItem}>
              <strong>Gratis produkter</strong>
              Få produkter för recensioner och styling
            </li>
            <li className={styles.listItem}>
              <strong>Tjäna provision</strong>
              Möjlighet att tjäna provision på försäljning
            </li>
            <li className={styles.listItem}>
              <strong>Exponering</strong>
              Exponering på vår plattform och sociala medier
            </li>
            <li className={styles.listItem}>
              <strong>Exklusiva events</strong>
              Inbjudningar till exklusiva events och modevisningar
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vem Kan Ansöka?</h2>
          <p className={styles.text}>
            Vi välkomnar bloggare, influencers och content creators från alla bakgrunder. Oavsett om du har tusentals följare eller precis har börjat din resa, om du har passion för mode och kreativitet, vill vi höra från dig.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hur Fungerar Det?</h2>
          <p className={styles.text}>
            Efter att du blivit godkänd får du tillgång till vår influencer-portal där du kan välja produkter, spåra dina prestationer och få inspiration. Du skapar innehåll med våra produkter och delar det med din publik. För varje försäljning som genereras genom dina unika länkar tjänar du provision.
          </p>
        </section>
      </div>
    </div>
  );
}
