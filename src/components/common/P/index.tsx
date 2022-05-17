import { FC } from 'react';

interface PProps {
  children: string;
}

export const P: FC<PProps> = ({ children }) => <p>{children}</p>;
