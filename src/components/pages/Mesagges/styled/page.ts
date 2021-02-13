import styled from 'styled-components';
import { TextArea } from 'components/base-components/Inputs';

export const Card = styled.section`
  border-radius: 16px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 16px 20px;
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

export const TextBox = styled(TextArea)`
  flex: 1;
  margin-right: 16px;
`;

export const Actions = styled.footer`
  display: flex;
  align-items: flex-end;
  padding: 20px 16px 16px;
`;
