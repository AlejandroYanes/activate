import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Title } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';

const getStyles = (props) => {
  const { flat, theme } = props;

  if (!flat) {
    return css`
      padding: 16px;
      background-color: ${theme.colors.BACKGROUND_LIGHT};
    `;
  }
};

export const StyledEventDetail = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  ${getStyles};
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const BackButton = styled(IconButton)`
  margin-top: 4px;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 32px;
`;

export const EventTitle = styled(Title)`
  flex: 1;
  margin: 0 16px;
`;

export const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;
