import styled from 'styled-components';
import IconButton from 'components/base-components/IconButton';

export const ActionBlock = styled.li`
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BRAND};
  transition: all 150ms linear;
`;

export const ActionButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.BRAND};
  border-color: ${({ theme }) => theme.colors.BRAND};

  &:hover {
    background-color: ${({ theme }) => theme.colors.BRAND_DARK};
    border-color: ${({ theme }) => theme.colors.BRAND};
  }
`;

export const EmptyBlock = styled.li`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BRAND};
  transition: all 150ms linear;
`;
