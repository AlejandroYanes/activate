import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Title as TitleComponent } from 'components/base-components/Typography';

const sizeMap = {
  small: '40vw',
  medium: '60vw',
  large: '90vw',
};

export const StyledModal = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  min-height: 150px;
  width: ${({ size }) => sizeMap[size]};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled(TitleComponent)`
  margin: 0;
  padding: 0 0 0 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;