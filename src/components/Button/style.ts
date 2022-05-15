import styled from 'styled-components';

interface IButton {
  styles: {
    backgroundColor: string;
    color: string;
    hoverColor: string;
  };
}

export const StyledButton = styled.button<IButton>`
  background-color: ${({ styles }) => styles.backgroundColor};
  color: ${({ styles }) => styles.color};
  font-size: 18px;
  border-radius: 28px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: 28px;
  height: 56px;
  width: 156px;
  border: none;

  &:hover {
    background-color: ${({ styles }) => styles.hoverColor};
    cursor: pointer;
  }
`;
