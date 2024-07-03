// src/pages/Dashboard.styles.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Column layout for smaller screens */
  min-height: 100vh;
  margin-left: 15rem; // Adjusted for sidebar width

  @media (max-width: 768px) {
    margin-left: 0; /* Remove left margin on smaller screens */
  }
  
 
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
 
`;



export const CardRow = styled.div`
  display: grid;
  grid-template-columns:  30% 30% 35%; 
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
`;

export const FullWidthCard = styled.div`
  margin-top: 20px;
  text-align: center;
  
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 40%;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
  }
 
 
`;

export const Item1 = styled(FullWidthCard)`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  
`;

export const Item2 = styled(FullWidthCard)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }


`;

export const Item3 = styled(FullWidthCard)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  
  
`;

export const Item4 = styled(FullWidthCard)`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  background: lightpink;

  @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`;

export const Item5 = styled(FullWidthCard)`
  grid-column: 3 / 4;
  grid-row: 1 / 4;

  @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }
  
`;
