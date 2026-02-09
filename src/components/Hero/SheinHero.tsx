'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SheinHero.module.css';

const BANNERS = [
    {
        id: 1,
        type: 'trends',
        title: "VÅR- & SOMMARNYHETER",
        hashtag: "#BeachVibe2026",
        link: '/catalog?trend=beach-vibe',
        backgroundColor: '#FFE5EC',
        backgroundImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=1200&h=800&fit=crop',
        products: [
            { id: 401, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop', price: '249' },
            { id: 402, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop', price: '189' },
            { id: 403, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', price: '329' },
            { id: 404, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop', price: '275' }
        ]
    },
    {
        id: 2,
        type: 'sale',
        title: "MEGA REA - UPP TILL 80%",
        subtitle: "Tidlösa favoriter till oslagbara priser",
        cta: "FYNDA NU >",
        link: '/catalog?category=Sale',
        backgroundGradient: 'linear-gradient(135deg, #000000 0%, #ff0000 100%)',
        products: [
            { id: 101, image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=400&h=500&fit=crop', price: '99' },
            { id: 102, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop', price: '129' },
            { id: 103, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop', price: '145' }
        ]
    }
];

export default function SheinHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

    return (
        <div className={styles.heroContainer}>
            {/* Promo Strip removed as requested */}

            {/* Main Slider */}
            <div className={styles.sliderWrapper}>
                <div
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {BANNERS.map((banner) => (
                        <div key={banner.id} className={`${styles.slide} ${styles[banner.type + 'Slide']}`}>
                            <div className={styles.bannerBackground} style={{ backgroundColor: banner.backgroundColor, background: banner.backgroundGradient }}>
                                {banner.backgroundImage && (
                                    <Image
                                        src={banner.backgroundImage}
                                        alt={banner.title}
                                        fill
                                        priority={banner.id === 1}
                                        className={banner.type === 'trends' ? styles.backgroundImageTrends : banner.type === 'elegant' ? styles.backgroundImageElegant : styles.backgroundImage}
                                    />
                                )}
                                <div className={styles.bannerOverlay} />
                            </div>

                            <div className={styles.bannerContentWrapper}>
                                <div className={banner.type === 'trends' ? styles.trendsLabelContent : styles.textContent}>
                                    {banner.type === 'trends' ? (
                                        <>
                                            <div className={styles.trendsLogo}>trends</div>
                                            <h2 className={styles.hashtag}>{banner.hashtag} <span className={styles.arrowIcon}>›</span></h2>
                                            <p className={styles.bannerSubtitle}>{banner.title}</p>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className={styles.bannerTitle}>
                                                {banner.title}
                                                <span className={styles.starIcon}>✦</span>
                                            </h2>
                                            <h3 className={styles.bannerSubtitle}>
                                                {banner.subtitle}
                                            </h3>
                                            <Link href={banner.link} className={banner.type === 'sale' ? styles.saleCta : styles.elegantCta}>
                                                {banner.cta}
                                            </Link>
                                        </>
                                    )}
                                </div>

                                <div className={`${styles.productSection} ${banner.type === 'trends' ? styles.trendsProductSection : banner.type === 'elegant' ? styles.elegantProductSection : ''}`}>
                                    <div className={`${styles.productGrid} ${banner.type === 'trends' ? styles.trendsGrid : banner.type === 'elegant' ? styles.elegantGrid : ''}`}>
                                        {banner.products.map((product) => (
                                            <div key={product.id} className={styles.productCard}>
                                                <div className={styles.productImageWrapper}>
                                                    <Image
                                                        src={product.image}
                                                        alt="Product"
                                                        fill
                                                        className={styles.productImage}
                                                    />
                                                    <div className={styles.priceBadge}>
                                                        {product.price}<span>kr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className={`${styles.navButton} ${styles.prevBtn}`} onClick={prevSlide}>‹</button>
                <button className={`${styles.navButton} ${styles.nextBtn}`} onClick={nextSlide}>›</button>

                <div className={styles.dotsList}>
                    {BANNERS.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${currentSlide === i ? styles.activeDot : ''}`}
                            onClick={() => setCurrentSlide(i)}
                        />
                    ))}
                </div>
            </div>


            {/* Service Bar */}
            <div className={styles.serviceBar}>
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                        <span>FRI FRAKT ÖVER 499 KR</span>
                    </div>
                    <div className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 9V7a5 5 0 00-10 0v2" /><rect x="5" y="9" width="14" height="11" rx="2" /></svg>
                        <span>MASTERCARD: BETALA SENARE</span>
                    </div>
                    <div className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 15h2m-2-3h2m-2-3h2m-2 9h2m-9-6h9m-9 3h9m-9 3h9M4 4h16v16H4V4z" /></svg>
                        <span>45 DAGARS RETURRÄTT</span>
                    </div>
                    <div className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>ÄKTA GARANTI</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
