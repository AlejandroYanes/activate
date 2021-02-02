import styled from 'styled-components';

const getBorderColor = ({ theme: { useDarkStyle, colors } }) => (
  useDarkStyle ? colors.GRAY_DARK : colors.GRAY_LIGHT
);

export const Comment = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid ${getBorderColor};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 8px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0 0;
`;
