import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { UserIcon, PackageIcon, HeartIcon, MapPinIcon, TicketIcon, LockIcon, LogOutIcon } from '@/components/Icons/AccountIcons';

export const metadata: Metadata = {
  title: 'Mitt Konto - SHEIN',
  description: 'Hantera ditt SHEIN-konto',
};

export default function AccountPage() {
  return (
    <div className={styles.accountPage}>
      <div className={styles.container}>
        <div className={styles.accountLayout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>A</div>
              <div>
                <h3 className={styles.userName}>Användare</h3>
                <p className={styles.memberSince}>Medlem sedan 2024</p>
              </div>
            </div>

            <nav className={styles.nav}>
              <Link href="/account" className={`${styles.navItem} ${styles.active}`}>
                <span><UserIcon /></span> Personuppgifter
              </Link>
              <Link href="/account/orders" className={styles.navItem}>
                <span><PackageIcon /></span> Mina beställningar
              </Link>
              <button className={styles.navItem}>
                <span><HeartIcon /></span> Önskelista
              </button>
              <button className={styles.navItem}>
                <span><MapPinIcon /></span> Adresser
              </button>
              <button className={styles.navItem}>
                <span><TicketIcon /></span> Kuponger
              </button>
              <button className={styles.navItem}>
                <span><LockIcon /></span> Byt lösenord
              </button>
              <button className={styles.navItem} style={{ color: '#e60012' }}>
                <span><LogOutIcon /></span> Logga ut
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.content}>
            <h1 className={styles.sectionTitle}>Mitt Konto</h1>
            <p>Välkommen till ditt konto! Här kan du hantera dina personuppgifter och se dina beställningar.</p>

            <div style={{ marginTop: '30px' }}>
              <h3>Snabbval</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '15px' }}>
                <Link href="/account/orders" style={{ padding: '20px', border: '1px solid #eee', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}><PackageIcon /></div>
                  <strong>Mina beställningar</strong>
                </Link>
                <div style={{ padding: '20px', border: '1px solid #eee', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}><HeartIcon /></div>
                  <strong>Önskelista</strong>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
