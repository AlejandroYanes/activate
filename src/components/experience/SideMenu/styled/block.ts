import styled from 'styled-components';
import Colors from '../../../../styles/colors';

const menuBlockRadiusSelected = '24px';
const menuBlockWidth = '100%';

export const ActionBlock = styled.li`
  width: ${menuBlockWidth};
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.WHITE};
  background-color: ${Colors.BRAND};
`;

export const EmptyBlock = styled.li`
  width: ${menuBlockWidth};
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.BRAND};
`;

export const MenuBlock = styled.li`
  width: ${menuBlockWidth};
  height: 64px;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.BRAND};
  color: ${Colors.WHITE};

  &:focus, &:active {
    outline: none;
  }
`;

export const MenuBlockTop = styled.div`
  height: 10px;
  background-color: ${Colors.BRAND};
  box-sizing: border-box;
  border: none;

  div {
    width: 100%;
    height: 100%;
  }

  ${(props: { selected }) => props.selected && `
    background-color: ${Colors.LIGHT_GRAY};

    div {
      border-bottom-right-radius: ${menuBlockRadiusSelected};
      background-color: ${Colors.BRAND};
    }
  `};
`;

export const MenuBlockBottom = styled.div`
  height: 10px;
  background-color: ${Colors.BRAND};
  box-sizing: border-box;

  div {
    width: 100%;
    height: 100%;
  }

  ${(props: { selected }) => props.selected && `
    background-color: ${Colors.LIGHT_GRAY};

    div {
      border-top-right-radius: ${menuBlockRadiusSelected};
      background-color: ${Colors.BRAND};
    }
  `}
`;

export const MenuBlockContent = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color, color linear 500ms;

  ${(props: { selected }) => props.selected && `
    border-top-left-radius: ${menuBlockRadiusSelected};
    border-bottom-left-radius: ${menuBlockRadiusSelected};
    background-color: ${Colors.LIGHT_GRAY};
    color: ${Colors.BRAND};
    width: 74%;
    margin-left: auto;
    justify-content: flex-start;

    span {
      margin-left: 13px;
    }
  `};
`;
