import styled from 'styled-components';

const getColor = ({ theme: { useDarkStyle, colors } }) => (
  useDarkStyle ? colors.WHITE_SHADE : colors.GRAY_SHADE
);

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  margin: 6px auto;
  background-color: ${getColor};
`;
