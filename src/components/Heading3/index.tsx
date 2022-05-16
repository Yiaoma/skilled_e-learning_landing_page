import { FC } from 'react';
import { StyledHeading3 } from './style';

interface IProps {
  children: string;
}

export const Heading3: FC<IProps> = ({ children }) => (
  <StyledHeading3>{children}</StyledHeading3>
);
