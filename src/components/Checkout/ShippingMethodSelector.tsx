'use client';

import React, { useState } from 'react';
import { useCheckout } from '@/context/CheckoutContext';
import { SHIPPING_METHODS } from '@/data/shippingMethods';
import styles from './ShippingMethodSelector.module.css';

interface ShippingMethodSelectorProps {
  onContinue: () => void;
  onBack?: () => void;
}

export default function ShippingMethodSelector({
  onContinue,
  onBack,
}: ShippingMethodSelectorProps) {
  const { state, setShippingMethod } = useCheckout();
  const [selected, setSelected] = useState<string | undefined>(state.shippingMethod?.id);

  const handleSelect = (method: typeof SHIPPING_METHODS[0]) => {
    setSelected(method.id);
    setShippingMethod(method);
  };

  const handleContinue = () => {
    if (selected) {
      onContinue();
    }
  };

  const formatDeliveryTime = (days: string): string => {
    const numDays = parseInt(days);
    if (numDays === 0) return 'Samma dag';
    if (numDays === 1) return '1 arbetsdag';
    return `${days} arbetsdagar`;
  };

  const formatPrice = (price: number): string => {
    return price === 0 ? 'Gratis' : `${price} kr`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Välj leveransmetod</h2>
      <p className={styles.subtitle}>Hur vill du få din beställning?</p>

      <div className={styles.methodsList}>
        {SHIPPING_METHODS.map((method) => (
          <div
            key={method.id}
            className={`${styles.methodCard} ${
              selected === method.id ? styles.selected : ''
            }`}
            onClick={() => handleSelect(method)}
            role="radio"
            aria-checked={selected === method.id}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(method);
              }
            }}
          >
            <div className={styles.radioButton}>
              <div className={styles.radioOuter}>
                {selected === method.id && <div className={styles.radioInner} />}
              </div>
            </div>

            <div className={styles.methodContent}>
              <div className={styles.methodHeader}>
                <h3 className={styles.methodName}>{method.name}</h3>
                <span className={styles.methodPrice}>{formatPrice(method.cost)}</span>
              </div>

              <p className={styles.methodDescription}>{method.description}</p>

              <div className={styles.methodDetails}>
                <div className={styles.detailItem}>
                  <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{formatDeliveryTime(method.estimatedDays)}</span>
                </div>

                <div className={styles.detailItem}>
                  <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <span>{method.carrier}</span>
                </div>

                {false && (
                  <div className={styles.detailItem}>
                    <svg
                      className={styles.icon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Spårbar</span>
                  </div>
                )}
              </div>

              {selected === method.id && (
                <div className={styles.estimatedDelivery}>
                  <svg
                    className={styles.checkIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Beräknad leverans:{' '}
                    {new Date(
                      Date.now() + parseInt(method.estimatedDays.split('-')[0]) * 24 * 60 * 60 * 1000
                    ).toLocaleDateString('sv-SE', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        {onBack && (
          <button type="button" onClick={onBack} className={styles.backButton}>
            Tillbaka
          </button>
        )}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className={styles.continueButton}
        >
          Fortsätt till betalning
        </button>
      </div>
    </div>
  );
}
