import styled from 'styled-components';
import Colors from 'styles/colors';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  padding: 6px 12px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  color: ${Colors.GRAY};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 8px;
  flex: 1;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.GRAY};
  padding: 6px;
`;
