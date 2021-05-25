import { createGlobalStyle, css } from 'styled-components';
import { scrollThumbWidth } from 'styles/variables';

const getWebkitScrollBarThumbColor = (props) => {
  const { theme: { colors } } = props;

  return css`
    background-color: ${colors.ACCENT};
  `;
};

const getFirefoxScrollBarColor = (props) => {
  const { theme: { colors } } = props;

  return css`
    scrollbar-color: ${colors.ACCENT} ${colors.BACKGROUND};
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

  div, section, article, aside, main, header, footer {
    box-sizing: border-box;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }
`;

export const PrimaryGlobalStyles = createGlobalStyle`
  ${commonStyles};

  body {
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  *::-webkit-scrollbar {
    width: ${scrollThumbWidth};
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.BACKGROUND};
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
