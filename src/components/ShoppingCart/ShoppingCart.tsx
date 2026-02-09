'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, applyDiscountCode } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountError, setDiscountError] = useState('');

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      applyDiscountCode(discountCode);
      setDiscountCode('');
      setDiscountError('');
    } else {
      setDiscountError('Vänligen ange en rabattkod');
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyContent}>
          <h2>Kundvagnen är tom</h2>
          <p>Börja handla och lägg till produkter i din varukorg</p>
          <Link href="/catalog" className={styles.continueShopping}>
            Fortsätt handla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Varukorg</h1>

      <div className={styles.content}>
        {/* Cart Items */}
        <div className={styles.itemsSection}>
          <div className={styles.itemsHeader}>
            <span>Produkt</span>
            <span>Pris</span>
            <span>Antal</span>
            <span>Totalt</span>
          </div>

          {cart.items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImage}>
                <Image
                  src={item.product.image || item.product.images[0] || '/placeholder.jpg'}
                  alt={item.product.name}
                  width={80}
                  height={100}
                  className={styles.image}
                />
              </div>

              <div className={styles.itemInfo}>
                <h3 className={styles.itemName}>{item.product.name}</h3>
                <p className={styles.itemVariants}>
                  Storlek: {item.selectedSize} | Färg: {item.selectedColor}
                </p>
              </div>

              <div className={styles.itemPrice}>{item.price} kr</div>

              <div className={styles.itemQuantity}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <div className={styles.itemTotal}>{item.price * item.quantity} kr</div>

              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
                aria-label="Ta bort från varukorg"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summary}>
            <h2>Ordersammanfattning</h2>

            {/* Discount Code */}
            <div className={styles.discountSection}>
              <input
                type="text"
                placeholder="Rabattkod"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className={styles.discountInput}
              />
              <button onClick={handleApplyDiscount} className={styles.applyButton}>
                Använd
              </button>
              {discountError && <p className={styles.error}>{discountError}</p>}
            </div>

            {/* Price Breakdown */}
            <div className={styles.priceBreakdown}>
              <div className={styles.breakdownRow}>
                <span>Delsumma</span>
                <span>{cart.subtotal} kr</span>
              </div>

              <div className={styles.breakdownRow}>
                <span>Frakt</span>
                <span>{cart.shippingCost} kr</span>
              </div>

              {cart.discountAmount > 0 && (
                <div className={styles.breakdownRow}>
                  <span>Rabatt ({cart.discountCode})</span>
                  <span className={styles.discount}>-{cart.discountAmount} kr</span>
                </div>
              )}

              <div className={`${styles.breakdownRow} ${styles.total}`}>
                <span>Totalt</span>
                <span>{cart.total} kr</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" className={styles.checkoutButton}>
              Gå till kassan
            </Link>

            {/* Continue Shopping */}
            <Link href="/catalog" className={styles.continueLink}>
              Fortsätt handla
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
