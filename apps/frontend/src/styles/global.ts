import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { baseSize, remCalc, sansSerif, title } from './type';
import { black, green, white } from './colors';

export default () => injectGlobal`
  ${styledNormalize}

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${white};
    color: ${black};
    font-family: ${sansSerif};
    font-size: ${baseSize}px;
    overflow: hidden;
  }

  * {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-sizing: border-box;
  }

  #root {
    color: ${black};
    display: flex;
    height: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${title};
  }

  h1 {
    font-size: ${remCalc(50)};
  }

  h2 {
    font-size: ${remCalc(40)};
  }

  p {
    font-size: ${remCalc(18)};
    line-height: 1.5;
  }

  a {
    color: ${black};
    text-decoration: none;

    &.active {
      color: ${green};
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${green};
      }
    }
  }
`;
