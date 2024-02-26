'use client'

import '../styles/searchbar.css'; // Import global stylesheet
import React from 'react';

// Components
import { SearchBar } from './SearchBar/SearchBar';

export function SiteHeader() {
  return (
    <SearchBar />
  )
}
