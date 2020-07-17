/* eslint-disable max-len */
import React from 'react';
import { StyledWave } from './styled';

export default function Wave() {
  return (
    <StyledWave>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,213.3C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </StyledWave>
  );
}
