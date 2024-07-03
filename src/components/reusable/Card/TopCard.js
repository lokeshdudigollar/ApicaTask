import React from 'react';
import { CardContainer } from './Card.styles';

import { Icon,IconContainer, Dropdown } from '../../Header/Header.styles';
import {
    
    TopContainer,
    BottomContainer,
    TextContainer,
    Text,
    BoldText,
    VolumeText,
    PercentageText,
  } from './TopCard.styles'
import CustomPieChart from '../../charts/PieChart';
import CustomBarChart from '../../charts/LineChart';



  const TopCard = ({icon,type, bgColor, color}) => {
    var index = 0;
    return(
    <CardContainer bgColor={bgColor} color={color}>

      <TopContainer>
        <IconContainer icon={icon} color={color}>
            {
            icon.includes('svg')?
                
                <img src={icon} /> : <h4 style={{fontSize: '16px', color:'rgba(69, 70, 78, 1)'}}>{icon}</h4>
            }
            {type === "summary"?
            <Dropdown style={{marginLeft:'0px'}}>   
                <option>Sales</option>
                <option>Test</option>
                <option>Test</option>
            </Dropdown>
            :
            null
            
            }
        </IconContainer>
        
        {type !== 'all-products' ?
            <Dropdown>
                
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
            </Dropdown>
            :
            ""
        }
      </TopContainer>
      
      { 
        type === "sales" ?
            <BottomContainer>
                <TextContainer>
                    <span>Sales</span>
                    <BoldText>₦4,000,000.00</BoldText>
                </TextContainer>

                <TextContainer>
                <span>Volume</span>
                <div>
                <VolumeText>450</VolumeText>
                <PercentageText>+20.00%</PercentageText>
                </div>
                </TextContainer>
            </BottomContainer>
        :
            
        type === 'cust' ?
            <BottomContainer>
                <TextContainer>
                    <span>Customers</span>
                    <div>
                        <BoldText>1,250</BoldText>
                        <PercentageText>+15.80%</PercentageText>
                    </div>
                </TextContainer>

                <TextContainer>
                    <span>Active</span>
                    <div>
                        <VolumeText>1,180</VolumeText>
                        <PercentageText>85%</PercentageText>
                    </div>
                </TextContainer>
            </BottomContainer>
                            
        :
        type === 'orders' ?
            <BottomContainer>
                <TextContainer>
                    <span>All Orders</span>
                    <BoldText>450</BoldText>
                </TextContainer>

                <TextContainer>
                    <span>Pending</span>
                    <VolumeText>5</VolumeText>
                </TextContainer>

                <TextContainer>
                    <span>Completed</span>
                    <VolumeText>445</VolumeText>
                </TextContainer>
            </BottomContainer>

        :
        type  === 'marketing' ?
            
            <CustomPieChart />
            
        :
        type === 'all-products' ?
             
            <BottomContainer >
                <TextContainer >
                    <span>All Products</span>
                    <BoldText>45</BoldText>
                </TextContainer>

                <TextContainer>
                    <span>Active</span>
                    <div>
                    <VolumeText>32</VolumeText>
                    <PercentageText>+24%</PercentageText>
                    </div>
                </TextContainer>
            </BottomContainer>
        :
        type === 'cart' ?
            <BottomContainer>
                <TextContainer>
                    <span style={{color:'rgba(204, 95, 95, 1)'}}>Abondoned Cart</span>
                    <div>
                        <BoldText>20%</BoldText>
                        <PercentageText>+0.00%</PercentageText>
                    </div>
                </TextContainer>

                <TextContainer>
                    <span>Customers</span>
                    <VolumeText>30</VolumeText>
   
                </TextContainer>
            </BottomContainer>
        :
        type === 'summary' ?
            <CustomBarChart />
        :

        type === "abonCart" ?
            <BottomContainer>
                <TextContainer>
                    <span style={{color:'rgba(204, 95, 95, 1)'}}>Abondoned Cart</span>
                    <BoldText>20%</BoldText>
                </TextContainer>

                <TextContainer>
                    <span>Customers</span>
                    <VolumeText>30</VolumeText>

                </TextContainer>
            </BottomContainer>
        :

        type === 'ord-page-all-orders' ?
            <BottomContainer>
                <TextContainer>
                    <span >All Orders</span>
                    <BoldText>450</BoldText>
                </TextContainer>

                <TextContainer>
                    <span>Pending</span>
                    <VolumeText>5</VolumeText>
                </TextContainer>

                <TextContainer>
                    <span>Completed</span>
                    <VolumeText>320</VolumeText>
                </TextContainer>
            </BottomContainer>
        :
        type === "ord-page-returns" ?
            <BottomContainer>
                <TextContainer>
                    <span>Cancelled</span>
                    <div>
                        <BoldText>30</BoldText>
                        <PercentageText style={{color:'rgba(204, 95, 95, 1)'}}>-20%</PercentageText>
                    </div>
                </TextContainer>

                <TextContainer>
                    <span>Returned</span>
                    <VolumeText>20</VolumeText>
                </TextContainer>

                <TextContainer>
                    <span>Damaged</span>
                    <VolumeText>5</VolumeText>
                </TextContainer>
            </BottomContainer>
        :
        "Hello"


            
        }

      
       
        
        
      
    </CardContainer>
    )
};
  
  export default TopCard;