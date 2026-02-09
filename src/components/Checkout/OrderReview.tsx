'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import { CheckoutStep } from '@/types/checkout';
import styles from './OrderReview.module.css';

interface OrderReviewProps {
  onPlaceOrder: () => void;
  onBack?: () => void;
}

export default function OrderReview({ onPlaceOrder, onBack }: OrderReviewProps) {
  const { cart } = useCart();
  const { state, setAgreedToTerms, setSubscribeToNewsletter, goToStep } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = async () => {
    if (!state.agreedToTerms) {
      alert('Du måste godkänna användarvillkoren');
      return;
    }

    setIsProcessing(true);
    await onPlaceOrder();
    setIsProcessing(false);
  };

  const calculatePricing = () => {
    const subtotal = cart.subtotal;
    let discount = 0;

    if (state.discountCode) {
      if (state.discountCode === 'SAVE10') discount = subtotal * 0.1;
      else if (state.discountCode === 'WELCOME20') discount = subtotal * 0.2;
      else if (state.discountCode === 'SUMMER25') discount = subtotal * 0.25;
    }

    const bonusPointsValue = state.useBonusPoints ? 50 : 0;
    const shippingCost = state.shippingMethod?.cost || 0;
    const tax = (subtotal - discount) * 0.25;
    const total = subtotal - discount - bonusPointsValue + shippingCost + tax;

    return {
      subtotal,
      discount,
      bonusPointsValue,
      shippingCost,
      tax,
      total: Math.max(0, total),
    };
  };

  const pricing = calculatePricing();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Granska din beställning</h2>
      <p className={styles.subtitle}>Kontrollera att allt är korrekt innan du slutför köpet</p>

      <div className={styles.content}>
        {/* Products */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Produkter ({cart.items.length})</h3>
            <button
              type="button"
              onClick={() => goToStep(CheckoutStep.CART)}
              className={styles.editButton}
            >
              Redigera
            </button>
          </div>
          <div className={styles.productsList}>
            {cart.items.map((item) => (
              <div key={item.id} className={styles.productItem}>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>{item.product.name}</h4>
                  <p className={styles.productVariant}>
                    Storlek: {item.selectedSize} | Färg: {item.selectedColor}
                  </p>
                  <p className={styles.productQuantity}>Antal: {item.quantity}</p>
                </div>
                <div className={styles.productPrice}>
                  {item.price * item.quantity} kr
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Address */}
        {state.shippingAddress && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Leveransadress</h3>
              <button
                type="button"
                onClick={() => goToStep(CheckoutStep.SHIPPING_ADDRESS)}
                className={styles.editButton}
              >
                Redigera
              </button>
            </div>
            <div className={styles.addressBox}>
              <p className={styles.addressName}>
                {state.shippingAddress.firstName} {state.shippingAddress.lastName}
              </p>
              <p>{state.shippingAddress.addressLine1}</p>
              {state.shippingAddress.addressLine2 && (
                <p>{state.shippingAddress.addressLine2}</p>
              )}
              <p>
                {state.shippingAddress.postalCode} {state.shippingAddress.city}
              </p>
              <p>{state.shippingAddress.state}</p>
              <p className={styles.addressContact}>
                E-post: {state.shippingAddress.email}
              </p>
              <p className={styles.addressContact}>
                Telefon: {state.shippingAddress.phone}
              </p>
            </div>
          </div>
        )}

        {/* Shipping Method */}
        {state.shippingMethod && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Leveransmetod</h3>
              <button
                type="button"
                onClick={() => goToStep(CheckoutStep.SHIPPING_METHOD)}
                className={styles.editButton}
              >
                Redigera
              </button>
            </div>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>{state.shippingMethod.name}</p>
              <p className={styles.infoDetail}>{state.shippingMethod.description}</p>
              <p className={styles.infoDetail}>
                Leveranstid: {state.shippingMethod.estimatedDays} arbetsdagar
              </p>
            </div>
          </div>
        )}

        {/* Payment Method */}
        {state.paymentMethod && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Betalningsmetod</h3>
              <button
                type="button"
                onClick={() => goToStep(CheckoutStep.PAYMENT)}
                className={styles.editButton}
              >
                Redigera
              </button>
            </div>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                {state.paymentMethod.type === 'credit_card' && 'Kreditkort'}
                {state.paymentMethod.type === 'paypal' && 'PayPal'}
                {state.paymentMethod.type === 'klarna' && 'Klarna'}
                {state.paymentMethod.type === 'swish' && 'Swish'}
                {state.paymentMethod.type === 'gift_card' && 'Presentkort'}
              </p>
              {state.paymentMethod.cardLast4 && (
                <p className={styles.infoDetail}>
                  {state.paymentMethod.cardBrand} ****{state.paymentMethod.cardLast4}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Ordersammanfattning</h3>
          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <span>Delsumma</span>
              <span>{pricing.subtotal.toFixed(2)} kr</span>
            </div>
            {pricing.discount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discount}`}>
                <span>Rabatt ({state.discountCode})</span>
                <span>-{pricing.discount.toFixed(2)} kr</span>
              </div>
            )}
            {pricing.bonusPointsValue > 0 && (
              <div className={`${styles.summaryRow} ${styles.discount}`}>
                <span>Bonuspoäng</span>
                <span>-{pricing.bonusPointsValue.toFixed(2)} kr</span>
              </div>
            )}
            <div className={styles.summaryRow}>
              <span>Frakt</span>
              <span>
                {pricing.shippingCost === 0
                  ? 'Gratis'
                  : `${pricing.shippingCost.toFixed(2)} kr`}
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span>Moms (25%)</span>
              <span>{pricing.tax.toFixed(2)} kr</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Totalt</span>
              <span>{pricing.total.toFixed(2)} kr</span>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className={styles.section}>
          <div className={styles.termsBox}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={state.agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className={styles.checkbox}
                required
              />
              <span>
                Jag har läst och godkänner{' '}
                <a href="/terms" target="_blank" className={styles.link}>
                  användarvillkoren
                </a>{' '}
                och{' '}
                <a href="/privacy" target="_blank" className={styles.link}>
                  integritetspolicyn
                </a>
              </span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={state.subscribeToNewsletter}
                onChange={(e) => setSubscribeToNewsletter(e.target.checked)}
                className={styles.checkbox}
              />
              <span>Jag vill få exklusiva erbjudanden och nyheter via e-post</span>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        {onBack && (
          <button type="button" onClick={onBack} className={styles.backButton}>
            Tillbaka
          </button>
        )}
        <button
          type="button"
          onClick={handlePlaceOrder}
          disabled={!state.agreedToTerms || isProcessing}
          className={styles.placeOrderButton}
        >
          {isProcessing ? 'Behandlar...' : 'SLUTFÖR BESTÄLLNING'}
        </button>
      </div>
    </div>
  );
}
