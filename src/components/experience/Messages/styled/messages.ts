import styled from 'styled-components';
import { TextArea } from 'components/base-components/Inputs';
import { anyPropsAttrs } from 'helpers';

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  padding: ${({ small }) => small ? '0 16px 20px' : '16px 16px 20px'};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px 0 8px;
  flex: 1;
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

export const Actions = styled.footer.attrs(anyPropsAttrs)`
  display: flex;
  align-items: flex-end;
  padding: ${({ small }) => small ? '20px 16px 0' : '20px 16px 16px'};
`;


export const TextBox = styled(TextArea)`
  flex: 1;
  margin-right: 16px;
  overflow: hidden;
`;
