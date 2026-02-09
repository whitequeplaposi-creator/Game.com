import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/db';

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json({ products, success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Kunde inte hämta produkter', success: false },
      { status: 500 }
    );
  }
}
