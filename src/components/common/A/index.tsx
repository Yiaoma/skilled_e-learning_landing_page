import { FC } from 'react';

interface AProps {
  children: string;
  href: string;
}

export const A: FC<AProps> = ({ children, href }) => (
  <a href={href}>{children}</a>
);
