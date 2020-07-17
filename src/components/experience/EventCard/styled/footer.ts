import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const Footer = styled.footer`
  flex: 1;
  align-items: center;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 6px 12px;
  position: relative;
`;

export const StyledWave = styled.div`
  position: absolute;
  top: -100px;
  left: -10px;
  width: 104%;
  pointer-events: none;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 12px;
  right: 12px;
`;

export const Author = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const AuthorName = styled.span`
  font-size: 1rem;
  padding-left: 12px;
  color: ${Colors.GRAY};
`;

export const Stats = styled.section`
  display: flex;
  align-items: center;
`;
