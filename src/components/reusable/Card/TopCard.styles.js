
import styled from 'styled-components';



export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Example: Adjust margin for responsiveness */
  }
  
  
`;

export const BoldText = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: rgba(69, 70, 78, 1)
`;



export const VolumeText = styled.span`

  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const PercentageText = styled.span`
  font-size: 12px;
  color: green;
`;


