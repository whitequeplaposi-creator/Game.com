'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ModernHero.module.css';

const HERO_DATA = {
    label: 'SPRING / SUMMER 2026',
    title: 'Modern Subtlety',
    description: 'Upptäck en kurerad kollektion där skandinavisk minimalism möter tidlös elegans. Designad för den medvetna individen.',
    primaryCta: 'UTFORSKA NU',
    secondaryCta: 'SE LOOKBOOK',
    mainImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop',
    floatingProduct: {
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
        name: 'Minimalist Leather Tote',
        price: '899 kr'
    }
};

export default function ModernHero() {
    return (
        <section className={`${styles.modernHero} ${styles.animateIn}`}>
            <div className={styles.container}>
                <div className={styles.contentSide}>
                    <div className={styles.textContent}>
                        <span className={styles.label}>{HERO_DATA.label}</span>
                        <h1 className={styles.brandTitle}>
                            {HERO_DATA.title.split(' ')[0]} <br />
                            <span className={styles.titleAccent}>{HERO_DATA.title.split(' ')[1]}</span>
                        </h1>
                        <p className={styles.description}>
                            {HERO_DATA.description}
                        </p>
                        <div className={styles.buttonGroup}>
                            <Link href="/catalog" className={styles.primaryBtn}>
                                {HERO_DATA.primaryCta}
                            </Link>
                            <Link href="/catalog?lookbook=active" className={styles.secondaryBtn}>
                                {HERO_DATA.secondaryCta}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.visualSide}>
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src={HERO_DATA.mainImage}
                            alt="Modern Fashion Model"
                            fill
                            priority
                            className={styles.mainImage}
                        />
                        <div className={styles.imageOverlay} />
                    </div>

                    {/* Floating Product Card (Glassmorphism) */}
                    <div className={styles.floatingCard}>
                        <div className={styles.productThumbnail}>
                            <Image
                                src={HERO_DATA.floatingProduct.image}
                                alt={HERO_DATA.floatingProduct.name}
                                width={80}
                                height={80}
                                className={styles.thumbImage}
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <span className={styles.productName}>{HERO_DATA.floatingProduct.name}</span>
                            <span className={styles.price}>{HERO_DATA.floatingProduct.price}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className={styles.bgDecoration} />
        </section>
    );
}
