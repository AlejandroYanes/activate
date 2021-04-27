import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLightColor,
  getBrandColor,
  getErrorColor,
  getInfoColor,
  getPositionStyles
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2,.cls-4{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:4.78px;
  }
  .cls-2{stroke:${getInfoColor};}
  .cls-3{fill:${getBrandColor};}
  .cls-4{stroke:${getAccentColor};}
  .cls-5{fill:${getErrorColor};}
  .cls-6{
    fill:${getInfoColor};
    fill-rule:evenodd;
  }
  .cls-7{fill:#fff;}
  .cls-8{fill:${getAccentColor};}
`;
