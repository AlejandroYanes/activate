import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import Colors from 'styles/colors';

const getBorderColor = ({ isBooked }) => isBooked ? Colors.SUCCESS : Colors.WHITE;

export const Card = styled.article.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 64px;
  width: ${cardWidth};
  background-color: ${Colors.WHITE};
  border: 1px solid ${getBorderColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.main`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  margin-bottom: 0;
  line-height: 20px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 2px;
  margin: 16px 0;
  background-color: ${Colors.GRAY_SHADE};
`;

// export const PriceBadge = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 6px 8px;
//   border-radius: 6px;
//   margin: 0 0 auto auto;
//    background-color: ${Colors.GRAY_SHADE};
//   color: ${Colors.GRAY};
//
//   & span {
//     margin-left: 4px;
//   }
// `;
