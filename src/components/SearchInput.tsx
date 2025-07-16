"use client";
import React, { useState, useCallback } from 'react';
import { useFilter } from '@/providers/FilterContext';

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setQuery } = useFilter();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    setQuery(searchTerm);
  }, [searchTerm, setQuery]);

  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={onChange} />
      <button onClick={onClick}>Reset Search</button>
    </div>
  );
}