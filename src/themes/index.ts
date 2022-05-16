const colors = {
  lightBlue: '#666CA3',
  darkBlue: '#13183F',
  blue: '#4851FF',
  orange: '#F02AA6', // violet
  warmViolet: '#FF6F48', // ornage
  coldViolet: '#F02AA6',
  gray: '#83869A',
  darkPink: '#F74780',
  lightPink: '#FFA7C3',
  white: '#FFFFFF ',
};

export const theme = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  colors: {
    white: '#FFFFFF',
    offWhite: '#F0F1FF',
    gray: '#83869A',
    darkBlue: '#13183F',
    darkPink: '#F74780',
    lightPink: '#FFA7C3',
  },
  fontSizes: {
    xLarge: '56px',
    large: '40px',
    medium: '32px',
    small: '24px',
    xSmall: '18px',
    xxSmall: '16px',
  },
  fontWeights: {
    xBold: 800,
    bold: 700,
    medium: 500,
  },
  lineHeights: {
    xLarge: '70px',
    large: '51px',
    medium: '40px',
    small: '28px',
  },
  button1: {
    height: '56px',
    backgroundColor: '#13183F',
    hoverBackgroundColor: '#666CA3',
    borderRadius: '28px',
  },
  button2: {
    height: '63px',
    gradientColor1: '#FF6F48',
    gradientColor2: '#F02AA6',
    borderRadius: '31.5px',
  },
  button3: {
    height: '56px',
    gradientColor1: '#4851FF',
    gradientColor2: '#F02AA6',
    borderRadius: '28px',
  },
};

export type ThemeType = typeof theme;
