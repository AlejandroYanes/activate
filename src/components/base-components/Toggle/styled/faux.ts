import styled from 'styled-components';

const animationSpeed = 150;

export const FauxContainer = styled.div`
  display: flex;
  height: 24px;
  min-width: 44px;
  border-radius: 18px;
  overflow: hidden;
  margin-right: 8px;
`;

export const FauxSlide = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
`;

const getOffColors = (props) => {
  const { theme: { useDarkStyle, colors } } = props;

  if (useDarkStyle) {
    return `
      background-color: ${colors.GRAY_DARK};

      &:hover, &:focus {
        background-color: ${colors.GRAY};
      }
    `;
  }

  return `
      background-color: ${colors.GRAY};

      &:hover, &:focus {
        background-color: ${colors.GRAY_DARK};
      }
    `;
};

export const FauxOffSide = styled.div.attrs((props: any) => props)`
  width: 44px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ position }) => `${position}%`};
  transition: all linear ${animationSpeed}ms;
  ${getOffColors};
`;

const getOnColors = (props) => {
  const { theme: { useDarkStyle, colors } } = props;

  if (useDarkStyle) {
    return `
      background-color: ${colors.ACCENT_DARK};

      &:hover, &:focus {
        background-color: ${colors.ACCENT};
      }
    `;
  }

  return `
      background-color: ${colors.ACCENT};

      &:hover, &:focus {
        background-color: ${colors.ACCENT_DARK};
      }
    `;
};

export const FauxOnSide = styled.div.attrs((props: any) => props)`
  width: 44px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ position }) => `${position}%`};
  transition: all linear ${animationSpeed}ms;
  ${getOnColors};
`;

export const FauxNob = styled.div.attrs((props: any) => props)`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  margin-top: -10px;
  top: 50%;
  left: ${({ position }) => position};
  background-color: ${({ theme }) => theme.colors.WHITE};
  transition: all linear ${animationSpeed}ms;
`;
