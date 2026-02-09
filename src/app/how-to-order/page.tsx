import styles from '../info-page.module.css';

export default function HowToOrderPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Hur Man Beställer</h1>
        <p className={styles.description}>
          Att handla på SHEIN är enkelt och säkert. Följ dessa steg för en smidig shoppingupplevelse.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Steg 1: Bläddra och Upptäck</h2>
          <p className={styles.text}>
            Utforska våra kategorier: Dam, Herr, Barn, Accessoarer, Skönhet. Använd filter för att hitta exakt vad du letar efter (storlek, färg, pris, stil). Läs produktbeskrivningar, se bilder och kolla kundrecensioner.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Steg 2: Lägg Till i Varukorgen</h2>
          <p className={styles.text}>
            Välj storlek, färg och antal. Klicka på "Lägg till i varukorgen". Fortsätt shoppa eller gå till kassan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Steg 3: Granska Din Varukorg</h2>
          <p className={styles.text}>
            Kontrollera att alla produkter är korrekta. Använd rabattkoder om du har några. Se totalkostnad inklusive frakt.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Steg 4: Kassa</h2>
          <p className={styles.text}>
            Logga in eller fortsätt som gäst. Ange leveransadress. Välj leveransmetod. Välj betalningsmetod. Granska och bekräfta din beställning.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Steg 5: Bekräftelse</h2>
          <p className={styles.text}>
            Du får en orderbekräftelse via e-post. Spåra din beställning via ditt konto. Vänta på leverans!
          </p>
        </section>
      </div>
    </div>
  );
}
