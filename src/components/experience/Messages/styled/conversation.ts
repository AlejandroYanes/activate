import styled from 'styled-components';
import { anyPropsAttrs } from 'activate-components';

export const Conversation = styled.main`
  display: flex;
  flex-direction: column;
`;

const getBackgroundColor = (props) => {
  const { theme: { colors }, sent } = props;
  return sent ? colors.BRAND_BG : colors.BACKGROUND_LIGHTER;
};

export const TextBubble = styled.div.attrs(anyPropsAttrs)`
  border-radius: 8px;
  padding: 8px 12px;
  min-height: 40px;
  min-width: 120px;
  max-width: 70%;
  display: flex;
  align-items: center;
  position: relative;
  margin: ${({ sent }) => `0 ${!sent ? 'auto' : 0} 20px ${sent ? 'auto' : 0}`};
  background-color: ${getBackgroundColor};
`;
