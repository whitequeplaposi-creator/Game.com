'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TrendsSlider.module.css';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  textColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'delicate-romance',
    title: '#Delikat Romantik',
    subtitle: 'Mjuka toner & feminina detaljer',
    description: 'Upptäck vår kollektion av romantiska plagg i pastellfärger och spets',
    ctaText: 'Shoppa Nu',
    ctaLink: '/catalog?trend=delicate-romance',
    backgroundImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  },
  {
    id: 'summer-vibes',
    title: '#Sommar Vibes',
    subtitle: 'Fräscha looks för soliga dagar',
    description: 'Lätta tyger och livfulla färger för den perfekta sommarkänslan',
    ctaText: 'Utforska Kollektionen',
    ctaLink: '/catalog?trend=summer-vibes',
    backgroundImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  },
  {
    id: 'urban-chic',
    title: '#Urban Chic',
    subtitle: 'Streetstyle med attityd',
    description: 'Moderna silhuetter och djärva kombinationer för stadsmänniskan',
    ctaText: 'Se Stilen',
    ctaLink: '/catalog?trend=urban-chic',
    backgroundImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  },
  {
    id: 'boho-dreams',
    title: '#Boho Dreams',
    subtitle: 'Frihetskänsla & bohemisk charm',
    description: 'Flödande tyger, etniska mönster och avslappnad elegans',
    ctaText: 'Upptäck Mer',
    ctaLink: '/catalog?trend=boho-dreams',
    backgroundImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  },
  {
    id: 'minimalist-style',
    title: '#Minimalist Style',
    subtitle: 'Mindre är mer',
    description: 'Rena linjer och tidlös design för den moderna garderoben',
    ctaText: 'Shoppa Minimalism',
    ctaLink: '/catalog?trend=minimalist-style',
    backgroundImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  }
];

export default function TrendsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  priority={slide.id === HERO_SLIDES[0].id}
                  className={styles.backgroundImage}
                  sizes="100vw"
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.content} style={{ color: slide.textColor }}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <h2 className={styles.subtitle}>{slide.subtitle}</h2>
                  <p className={styles.description}>{slide.description}</p>
                  <Link 
                    href={slide.ctaLink}
                    className={styles.ctaButton}
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrevClick}
          aria-label="Föregående slide"
        >
          ‹
        </button>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNextClick}
          aria-label="Nästa slide"
        >
          ›
        </button>

        <div className={styles.navigation}>
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Gå till ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
