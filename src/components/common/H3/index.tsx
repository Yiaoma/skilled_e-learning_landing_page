import { FC } from 'react';

interface H3Props {
  children: string;
}

export const H3: FC<H3Props> = ({ children }) => <h3>{children}</h3>;
