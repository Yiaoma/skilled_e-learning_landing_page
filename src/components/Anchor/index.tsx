import { FC } from 'react';
import { StyledAnchor } from './style';

interface IProps {
  children: string;
  href: string;
}

export const Anchor: FC<IProps> = ({ children, href }) => (
  <StyledAnchor href={href}>{children}</StyledAnchor>
);
