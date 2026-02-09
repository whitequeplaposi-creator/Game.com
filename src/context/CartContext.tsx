'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Cart, CartItem, Product } from '@/types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  applyDiscountCode: (code: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialCart: Cart = {
  items: [],
  subtotal: 0,
  shippingCost: 0,
  discountAmount: 0,
  total: 0,
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>(initialCart);

  const calculateTotals = (items: CartItem[], discountAmount: number = 0) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = subtotal > 0 ? 50 : 0;
    const total = subtotal + shippingCost - discountAmount;
    return { subtotal, shippingCost, total };
  };

  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.productId === product.id && item.selectedSize === size && item.selectedColor === color
      );

      let newItems: CartItem[];
      if (existingItem) {
        newItems = prevCart.items.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${size}-${color}-${Date.now()}`,
          productId: product.id,
          product,
          quantity,
          selectedSize: size,
          selectedColor: color,
          price: product.price,
        };
        newItems = [...prevCart.items, newItem];
      }

      const { subtotal, shippingCost, total } = calculateTotals(newItems, prevCart.discountAmount);
      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shippingCost,
        total,
      };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId);
      const { subtotal, shippingCost, total } = calculateTotals(newItems, prevCart.discountAmount);
      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shippingCost,
        total,
      };
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      const { subtotal, shippingCost, total } = calculateTotals(newItems, prevCart.discountAmount);
      return {
        ...prevCart,
        items: newItems,
        subtotal,
        shippingCost,
        total,
      };
    });
  };

  const applyDiscountCode = (code: string) => {
    // Simplified discount logic - in production, validate against backend
    const discountAmount = code === 'SAVE10' ? Math.floor(cart.subtotal * 0.1) : 0;
    setCart((prevCart) => {
      const { subtotal, shippingCost, total } = calculateTotals(prevCart.items, discountAmount);
      return {
        ...prevCart,
        discountCode: code,
        discountAmount,
        total,
      };
    });
  };

  const clearCart = () => {
    setCart(initialCart);
  };

  const getCartTotal = () => cart.total;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyDiscountCode,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
