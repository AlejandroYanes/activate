import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import { Title as TitleComponent } from 'components/base-components/Typography';

export const StyledPage = styled.article`
  display: flex;
  flex-direction: column;
  width: ${cardWidth};
  margin-bottom: 32px;
  box-sizing: border-box;
`;

export const Title = styled(TitleComponent)`
  margin-bottom: 32px;
`;
