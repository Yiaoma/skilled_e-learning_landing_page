import { FC, ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => (
  <header>{children}</header>
);
