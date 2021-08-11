import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  align-items: stretch;

  ul {
    flex: 1;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 48px 0 24px;
`;

export const ArrowNotch = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:first-child {
    padding-right: 24px;
  }
  &:last-child {
    padding-left: 24px;
  }

`;
