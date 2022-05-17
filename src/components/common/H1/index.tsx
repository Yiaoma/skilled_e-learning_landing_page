import { FC } from 'react';

interface H1Props {
  children: string;
}

export const H1: FC<H1Props> = ({ children }) => <h1>{children}</h1>;
