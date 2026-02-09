'use client';

'use client';

import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import styles from './OrderSummary.module.css';

interface OrderSummaryProps {
  showDiscountInput?: boolean;
  showBonusPoints?: boolean;
}

export default function OrderSummary({
  showDiscountInput = true,
  showBonusPoints = true,
}: OrderSummaryProps) {
  const { cart } = useCart();
  const { state, applyDiscountCode, setUseBonusPoints } = useCheckout();

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

  const handleApplyDiscount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get('discountCode') as string;
    await applyDiscountCode(code);
  };

  const handleRemoveDiscount = () => {
    applyDiscountCode('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ordersammanfattning</h3>

      <div className={styles.itemsCount}>
        {cart.items.length} {cart.items.length === 1 ? 'produkt' : 'produkter'}
      </div>

      <div className={styles.priceRows}>
        <div className={styles.row}>
          <span>Delsumma</span>
          <span>{pricing.subtotal.toFixed(2)} kr</span>
        </div>

        {pricing.discount > 0 && (
          <div className={`${styles.row} ${styles.discount}`}>
            <span>Rabatt ({state.discountCode})</span>
            <span>-{pricing.discount.toFixed(2)} kr</span>
          </div>
        )}

        {pricing.bonusPointsValue > 0 && (
          <div className={`${styles.row} ${styles.discount}`}>
            <span>Bonuspoäng</span>
            <span>-{pricing.bonusPointsValue.toFixed(2)} kr</span>
          </div>
        )}

        <div className={styles.row}>
          <span>Frakt</span>
          <span>
            {state.shippingMethod
              ? pricing.shippingCost === 0
                ? 'Gratis'
                : `${pricing.shippingCost.toFixed(2)} kr`
              : 'Beräknas vid kassan'}
          </span>
        </div>

        <div className={styles.row}>
          <span>Moms (25%)</span>
          <span>{pricing.tax.toFixed(2)} kr</span>
        </div>
      </div>

      <div className={styles.total}>
        <span className={styles.totalLabel}>Totalt</span>
        <span className={styles.totalAmount}>{pricing.total.toFixed(2)} kr</span>
      </div>

      {showDiscountInput && (
        <div className={styles.discountSection}>
          <form onSubmit={handleApplyDiscount} className={styles.discountForm}>
            <input
              type="text"
              name="discountCode"
              placeholder="Rabattkod"
              className={styles.discountInput}
              defaultValue={state.discountCode}
            />
            <button type="submit" className={styles.applyButton}>
              Använd
            </button>
          </form>
          {state.discountCode && (
            <button
              type="button"
              onClick={handleRemoveDiscount}
              className={styles.removeButton}
            >
              Ta bort rabattkod
            </button>
          )}
        </div>
      )}

      {showBonusPoints && (
        <div className={styles.bonusSection}>
          <label className={styles.bonusLabel}>
            <input
              type="checkbox"
              checked={state.useBonusPoints}
              onChange={(e) => setUseBonusPoints(e.target.checked)}
              className={styles.checkbox}
            />
            <span>Använd bonuspoäng (50 kr)</span>
          </label>
          <p className={styles.bonusInfo}>Du har 500 bonuspoäng tillgängliga</p>
        </div>
      )}

      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z"
              fill="#4CAF50"
            />
          </svg>
          <span>Fri frakt över 499 kr</span>
        </div>
        <div className={styles.benefit}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM13 11H11V13H9V11H7V9H9V7H11V9H13V11Z"
              fill="#4CAF50"
            />
          </svg>
          <span>30 dagars returrätt</span>
        </div>
        <div className={styles.benefit}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM8 14L4 10L5.41 8.59L8 11.17L14.59 4.58L16 6L8 14Z"
              fill="#4CAF50"
            />
          </svg>
          <span>Säker betalning</span>
        </div>
      </div>
    </div>
  );
}
