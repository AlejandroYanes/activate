import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const Footer = styled.footer`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 6px 12px;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  border-top-color: ${Colors.WHITE};
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
`;

export const Stats = styled.section`
  display: flex;
  align-items: center;
`;
