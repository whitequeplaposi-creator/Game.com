'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import { CheckoutStep } from '@/types/checkout';
import CheckoutProgress from '@/components/Checkout/CheckoutProgress';
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm';
import ShippingMethodSelector from '@/components/Checkout/ShippingMethodSelector';
import PaymentMethodSelector from '@/components/Checkout/PaymentMethodSelector';
import OrderReview from '@/components/Checkout/OrderReview';
import OrderSummary from '@/components/Checkout/OrderSummary';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useCart();
  const { state, goToStep, setShippingAddress, setPaymentMethod } = useCheckout();

  useEffect(() => {
    if (cart.items.length === 0) {
      router.push('/cart');
    } else if (state.step === CheckoutStep.CART) {
      // När användaren kommer från kundvagnen, starta på leveransadress-steget
      goToStep(CheckoutStep.SHIPPING_ADDRESS);
    }
  }, [cart.items.length, router, state.step, goToStep]);

  const handlePlaceOrder = async () => {
    // Generate order ID and number
    const orderId = `ORD-${Date.now()}`;
    const orderNumber = `#${Math.floor(100000 + Math.random() * 900000)}`;

    // In a real app, this would make an API call to create the order
    // For now, we'll just redirect to confirmation
    router.push(`/checkout/confirmation?orderId=${orderId}&orderNumber=${orderNumber}`);
  };

  const renderStepContent = () => {
    switch (state.step) {
      case CheckoutStep.CART:
        return null; // Cart is handled on /cart page

      case CheckoutStep.SHIPPING_ADDRESS:
        return (
          <ShippingAddressForm
            initialAddress={state.shippingAddress}
            onSubmit={(address) => {
              setShippingAddress(address);
              goToStep(CheckoutStep.SHIPPING_METHOD);
            }}
            onCancel={() => router.push('/cart')}
          />
        );

      case CheckoutStep.SHIPPING_METHOD:
        return (
          <ShippingMethodSelector
            onContinue={() => goToStep(CheckoutStep.PAYMENT)}
            onBack={() => goToStep(CheckoutStep.SHIPPING_ADDRESS)}
          />
        );

      case CheckoutStep.PAYMENT:
        return (
          <PaymentMethodSelector
            onSelect={(method) => setPaymentMethod(method)}
            onContinue={() => goToStep(CheckoutStep.REVIEW)}
            onBack={() => goToStep(CheckoutStep.SHIPPING_METHOD)}
          />
        );

      case CheckoutStep.REVIEW:
        return (
          <OrderReview
            onPlaceOrder={handlePlaceOrder}
            onBack={() => goToStep(CheckoutStep.PAYMENT)}
          />
        );

      default:
        return null;
    }
  };

  if (cart.items.length === 0) {
    return null;
  }

  // Beräkna vilka steg som är slutförda
  const completedSteps: CheckoutStep[] = [];
  if (state.shippingAddress) completedSteps.push(CheckoutStep.SHIPPING_ADDRESS);
  if (state.shippingMethod) completedSteps.push(CheckoutStep.SHIPPING_METHOD);
  if (state.paymentMethod) completedSteps.push(CheckoutStep.PAYMENT);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Kassa</h1>
        <CheckoutProgress currentStep={state.step} completedSteps={completedSteps} />
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          {renderStepContent()}
        </div>

        <aside className={styles.sidebar}>
          <OrderSummary
            showDiscountInput={state.step !== CheckoutStep.REVIEW}
            showBonusPoints={state.step !== CheckoutStep.REVIEW}
          />
        </aside>
      </div>
    </div>
  );
}
