"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  page: number;
  setPage: (page: number) => void;
  query: string;
  setQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <FilterContext.Provider
      value={{
        page,
        setPage,
        query,
        setQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}