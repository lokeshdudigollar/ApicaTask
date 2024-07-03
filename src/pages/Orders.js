// src/pages/Orders.js
import React, { useState } from 'react';
import Button from '../components/reusable/Button/Button'
import Calendar from 'react-calendar';
import SearchBar from '../components/reusable/SearchBar/SearchBar';
import {
    OrderHeader,
    HeaderLeft,
    HeaderRight,
    SearchInput,
    FilterButton,
    OrdersContainer,
    SummaryContainer,
    SummaryCard,
    OrdersTableContainer,
    OrdersTable,
    TableHeader,
    TableRow,
    TableCell,
    StatusBadge,
    FilterPopup,
    FilterPopupContent,
    CheckboxContainer,
    CheckboxContainer2,
    DropdownContainer,
    FilterWrapper,
    InputBoxContainer,
    DatePicker,
    CalenderContainer,
    ButtonsContainer,
    DropdownContainer2,
    CustomCalender
} from './Orders.styles';

import ordersData from '../OrdersData/OrdersData.json';
import TopCard from '../components/reusable/Card/TopCard';
import { CardRow } from './Dashboard.styles';
import { Dropdown } from '../components/Header/Header.styles';
import Header from '../components/Header/Header';

const icons = [
    
    "Iconly/Light/Bag.svg", 
   
    "Iconly/Light/fi_shopping-cart.svg",
    
    
  ]

const Orders = () => {

  
    const [selectedActions, setSelectedActions] = useState(
        ordersData.OrdersData.map(order => order.action[0]) // Initialize with the first status for each order
      );

    const [selectedStatus, setSelectedStatus] = useState(
        ordersData.OrdersData.map(order => order.status[0]) // Initialize with the first status for each order
      );
    const [showFilterPopup1, setShowFilterPopup1] = useState(false);
    const [showFilterPopup2, setShowFilterPopup2] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        orderType: [],
        
    });
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [showCalendar, setShowCalendar] = useState(false);
    
      // Handler to update the selected action
    const handleActionChange = (index, newAction) => {
        const updatedActions = [...selectedActions];
        updatedActions[index] = newAction;
        setSelectedActions(updatedActions);

        // Update status based on selected action
        const updatedStatus = [...selectedStatus];
        updatedStatus[index] = newAction;
        setSelectedStatus(updatedStatus);
    };

    const handleFilterChange = (type, value) => {
        setFilters({
          ...filters,
          [type]: value,
        });
    };

    const handleDateChange = (dates) => {
        setDateRange(dates);
    };
    
    const toggleFilterPopup1 = () => {
        setShowFilterPopup1(!showFilterPopup1);
    };

    const toggleFilterPopup2 = () => {
        setShowFilterPopup2(!showFilterPopup2);
    };

    const formatShortWeekday = (locale, date) => {
        return date.toLocaleDateString(locale, { weekday: 'narrow' });
    };
    
    return(
    <div>
        <Header title="Orders" />
    <OrdersContainer>
    <h2 style={{color:'rgba(69, 70, 78, 1)', fontSize:'16px'}}>Orders Summary</h2>
    <SummaryContainer>
        <CardRow>
            <TopCard icon={icons[0]} type="ord-page-all-orders" />
            <TopCard icon={icons[1]} type="ord-page-returns" />
            <TopCard icon={icons[1]} type="abonCart" />
        </CardRow>
    </SummaryContainer>
    
    <OrdersTableContainer>
        <OrderHeader>
            <HeaderLeft>
            <h2 style={{fontSize:'16px', color:'rgba(69, 70, 78, 1)'}}>Customer Orders</h2>
            </HeaderLeft>

            <HeaderRight>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <FilterButton onClick={toggleFilterPopup1}>
                    <img src="Iconly/Light/fi_filter.svg" alt="filter" />Filter
                </FilterButton>
                <FilterButton onClick={toggleFilterPopup2}>
                    <img src="Iconly/Light/Calendar.svg" alt="filter" />Filter
                </FilterButton>
                <FilterButton >
                    <img src="Iconly/Light/Send.svg" alt="filter" />Share
                </FilterButton>

                <Dropdown style={{border:'1px solid #ccc'}}>
                    
                    <option>Bulk Actions</option>
                    <option>Delete</option>
                   
                </Dropdown>
            </HeaderRight>
        </OrderHeader>
        <FilterWrapper>
        {showFilterPopup1 && (
            <FilterPopup>
                <FilterPopupContent>
                    <h3>Filter</h3>
                    <p>Order Type</p>
                    <CheckboxContainer>
                        <label>
                            <input
                            type="checkbox"
                            checked={filters.orderType.includes('Home Delivery')}
                            onChange={() =>
                                handleFilterChange('orderType', 'Home Delivery')
                            }
                            />
                            Home Delivery
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            checked={filters.orderType.includes('Pick Up')}
                            onChange={() => handleFilterChange('orderType', 'Pick Up')}
                            />
                            Pick Up
                        </label>
                    </CheckboxContainer>
                    <DropdownContainer>
                        <label>Status</label>
                        <select
                            value={filters.status}
                            onChange={(e) => handleFilterChange('status', e.target.value)}
                        >
                            <option>All</option>
                            <option>Completed</option>
                            <option>Pending</option>
                        </select>
                    </DropdownContainer>
                    <DropdownContainer>
                        <label>Customer</label>
                        <select
                            value={filters.customer}
                            onChange={(e) =>
                                handleFilterChange('customer', e.target.value)
                            }
                        >
                            <option>All</option>
                            {ordersData.OrdersData.map((order, index) => (
                                <option key={index}>{order.customerName}</option>
                            ))}
                        </select>
                        
                    </DropdownContainer>
                    <InputBoxContainer>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label>From</label>
                            <input
                                type="text"
                                value="0.00"
                                style={{ width: "80%" }}
                                height= {50}
                            />
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label>To</label>
                            <input
                                type="text"
                                value="0.00"
                                style={{ width: "80%"}}
                                height= {50}
                            />
                        </div>
                    </InputBoxContainer>
                    <Button>Filter</Button>
                </FilterPopupContent>
            </FilterPopup>
        )
        }
        </FilterWrapper>

        <FilterWrapper>
            {showFilterPopup2 && (
                <FilterPopup>
                    <FilterPopupContent>
                        <h3>By Date</h3>
                        <CheckboxContainer2>
                            <div>
                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>This Week</label>
                            
                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>Last Week</label>
                            </div>

                            <div>
                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>This Month</label>
                            

                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>Last Month</label>
                            </div>

                            <div>
                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>This Year</label>
                            

                            <input
                                type="checkbox"
                                
                                />
                                
                            <label>Last Year</label>
                            </div>
                            <div>
                            <input
                                type="checkbox"
                                
                                checked/>
                                
                            <label>Date Range</label>
                            </div>
                            <DatePicker>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        onChange={() => setShowCalendar(!showCalendar)}
                                    /> 
                                    Date Range
                                </label>
                                {showCalendar && (
                                    <CalenderContainer>
                                        <ButtonsContainer>
                                            <Button className="active">From</Button>
                                            <Button>To</Button>
                                        </ButtonsContainer>

                                        <DropdownContainer2>
                                        <select>
                                            {Array.from({ length: 10 }, (_, i) => {
                                            const year = new Date().getFullYear() - i;
                                            return <option key={year} value={year}>{year}</option>;
                                            })}
                                        </select>
                                        <select>
                                            {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                                            ))}
                                        </select>
                                        </DropdownContainer2>
                                        <CustomCalender>
                                            <Calendar 
                                                selectRange={true}
                                                onChange={handleDateChange} 
                                                value={dateRange}
                                                formatShortWeekday={formatShortWeekday}
                                                className="custom"
                                            />
                                        </CustomCalender>
                                    </CalenderContainer>
                                )}

                            </DatePicker>
                            <Button>Filter</Button>


                        </CheckboxContainer2>

                    </FilterPopupContent>
                </FilterPopup>
            )}
        </FilterWrapper>
      <OrdersTable>
        <thead>
          <TableRow>
            <TableHeader><input type="checkbox" /></TableHeader>
            <TableHeader>Customer Name<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Order Date<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Order Type<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Tracking ID<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Order Total<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Action<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
            <TableHeader>Status<img src="Iconly/Light/sort.svg" alt="Sort Icon" /></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {ordersData.OrdersData.map((order, index) => (
            <TableRow key={index}>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.orderType}</TableCell>
                <TableCell>{order.trackingId}<img src="Iconly/Light/u_copy-alt.svg" alt="Sort Icon" /></TableCell>
                <TableCell>{order.orderTotal}</TableCell>
                <TableCell>
                    <Dropdown 
                        style={{backgroundColor: 'rgba(94, 99, 102, 0.08)'}}
                        selectedItem={selectedActions[index]}
                        onSelect={newAction => handleActionChange(index, newAction)}
                    >
                        {order.action.map((item, id) =>
                            <option key={id}>
                                {item}
                            </option>    
                        )}
                    </Dropdown>
              </TableCell>
              <TableCell>
                <StatusBadge status={selectedActions[index]}>{selectedActions[index]}</StatusBadge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </OrdersTable>
    </OrdersTableContainer>
  </OrdersContainer>
  </div>
    )
};

export default Orders;
