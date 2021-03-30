import styled from 'styled-components';
import { headerHeight, mobileHeaderHeight } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';
import { TextArea } from 'components/base-components/Inputs';

export const Messages = styled.main.attrs(anyPropsAttrs)`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ viewMode }) => viewMode === 'page' ? 'padding-bottom: 16px' : ''};
`;

const getSizeStyles = ({ viewMode }) => (
  viewMode === 'mobile'
    ? `padding: 0 6px; height: ${mobileHeaderHeight}px;`
    : `padding: 0 16px; height: ${headerHeight}px;`
);

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  ${getSizeStyles};
`;

export const AvatarSection = styled.div`
  position: relative;
  display: flex;
`;

export const ActiveDot = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  bottom: 2px;
  right: -2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.SUCCESS};
  border: 3px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 16px;
`;

export const Footer = styled.footer.attrs(anyPropsAttrs)`
  display: flex;
  align-items: flex-end;
  padding: ${({ viewMode }) => viewMode === 'mobile' ? '12px 6px' : '16px 16px 0'};
`;


export const TextBox = styled(TextArea)`
  flex: 1;
  margin-right: 16px;
  overflow: hidden;
`;
