'use client';

import React from 'react';
import { useFilters } from '@/context/FilterContext';
import { FilterState } from '@/types';
import styles from './Sort.module.css';

const SORT_OPTIONS: Array<{ value: FilterState['sortBy']; label: string }> = [
  { value: 'popularity', label: 'Populäraste' },
  { value: 'newest', label: 'Nyaste' },
  { value: 'priceLowToHigh', label: 'Pris: låg till högt' },
  { value: 'priceHighToLow', label: 'Pris: högt till lågt' },
];

export default function Sort() {
  const { filters, updateSort } = useFilters();

  return (
    <div className={styles.sortContainer}>
      <label htmlFor="sort-select" className={styles.label}>
        Sortera:
      </label>
      <select
        id="sort-select"
        value={filters.sortBy}
        onChange={(e) => updateSort(e.target.value as FilterState['sortBy'])}
        className={styles.select}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
