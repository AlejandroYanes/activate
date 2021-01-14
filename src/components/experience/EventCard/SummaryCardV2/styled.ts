import styled from 'styled-components';
import Colors from 'styles/colors';

const widthRatio = 340;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: 10px;
  width: ${widthRatio}px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.GRAY_SHADE};
`;

export const Image = styled.img`
  width: ${widthRatio}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
`;

export const Author = styled.span`
  font-size: 14px;
  color: ${Colors.GRAY_DARK};
`;
