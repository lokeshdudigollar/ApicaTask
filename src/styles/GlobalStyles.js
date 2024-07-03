// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
  }

  select, option {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
