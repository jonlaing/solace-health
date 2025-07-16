"use client";

import React, { useState, useCallback } from "react";
import { useFilter } from "@/providers/FilterContext";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setQuery } = useFilter();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    setQuery(searchTerm);
  }, [searchTerm, setQuery]);

  const onReset = useCallback(() => {
    setSearchTerm("");
    setQuery("");
  }, [setQuery]);

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="p-4 border rounded-sm shadow">
        <h2 className="text-lg mb-2">Search</h2>
        <label htmlFor="search">
          Searching for: <span id="search-term"></span>
        </label>
        <div className="flex gap-2">
          <input
            defaultValue={searchTerm}
            className="border rounded-sm p-2"
            onChange={onChange}
            name="search"
            id="search"
          />
          <button onClick={onReset} className="p-2 border rounded-sm">
            Reset
          </button>
          <button
            onClick={onClick}
            className="p-2 bg-black text-white rounded-sm"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

