import styled from 'styled-components';

const getLabelColor = (props) => {
  const { focused, theme: { colors } } = props;
  return `color: ${focused ? colors.BRAND : colors.FONT}`;
};

export const StyledLabel = styled.label.attrs((props: any) => props)`
  margin-left: 20px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  ${getLabelColor};
`;
