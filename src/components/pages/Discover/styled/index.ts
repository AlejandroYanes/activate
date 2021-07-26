import styled from 'styled-components';
import { Layout } from 'components/providers/Layout';

export const QueryBox = styled.div`
  display: flex;
  align-items: center;
  ${({ theme: { layout } }) => layout !== Layout.DESKTOP ? 'flex: 1;' : ''};

  #search-box {
    flex: 1;
    margin-right: 48px;
  }
`;
