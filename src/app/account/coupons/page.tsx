'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './coupons.module.css';
import { UserIcon, PackageIcon, HeartIcon, TicketIcon, StarIcon, EyeIcon } from '@/components/Icons/AccountIcons';

const MOCK_COUPONS = [
    {
        id: '1',
        code: 'WELCOME15',
        title: '17% rabatt på din första order',
        description: 'Gäller på alla produkter',
        discount: '17%',
        minPurchase: 299,
        expiryDate: '2024-12-31',
        status: 'active',
        type: 'percentage'
    },
    {
        id: '2',
        code: 'SUMMER50',
        title: '50 kr rabatt',
        description: 'Gäller på sommarkläder',
        discount: '50 kr',
        minPurchase: 500,
        expiryDate: '2024-08-31',
        status: 'active',
        type: 'fixed'
    },
    {
        id: '3',
        code: 'FREESHIP',
        title: 'Fri frakt',
        description: 'Fri frakt på alla beställningar',
        discount: 'Fri frakt',
        minPurchase: 0,
        expiryDate: '2024-06-30',
        status: 'active',
        type: 'shipping'
    },
    {
        id: '4',
        code: 'SPRING20',
        title: '20% rabatt',
        description: 'Gäller på vårkollektionen',
        discount: '20%',
        minPurchase: 400,
        expiryDate: '2024-03-15',
        status: 'expired',
        type: 'percentage'
    }
];

export default function CouponsPage() {
    const [activeTab, setActiveTab] = useState<'available' | 'used' | 'expired'>('available');
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const activeCoupons = MOCK_COUPONS.filter(c => c.status === 'active');
    const expiredCoupons = MOCK_COUPONS.filter(c => c.status === 'expired');

    const handleCopyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className={styles.couponsPage}>
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
                            <Link href="/account/coupons" className={`${styles.navItem} ${styles.active}`}>
                                <span><TicketIcon /></span> Kuponger
                            </Link>
                            <Link href="/account/points" className={styles.navItem}>
                                <span><StarIcon /></span> Mina Poäng
                            </Link>
                            <Link href="/account/recently-viewed" className={styles.navItem}>
                                <span><EyeIcon /></span> Nyligen Visat
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.content}>
                        <h1 className={styles.pageTitle}>Mina Kuponger</h1>

                        <div className={styles.tabs}>
                            <button 
                                className={`${styles.tab} ${activeTab === 'available' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('available')}
                            >
                                Tillgängliga ({activeCoupons.length})
                            </button>
                            <button 
                                className={`${styles.tab} ${activeTab === 'used' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('used')}
                            >
                                Använda (0)
                            </button>
                            <button 
                                className={`${styles.tab} ${activeTab === 'expired' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('expired')}
                            >
                                Utgångna ({expiredCoupons.length})
                            </button>
                        </div>

                        <div className={styles.couponsGrid}>
                            {activeTab === 'available' && activeCoupons.map((coupon) => (
                                <div key={coupon.id} className={styles.couponCard}>
                                    <div className={styles.couponLeft}>
                                        <div className={styles.discountBadge}>
                                            {coupon.discount}
                                        </div>
                                    </div>
                                    <div className={styles.couponRight}>
                                        <h3 className={styles.couponTitle}>{coupon.title}</h3>
                                        <p className={styles.couponDescription}>{coupon.description}</p>
                                        <p className={styles.couponCondition}>
                                            Min. köp: {coupon.minPurchase} kr
                                        </p>
                                        <div className={styles.couponFooter}>
                                            <div className={styles.couponCode}>
                                                <span>Kod: {coupon.code}</span>
                                                <button 
                                                    className={styles.copyBtn}
                                                    onClick={() => handleCopyCode(coupon.code)}
                                                >
                                                    {copiedCode === coupon.code ? '✓ Kopierad' : 'Kopiera'}
                                                </button>
                                            </div>
                                            <p className={styles.expiryDate}>
                                                Giltig till: {coupon.expiryDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {activeTab === 'used' && (
                                <div className={styles.emptyState}>
                                    <p>Du har inga använda kuponger</p>
                                </div>
                            )}

                            {activeTab === 'expired' && expiredCoupons.map((coupon) => (
                                <div key={coupon.id} className={`${styles.couponCard} ${styles.expiredCoupon}`}>
                                    <div className={styles.couponLeft}>
                                        <div className={styles.discountBadge}>
                                            {coupon.discount}
                                        </div>
                                    </div>
                                    <div className={styles.couponRight}>
                                        <h3 className={styles.couponTitle}>{coupon.title}</h3>
                                        <p className={styles.couponDescription}>{coupon.description}</p>
                                        <p className={styles.couponCondition}>
                                            Min. köp: {coupon.minPurchase} kr
                                        </p>
                                        <div className={styles.couponFooter}>
                                            <p className={styles.expiredLabel}>Utgången</p>
                                            <p className={styles.expiryDate}>
                                                Utgick: {coupon.expiryDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
