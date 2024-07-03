// src/components/Header/Header.js
import React from 'react';

import { FaBell, FaHome } from 'react-icons/fa';
import { HeaderContainer, HeaderContent, Title, UserSection, Dropdown, Icon,BellIcon, LineSeparator, HomeIconContainer,TopNavDropdown } from './Header.styles';

const Header = ({title}) => (
  <>
    <HeaderContainer>
      <HeaderContent>
        <Title>{title}</Title>
        <UserSection>
          <TopNavDropdown>
            <option className='shop'>Nanny's Shop</option>
            <option>Settings</option>
            <option>Logout</option>
          </TopNavDropdown>
          <BellIcon><FaBell /></BellIcon>
          <Icon><img src="user.png" alt="Profile" /></Icon>
        </UserSection>
      </HeaderContent>
      <LineSeparator />
      <HomeIconContainer>
        <FaHome />
      </HomeIconContainer>
    </HeaderContainer>
  </>
);

export default Header;

