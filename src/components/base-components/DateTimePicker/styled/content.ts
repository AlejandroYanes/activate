import styled from 'styled-components';
import { inputBorderRadius } from 'styles/variables';

export const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  height: 20px;
`;

export const DateStamp = styled.span`
  margin: 0 16px;
`;

const getRightPadding = (props) => `${props.padRight ? 38 : 16}px`;

const getDirection = (props) => props.vertical ? 'column' : 'row';

const getFocusStyles = (props) => {
  const { theme: { useDarkStyle, colors } } = props;
  const focusedColor = useDarkStyle ? colors.BRAND : colors.BRAND_DARK;

  return `
    border-color: ${focusedColor};
    color: ${focusedColor};

    ${Separator} {
      background-color: ${focusedColor};
    }
  `;
};

export const StyledContent = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: ${getDirection};
  justify-content: flex-start;
  align-items: center;
  padding: 8px ${getRightPadding} 8px 16px;
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.GRAY_LIGHT};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.FONT};
  }

  &:focus {
    ${getFocusStyles};
  }
`;
