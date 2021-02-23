import { createGlobalStyle, css } from 'styled-components';

const getWebkitScrollBarThumbColor = (props) => {
  const { theme: { colors, useDarkStyle } } = props;
  const color = useDarkStyle ? colors.ACCENT : colors.ACCENT_LIGHT;

  return css`
    background-color: ${color};
  `;
};

const getFirefoxScrollBarColor = (props) => {
  const { theme: { colors, useDarkStyle } } = props;

  if (useDarkStyle) {
    return css`
      scrollbar-color: ${colors.ACCENT} ${colors.BACKGROUND_SHADE};
    `;
  }

  return css`
    scrollbar-color: ${colors.ACCENT_LIGHT} ${colors.BACKGROUND_SHADE};
  `;
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }: any) => theme.colors.BACKGROUND};
    color: ${({ theme }: any) => theme.colors.FONT};

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.BACKGROUND};
    }
  }

  *::selection, input::selection, textarea::selection {
    background-color: ${({ theme }) => theme.colors.BRAND_DARK};
    color: ${({ theme }) => theme.colors.WHITE};
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.BACKGROUND_SHADE};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.BACKGROUND_SHADE};
    ${getWebkitScrollBarThumbColor};
  }

  * {
    scrollbar-width: thin;
    ${getFirefoxScrollBarColor};
  }
`;