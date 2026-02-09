'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';
import { getCategoryImage } from '@/utils/categoryMapping';

// Same categories as in Header
const CATEGORIES = [
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

export default function CategoryGrid() {
    return (
        <div className={styles.categoryGrid}>
            {CATEGORIES.map((category) => (
                <Link
                    key={category}
                    href={`/catalog?category=${category}`}
                    className={styles.categoryCard}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={getCategoryImage(category)}
                            alt={category}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                            className={styles.image}
                        />
                    </div>
                    <span className={styles.categoryName}>{category}</span>
                </Link>
            ))}
        </div>
    );
}
