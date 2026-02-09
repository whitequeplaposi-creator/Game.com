'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FilterState } from '@/types';

interface FilterContextType {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  updatePriceRange: (range: [number, number]) => void;
  updateCategories: (categories: string[]) => void;
  updateSizes: (sizes: string[]) => void;
  updateColors: (colors: string[]) => void;
  updateSort: (sortBy: FilterState['sortBy']) => void;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const initialFilters: FilterState = {
  priceRange: [0, 100000],
  categories: [],
  sizes: [],
  colors: [],
  sortBy: 'popularity',
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updatePriceRange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  };

  const updateCategories = (categories: string[]) => {
    setFilters((prev) => ({ ...prev, categories }));
  };

  const updateSizes = (sizes: string[]) => {
    setFilters((prev) => ({ ...prev, sizes }));
  };

  const updateColors = (colors: string[]) => {
    setFilters((prev) => ({ ...prev, colors }));
  };

  const updateSort = (sortBy: FilterState['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        updatePriceRange,
        updateCategories,
        updateSizes,
        updateColors,
        updateSort,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within FilterProvider');
  }
  return context;
};
