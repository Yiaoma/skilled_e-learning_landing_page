import { FC } from 'react';
import { StyledHeading1 } from './style';

interface IProps {
  children: string;
}

export const Heading1: FC<IProps> = ({ children }) => (
  <StyledHeading1>{children}</StyledHeading1>
);
