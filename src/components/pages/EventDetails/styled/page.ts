import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getStyles = (props) => {
  const { asModal } = props;

  if (!asModal) {
    return css`
      padding: 16px;
    `;
  }
};

export const StyledEventDetail = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${getStyles};
`;

export const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;
