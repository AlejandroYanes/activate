import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

const getBGColor = (props) => {
  const { highlight, theme: { colors } } = props;

  if (highlight) {
    return colors.BACKGROUND_LIGHTER;
  }
  return colors.BACKGROUND_LIGHT;
};

export const Options = styled.ul`
  list-style: none;
  display: flex;
  padding: 4px;
  ${getPositionStyles};
  border-radius: 20px;
  background-color: ${getBGColor};
`;
