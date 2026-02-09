'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products.slice(0, 20));
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const startIndex = 0;
    const endIndex = page * itemsPerPage;
    setDisplayedProducts(products.slice(startIndex, endIndex));
  }, [products, page]);

  const hasMore = displayedProducts.length < products.length;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.skeleton}></div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Inga produkter hittades</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Ladda fler produkter
          </button>
        </div>
      )}
    </div>
  );
}
