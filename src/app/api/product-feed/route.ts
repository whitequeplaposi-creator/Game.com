import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/db';

// Google Merchant Center Product Feed
export async function GET() {
  try {
    const products = await getProducts();
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:3000';
    
    // Skapa RSS/XML feed för Google Merchant Center
    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>SHEIN E-commerce - Proloweel Products</title>
    <link>${baseUrl}</link>
    <description>Högkvalitativa produkter från Proloweel</description>
    ${products.map(product => `
    <item>
      <g:id>${product.id}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(product.description || '')}</g:description>
      <g:link>${baseUrl}/product/${product.id}</g:link>
      <g:image_link>${product.image || product.images[0]}</g:image_link>
      <g:price>${product.price} SEK</g:price>
      <g:availability>${product.inStock ? 'in stock' : 'out of stock'}</g:availability>
      <g:condition>new</g:condition>
      <g:brand>Proloweel</g:brand>
      ${product.category ? `<g:product_type>${escapeXml(product.category)}</g:product_type>` : ''}
    </item>
    `).join('')}
  </channel>
</rss>`;
    
    return new NextResponse(feed, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Product feed error:', error);
    return NextResponse.json(
      { error: 'Kunde inte generera produktfeed' },
      { status: 500 }
    );
  }
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
