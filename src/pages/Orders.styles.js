// src/pages/Orders.styles.js
import styled from 'styled-components';

export const OrdersContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  margin-left: 15rem;
  @media screen and (max-width: 768px) {
    margin-left: 0; /* Adjust for smaller screens */
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const HeaderLeft = styled.div`
  h2 {
    margin: 0;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 5px;
  }
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  flex: 1;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const FilterButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const SummaryContainer = styled.div`
   display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SummaryCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;

  span:first-child {
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    span {
      font-size: 14px;
      color: #888;
    }

    span:last-child {
      font-weight: bold;
    }
  }
`;

export const OrdersTableContainer = styled.div`
  margin-top: 20px;
  overflow-x: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
  color: rgba(44, 45, 51, 1);
  font-size: 14px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => {
    switch (props.status) {
      case 'Completed':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'In-Progress':
        return 'blue';
      default:
        return 'gray';
    }
  }};
  color: #fff;
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterPopup = styled.div`
  position: absolute;
  top: 40px; // Adjust the top value to position the popup correctly
  right: 0;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const FilterPopupContent = styled.div`
  padding: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }
`;

export const CheckboxContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label{
    margin-right: 10px;
  }
  input{
    margin-right: 10px;
  }
`

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  select {
    padding: 5px;
    font-size: 14px;
  }
`;

export const DropdownContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  
  select {
    border:none;
    padding: 5px;
    font-size: 14px;
  }
`;

export const InputBoxContainer = styled.div`
  display: flex;
  widthL 100%;
  flex-direction: row;
  gap: 5px;
 
  
`;


export const DatePicker = styled.div`
  display: inline-block;
  position: relative;
`

export const CalenderContainer = styled.div`
  margin-top: 10px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction:row;
  margin-bottom: 10px;
`

export const CustomCalender = styled.div`
  calender{
    width: 100%;
  }
  .react-calendar__tile {
    border: none;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
  }

  .react-calendar__tile--now {
  background: none !important;
  }

  .react-calendar__tile--active {
  background: #007bff;
  color: white;
  }

  .react-calendar__tile--range {
  background: #007bff;
  color: white;
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd{
    background: #0056b3;
  color: white;
  }

  .react-calendar__navigation__label,.react-calendar__navigation__arrow {
  display: none;
}
`
