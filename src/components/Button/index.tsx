import { FC } from 'react';
import { StyledButton } from './style';

interface IProps {
  children: string;
  styles: {
    height: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    gradientColor1?: string;
    gradientColor2?: string;
    borderRadius: string;
  };
}

export const Button: FC<IProps> = ({ children, styles }) => (
  <StyledButton styles={styles}>{children}</StyledButton>
);
