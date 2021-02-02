import styled from 'styled-components';

export const StyledAbsoluteContent = styled.div.attrs((props: any) => props)`
  position: absolute;
  bottom: 4px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
