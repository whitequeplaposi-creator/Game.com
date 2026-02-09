'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './recently-viewed.module.css';
import { UserIcon, PackageIcon, HeartIcon, TicketIcon, StarIcon, EyeIcon } from '@/components/Icons/AccountIcons';

const MOCK_RECENTLY_VIEWED = [
    {
        id: '1',
        name: 'Elegant Röd Klänning',
        slug: 'elegant-rod-klankning',
        description: 'Elegant röd klänning i högkvalitativt material',
        image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=400',
        images: ['https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=400'],
        price: 299,
        originalPrice: 499,
        category: 'Klänningar',
        rating: 4.5,
        reviewCount: 28,
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Röd'],
        inStock: true,
        createdAt: '2024-01-15',
        viewedAt: '2024-02-10'
    },
    {
        id: '2',
        name: 'Vit Bomullsskjorta',
        slug: 'vit-bomullsskjorta',
        description: 'Klassisk vit bomullsskjorta',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
        images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400'],
        price: 199,
        category: 'Skjortor',
        rating: 4.8,
        reviewCount: 45,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Vit'],
        inStock: true,
        createdAt: '2024-01-10',
        viewedAt: '2024-02-09'
    },
    {
        id: '3',
        name: 'Skinny Jeans',
        slug: 'skinny-jeans',
        description: 'Moderna skinny jeans med stretchmaterial',
        image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400',
        images: ['https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400'],
        price: 399,
        originalPrice: 599,
        category: 'Jeans',
        rating: 4.3,
        reviewCount: 32,
        sizes: ['28', '30', '32', '34'],
        colors: ['Blå'],
        inStock: true,
        createdAt: '2024-01-08',
        viewedAt: '2024-02-08'
    },
    {
        id: '4',
        name: 'Sportiga Sneakers',
        slug: 'sportiga-sneakers',
        description: 'Bekväma sneakers för vardagsbruk',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'],
        price: 599,
        category: 'Skor',
        rating: 4.7,
        reviewCount: 56,
        sizes: ['40', '41', '42', '43', '44'],
        colors: ['Vit', 'Svart'],
        inStock: true,
        createdAt: '2024-01-05',
        viewedAt: '2024-02-07'
    },
    {
        id: '5',
        name: 'Läderväska',
        slug: 'ladervasska',
        description: 'Elegant läderväska i äkta skinn',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
        images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400'],
        price: 799,
        originalPrice: 1299,
        category: 'Väskor',
        rating: 4.6,
        reviewCount: 23,
        sizes: ['One Size'],
        colors: ['Brun', 'Svart'],
        inStock: true,
        createdAt: '2024-01-03',
        viewedAt: '2024-02-06'
    },
    {
        id: '6',
        name: 'Sommarklänning',
        slug: 'sommerklankning',
        description: 'Luftig sommarklänning med blommönster',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400'],
        price: 249,
        originalPrice: 399,
        category: 'Klänningar',
        rating: 4.4,
        reviewCount: 18,
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Flerfärgad'],
        inStock: true,
        createdAt: '2024-01-01',
        viewedAt: '2024-02-05'
    },
    {
        id: '7',
        name: 'Stickad Tröja',
        slug: 'stickad-troja',
        description: 'Varm och mysig stickad tröja',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
        images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400'],
        price: 349,
        category: 'Tröjor',
        rating: 4.5,
        reviewCount: 34,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Beige', 'Grå'],
        inStock: true,
        createdAt: '2023-12-28',
        viewedAt: '2024-02-04'
    },
    {
        id: '8',
        name: 'Solglasögon',
        slug: 'solglasogon',
        description: 'Trendiga solglasögon med UV-skydd',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
        images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'],
        price: 149,
        originalPrice: 249,
        category: 'Accessoarer',
        rating: 4.2,
        reviewCount: 15,
        sizes: ['One Size'],
        colors: ['Svart', 'Guld'],
        inStock: true,
        createdAt: '2023-12-25',
        viewedAt: '2024-02-03'
    }
];

export default function RecentlyViewedPage() {
    const [products, setProducts] = useState(MOCK_RECENTLY_VIEWED);

    const handleRemove = (id: string) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleClearAll = () => {
        if (confirm('Är du säker på att du vill rensa hela historiken?')) {
            setProducts([]);
        }
    };

    return (
        <div className={styles.recentlyViewedPage}>
            <div className={styles.container}>
                <div className={styles.accountLayout}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.userInfo}>
                            <div className={styles.avatar}>A</div>
                            <div>
                                <h3 className={styles.userName}>Användare</h3>
                                <p className={styles.memberSince}>Medlem sedan 2024</p>
                            </div>
                        </div>

                        <nav className={styles.nav}>
                            <Link href="/account" className={styles.navItem}>
                                <span><UserIcon /></span> Personuppgifter
                            </Link>
                            <Link href="/account/orders" className={styles.navItem}>
                                <span><PackageIcon /></span> Mina beställningar
                            </Link>
                            <Link href="/wishlist" className={styles.navItem}>
                                <span><HeartIcon /></span> Önskelista
                            </Link>
                            <Link href="/account/coupons" className={styles.navItem}>
                                <span><TicketIcon /></span> Kuponger
                            </Link>
                            <Link href="/account/points" className={styles.navItem}>
                                <span><StarIcon /></span> Mina Poäng
                            </Link>
                            <Link href="/account/recently-viewed" className={`${styles.navItem} ${styles.active}`}>
                                <span><EyeIcon /></span> Nyligen Visat
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.content}>
                        <div className={styles.header}>
                            <h1 className={styles.pageTitle}>Nyligen Visat</h1>
                            {products.length > 0 && (
                                <button className={styles.clearBtn} onClick={handleClearAll}>
                                    Rensa alla
                                </button>
                            )}
                        </div>

                        {products.length === 0 ? (
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}><EyeIcon /></div>
                                <h2>Ingen historik ännu</h2>
                                <p>Produkter du tittar på kommer att visas här</p>
                                <Link href="/catalog" className={styles.shopBtn}>
                                    Börja handla
                                </Link>
                            </div>
                        ) : (
                            <>
                                <p className={styles.itemCount}>
                                    {products.length} {products.length === 1 ? 'produkt' : 'produkter'}
                                </p>
                                <div className={styles.productsGrid}>
                                    {products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
