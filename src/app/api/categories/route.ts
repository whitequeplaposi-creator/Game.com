import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Hämta alla unika kategorier med en representativ produktbild för varje
    const result = await db.execute(`
      SELECT DISTINCT 
        category,
        (SELECT image FROM products p2 WHERE p2.category = p1.category AND p2.in_stock = 1 LIMIT 1) as image
      FROM products p1
      WHERE in_stock = 1
      ORDER BY category
    `);
    
    const categories = result.rows.map(row => ({
      name: row.category as string,
      image: row.image as string
    }));
    
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return NextResponse.json({ categories: [] }, { status: 500 });
  }
}
