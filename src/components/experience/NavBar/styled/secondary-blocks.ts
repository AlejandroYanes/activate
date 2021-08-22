import styled from 'styled-components';
import { getBrandColor, getBrandHlColor, getWhiteColor } from 'helpers';
import { IconButton } from 'components/base-components/Button';

export const ActionBlock = styled.li`
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${getWhiteColor};
  background-color: ${getBrandColor};
  transition: all 150ms linear;
`;

export const ActionButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  background-color: ${getBrandColor};
  border-color: ${getBrandColor};

  &:hover {
    background-color: ${getBrandHlColor};
    border-color: ${getBrandHlColor};
  }
`;

export const EmptyBlock = styled.li`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${getBrandColor};
  transition: all 150ms linear;
`;
