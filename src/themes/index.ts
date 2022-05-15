const colors = {
  lightBlue: '#666CA3',
  darkBlue: '#13183F',
  gray: '#83869A',
  darkPink: '#F74780',
  lightPink: '#FFA7C3',
  white: '#FFFFFF ',
};

const fontSizes = {
  xLarge: '56px',
  large: '40px',
  medium: '32px',
  small: '24px',
  xSmall: '18px',
  xxSmall: '16px',
};

const fontWeights = {
  xBold: 800,
  bold: 700,
  medium: 500,
};

const lineHeights = {
  xLarge: '70px',
  large: '51px',
  medium: '40px',
  small: '28px',
};

export const theme = {
  fontFamily: "'Plus Jakarta Sans', sans-serif;",
  button1: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
    hoverColor: colors.lightBlue,
  },
  button2: {
    backgroundColor: colors.darkPink,
    color: colors.white,
    hoverColor: colors.lightPink,
  },
};

export type ThemeType = typeof theme;
