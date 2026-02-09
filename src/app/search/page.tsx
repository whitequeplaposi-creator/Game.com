'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { Product } from '@/types';
import styles from './search.module.css';

// Mock products
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Röd Klänning',
    slug: 'elegant-rod-klanning',
    description: 'Vacker röd klänning',
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=300&h=400&fit=crop',
    images: ['https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=300&h=400&fit=crop'],
    category: 'Klänningar',
    rating: 4.5,
    reviewCount: 234,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Röd', 'Svart', 'Blå'],
    variants: [{ id: '1-1', size: 'M', color: 'Röd', inStock: true, sku: 'RED-M' }],
    inStock: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sökresultat för "{query}"</h1>
      <p className={styles.resultCount}>{results.length} produkter hittades</p>
      <ProductGrid products={results} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className={styles.container}>Söker...</div>}>
      <SearchContent />
    </Suspense>
  );
}
