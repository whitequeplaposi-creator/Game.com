import ProductGrid from '@/components/ProductGrid/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import SheinHero from '@/components/Hero/SheinHero';
import { products } from '@/data';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <SheinHero />
      <section className={styles.section}>
        <div className={styles.container}>
          <CategoryGrid />
        </div>
      </section>

      {/* Trendigt Nu Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              TRENDIGT NU
            </h2>
            <Link href="/catalog?category=Trending" className={styles.viewAllLink}>
              Se alla trender ›
            </Link>
          </div>
          <ProductGrid products={products.slice(0, 6)} />
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: '#fafafa' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>REKOMMENDERAT FÖR DIG</h2>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
