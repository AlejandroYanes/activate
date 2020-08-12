import styled from 'styled-components';
import Colors from '../../../../styles/colors';
import { getShade } from 'helpers';

const contentBackground = getShade(Colors.BRAND, 0.9);

export const ContentWrapper = styled.div`
  height: 86%;
  position: relative;
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  border: none;
`;

export const Content = styled.article`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 28px 24px 36px;
  box-sizing: border-box;
  background-color: ${contentBackground};
`;

export const Title = styled.h1`
  font-size: 18px;
  letter-spacing: 1.2px;
  color: ${Colors.WHITE};
  margin: 0;
`;

export const Date = styled.div`
  background-color: ${Colors.WHITE};
  font-size: 12px;
  letter-spacing: 0.9px;
  padding: 8px 12px;
  margin: 20px auto 20px 0;
  border-radius: 6px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin: 0;
  flex: 1;
  color: ${Colors.WHITE};
  letter-spacing: 1.2px;
  font-size: 0.9rem;
  line-height: 24px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colors.WHITE};
  margin: auto auto 12px;
`;
