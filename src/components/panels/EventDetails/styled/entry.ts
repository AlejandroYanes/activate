import styled from 'styled-components';
import { Text } from 'components/base-components/Typography';

export const Entry = styled(Text)`
  margin-bottom: 4px;
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

export const StyledLink = styled.a`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.FONT};
  line-height: 28px;
  padding-left: 6px;
  transition: all 150ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.BRAND_FONT};
  }
`
