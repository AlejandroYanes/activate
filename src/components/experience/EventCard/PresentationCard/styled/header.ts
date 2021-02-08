import styled from 'styled-components';
import Colors from 'styles/colors';
import { Title as TitleComponent } from 'components/base-components/Typography';

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
`;

export const DateBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${Colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`;

export const TitleAndAddress = styled.div`
  display: block;
  width: 80%;
  margin-right: auto;
  padding-right: 16px;
`;

export const Title = styled(TitleComponent)`
  //white-space: nowrap;
  //text-overflow: ellipsis;
  //overflow: hidden;
`;

export const Address = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 6px;

  & span {
    margin-left: 4px;
    line-height: 20px;
  }
`;
