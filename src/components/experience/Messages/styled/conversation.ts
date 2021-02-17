import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const Conversation = styled.main`
  display: flex;
  flex-direction: column;
`;

export const TextBubble = styled.div.attrs(anyPropsAttrs)`
  border-radius: 16px;
  padding: 6px 10px;
  min-height: 40px;
  min-width: 120px;
  max-width: 70%;
  display: flex;
  align-items: center;
  position: relative;
  margin: ${({ sent }) => `0 ${!sent ? 'auto' : 0} 20px ${sent ? 'auto' : 0}`};
  background-color: ${({ theme: { colors }, sent }) => sent ? colors.BRAND : colors.BACKGROUND};
`;
