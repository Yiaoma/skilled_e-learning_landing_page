import { FC } from 'react';

interface H3Props {
  children: string;
  className?: string;
}

export const H3: FC<H3Props> = ({ className, children }) => (
  <h3 className={className}>{children}</h3>
);
