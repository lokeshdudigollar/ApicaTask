// src/components/RecentOrders/RecentOrders.styles.js
import styled from 'styled-components';

export const RecentOrdersContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const OrderImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 20px;
`;

export const OrderDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const OrderTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
   @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OrderPrice = styled.span`
  font-size: 14px;
  color: #888;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const OrderDate = styled.span`
  font-size: 14px;
  color: #888;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const OrderStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === 'Completed' ? 'green' : 'red'};
  color: #fff;
`;
