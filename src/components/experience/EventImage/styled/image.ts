import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const getHeight = (props) => {
  const { height } = props;
  return height ? `height: ${height}px;` : '';
};

export const ImageContainer = styled.div.attrs((props: any) => props)`
  border-radius: 8px;
  overflow: hidden;
  max-height: 400px;
  ${getHeight};
  ${getPositionStyles};
`;

export const Image = styled.img`
  max-width: 100%;
`;
