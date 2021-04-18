import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLightColor,
  getBrandColor,
  getGrayLightColor,
  getInfoColor,
  getInfoShadeColor,
  getPositionStyles,
  getSuccessColor,
  getWarningColor
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2,.cls-3,.cls-9, .cls-13{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  .cls-2{stroke:${getInfoColor};}
  .cls-2,.cls-3{stroke-width:10px;}
  .cls-3{stroke:${getInfoColor};}
  .cls-4{fill:${getGrayLightColor};}
  .cls-5{fill:${getInfoShadeColor};opacity:0.67;isolation:isolate;}
  .cls-6{fill:#fff;}
  .cls-7{fill:#3c3744;}
  .cls-8{fill:${getBrandColor};}
  .cls-9{stroke:${getBrandColor};stroke-width:25px;}
  .cls-10{fill:${getWarningColor};}
  .cls-11{fill:${getBrandColor};}
  .cls-12{fill:${getSuccessColor};}
  .cls-13{stroke:${getAccentColor};stroke-width:25px;}
`;
