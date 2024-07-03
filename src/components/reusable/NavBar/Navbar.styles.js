import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`;

export const NavItem = styled.a`
  color: #53545C;
  text-decoration: none;
  
  font-size: 18px;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  

  &:hover {
    background-color: #5570F1;
    color: white;
  }

  &.active {
    background-color: #5570F1;
    color: white;
  }

  svg,
  img {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 15px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  color: #45464E;
  font-size: 24px;
  font-weight: bold;
  

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;


export const Badge = styled.span`
  background-color: #FFCC91;
  color: #1C1D22;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
  margin-left: 10px;
`;

export const BottomContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SupportButton = styled.button`
  background-color: rgba(94, 99, 102, 0.1);
  color: rgba(28, 29, 34, 1);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004099;
  }

  svg {
    margin-right: 10px;
  }
`;

export const GiftContainer = styled.div`
  background-color: rgba(255, 204, 145, 0.2);
  color: rgba(28, 29, 34, 1);
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 12px;

  svg {
    margin-right: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const LogoutButton = styled.button`
  
  color: rgba(204, 95, 95, 1);
  border: none;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004099;
  }

  svg {
    margin-right: 10px;
  }
`;