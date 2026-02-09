import React from 'react';
import styles from './services.module.css';

export default function AccountServicesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Andra Service</h1>
        
        <section className={styles.section}>
          <h2>Våra Tjänster</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Personlig Shopping</h3>
              <p>Få hjälp av våra modeexperter att hitta den perfekta looken för dig.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Skräddarsydda Ändringar</h3>
              <p>Vi erbjuder professionella skräddartjänster för att anpassa dina kläder perfekt.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Presentkort</h3>
              <p>Köp presentkort i valfri valör - det perfekta gåvoalternativet.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>VIP Medlemskap</h3>
              <p>Bli VIP-medlem och få exklusiva erbjudanden och tidig tillgång till nya kollektioner.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Styling Konsultation</h3>
              <p>Boka en personlig styling-session online eller i butik.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Företagslösningar</h3>
              <p>Specialerbjudanden och tjänster för företag och organisationer.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Kontakta Oss</h2>
          <p>För mer information om våra tjänster, vänligen kontakta vår kundservice.</p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> service@shein.com</p>
            <p><strong>Telefon:</strong> +46 8 123 456 78</p>
            <p><strong>Öppettider:</strong> Mån-Fre 09:00-17:00</p>
          </div>
        </section>
      </div>
    </div>
  );
}
