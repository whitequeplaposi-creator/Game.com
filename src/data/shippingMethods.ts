import { ShippingMethod } from '@/types/checkout';

export const SHIPPING_METHODS: ShippingMethod[] = [
  {
    id: 'standard',
    name: 'Standard frakt',
    description: 'Leverans till dörren',
    cost: 0,
    estimatedDays: '3-5',
    carrier: 'PostNord',
  },
  {
    id: 'express',
    name: 'Expressfrakt',
    description: 'Snabb leverans till dörren',
    cost: 79,
    estimatedDays: '1-2',
    carrier: 'DHL Express',
  },
  {
    id: 'pickup',
    name: 'Hämta i butik',
    description: 'Hämta på närmaste utlämningsställe',
    cost: 0,
    estimatedDays: '2-4',
    carrier: 'PostNord',
  },
  {
    id: 'same-day',
    name: 'Samma dag',
    description: 'Leverans samma dag (endast Stockholm)',
    cost: 149,
    estimatedDays: '0',
    carrier: 'Budbee',
  },
];

export const getShippingMethodById = (id: string): ShippingMethod | undefined => {
  return SHIPPING_METHODS.find((method) => method.id === id);
};

export const getFreeShippingThreshold = (): number => {
  return 499;
};

export const calculateShippingCost = (
  methodId: string,
  subtotal: number
): number => {
  const method = getShippingMethodById(methodId);
  if (!method) return 0;

  // Free shipping for orders over threshold
  if (subtotal >= getFreeShippingThreshold() && methodId === 'standard') {
    return 0;
  }

  return method.cost;
};
