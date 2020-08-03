import styled from 'styled-components';
import Colors from 'styles/colors';
import { AlertProps } from '..';

const getMarginStyles = (props: AlertProps) => {
  if (props.mb) {
    return 'margin-bottom: 16px;';
  }
  return '';
};

export const Alert = styled.div.attrs((props: any) => props)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE};
  border-radius: 12px;
  padding: 12px;

  ${getMarginStyles};
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
  padding-left: 8px;
`;

export const Tittle = styled.h1`
  margin: 0 28px 6px 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 0.95rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 8px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 6px;
`;
