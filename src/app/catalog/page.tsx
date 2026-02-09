'use client';

import React, { useMemo, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductFilter from '@/components/ProductFilter/ProductFilter';
import Sort from '@/components/Sort/Sort';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { useFilters } from '@/context/FilterContext';
import { Product } from '@/types';
import styles from './catalog.module.css';

function CatalogContent() {
  const searchParams = useSearchParams();
  const { filters } = useFilters();
  const category = searchParams.get('category');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data.products || []);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category from URL
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Filter by selected categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) => filters.categories.includes(p.category));
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((p) =>
        filters.sizes.some((size) => p.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter((p) =>
        filters.colors.some((color) => p.colors.includes(color))
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      case 'priceLowToHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
    }

    return filtered;
  }, [filters, category, products]);

  if (loading) {
    return <div className={styles.container}>Laddar produkter...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category ? `${category}` : 'Alla Produkter'}</h1>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ProductFilter />
        </aside>

        <div className={styles.main}>
          <Sort />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className={styles.container}>Laddar...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
