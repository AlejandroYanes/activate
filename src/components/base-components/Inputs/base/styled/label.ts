import styled from 'styled-components';

const getLabelColor = (props) => {
  const { focused, theme: { useDarkStyle, colors } } = props;
  const focusedColor = useDarkStyle ? colors.BRAND : colors.BRAND_DARK;
  return `color: ${focused ? focusedColor : colors.FONT}`;
};

export const StyledLabel = styled.label.attrs((props: any) => props)`
  margin-left: 20px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  ${getLabelColor};
`;
