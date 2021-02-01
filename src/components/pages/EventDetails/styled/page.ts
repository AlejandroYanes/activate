import styled from 'styled-components';

export const StyledEventDetail = styled.article`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.FONT};
  text-align: center;
  margin: 8px 0 16px;
  font-size: 24px;
`;

export const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;
