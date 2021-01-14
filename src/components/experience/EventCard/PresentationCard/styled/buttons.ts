import styled from 'styled-components';
import Colors from 'styles/colors';

export const Bookmark = styled.div`
  position: absolute;
  bottom: 6px;
  right: 4px;
  z-index: 2;
  background-color: white;
  height: 46px;
  width: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0 0 6px -1px ${Colors.GRAY};
`;
