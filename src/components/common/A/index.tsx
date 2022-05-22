import { FC } from 'react';

interface AProps {
  children: string;
  href: string;
  className?: string;
}

export const A: FC<AProps> = ({ className, children, href }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
