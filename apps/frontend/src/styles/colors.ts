import Color from 'color';

export const aqua = '#46d1c6';
export const black = '#4E4945';
export const blue = '#3EBFBE';
export const brown = '#BDA480';
export const clojureBlue = '#91b6fb';
export const darkBlue = '#1E41A5';
export const darkGrey = '#5E5955';
export const darkPink = '#F7337B';
export const darkPlum = '#A775C1';
export const condiGreen = '#ABE45F';
export const epiGreen = '#619643';
export const gold = '#fdbb47';
export const green = '#01BF8D';
export const grey = '#6E6965';
export const lightGrey = '#d3ccc8';
export const orange = '#fb5836';
export const pink = '#EC98C0';
export const plum = '#c597dc';
export const red = '#fa4853';
export const white = '#fafafa';
export const yellow = '#F8D85D';

export const colorFromString = (text: string, colors: string[]): string => {
  let n = 0;
  for (var i = 0; i < text.length; ++i) {
    n = (n + text.charCodeAt(i)) % colors.length;
  }

  return colors[n];
};

export const darken = (color: string, value: number): string => {
  return Color(color)
    .darken(value)
    .hex();
};

export const lighten = (color: string, value: number): string => {
  return Color(color)
    .lighten(value)
    .hex();
};

export const desaturate = (color: string, value: number): string => {
  return Color(color)
    .desaturate(value)
    .hex();
};

export const mix = (color1: string, color2: string, value: number): string => {
  return Color(color1)
    .mix(Color(color2), value)
    .hex();
};

export default {
  aqua,
  black,
  blue,
  brown,
  clojureBlue,
  darkBlue,
  darkPink,
  epiGreen,
  gold,
  green,
  grey,
  lightGrey,
  orange,
  plum,
  pink,
  red,
  white,
  yellow,
};
