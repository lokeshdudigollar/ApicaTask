// src/components/Card/Card.js
import React from 'react';
import { CardContainer } from './Card.styles';


const Card = ({ title, children }) => (
  <CardContainer>
    
    {children}
  </CardContainer>
);

export default Card;


