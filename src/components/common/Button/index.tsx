import { FC } from 'react';

interface ButtonProps {
  className?: string;
  children: string;
}

export const Button: FC<ButtonProps> = ({ className, children }) => (
  <button className={className}>{children}</button>
);
