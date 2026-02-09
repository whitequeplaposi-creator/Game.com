import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/db';

export async function GET() {
  try {
    const products = await getProducts();
    
    // Välj 4 slumpmässiga produkter för hero-sektionen
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const heroProducts = shuffled.slice(0, 4);
    
    return NextResponse.json({ products: heroProducts });
  } catch (error) {
    console.error('Failed to fetch hero products:', error);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}
