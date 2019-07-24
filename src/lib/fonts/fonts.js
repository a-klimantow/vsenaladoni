import { css } from 'styled-components';

import UbuntuReg from './Ubuntu/Ubuntu-Regular.ttf';
import UbuntuMedium from './Ubuntu/Ubuntu-Medium.ttf';
import Lato from './Lato/Lato-Regular.ttf';

export const addFont = (ff, url, weight) => css`
  @font-face {
    font-family: ${ff};
    src: url(${url}) format('truetype');
    font-weight: ${weight};
    font-style: normal;
    font-display: fallback;
  }
`;

export const fonts = css`
  ${addFont('Ubuntu', UbuntuReg, 'normal')};
  ${addFont('Ubuntu', UbuntuMedium, 500)};
  ${addFont('Lato', Lato, 'normal')};
`;