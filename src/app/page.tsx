import ProductGrid from '@/components/ProductGrid/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import SheinHero from '@/components/Hero/SheinHero';
import Link from 'next/link';
import styles from './page.module.css';

async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  const trendingProducts = products.slice(0, 6);

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
          <ProductGrid products={trendingProducts} />
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
