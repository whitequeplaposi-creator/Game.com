import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { FilterProvider } from '@/context/FilterContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { CheckoutProvider } from '@/context/CheckoutContext';
import { LocaleProvider } from '@/context/LocaleContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StickyRibbon from '@/components/StickyRibbon/StickyRibbon';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'SHEIN - Kvinnors Kläder, Mode Rea för Kvinnor',
  description: 'Handla de senaste modetrenderna på SHEIN. Stort urval av kläder, skor och accessoarer till låga priser.',
  keywords: 'mode, kläder, rea, shopping, kvinnor',
  openGraph: {
    title: 'SHEIN - Kvinnors Kläder, Mode Rea för Kvinnor',
    description: 'Handla de senaste modetrenderna på SHEIN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} ${outfit.variable} ${playfair.variable}`}>
        <AuthProvider>
          <LocaleProvider>
            <LanguageProvider>
              <WishlistProvider>
                <CartProvider>
                  <CheckoutProvider>
                    <FilterProvider>
                      <Header />
                      <StickyRibbon />
                      <main>{children}</main>
                      <Footer />
                    </FilterProvider>
                  </CheckoutProvider>
                </CartProvider>
              </WishlistProvider>
            </LanguageProvider>
          </LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
