import { FC } from 'react';

interface H2Props {
  children: string;
}

export const H2: FC<H2Props> = ({ children }) => <h2>{children}</h2>;
