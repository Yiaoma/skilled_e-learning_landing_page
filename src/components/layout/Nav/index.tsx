import { FC, ReactNode } from 'react';

interface NavProps {
  className?: string;
  children: ReactNode;
}

export const Nav: FC<NavProps> = ({ className, children }) => (
  <nav className={className}>{children}</nav>
);
