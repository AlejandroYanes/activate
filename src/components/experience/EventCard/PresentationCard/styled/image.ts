import styled from 'styled-components';

const getHeight = (props) => props.height ? `${props.height}px` : 'initial';

export const ImageContainer = styled.div.attrs((props: any) => props)`
  border-radius: 16px;
  overflow: hidden;
  max-height: 400px;
  height: ${getHeight};
`;

export const Image = styled.img`
  max-width: 100%;
`;
