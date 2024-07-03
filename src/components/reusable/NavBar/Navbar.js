import React, { useState } from 'react';
import { Nav, NavItem, NavLogo, Badge, BottomContainer, SupportButton, GiftContainer, LogoutButton, TextContainer, ArrowContainer } from './Navbar.styles';
import { FaBox, FaUsers, FaWarehouse, FaComments, FaCog, FaHeadset, FaGift, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('/');

  const handleNavItemClick = (path) => {
    setActive(path);
  };
  return(
    
  <Nav>
    <NavLogo><img src="Iconly/Light/logo.svg"/>
      Metrix
    </NavLogo>
    <div style={{marginTop: '0'}}>
      <NavItem 
        href="/"
        onClick={() => handleNavItemClick('/')} 
        className={active === '/' ? 'active' : ''}
      >
        <img src="Iconly/Light/Category.svg" alt="Dashboard Icon" /> Dashboard
      </NavItem>
      <NavItem href="/orders"
        onClick={() => handleNavItemClick('/orders')} 
        className={active === '/orders' ? 'active' : ''}
      >
        <FaBox /> Orders
        <Badge>3</Badge>
      </NavItem>
      <NavItem 
        href="/customers"
        onClick={() => handleNavItemClick('/customers')} 
        className={active === '/customers' ? 'active' : ''}
      >
        <FaUsers />Customers
      </NavItem>
      <NavItem 
        href="/inventory"
        onClick={() => handleNavItemClick('/inventory')} 
        className={active === '/inventory' ? 'active' : ''}
      >
        <FaWarehouse /> Inventory
      </NavItem>
      <NavItem 
        href="/conversations"
        onClick={() => handleNavItemClick('/conversations')} 
        className={active === '/conversations' ? 'active' : ''}
      >
        <FaComments /> Conversations
        <Badge>16</Badge>
      </NavItem>
      <NavItem 
        href="/settings"
        onClick={() => handleNavItemClick('/settings')} 
        className={active === '/settings' ? 'active' : ''}
      >
        <FaCog /> Settings
      </NavItem>
    </div>

    <BottomContainer>
        <SupportButton>
          <FaHeadset /> Contact Support
        </SupportButton>
        <GiftContainer>
          <FaGift />
          <TextContainer>
            <span><b>Free Gift Awaits You!</b></span>
            <ArrowContainer>
              <span>Upgrade your account</span> <FaArrowRight />
            </ArrowContainer>
          </TextContainer>
        </GiftContainer>
        <LogoutButton>
          <FaSignOutAlt /> Logout
        </LogoutButton>
    </BottomContainer>
    
  </Nav>
  )
};

export default Navbar;
