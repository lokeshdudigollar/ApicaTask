// src/components/SearchBar/SearchBar.styles.js
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';


export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  //padding: 5px 10px;
  padding: 10px 10px 10px 40px; 
  font-size: 14px;
  
  border: 1px solid #ccc;
  border-radius: 20px;
  
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;
