import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import Colors from 'styles/colors';

const getBorderColor = ({ isBooked, theme }) => (
  isBooked ? theme.colors.ACCENT : theme.colors.BACKGROUND
);

export const Card = styled.article.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 64px;
  width: ${cardWidth};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
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
