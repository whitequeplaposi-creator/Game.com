'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';

interface Category {
    name: string;
    image: string;
}

export default function CategoryGrid() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch('/api/categories');
                const data = await res.json();
                setCategories(data.categories || []);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setLoading(false);
            }
        }
        
        fetchCategories();
    }, []);

    if (loading) {
        return <div className={styles.categoryGrid} style={{ minHeight: '300px' }} />;
    }

    return (
        <div className={styles.categoryGrid}>
            {categories.map((category) => (
                <Link
                    key={category.name}
                    href={`/catalog?category=${category.name}`}
                    className={styles.categoryCard}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                            className={styles.image}
                        />
                    </div>
                    <span className={styles.categoryName}>{category.name}</span>
                </Link>
            ))}
        </div>
    );
}
