// src/components/RecentOrders/RecentOrders.js
import React from 'react';
import {
  RecentOrdersContainer,
  OrderItem,
  OrderImage,
  OrderDetails,
  OrderTitle,
  OrderPrice,
  OrderDate,
  OrderStatus,
  StatusBadge,
} from './RecentOrders.styles';
//import dummyImage from '../../assets/dummy-phone.jpg'; // Use a dummy image for phone pictures

const orders = [
  {
    id: 1,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Completed',
  },

  {
    id: 3,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Pending',
  },

  {
    id: 4,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Completed',
  },
  {
    id: 7,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Pending',
  },
  {
    id: 8,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Pending',
  },
  {
    id: 9,
    title: 'iPhone 13',
    price: '₦730,000.00 x 1',
    date: '12 Sept 2022',
    status: 'Pending',
  },
  // Add more orders as needed
];

const RecentOrders = () => (
  <RecentOrdersContainer>
    <h2>Recent Orders</h2>
    {orders.map((order) => (
      <OrderItem key={order.id}>
        <OrderImage src="iPhone.png" alt={order.title} />
        <OrderDetails>
          <OrderTitle>{order.title}</OrderTitle>
          <OrderPrice>{order.price}</OrderPrice>
        </OrderDetails>
        <OrderDetails>
          <OrderTitle>{order.date}</OrderTitle>
          <StatusBadge status={order.status}>{order.status}</StatusBadge>
        </OrderDetails>
        
      </OrderItem>
    ))}
  </RecentOrdersContainer>
);

export default RecentOrders;
