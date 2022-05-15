import { FC } from 'react';
import { StyledLogo } from './style';

interface IProps {
  src: string;
}

export const Logo: FC<IProps> = ({ src }) => <StyledLogo src={src} />;
