import { createGlobalStyle, css } from 'styled-components';

const getWebkitScrollBarThumbColor = (props) => {
  const { theme: { colors } } = props;

  return css`
    background-color: ${colors.ACCENT};
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
    scrollbar-color: ${colors.ACCENT} ${colors.BACKGROUND_SHADE};
  `;
};

const commonStyles = css`
  body {
    background-color: ${({ theme }: any) => theme.colors.BACKGROUND};
    color: ${({ theme }: any) => theme.colors.FONT};
  }

  *::selection, input::selection, textarea::selection {
    background-color: ${({ theme }) => theme.colors.BRAND_HIGHLIGHT};
    color: ${({ theme }) => theme.colors.WHITE};
  }

  div, section, article, main, header, footer {
    box-sizing: border-box;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export const PrimaryGlobalStyles = createGlobalStyle`
  ${commonStyles};

  body {
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.BACKGROUND};
    }
  }

  *::-webkit-scrollbar {
    width: 5px;
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
    -webkit-tap-highlight-color: transparent;
    scrollbar-width: thin;
    ${getFirefoxScrollBarColor};
  }
`;

export const MobileGlobalStyles = createGlobalStyle`
  ${commonStyles};
`;
