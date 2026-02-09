import { createClient } from '@libsql/client';
import { calculatePrice } from './pricing';

// Skapa Turso-databasklient
export const db = createClient({
  url: process.env.DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

// Produkttyp från databasen
export interface DbProduct {
  id: number;
  name: string;
  price: number;
  original_price?: number;
  description: string;
  category: string;
  image: string;
  images: string;
  sizes: string;
  colors: string;
  rating: number;
  review_count: number;
  in_stock: boolean;
  is_hot: boolean;
  created_at: string;
  updated_at: string;
}

// Hämta alla produkter från databasen
export async function getProducts() {
  try {
    const result = await db.execute('SELECT * FROM products WHERE in_stock = 1 ORDER BY created_at DESC');
    return result.rows.map(row => {
      const usdPrice = Number(row.price);
      const usdOriginalPrice = row.original_price ? Number(row.original_price) : undefined;
      
      return {
        id: String(row.id),
        name: row.name as string,
        price: calculatePrice(usdPrice),
        originalPrice: usdOriginalPrice ? calculatePrice(usdOriginalPrice) : undefined,
        description: row.description as string,
        category: row.category as string,
        image: row.image as string,
        images: JSON.parse(row.images as string),
        sizes: JSON.parse(row.sizes as string),
        colors: JSON.parse(row.colors as string),
        rating: Number(row.rating),
        reviewCount: Number(row.review_count),
        inStock: Boolean(row.in_stock),
        isHot: Boolean(row.is_hot),
      };
    });
  } catch (error) {
    console.error('Fel vid hämtning av produkter:', error);
    return [];
  }
}

// Hämta en specifik produkt
export async function getProductById(id: string) {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM products WHERE id = ?',
      args: [id]
    });
    
    if (result.rows.length === 0) return null;
    
    const row = result.rows[0];
    const usdPrice = Number(row.price);
    const usdOriginalPrice = row.original_price ? Number(row.original_price) : undefined;
    
    return {
      id: String(row.id),
      name: row.name as string,
      price: calculatePrice(usdPrice),
      originalPrice: usdOriginalPrice ? calculatePrice(usdOriginalPrice) : undefined,
      description: row.description as string,
      category: row.category as string,
      image: row.image as string,
      images: JSON.parse(row.images as string),
      sizes: JSON.parse(row.sizes as string),
      colors: JSON.parse(row.colors as string),
      rating: Number(row.rating),
      reviewCount: Number(row.review_count),
      inStock: Boolean(row.in_stock),
      isHot: Boolean(row.is_hot),
    };
  } catch (error) {
    console.error('Fel vid hämtning av produkt:', error);
    return null;
  }
}

// Hämta produkter efter kategori
export async function getProductsByCategory(category: string) {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM products WHERE category = ? AND in_stock = 1 ORDER BY created_at DESC',
      args: [category]
    });
    
    return result.rows.map(row => {
      const usdPrice = Number(row.price);
      const usdOriginalPrice = row.original_price ? Number(row.original_price) : undefined;
      
      return {
        id: String(row.id),
        name: row.name as string,
        price: calculatePrice(usdPrice),
        originalPrice: usdOriginalPrice ? calculatePrice(usdOriginalPrice) : undefined,
        description: row.description as string,
        category: row.category as string,
        image: row.image as string,
        images: JSON.parse(row.images as string),
        sizes: JSON.parse(row.sizes as string),
        colors: JSON.parse(row.colors as string),
        rating: Number(row.rating),
        reviewCount: Number(row.review_count),
        inStock: Boolean(row.in_stock),
        isHot: Boolean(row.is_hot),
      };
    });
  } catch (error) {
    console.error('Fel vid hämtning av produkter efter kategori:', error);
    return [];
  }
}
