// Pricing utility functions
// USD to SEK conversion rate (approximate)
const USD_TO_SEK = 10.5;

// Profit margin (50%)
const PROFIT_MARGIN = 1.5;

/**
 * Convert USD price to SEK with 50% profit margin
 */
export function calculatePrice(usdPrice: number): number {
  return Math.round(usdPrice * USD_TO_SEK * PROFIT_MARGIN);
}

/**
 * Format price in SEK
 */
export function formatPrice(price: number): string {
  return `${price} kr`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(originalPrice: number, salePrice: number): number {
  if (!originalPrice || originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}
