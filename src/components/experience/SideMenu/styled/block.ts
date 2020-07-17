import styled from 'styled-components';
import Colors from 'styles/colors';
import { MenuBlockProps } from 'components/experience/SideMenu/MenuBlock';

export const Label = styled.span`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  z-index: 10;
  color: white;
`;

export const Blurred = styled.div`
  position: relative;
  top: 0;
  left: 100%;
  width: 50%;
  height: 120%;
  filter: url(#goo);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 50%;
    height: 120%;
    background-color: ${Colors.LIGHT_GRAY};
    transition: .2s;
  }

  & > span {
        position: absolute;
        width: 80px;
        height: 40px;
        top: 20px;
        left: 0;
        background-color: ${Colors.LIGHT_GRAY};
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        transition: all .2s;
  }
`;

const getSelectedStyles = (props: MenuBlockProps) => {
  if (props.selected) {
    return `
      ${Blurred} > span {
           left: -150%;
      }

      ${Label} {
        color: ${Colors.BRAND};
      }
    `;
  }
};

export const Block = styled.li.attrs((props: MenuBlockProps) => props)`
  height: 78px;
  width: 100%;
  position: relative;
  background-color: ${Colors.BRAND};
  cursor: pointer;
  ${getSelectedStyles};
`;