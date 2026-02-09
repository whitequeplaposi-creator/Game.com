'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useLocale } from '@/context/LocaleContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { formatPrice } = useLocale();
  
  const inWishlist = isInWishlist(parseInt(product.id));
  
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discountPercentage || 0;

  const hasSecondaryImage = product.images && product.images.length > 1;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const productIdNum = parseInt(product.id);
    
    if (inWishlist) {
      removeFromWishlist(productIdNum);
    } else {
      addToWishlist({
        id: productIdNum,
        name: product.name,
        price: product.price,
        image: product.image || product.images[0],
        category: product.category,
        rating: product.rating,
      });
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product, 1, 'M', 'Standard');
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Öppna snabbvy modal eller navigera till produktsidan
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageContainer}>
        <Image
          src={product.image || product.images[0] || '/placeholder.jpg'}
          alt={product.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />

        {hasSecondaryImage && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className={styles.hoverImage}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        )}

        <div className={styles.badges}>
          {/* Discount badge removed */}
          {product.isHot && <div className={styles.hotBadge}>HOT</div>}
        </div>

        <button
          className={`${styles.wishlistBtn} ${inWishlist ? styles.wishlistActive : ''}`}
          onClick={handleWishlistToggle}
          aria-label={inWishlist ? "Ta bort från önskelista" : "Lägg till i önskelista"}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <button
          className={styles.quickViewBtn}
          onClick={handleQuickView}
          aria-label="Snabbvy"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
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
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            className={styles.quickAddBtn}
            onClick={handleQuickAdd}
            aria-label="Snabbköp"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              <path d="M12 11h6m-3-3v6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
