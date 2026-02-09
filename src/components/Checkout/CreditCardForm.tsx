'use client';

import React, { useState } from 'react';
import styles from './CreditCardForm.module.css';
import { VisaIcon, MastercardIcon } from '../BrandIcons';

// Amex icon component
const AmexIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#006FCF"/>
    <text x="24" y="20" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">AMEX</text>
  </svg>
);

interface CreditCardFormProps {
  onSubmit: (data: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  }) => void;
}

export default function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const validateCardNumber = (number: string): boolean => {
    const cleaned = number.replace(/\s/g, '');
    return /^\d{13,19}$/.test(cleaned);
  };

  const validateExpiryDate = (date: string): boolean => {
    const [month, year] = date.split('/');
    if (!month || !year) return false;

    const monthNum = parseInt(month, 10);
    const yearNum = parseInt('20' + year, 10);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (monthNum < 1 || monthNum > 12) return false;
    if (yearNum < currentYear) return false;
    if (yearNum === currentYear && monthNum < currentMonth) return false;

    return true;
  };

  const validateCVV = (cvv: string): boolean => {
    return /^\d{3,4}$/.test(cvv);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value.replace(/\D/g, '').slice(0, 16));
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : formattedValue,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = 'Ogiltigt kortnummer';
    }

    if (formData.cardHolder.trim().length < 3) {
      newErrors.cardHolder = 'Ange kortinnehavarens namn';
    }

    if (!validateExpiryDate(formData.expiryDate)) {
      newErrors.expiryDate = 'Ogiltigt utgångsdatum';
    }

    if (!validateCVV(formData.cvv)) {
      newErrors.cvv = 'Ogiltigt CVV';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        cardNumber: formData.cardNumber,
        cardHolder: formData.cardHolder,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
      });
    }
  };

  const detectCardType = (number: string): string => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    return '';
  };

  const cardType = detectCardType(formData.cardNumber);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="cardNumber" className={styles.label}>
          Kortnummer <span className={styles.required}>*</span>
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`${styles.input} ${errors.cardNumber ? styles.inputError : ''}`}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            aria-required="true"
            aria-invalid={!!errors.cardNumber}
          />
          {cardType && (
            <div className={styles.cardIcon}>
              {cardType === 'visa' && <VisaIcon className={styles.brandIcon} />}
              {cardType === 'mastercard' && <MastercardIcon className={styles.brandIcon} />}
              {cardType === 'amex' && <AmexIcon className={styles.brandIcon} />}
            </div>
          )}
        </div>
        {errors.cardNumber && (
          <span className={styles.errorMessage}>{errors.cardNumber}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cardHolder" className={styles.label}>
          Kortinnehavarens namn <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          value={formData.cardHolder}
          onChange={handleChange}
          className={`${styles.input} ${errors.cardHolder ? styles.inputError : ''}`}
          placeholder="NAMN EFTERNAMN"
          style={{ textTransform: 'uppercase' }}
          aria-required="true"
          aria-invalid={!!errors.cardHolder}
        />
        {errors.cardHolder && (
          <span className={styles.errorMessage}>{errors.cardHolder}</span>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="expiryDate" className={styles.label}>
            Utgångsdatum <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className={`${styles.input} ${errors.expiryDate ? styles.inputError : ''}`}
            placeholder="MM/ÅÅ"
            maxLength={5}
            aria-required="true"
            aria-invalid={!!errors.expiryDate}
          />
          {errors.expiryDate && (
            <span className={styles.errorMessage}>{errors.expiryDate}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cvv" className={styles.label}>
            CVV <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className={`${styles.input} ${errors.cvv ? styles.inputError : ''}`}
            placeholder="123"
            maxLength={4}
            aria-required="true"
            aria-invalid={!!errors.cvv}
          />
          {errors.cvv && <span className={styles.errorMessage}>{errors.cvv}</span>}
        </div>
      </div>

      <div className={styles.saveCardOption}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="saveCard"
            checked={formData.saveCard}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>Spara kort för framtida köp</span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Använd detta kort
      </button>
    </form>
  );
}
