import { NextResponse } from 'next/server';
import { getProductById } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProductById(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Produkten hittades inte', success: false },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ product, success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Kunde inte hämta produkt', success: false },
      { status: 500 }
    );
  }
}
