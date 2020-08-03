import styled from 'styled-components';
import Colors from 'styles/colors';

export const Card = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid ${Colors.WHITE};
  transition: all 150ms linear;

  &:hover {
    border-color: ${Colors.DARK_GRAY};
  }
`;

export const Label = styled.span`
  color: ${Colors.GRAY_DARK};
`;

export const Attribute = styled.div`
 display: flex;
 align-items: center;
 margin-top: 12px;

 & > span {
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.GRAY};
  margin-left: 6px;
 }
`;

export const EventImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 6px;
`;
