import styled from 'styled-components';
import Colors from 'styles/colors';
import { AlertProps } from 'components/base-components/Alert/index';

export const Alert = styled.div.attrs((props: AlertProps) => props)`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE};
  border-radius: 12px;
  padding: 8px 8px 8px 0;

  &.mb {
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tittle = styled.h1`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 0.95rem;
`;

export const Divider = styled.div`
  height: 1px;
  width: 98%;
  background-color: ${Colors.LIGHT_GRAY};
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
