'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=600&fit=crop"
            alt="Valentine's Sale Campaign"
            fill
            priority
            className={styles.heroImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        {/* Overlay Content */}
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.campaignTitle}>VALENTINE'S REA</h1>
            <p className={styles.campaignSubtitle}>Spara stort på 600k+ bästsäljare</p>
            <p className={styles.discountInfo}>UP TO 70% OFF</p>
            <Link href="/catalog" className={styles.ctaButton}>
              HANDLA NU
            </Link>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
