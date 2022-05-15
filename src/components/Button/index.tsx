import { FC } from 'react';
import { StyledButton } from './style';

interface IProps {
  children: string;
  styles: {
    backgroundColor: string;
    color: string;
    hoverColor: string;
  };
}

export const Button: FC<IProps> = ({ children, styles }) => {
  return <StyledButton styles={styles}>{children}</StyledButton>;
};
