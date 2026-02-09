'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DynamicHero.module.css';

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
    id: 'summer-vibes',
    title: 'ELEGANT KVÄLLSLOOK',
    subtitle: '✦ Låt din stil tala för sig själv',
    description: '',
    ctaText: 'UTFORSKA >',
    ctaLink: '/catalog?trend=summer-vibes',
    backgroundImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  },
  {
    id: 'new-collection',
    title: 'NYA KOLLEKTIONEN',
    subtitle: '✦ Upptäck säsongens hetaste trender',
    description: '',
    ctaText: 'SHOPPA NU >',
    ctaLink: '/catalog?collection=new',
    backgroundImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop',
    textColor: '#ffffff'
  }
];

export default function DynamicHero() {
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
