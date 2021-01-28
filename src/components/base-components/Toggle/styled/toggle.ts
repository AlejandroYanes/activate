import styled from 'styled-components';
import { getMargins } from 'helpers';

export const StyledToggle = styled.div`
  display: flex;
  align-items: center;
  ${getMargins};
`;

export const HiddenInput = styled.input`
  position: absolute !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  text-transform: none !important;
  white-space: nowrap !important;
`;