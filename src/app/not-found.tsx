import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 - Sidan hittades inte | SHEIN',
  description: 'Sidan du letar efter kunde inte hittas. Utforska vårt sortiment av mode och accessoarer på SHEIN.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: '404 - Sidan hittades inte',
    description: 'Sidan du letar efter kunde inte hittas. Utforska vårt sortiment på SHEIN.',
    type: 'website',
  },
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Sidan hittades inte</h2>
        <p className={styles.description}>
          Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats eller tagits bort.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Tillbaka till startsidan
          </Link>
          <Link href="/catalog" className={styles.secondaryButton}>
            Utforska produkter
          </Link>
        </div>
      </div>
    </div>
  );
}
