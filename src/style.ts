import { ThemeType } from 'themes';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily}
  }

  body{
    min-height: 100vh;
    background-image: ${({ theme }) =>
      `linear-gradient(${theme.colors.white}, ${theme.colors.offWhite})`}
  }
`;
