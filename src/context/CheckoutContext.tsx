'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useCart } from './CartContext';
import {
  CheckoutState,
  CheckoutContextType,
  CheckoutStep,
  Address,
  ShippingMethod,
  PaymentMethod,
  OrderStatus,
  Order,
} from '@/types/checkout';

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

const CHECKOUT_STORAGE_KEY = 'shein_checkout_progress';

const initialState: CheckoutState = {
  step: CheckoutStep.CART,
  isGuest: false,
  useSameAddress: true,
  useBonusPoints: false,
  agreedToTerms: false,
  subscribeToNewsletter: true,
  isProcessing: false,
};

const stepOrder: CheckoutStep[] = [
  CheckoutStep.CART,
  CheckoutStep.LOGIN,
  CheckoutStep.SHIPPING_ADDRESS,
  CheckoutStep.SHIPPING_METHOD,
  CheckoutStep.PAYMENT,
  CheckoutStep.REVIEW,
  CheckoutStep.PROCESSING,
  CheckoutStep.CONFIRMATION,
];

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CheckoutState>(initialState);
  const { cart, clearCart } = useCart();

  // Restore progress from localStorage on mount
  useEffect(() => {
    restoreProgress();
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (state.step !== CheckoutStep.CART && state.step !== CheckoutStep.CONFIRMATION) {
      saveProgress();
    }
  }, [state]);

  const goToStep = (step: CheckoutStep) => {
    setState((prev) => ({ ...prev, step, error: undefined }));
  };

  const goToNextStep = () => {
    const currentIndex = stepOrder.indexOf(state.step);
    if (currentIndex < stepOrder.length - 1) {
      const nextStep = stepOrder[currentIndex + 1];
      
      // Skip login step if user is authenticated or guest
      if (nextStep === CheckoutStep.LOGIN && (state.isGuest || isAuthenticated())) {
        goToStep(stepOrder[currentIndex + 2]);
      } else {
        goToStep(nextStep);
      }
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = stepOrder.indexOf(state.step);
    if (currentIndex > 0) {
      const prevStep = stepOrder[currentIndex - 1];
      
      // Skip login step when going back if user is authenticated or guest
      if (prevStep === CheckoutStep.LOGIN && (state.isGuest || isAuthenticated())) {
        goToStep(stepOrder[currentIndex - 2]);
      } else {
        goToStep(prevStep);
      }
    }
  };

  const setShippingAddress = (address: Address) => {
    setState((prev) => ({ 
      ...prev, 
      shippingAddress: address,
      billingAddress: prev.useSameAddress ? address : prev.billingAddress,
    }));
  };

  const setBillingAddress = (address: Address) => {
    setState((prev) => ({ ...prev, billingAddress: address }));
  };

  const setUseSameAddress = (useSame: boolean) => {
    setState((prev) => ({
      ...prev,
      useSameAddress: useSame,
      billingAddress: useSame ? prev.shippingAddress : prev.billingAddress,
    }));
  };

  const setShippingMethod = (method: ShippingMethod) => {
    setState((prev) => ({ ...prev, shippingMethod: method }));
  };

  const setPaymentMethod = (method: PaymentMethod) => {
    setState((prev) => ({ ...prev, paymentMethod: method }));
  };

  const applyDiscountCode = async (code: string): Promise<boolean> => {
    try {
      // TODO: Call API to validate discount code
      // Mock implementation
      const validCodes = ['SAVE10', 'WELCOME20', 'SUMMER25'];
      
      if (validCodes.includes(code.toUpperCase())) {
        setState((prev) => ({ ...prev, discountCode: code.toUpperCase() }));
        return true;
      }
      
      setState((prev) => ({ ...prev, error: 'Ogiltig rabattkod' }));
      return false;
    } catch (error) {
      setState((prev) => ({ ...prev, error: 'Kunde inte tillämpa rabattkod' }));
      return false;
    }
  };

  const setUseBonusPoints = (use: boolean) => {
    setState((prev) => ({ ...prev, useBonusPoints: use }));
  };

  const setAgreedToTerms = (agreed: boolean) => {
    setState((prev) => ({ ...prev, agreedToTerms: agreed }));
  };

  const setSubscribeToNewsletter = (subscribe: boolean) => {
    setState((prev) => ({ ...prev, subscribeToNewsletter: subscribe }));
  };

  const processPayment = async (): Promise<boolean> => {
    if (!state.agreedToTerms) {
      setState((prev) => ({ ...prev, error: 'Du måste godkänna användarvillkoren' }));
      return false;
    }

    setState((prev) => ({ ...prev, isProcessing: true, error: undefined }));
    goToStep(CheckoutStep.PROCESSING);

    try {
      // TODO: Call payment gateway API
      // Mock implementation - simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Create order
      const order: Order = {
        id: generateOrderId(),
        orderNumber: generateOrderNumber(),
        userId: undefined, // TODO: Get from auth context
        status: OrderStatus.PAID,
        items: cart.items.map((item) => ({
          productId: item.productId,
          productName: item.product.name,
          productImage: item.product.image || item.product.images?.[0] || '',
          variantId: item.id,
          size: item.selectedSize,
          color: item.selectedColor,
          quantity: item.quantity,
          pricePerUnit: item.price,
          totalPrice: item.price * item.quantity,
        })),
        shippingAddress: state.shippingAddress!,
        billingAddress: state.billingAddress || state.shippingAddress!,
        shippingMethod: state.shippingMethod!,
        paymentMethod: state.paymentMethod!,
        pricing: calculatePricing(),
        createdAt: new Date(),
        updatedAt: new Date(),
        estimatedDeliveryDate: calculateDeliveryDate(),
      };

      setState((prev) => ({ ...prev, order, isProcessing: false }));
      goToStep(CheckoutStep.CONFIRMATION);
      
      // Clear cart after successful order
      clearCart();
      
      // Clear checkout progress
      localStorage.removeItem(CHECKOUT_STORAGE_KEY);
      
      // TODO: Send order confirmation email
      
      return true;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isProcessing: false,
        error: 'Betalningen misslyckades. Vänligen försök igen.',
      }));
      goToStep(CheckoutStep.REVIEW);
      return false;
    }
  };

  const clearCheckout = () => {
    setState(initialState);
    localStorage.removeItem(CHECKOUT_STORAGE_KEY);
  };

  const saveProgress = () => {
    try {
      const progressData = {
        step: state.step,
        isGuest: state.isGuest,
        shippingAddress: state.shippingAddress,
        billingAddress: state.billingAddress,
        useSameAddress: state.useSameAddress,
        shippingMethod: state.shippingMethod,
        paymentMethod: state.paymentMethod,
        discountCode: state.discountCode,
        useBonusPoints: state.useBonusPoints,
        agreedToTerms: state.agreedToTerms,
        subscribeToNewsletter: state.subscribeToNewsletter,
        timestamp: Date.now(),
      };
      localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(progressData));
    } catch (error) {
      console.error('Failed to save checkout progress:', error);
    }
  };

  const restoreProgress = () => {
    try {
      const savedData = localStorage.getItem(CHECKOUT_STORAGE_KEY);
      if (savedData) {
        const progressData = JSON.parse(savedData);
        
        // Check if saved data is not too old (24 hours)
        const maxAge = 24 * 60 * 60 * 1000;
        if (Date.now() - progressData.timestamp < maxAge) {
          setState((prev) => ({
            ...prev,
            ...progressData,
          }));
        } else {
          localStorage.removeItem(CHECKOUT_STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error('Failed to restore checkout progress:', error);
    }
  };

  // Helper functions
  const isAuthenticated = (): boolean => {
    // TODO: Check auth context
    return false;
  };

  const generateOrderId = (): string => {
    return `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const generateOrderNumber = (): string => {
    return `SH${Date.now().toString().slice(-8)}`;
  };

  const calculatePricing = () => {
    const subtotal = cart.subtotal;
    let discount = 0;
    
    // Calculate discount
    if (state.discountCode) {
      if (state.discountCode === 'SAVE10') discount = subtotal * 0.1;
      else if (state.discountCode === 'WELCOME20') discount = subtotal * 0.2;
      else if (state.discountCode === 'SUMMER25') discount = subtotal * 0.25;
    }
    
    // Calculate bonus points value
    let bonusPointsValue = 0;
    if (state.useBonusPoints) {
      // TODO: Get actual bonus points from user
      bonusPointsValue = 50; // Mock value
    }
    
    const shippingCost = state.shippingMethod?.cost || 0;
    const tax = (subtotal - discount) * 0.25; // 25% VAT (Swedish standard)
    const total = subtotal - discount - bonusPointsValue + shippingCost + tax;
    
    return {
      subtotal,
      discount,
      discountCode: state.discountCode,
      bonusPointsUsed: state.useBonusPoints ? 50 : 0,
      bonusPointsValue,
      shippingCost,
      tax,
      total: Math.max(0, total),
    };
  };

  const calculateDeliveryDate = (): Date => {
    const daysStr = state.shippingMethod?.estimatedDays || '7';
    const days = parseInt(daysStr.split('-')[0]); // Ta första numret från "3-5" format
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + days);
    return deliveryDate;
  };

  const value: CheckoutContextType = {
    state,
    goToStep,
    goToNextStep,
    goToPreviousStep,
    setShippingAddress,
    setBillingAddress,
    setUseSameAddress,
    setShippingMethod,
    setPaymentMethod,
    applyDiscountCode,
    setUseBonusPoints,
    setAgreedToTerms,
    setSubscribeToNewsletter,
    processPayment,
    clearCheckout,
    resetCheckout: clearCheckout, // Alias för clearCheckout
    saveProgress,
    restoreProgress,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
