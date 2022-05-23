import { FC } from 'react';

interface H2Props {
  className?: string;
  children: string;
}

export const H2: FC<H2Props> = ({ className, children }) => (
  <h2 className={className}>{children}</h2>
);
