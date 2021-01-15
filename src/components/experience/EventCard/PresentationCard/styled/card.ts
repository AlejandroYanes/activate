import styled from 'styled-components';
import Colors from 'styles/colors';
import { cardWidth } from 'styles/variables';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: ${Colors.WHITE};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  margin-bottom: 64px;
  width: ${cardWidth};
  max-width: ${cardWidth};
  box-sizing: border-box;
  border: 1px solid ${Colors.MEDIUM_GRAY};

  &:hover {
    box-shadow: 0 0 1px 1px ${Colors.BRAND_SHADE};
  }
`;

export const ImageSection = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  max-width: 45%;

  &:last-child {
    margin-right: 0;
  }
`;
