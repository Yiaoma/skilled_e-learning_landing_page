import { FC, ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
}

export const Nav: FC<NavProps> = ({ children }) => <nav>{children}</nav>;
