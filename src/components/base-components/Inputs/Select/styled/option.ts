import styled from 'styled-components';
import {
  anyPropsAttrs,
  getBrandColor,
  getBrandHlColor,
  getFontColor
} from 'helpers';

const getSelectedColors = (props) => {
  const { isSelected, theme: { colors } } = props;

  if (isSelected) {
    return `
      color: ${colors.BRAND_FONT};
      background-color: ${colors.BRAND_SHADE};
    `;
  }
};

export const StyledOption = styled.li.attrs(anyPropsAttrs)`
  margin: 0;
  padding: 0 16px 0 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: ${getFontColor};
  ${getSelectedColors};

  & > span[data-el="option-content"] {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.WHITE};
    background-color: ${getBrandColor};

    svg#select-mark > path {
      fill: ${({ theme }) => theme.colors.WHITE};
    }
  }

  &:active {
    background-color: ${getBrandHlColor};
  }
`;

export const OptionIcon = styled.div`
  position: absolute;
  left: 8px;
  height: 20px;
`;
