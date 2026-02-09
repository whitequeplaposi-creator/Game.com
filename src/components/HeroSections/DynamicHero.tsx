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

export default function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const res = await fetch('/api/hero-products');
        const data = await res.json();
        const products = data.products || [];
        
        // Skapa hero slides med riktiga produktbilder från databasen
        const slides: HeroSlide[] = [
          {
            id: 'summer-vibes',
            title: 'ELEGANT KVÄLLSLOOK',
            subtitle: '✦ Låt din stil tala för sig själv',
            description: '',
            ctaText: 'UTFORSKA >',
            ctaLink: '/catalog?trend=summer-vibes',
            backgroundImage: products[0]?.image || '',
            textColor: '#ffffff'
          },
          {
            id: 'new-collection',
            title: 'NYA KOLLEKTIONEN',
            subtitle: '✦ Upptäck säsongens hetaste trender',
            description: '',
            ctaText: 'SHOPPA NU >',
            ctaLink: '/catalog?collection=new',
            backgroundImage: products[1]?.image || '',
            textColor: '#ffffff'
          }
        ];
        
        setHeroSlides(slides);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch hero data:', error);
        setLoading(false);
      }
    }
    
    fetchHeroData();
  }, []);

  useEffect(() => {
    if (heroSlides.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  if (loading || heroSlides.length === 0) {
    return <section className={styles.heroSection} style={{ minHeight: '500px' }} />;
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  priority={slide.id === heroSlides[0].id}
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
          {heroSlides.map((slide, index) => (
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
