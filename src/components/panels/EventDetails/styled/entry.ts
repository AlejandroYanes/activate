import styled from 'styled-components';

const getColor = ({ theme: { useDarkStyle, colors } }) => (
  useDarkStyle ? colors.GRAY_LIGHT : colors.GRAY_DARK
);

export const Entry = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 4px;
  text-align: left;
  color: ${getColor};

  & svg {
    margin-right: 6px;
  }
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
    color: ${({ theme }) => theme.colors.FONT};
    line-height: 28px;
  }

  & svg {
    margin-right: 6px;
  }
`;
