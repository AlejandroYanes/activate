import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledEventDetail = styled.article`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  background-color: ${Colors.WHITE};
`;

export const Title = styled.h1`
  color: ${Colors.DARK};
  text-align: center;
  margin: 0 0 16px;
  font-size: 24px;
`;

export const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Description = styled.p`
  margin-top: 32px;
  padding: 0 16px;
  text-align: justify;
  line-height: 24px;
`;
