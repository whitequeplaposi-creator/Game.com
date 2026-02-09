'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SeasonHighlights.module.css';

const HIGHLIGHTS = [
    {
        id: 1,
        title: "VÅRENS BLÅA DRÖMMAR",
        subtitle: "Från babyblått till djup indigo",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
        link: "/catalog?color=blue",
        tag: "NYHET"
    },
    {
        id: 2,
        title: "DENIM-GUIDEN 2026",
        subtitle: "Hitta din perfekta passform",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
        link: "/catalog?category=Jeans",
        tag: "POPULÄR"
    },
    {
        id: 3,
        title: "SVALA SOMMARKVÄLLAR",
        subtitle: "Lätta lager i mjuka toner",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop",
        link: "/catalog?trend=summer-nights",
        tag: "TIPS"
    }
];

export default function SeasonHighlights() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>SÄSONGENS HÖJDPUNKTER</h2>
                    <p className={styles.subtitle}>Handplockade stilar för din garderob</p>
                </div>

                <div className={styles.grid}>
                    {HIGHLIGHTS.map((item) => (
                        <Link key={item.id} href={item.link} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />
                                <span className={styles.badge}>{item.tag}</span>
                                <div className={styles.overlay}>
                                    <div className={styles.content}>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemSubtitle}>{item.subtitle}</p>
                                        <span className={styles.cta}>Shoppa nu ›</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.promoBanner}>
                    <div className={styles.promoContent}>
                        <div className={styles.promoText}>
                            <h3>SHEIN CLUB MEDLEM?</h3>
                            <p>Få 15% extra rabatt på din första beställning som medlem.</p>
                        </div>
                        <button className={styles.promoBtn}>BLI MEDLEM GRATIS</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
