// Product Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  parentId?: string;
  subcategories?: Category[];
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
}

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  inStock: boolean;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  discount?: number; // Alias for discountPercentage
  image?: string;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
  colors: (string | { name: string; hex: string })[];
  variants?: ProductVariant[];
  inStock?: boolean;
  stock?: number;
  isNew?: boolean;
  isSale?: boolean;
  isHot?: boolean;
  createdAt: string | Date;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  price: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  discountCode?: string;
  discountAmount: number;
  total: number;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Filter Types
export interface FilterState {
  priceRange: [number, number];
  categories: string[];
  sizes: string[];
  colors: string[];
  sortBy: 'popularity' | 'newest' | 'priceLowToHigh' | 'priceHighToLow';
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  rating: number;
  text: string;
  reviewer: string;
  createdAt: Date;
}

// Shipping Methods
export type ShippingMethod = 'dhl' | 'postnord' | 'dbschenker';

export interface ShippingOption {
  id: ShippingMethod;
  name: string;
  price: number;
  estimatedDays: number;
  description: string;
}

// Payment Methods
export type PaymentMethod = 'visa' | 'mastercard';

export interface PaymentOption {
  id: PaymentMethod;
  name: string;
  icon: React.ReactNode;
  description: string;
}
