import styled from 'styled-components';
import Colors from 'styles/colors';

const getHeight = (props) => {
  const { useRange, isDateTime } = props;

  if (isDateTime) {
    return '500px';
  }

  if (useRange) {
    return '460px';
  }

  return '400px';
};

export const StyledCalendarModal = styled.div.attrs((props: any) => props)`
  width: 600px;
  height: ${getHeight};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE};
  padding: 12px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const ClockWrapper = styled.div`
  margin: 20px auto;
`;

export const Expander = styled.div`flex: 1`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;
