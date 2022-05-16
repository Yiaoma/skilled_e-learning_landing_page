import styled, { css } from 'styled-components';

interface IButton {
  styles: {
    height: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    gradientColor1?: string;
    gradientColor2?: string;
    borderRadius: string;
  };
}

export const StyledButton = styled.button<IButton>`
  border-radius: ${({ styles }) => styles.borderRadius};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: ${({ theme }) => theme.lineHeights.small};
  font-family: ${({ theme }) => theme.fontFamily};
  height: ${({ styles }) => styles.height};
  width: 167px;

  ${({ styles }) =>
    styles.backgroundColor &&
    css`
      background-color: ${styles.backgroundColor};
    `}

  ${({ styles }) =>
    styles.gradientColor1 &&
    css`
      background-image: ${`linear-gradient(${styles.gradientColor1}, ${styles.gradientColor2})`};
    `}

  &:hover {
    cursor: pointer;

    ${({ styles }) =>
      styles.hoverBackgroundColor &&
      css`
        background-color: ${styles.hoverBackgroundColor};
      `}

    ${({ styles }) =>
      styles.gradientColor1 &&
      css`
        opacity: 50%;
      `}
  }
`;
