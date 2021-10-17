import styled, { css } from 'styled-components';
import {
  anyPropsAttrs,
  Avatar,
  getBgdColor,
  getBgdLightColor,
  getPositionStyles
} from 'activate-components';

export const Card = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 84px 16px 24px;
  margin-top: 43px;
  margin-bottom: 32px;
  background-color: ${getBgdLightColor};
`;

export const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: -43px;
  left: 50%;
  margin: 0 auto 0 -43px;
  border: 10px solid ${getBgdColor};
`;

const getAlignStyles = (props) => {
  const { centered, around } = props;

  if (centered) {
    return css`justify-content: center;`;
  }

  if (around) {
    return css`justify-content: space-around;`;
  }

  return css`justify-content: space-between`;
};

export const Info = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: flex-start;
  ${getAlignStyles};
  ${getPositionStyles};
`;

export const Attr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const Actions = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
