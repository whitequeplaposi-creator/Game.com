'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import styles from './Header.module.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import LocaleSelector from '@/components/LocaleSelector/LocaleSelector';

const CATEGORIES = [
  'Kategorier',
  'Kvinnor',
  'Män',
  'Barn',
  'Skor',
  'Väskor',
  'Accessoarer',
  'Underkläder',
  'Sportkläder',
  'Skönhet',
  'Hem',
  'Elektronik',
  'Smycken',
  'Kurviga storlekar',
  'Gravidkläder',
  'Bröllop',
  'Festkläder',
  'Ytterkläder',
  'Badkläder',
  'Pyjamas',
  'Arbetskläder',
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cart } = useCart();
  const { wishlistCount } = useWishlist();
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();

  const cartItemCount = cart.items.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* 1. Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarLeft}>
            <Link href="/shipping" className={styles.topBarItem}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              Leveransinformation
            </Link>
            <div className={styles.divider}></div>
            <Link href="/returns" className={styles.topBarItem}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
              </svg>
              Fri Retur
            </Link>
          </div>
          <div className={styles.topBarRight}>
            <LocaleSelector />
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* 1. Logo (Left) */}
          <Link href="/" className={styles.logo}>
            SHEIN
          </Link>

          {/* 2. Search Bar (Middle) */}
          <div className={styles.searchContainer}>
            <SearchBar />
          </div>

          {/* 3. Icons Group (Right) */}
          <div className={styles.headerIcons}>
            <div className={styles.userMenuWrapper}>
              <button 
                className={styles.icon} 
                onClick={() => setShowUserMenu(!showUserMenu)}
                aria-label="User menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.svgIcon}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              {showUserMenu && (
                <div className={styles.userMenu}>
                  {isAuthenticated ? (
                    <>
                      <div className={styles.userMenuHeader}>
                        <p className={styles.userName}>{user?.name || user?.email}</p>
                        <p className={styles.userEmail}>{user?.email}</p>
                      </div>
                      <Link href="/account" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mitt Konto
                      </Link>
                      <Link href="/account/orders" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Beställningar
                      </Link>
                      <Link href="/account/messages" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Meddelanden
                      </Link>
                      <Link href="/account/coupons" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Kuponger
                      </Link>
                      <Link href="/account/points" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Poäng
                      </Link>
                      <Link href="/account/recently-viewed" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Nyligen Visat
                      </Link>
                      <Link href="/account/services" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Andra Service
                      </Link>
                      <div className={styles.menuDivider}></div>
                      <button className={styles.userMenuItem} onClick={() => { logout(); setShowUserMenu(false); }}>
                        Logga ut
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Logga in
                      </Link>
                      <Link href="/auth/register" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Registrera
                      </Link>
                      <div className={styles.menuDivider}></div>
                      <Link href="/account/orders" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Beställningar
                      </Link>
                      <Link href="/account/messages" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Meddelanden
                      </Link>
                      <Link href="/account/coupons" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Kuponger
                      </Link>
                      <Link href="/account/points" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Mina Poäng
                      </Link>
                      <Link href="/account/recently-viewed" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Nyligen Visat
                      </Link>
                      <Link href="/account/services" className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                        Andra Service
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <Link href="/cart" className={styles.icon} aria-label="Cart">
              <div className={styles.cartIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className={styles.cartCount}>{cartItemCount}</span>
              </div>
            </Link>
            <Link href="/wishlist" className={styles.icon} aria-label="Wishlist">
              <div className={styles.cartIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.svgIcon}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className={styles.cartCount}>{wishlistCount}</span>
              </div>
            </Link>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.5 8.38 8.38 0 0 1 3.8.9L21 3z" />
              </svg>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* 3. Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={styles.container}>
          <div className={styles.navLinks}>
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/catalog?category=${category}`}
                className={styles.categoryLink}
              >
                {category} {category === 'Kategorier' ? <span className={styles.downArrow}>▾</span> : ''}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating 17% Discount Banner */}
      <div className={styles.discountBanner}>
        <span>17% RABATT</span>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/catalog?category=${category}`}
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {category}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
