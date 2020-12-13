import styled from 'styled-components';
import Colors from 'styles/colors';

const getLabelColor = (props) => {
  const { focused } = props;
  return `color: ${focused ? Colors.BRAND_DARK : Colors.DARK}`;
};

export const StyledLabel = styled.label.attrs((props: any) => props)`
  margin-left: 20px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  ${getLabelColor};
`;
