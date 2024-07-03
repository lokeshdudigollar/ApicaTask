// src/components/Card/Card.styles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  background-color: ${({ bgColor }) => {
    switch (bgColor) {

      case 'rgba(85, 112, 241, 1)':
        return 'rgba(85, 112, 241, 1)';
      
      default:
        return 'white';
    }
  }};

  color: ${({ color }) => {
    switch (color) {

      case 'white':
        return 'white';
      
      
    }
  }};

  @media (max-width: 768px) {
    padding: 15px; /* Example: Reduce padding on smaller screens */
    font-size: 14px; /* Example: Adjust font size for smaller screens */
  }
`;
