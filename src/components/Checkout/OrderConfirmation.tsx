'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCheckout } from '@/context/CheckoutContext';
import styles from './OrderConfirmation.module.css';

interface OrderConfirmationProps {
  orderId: string;
  orderNumber: string;
}

export default function OrderConfirmation({ orderId, orderNumber }: OrderConfirmationProps) {
  const { state, resetCheckout } = useCheckout();

  useEffect(() => {
    // Reset checkout state after successful order
    const timer = setTimeout(() => {
      resetCheckout();
    }, 5000);

    return () => clearTimeout(timer);
  }, [resetCheckout]);

  return (
    <div className={styles.container}>
      <div className={styles.successIcon}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#4CAF50" strokeWidth="4" />
          <path
            d="M25 40L35 50L55 30"
            stroke="#4CAF50"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className={styles.title}>Tack för din beställning!</h1>
      <p className={styles.subtitle}>
        Din order har mottagits och behandlas nu
      </p>

      <div className={styles.orderInfo}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Ordernummer:</span>
          <span className={styles.value}>{orderNumber}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Order-ID:</span>
          <span className={styles.value}>{orderId}</span>
        </div>
        {state.shippingAddress?.email && (
          <div className={styles.infoRow}>
            <span className={styles.label}>Bekräftelse skickad till:</span>
            <span className={styles.value}>{state.shippingAddress.email}</span>
          </div>
        )}
      </div>

      <div className={styles.detailsBox}>
        <h2 className={styles.detailsTitle}>Vad händer nu?</h2>
        <ul className={styles.stepsList}>
          <li>Du får en orderbekräftelse via e-post inom några minuter</li>
          <li>Vi behandlar din beställning och förbereder den för leverans</li>
          <li>Du får ett spårningsnummer när paketet skickas</li>
          <li>
            Beräknad leveranstid:{' '}
            {state.shippingMethod?.estimatedDays || 3-5} arbetsdagar
          </li>
        </ul>
      </div>

      {state.shippingAddress && (
        <div className={styles.addressBox}>
          <h3 className={styles.addressTitle}>Leveransadress</h3>
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
        </div>
      )}

      <div className={styles.actions}>
        <Link href={`/account/orders/${orderId}`} className={styles.primaryButton}>
          Visa orderdetaljer
        </Link>
        <Link href="/catalog" className={styles.secondaryButton}>
          Fortsätt handla
        </Link>
      </div>

      <div className={styles.supportBox}>
        <p className={styles.supportText}>
          Har du frågor om din beställning?
        </p>
        <Link href="/contact" className={styles.supportLink}>
          Kontakta kundservice
        </Link>
      </div>
    </div>
  );
}
