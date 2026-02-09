'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShippingOption, PaymentOption } from '@/types';
import styles from './Checkout.module.css';
import { VisaIcon, MastercardIcon, DHLIcon, PostNordIcon, DBSchenkerIcon } from '../BrandIcons';

const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: 'postnord',
    name: 'PostNord Standard',
    price: 49,
    estimatedDays: 3,
    description: 'Leverans inom 3 arbetsdagar',
  },
  {
    id: 'dbschenker',
    name: 'DB Schenker Economy',
    price: 29,
    estimatedDays: 5,
    description: 'Leverans inom 5 arbetsdagar',
  },
  {
    id: 'dhl',
    name: 'DHL Express',
    price: 99,
    estimatedDays: 1,
    description: 'Leverans nästa arbetsdag',
  },
];

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'visa',
    name: 'Visa',
    icon: <VisaIcon />,
    description: 'Betala med Visa',
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    icon: <MastercardIcon />,
    description: 'Betala med Mastercard',
  },
];

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [selectedShipping, setSelectedShipping] = useState<string>('postnord');
  const [selectedPayment, setSelectedPayment] = useState<string>('visa');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Sverige',
  });

  const shippingCost = SHIPPING_OPTIONS.find((s) => s.id === selectedShipping)?.price || 0;
  const totalWithShipping = cart.total + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate order ID
    const newOrderId = 'ORD-' + Date.now().toString().slice(-8);
    setOrderId(newOrderId);
    setOrderComplete(true);
    setIsProcessing(false);

    // Clear cart
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className={styles.orderComplete}>
        <div className={styles.successIcon}>✓</div>
        <h1>Tack för din beställning!</h1>
        <p className={styles.orderId}>Ordernummer: {orderId}</p>
        <p className={styles.confirmationText}>
          En bekräftelse har skickats till {formData.email}
        </p>
        <div className={styles.orderActions}>
          <Link href="/account/orders" className={styles.viewOrderButton}>
            Visa mina beställningar
          </Link>
          <Link href="/catalog" className={styles.continueShoppingButton}>
            Fortsätt handla
          </Link>
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Din varukorg är tom</h2>
        <p>Lägg till produkter innan du går till kassan</p>
        <Link href="/catalog" className={styles.continueLink}>
          Fortsätt handla
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kassa</h1>

      <div className={styles.content}>
        {/* Left Column - Form */}
        <div className={styles.formSection}>
          <form onSubmit={handleSubmitOrder} className={styles.form}>
            {/* Shipping Address */}
            <div className={styles.formGroup}>
              <h2 className={styles.sectionTitle}>Leveransadress</h2>

              <div className={styles.formRow}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Förnamn"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Efternamn"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="E-postadress"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.input}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={styles.input}
              />

              <input
                type="text"
                name="address"
                placeholder="Gatuadress"
                value={formData.address}
                onChange={handleInputChange}
                required
                className={styles.input}
              />

              <div className={styles.formRow}>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postnummer"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Stad"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={styles.input}
              >
                <option value="Sverige">Sverige</option>
                <option value="Norge">Norge</option>
                <option value="Danmark">Danmark</option>
                <option value="Finland">Finland</option>
              </select>
            </div>

            {/* Shipping Method */}
            <div className={styles.formGroup}>
              <h2 className={styles.sectionTitle}>Leveransmetod</h2>

              <div className={styles.optionsGrid}>
                {SHIPPING_OPTIONS.map((option) => (
                  <label key={option.id} className={styles.optionLabel}>
                    <input
                      type="radio"
                      name="shipping"
                      value={option.id}
                      checked={selectedShipping === option.id}
                      onChange={(e) => setSelectedShipping(e.target.value)}
                      className={styles.radioInput}
                    />
                    <div className={`${styles.optionCard} ${selectedShipping === option.id ? styles.selected : ''}`}>
                      <div className={styles.optionHeader}>
                        <div className={styles.nameWithIcon}>
                          {option.id === 'dhl' && <DHLIcon className={styles.smallBrandIcon} />}
                          {option.id === 'postnord' && <PostNordIcon className={styles.smallBrandIcon} />}
                          {option.id === 'dbschenker' && <DBSchenkerIcon className={styles.smallBrandIcon} />}
                          <span className={styles.optionName}>{option.name}</span>
                        </div>
                        <span className={styles.optionPrice}>{option.price} kr</span>
                      </div>
                      <div className={styles.optionDescription}>{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className={styles.formGroup}>
              <h2 className={styles.sectionTitle}>Betalningsmetod</h2>

              <div className={styles.optionsGrid}>
                {PAYMENT_OPTIONS.map((option) => (
                  <label key={option.id} className={styles.optionLabel}>
                    <input
                      type="radio"
                      name="payment"
                      value={option.id}
                      checked={selectedPayment === option.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className={styles.radioInput}
                    />
                    <div className={`${styles.optionCard} ${selectedPayment === option.id ? styles.selected : ''}`}>
                      <div className={styles.paymentIconRow}>
                        {option.id === 'visa' && <VisaIcon className={styles.smallBrandIcon} />}
                        {option.id === 'mastercard' && <MastercardIcon className={styles.smallBrandIcon} />}
                        <span>{option.name}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isProcessing}>
              {isProcessing ? 'Behandlar beställning...' : 'Slutför Beställning'}
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summary}>
            <h2>Ordersammanfattning</h2>

            <div className={styles.items}>
              {cart.items.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{item.product.name}</div>
                    <div className={styles.itemDetails}>
                      {item.selectedSize} | {item.selectedColor} x {item.quantity}
                    </div>
                  </div>
                  <div className={styles.itemPrice}>{item.price * item.quantity} kr</div>
                </div>
              ))}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.priceBreakdown}>
              <div className={styles.breakdownRow}>
                <span>Delsumma</span>
                <span>{cart.subtotal} kr</span>
              </div>

              <div className={styles.breakdownRow}>
                <span>Leverans ({SHIPPING_OPTIONS.find((s) => s.id === selectedShipping)?.name})</span>
                <span>{shippingCost} kr</span>
              </div>

              {cart.discountAmount > 0 && (
                <div className={styles.breakdownRow}>
                  <span>Rabatt</span>
                  <span className={styles.discount}>-{cart.discountAmount} kr</span>
                </div>
              )}

              <div className={`${styles.breakdownRow} ${styles.total}`}>
                <span>Totalt</span>
                <span>{totalWithShipping} kr</span>
              </div>
            </div>

            <div className={styles.securityBadge}>
              🔒 Säker betalning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
