import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getDirection = ({ asColumn }) => {
  if (asColumn) {
    return css`
      flex-direction: column;
    `;
  }

  return css`
    flex-direction: row;
    align-items: center;
  `;
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  ${getDirection};
`;

export const User = styled.div`
  display: flex;
  flex: 1;
`;

export const Info = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: ${({ mobile }) => mobile ? '16px' : 0};
  padding-left: ${({ mobile }) => mobile ? '6px' : '16px'};
`;

export const Stats = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  ${({ mobile }) => mobile ? 'flex: 1;' : ''};
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
