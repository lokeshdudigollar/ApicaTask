// src/components/SearchBar/SearchBar.js
import React from 'react';
import { SearchInput, SearchBarContainer, SearchIcon } from './SearchBar.styles';

const SearchBar = ({ onSearch }) => (
  <SearchBarContainer>
   
    <SearchInput type="text" placeholder="Search..." onChange={onSearch} />
  </SearchBarContainer>
);

export default SearchBar;


