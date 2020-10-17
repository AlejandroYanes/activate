import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledCalendar = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE};
  padding: 12px;
  border-radius: 10px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const getPadding = (props) => props.padd ? '12px' : '0';

export const DateSection = styled.div.attrs((props: any) => props)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: ${getPadding};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
