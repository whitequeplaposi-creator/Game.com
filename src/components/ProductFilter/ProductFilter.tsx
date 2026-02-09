'use client';

import React, { useState } from 'react';
import { useFilters } from '@/context/FilterContext';
import styles from './ProductFilter.module.css';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Svart', 'Vit', 'Röd', 'Blå', 'Grön', 'Gul', 'Rosa', 'Grå'];
const CATEGORIES = [
  'Kvinnor',
  'Män',
  'Barn',
  'Skönhet & Hälsa',
  'Underkläder',
  'Smycken',
  'Toppar',
  'Klänningar',
  'Skor',
];

export default function ProductFilter() {
  const { filters, updatePriceRange, updateCategories, updateSizes, updateColors, updateSort, resetFilters } =
    useFilters();
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    updatePriceRange([filters.priceRange[0], value]);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    updateCategories(newCategories);
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size) ? filters.sizes.filter((s) => s !== size) : [...filters.sizes, size];
    updateSizes(newSizes);
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    updateColors(newColors);
  };

  const activeFilterCount =
    filters.categories.length + filters.sizes.length + filters.colors.length + (filters.priceRange[1] < 100000 ? 1 : 0);

  return (
    <>
      {/* Mobile Filter Button */}
      <button className={styles.mobileFilterButton} onClick={() => setIsOpen(!isOpen)}>
        <span>🔍 Filtrera</span>
        {activeFilterCount > 0 && <span className={styles.badge}>{activeFilterCount}</span>}
      </button>

      {/* Filter Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>Filtrera</h2>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {/* Price Filter */}
          <div className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>Pris</h3>
            <div className={styles.priceRange}>
              <input
                type="range"
                min="0"
                max="100000"
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className={styles.slider}
              />
              <div className={styles.priceDisplay}>
                0 kr - {filters.priceRange[1]} kr
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>Kategori</h3>
            <div className={styles.checkboxGroup}>
              {CATEGORIES.map((category) => (
                <label key={category} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>Storlek</h3>
            <div className={styles.sizeGroup}>
              {SIZES.map((size) => (
                <label key={size} className={styles.sizeOption}>
                  <input
                    type="checkbox"
                    checked={filters.sizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>Färg</h3>
            <div className={styles.colorGroup}>
              {COLORS.map((color) => (
                <label key={color} className={styles.colorOption}>
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleColorToggle(color)}
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          {activeFilterCount > 0 && (
            <button className={styles.resetButton} onClick={resetFilters}>
              Rensa alla filter
            </button>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
