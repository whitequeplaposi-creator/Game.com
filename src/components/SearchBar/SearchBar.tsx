'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css';

interface SearchSuggestion {
  id: string;
  text: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock suggestions
  const mockSuggestions: Record<string, SearchSuggestion[]> = {
    'klänning': [
      { id: '1', text: 'Klänning röd' },
      { id: '2', text: 'Klänning svart' },
      { id: '3', text: 'Klänning blå' },
    ],
    'topp': [
      { id: '4', text: 'Topp vit' },
      { id: '5', text: 'Topp svart' },
    ],
  };

  useEffect(() => {
    if (query.length > 0) {
      const lowerQuery = query.toLowerCase();
      const filtered = Object.values(mockSuggestions)
        .flat()
        .filter((s) => s.text.toLowerCase().includes(lowerQuery))
        .slice(0, 5);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    handleSearch(suggestion.text);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.inputWrapper}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#fa6338" className={styles.flameIcon}>
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-6-4.9-11.33-6.5-13.33zM14.5 18c-1.38 0-2.5-1.12-2.5-2.5 0-1.67 2.5-4.5 2.5-4.5s2.5 2.83 2.5 4.5c0 1.38-1.12 2.5-2.5 2.5z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Sök produkter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <button type="submit" className={styles.searchButton}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.searchIcon}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
