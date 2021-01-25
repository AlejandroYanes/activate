import styled from 'styled-components';
import Colors from 'styles/colors';

export const Entry = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 4px;
  text-align: left;
  color: ${Colors.GRAY_DARK};

  & svg {
    margin-right: 6px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const getAlignment = ({ centered }: any) => (
  centered ? 'align-items: center;' : 'align-items: flex-start;'
);

export const Line = styled.div.attrs((props: any) => props)`
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  ${getAlignment};

  & > span, & > a {
    font-weight: normal;
    color: ${Colors.DARK};
    line-height: 28px;
  }

  & svg {
    margin-right: 6px;
  }
`;
