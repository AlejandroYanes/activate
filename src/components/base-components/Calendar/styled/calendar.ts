import styled from 'styled-components';

export const StyledCalendar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
`;

export const getPadding = (props) => props.padd ? '12px' : '0';

export const DateSection = styled.div.attrs((props: any) => props)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: ${getPadding};
`;
