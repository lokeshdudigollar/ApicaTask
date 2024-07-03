// src/pages/Dashboard.js
import React from 'react';

import Card from '../components/reusable/Card/Card';

import RecentOrders from '../components/RecentOrders/RecentOrders';


import { DashboardContainer, Content, CardRow, FullWidthCard, GridContainer, Item1, Item2, Item3, Item4, Item5 } from './Dashboard.styles';
import { Icon,UserSection,Dropdown } from '../components/Header/Header.styles';
import TopCard from '../components/reusable/Card/TopCard';
import Header from '../components/Header/Header';

const icons = [
  "Iconly/Light/Graph.svg", 
  "Iconly/Light/2User.svg",
  "Iconly/Light/Bag.svg", 
  "Marketing",
  "Iconly/Light/Folder.svg",
  "Iconly/Light/fi_shopping-cart.svg",
  "Summary",
  "Recent Orders"
  
]

const Dashboard = () => (
  <div >
  <Header title="Dashboard"/>
  <DashboardContainer>
    
    <Content>
     
      <CardRow>
        <TopCard icon={icons[0]} type="sales" />
        <TopCard icon={icons[1]} type="cust" />
        <TopCard icon={icons[2]} type="orders" />
      </CardRow>
      
        <GridContainer>
         
          <Item1>
            <TopCard icon={icons[3]} type="marketing" />
          </Item1>
        
          <Item2>
            <TopCard icon={icons[4]} type="all-products" bgColor='rgba(85, 112, 241, 1)' color='white'/>
          </Item2>
          <Item3>
            <TopCard icon={icons[5]} type="cart" />
          </Item3>
          <Item4>
            <TopCard icon={icons[6]} type="summary" />
          </Item4>
          <Item5>
            <RecentOrders />
          </Item5>
        </GridContainer>

      
    </Content>
  </DashboardContainer>
  </div>
);

export default Dashboard;
