'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import styles from './wishlist.module.css';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleQuickAdd = (product: any) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        images: [product.image],
        category: product.category || '',
        rating: product.rating || 0,
        reviewCount: 0,
        sizes: ['S', 'M', 'L'],
        colors: ['Standard'],
        description: '',
        slug: '',
        createdAt: new Date(),
      },
      1,
      'M',
      'Standard'
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Min Önskelista</h1>
        
        {wishlist.length === 0 ? (
          <div className={styles.emptyState}>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className={styles.emptyIcon}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2 className={styles.emptyTitle}>Din önskelista är tom</h2>
            <p className={styles.emptyDescription}>
              Spara dina favoritprodukter här för att enkelt hitta dem senare
            </p>
            <Link href="/catalog" className={styles.shopButton}>
              Börja shoppa
            </Link>
          </div>
        ) : (
          <div className={styles.wishlistGrid}>
            {wishlist.map((product) => (
              <div key={product.id} className={styles.card}>
                <Link href={`/product/${product.id}`} className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  <button
                    className={styles.removeBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeFromWishlist(product.id);
                    }}
                    aria-label="Ta bort från önskelista"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </Link>

                <div className={styles.content}>
                  <Link href={`/product/${product.id}`} className={styles.name}>
                    {product.name}
                  </Link>

                  <div className={styles.bottomRow}>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>
                        {product.price}kr
                      </span>
                    </div>

                    <button
                      className={styles.quickAddBtn}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleQuickAdd(product);
                      }}
                      aria-label="Snabbköp"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        <path d="M12 11h6m-3-3v6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
