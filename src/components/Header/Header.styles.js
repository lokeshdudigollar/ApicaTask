// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-left: 15rem; 
 
  width: 80vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: rgba(69, 70, 78, 1)
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Dropdown = styled.select`
  margin-right: 15px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius:5px;
  border: none;
  color: rgba(190, 192, 202, 1);
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
  

  
`;

export const TopNavDropdown = styled.select`
  margin-right: 15px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius:5px;
  border: 1px solid #ccc;
  background-color: rgba(254, 245, 234, 1);
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }

  
`;

export const IconContainer = styled.div`
  
  padding: 10px;
  border-radius: 50%;
  color: #6366f1;
  img{
    width: 20px;
    height: 20px;
  }
  background-color: ${({ icon }) => {
    switch (icon) {

      case 'Iconly/Light/Graph.svg':
        return 'rgba(85, 112, 241, 0.12)';
      case 'Iconly/Light/2User.svg':
        return 'rgba(255, 204, 145, 0.16)';
      case 'Iconly/Light/Bag.svg':
        return 'rgba(255, 204, 145, 0.16)';
      default:
        return 'transparent';
    }
  }};

  color: ${({ color}) => {
    switch (color) {

      case 'white':
        return 'white';
      
    }
  }};

  display: ${({ icon}) => {
    switch (icon) {

      case 'Summary':
        return 'flex';
      
    }
  }};

  flex-direction: ${({ icon}) => {
    switch (icon) {

      case 'Summary':
        return 'row';
      
    }
  }};
  @media (max-width: 768px) {
    padding: 5px;
  }

`;

export const Icon = styled.div`
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  

  img{
    width: 32px;
    height: 32px;
  }
    @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;


export const BellIcon = styled.div`
  width: 20px;
  height: 20px;
  
  color: rgba(85, 112, 241, 1);
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
  
`;

export const LineSeparator = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: #e0e0e0;
`;

export const HomeIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;


