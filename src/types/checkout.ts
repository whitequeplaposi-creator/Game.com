// Checkout Types - TypeScript interfaces for checkout process

export enum CheckoutStep {
  CART = 'cart',
  LOGIN = 'login',
  SHIPPING_ADDRESS = 'shipping_address',
  SHIPPING_METHOD = 'shipping_method',
  PAYMENT = 'payment',
  REVIEW = 'review',
  PROCESSING = 'processing',
  CONFIRMATION = 'confirmation'
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  PAID = 'paid',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded'
}

export enum PaymentType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PAYPAL = 'paypal',
  KLARNA = 'klarna',
  SWISH = 'swish',
  BANK_TRANSFER = 'bank_transfer',
  GIFT_CARD = 'gift_card'
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedDays: string;
  carrier?: string;
}

export interface PaymentMethod {
  type: PaymentType;
  cardLast4?: string;
  cardBrand?: string;
  paypalEmail?: string;
  klarnaMethod?: string;
  swishPhone?: string;
}

export interface OrderPricing {
  subtotal: number;
  discount: number;
  discountCode?: string;
  bonusPointsUsed?: number;
  bonusPointsValue?: number;
  shippingCost: number;
  tax: number;
  total: number;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  variantId: string;
  size: string;
  color: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId?: string;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  pricing: OrderPricing;
  createdAt: Date;
  updatedAt: Date;
  estimatedDeliveryDate: Date;
  trackingNumber?: string;
}

export interface CheckoutState {
  step: CheckoutStep;
  isGuest: boolean;
  shippingAddress?: Address;
  billingAddress?: Address;
  useSameAddress: boolean;
  shippingMethod?: ShippingMethod;
  paymentMethod?: PaymentMethod;
  discountCode?: string;
  useBonusPoints: boolean;
  agreedToTerms: boolean;
  subscribeToNewsletter: boolean;
  order?: Order;
  error?: string;
  isProcessing: boolean;
}

export interface CheckoutContextType {
  state: CheckoutState;
  goToStep: (step: CheckoutStep) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
  setUseSameAddress: (useSame: boolean) => void;
  setShippingMethod: (method: ShippingMethod) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  applyDiscountCode: (code: string) => Promise<boolean>;
  setUseBonusPoints: (use: boolean) => void;
  setAgreedToTerms: (agreed: boolean) => void;
  setSubscribeToNewsletter: (subscribe: boolean) => void;
  processPayment: () => Promise<boolean>;
  clearCheckout: () => void;
  resetCheckout: () => void;
  saveProgress: () => void;
  restoreProgress: () => void;
}
