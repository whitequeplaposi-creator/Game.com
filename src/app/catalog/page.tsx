'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductFilter from '@/components/ProductFilter/ProductFilter';
import Sort from '@/components/Sort/Sort';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { useFilters } from '@/context/FilterContext';
import { Product } from '@/types';
import styles from './catalog.module.css';

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Röd Klänning',
    slug: 'elegant-rod-klanning',
    description: 'Vacker röd klänning perfekt för speciella tillfällen',
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=300&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=300&h=400&fit=crop',
    ],
    category: 'Klänningar',
    rating: 4.5,
    reviewCount: 234,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Röd', 'Svart', 'Blå'],
    variants: [
      { id: '1-1', size: 'M', color: 'Röd', inStock: true, sku: 'RED-M' },
    ],
    inStock: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Casual Vit T-shirt',
    slug: 'casual-vit-t-shirt',
    description: 'Bekväm vit t-shirt för vardaglig användning',
    price: 99,
    originalPrice: 199,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
    ],
    category: 'Toppar',
    rating: 4.2,
    reviewCount: 156,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Vit', 'Svart', 'Grå'],
    variants: [
      { id: '2-1', size: 'M', color: 'Vit', inStock: true, sku: 'WHITE-M' },
    ],
    inStock: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Skinny Jeans',
    slug: 'skinny-jeans',
    description: 'Klassiska skinny jeans i mörkblå',
    price: 349,
    originalPrice: 699,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=400&fit=crop',
    ],
    category: 'Skor',
    rating: 4.7,
    reviewCount: 512,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Mörkblå', 'Ljusblå', 'Svart'],
    variants: [
      { id: '3-1', size: 'M', color: 'Mörkblå', inStock: true, sku: 'DARKBLUE-M' },
    ],
    inStock: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Sportiga Sneakers',
    slug: 'sportiga-sneakers',
    description: 'Bekväma och moderna sneakers',
    price: 449,
    originalPrice: 899,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
    ],
    category: 'Skor',
    rating: 4.6,
    reviewCount: 389,
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Vit', 'Svart', 'Rosa'],
    variants: [
      { id: '4-1', size: '39', color: 'Vit', inStock: true, sku: 'WHITE-39' },
    ],
    inStock: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const { filters } = useFilters();
  const category = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    // Filter by category from URL
    if (category) {
      products = products.filter((p) => p.category === category);
    }

    // Filter by selected categories
    if (filters.categories.length > 0) {
      products = products.filter((p) => filters.categories.includes(p.category));
    }

    // Filter by price range
    products = products.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Filter by sizes
    if (filters.sizes.length > 0) {
      products = products.filter((p) =>
        filters.sizes.some((size) => p.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      products = products.filter((p) =>
        filters.colors.some((color) => p.colors.includes(color))
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'newest':
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'priceLowToHigh':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
      default:
        products.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return products;
  }, [filters, category]);

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
