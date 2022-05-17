import { FC, ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children }) => (
  <footer>{children}</footer>
);
