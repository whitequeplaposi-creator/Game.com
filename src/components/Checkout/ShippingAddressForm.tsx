'use client';

import React, { useState, useEffect } from 'react';
import { Address } from '@/types/checkout';
import styles from './ShippingAddressForm.module.css';

interface ShippingAddressFormProps {
  initialAddress?: Address;
  onSubmit: (address: Address) => void;
  onCancel?: () => void;
}

interface FormErrors {
  [key: string]: string;
}

const countries = [
  { code: 'SE', name: 'Sverige' },
  { code: 'NO', name: 'Norge' },
  { code: 'DK', name: 'Danmark' },
  { code: 'FI', name: 'Finland' },
];

export default function ShippingAddressForm({
  initialAddress,
  onSubmit,
  onCancel,
}: ShippingAddressFormProps) {
  const [formData, setFormData] = useState<Address>(
    initialAddress || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'SE',
    }
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Minst 2 tecken krävs' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Ogiltig e-postadress'
          : '';
      case 'phone':
        return !/^[\d\s\-\+\(\)]{8,}$/.test(value)
          ? 'Ogiltigt telefonnummer'
          : '';
      case 'addressLine1':
        return value.trim().length < 5 ? 'Ange en giltig adress' : '';
      case 'city':
        return value.trim().length < 2 ? 'Ange en giltig stad' : '';
      case 'state':
        return value.trim().length < 2 ? 'Ange län/region' : '';
      case 'postalCode':
        return !/^\d{3}\s?\d{2}$/.test(value) && formData.country === 'SE'
          ? 'Ogiltigt postnummer (format: 123 45)'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'addressLine2') {
        const error = validateField(key, formData[key as keyof Address] as string);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // Mark all fields as touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Submit if no errors
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        {/* First Name */}
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>
            Förnamn <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <span id="firstName-error" className={styles.errorMessage} role="alert">
              {errors.firstName}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>
            Efternamn <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <span id="lastName-error" className={styles.errorMessage} role="alert">
              {errors.lastName}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            E-postadress <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.errorMessage} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Telefonnummer <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="070-123 45 67"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.errorMessage} role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Address Line 1 */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="addressLine1" className={styles.label}>
            Adress <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.addressLine1 ? styles.inputError : ''}`}
            placeholder="Gatuadress och nummer"
            aria-required="true"
            aria-invalid={!!errors.addressLine1}
            aria-describedby={errors.addressLine1 ? 'addressLine1-error' : undefined}
          />
          {errors.addressLine1 && (
            <span id="addressLine1-error" className={styles.errorMessage} role="alert">
              {errors.addressLine1}
            </span>
          )}
        </div>

        {/* Address Line 2 */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="addressLine2" className={styles.label}>
            Adress rad 2 (valfritt)
          </label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className={styles.input}
            placeholder="Lägenhetsnummer, våning, etc."
          />
        </div>

        {/* Postal Code */}
        <div className={styles.formGroup}>
          <label htmlFor="postalCode" className={styles.label}>
            Postnummer <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.postalCode ? styles.inputError : ''}`}
            placeholder="123 45"
            aria-required="true"
            aria-invalid={!!errors.postalCode}
            aria-describedby={errors.postalCode ? 'postalCode-error' : undefined}
          />
          {errors.postalCode && (
            <span id="postalCode-error" className={styles.errorMessage} role="alert">
              {errors.postalCode}
            </span>
          )}
        </div>

        {/* City */}
        <div className={styles.formGroup}>
          <label htmlFor="city" className={styles.label}>
            Stad <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
            aria-required="true"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? 'city-error' : undefined}
          />
          {errors.city && (
            <span id="city-error" className={styles.errorMessage} role="alert">
              {errors.city}
            </span>
          )}
        </div>

        {/* State */}
        <div className={styles.formGroup}>
          <label htmlFor="state" className={styles.label}>
            Län <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.state ? styles.inputError : ''}`}
            placeholder="Stockholm"
            aria-required="true"
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? 'state-error' : undefined}
          />
          {errors.state && (
            <span id="state-error" className={styles.errorMessage} role="alert">
              {errors.state}
            </span>
          )}
        </div>

        {/* Country */}
        <div className={styles.formGroup}>
          <label htmlFor="country" className={styles.label}>
            Land <span className={styles.required}>*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={styles.select}
            aria-required="true"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formActions}>
        {onCancel && (
          <button type="button" onClick={onCancel} className={styles.cancelButton}>
            Avbryt
          </button>
        )}
        <button type="submit" className={styles.submitButton}>
          Fortsätt till leveransmetod
        </button>
      </div>
    </form>
  );
}
