'use client';

import React, { useState } from 'react';
import { PaymentType, PaymentMethod } from '@/types/checkout';
import CreditCardForm from './CreditCardForm';
import styles from './PaymentMethodSelector.module.css';
import { MastercardIcon } from '../BrandIcons';

interface PaymentMethodSelectorProps {
  onSelect: (method: PaymentMethod) => void;
  onContinue: () => void;
  onBack?: () => void;
}

const paymentOptions = [
  {
    type: PaymentType.CREDIT_CARD,
    name: 'Mastercard',
    description: 'Betala med Mastercard kreditkort eller debitkort',
    icon: <MastercardIcon style={{ width: '70px', height: '32px' }} />,
  },
];

export default function PaymentMethodSelector({
  onSelect,
  onContinue,
  onBack,
}: PaymentMethodSelectorProps) {
  const [selectedType, setSelectedType] = useState<PaymentType | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleSelectType = (type: PaymentType) => {
    setSelectedType(type);
    setPaymentMethod(null);

    // For non-card payments, create payment method immediately
    if (type !== PaymentType.CREDIT_CARD && type !== PaymentType.DEBIT_CARD) {
      const method: PaymentMethod = { type };
      setPaymentMethod(method);
      onSelect(method);
    }
  };

  const handleCardSubmit = (cardData: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  }) => {
    const method: PaymentMethod = {
      type: PaymentType.CREDIT_CARD,
      cardLast4: cardData.cardNumber.slice(-4),
      cardBrand: detectCardBrand(cardData.cardNumber),
    };
    setPaymentMethod(method);
    onSelect(method);
  };

  const handleContinue = () => {
    if (paymentMethod) {
      onContinue();
    }
  };

  const detectCardBrand = (cardNumber: string): string => {
    const cleaned = cardNumber.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'Visa';
    if (cleaned.startsWith('5')) return 'Mastercard';
    if (cleaned.startsWith('3')) return 'American Express';
    return 'Unknown';
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Välj betalningsmetod</h2>
      <p className={styles.subtitle}>Hur vill du betala för din beställning?</p>

      <div className={styles.paymentOptions}>
        {paymentOptions.map((option) => (
          <div
            key={option.type}
            className={`${styles.optionCard} ${
              selectedType === option.type ? styles.selected : ''
            }`}
            onClick={() => handleSelectType(option.type)}
            role="radio"
            aria-checked={selectedType === option.type}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelectType(option.type);
              }
            }}
          >
            <div className={styles.radioButton}>
              <div className={styles.radioOuter}>
                {selectedType === option.type && <div className={styles.radioInner} />}
              </div>
            </div>

            <div className={styles.optionIcon}>{option.icon}</div>

            <div className={styles.optionContent}>
              <h3 className={styles.optionName}>{option.name}</h3>
              <p className={styles.optionDescription}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Card Form */}
      {selectedType === PaymentType.CREDIT_CARD && (
        <div className={styles.paymentForm}>
          <CreditCardForm onSubmit={handleCardSubmit} />
        </div>
      )}

      {/* Security Info */}
      <div className={styles.securityInfo}>
        <svg className={styles.lockIcon} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Din betalning är säker och krypterad</span>
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
          disabled={!paymentMethod}
          className={styles.continueButton}
        >
          Fortsätt till granskning
        </button>
      </div>
    </div>
  );
}
