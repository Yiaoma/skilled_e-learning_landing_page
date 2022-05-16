import { FC } from 'react';
import { StyledImage } from './style';

interface IProps {
  src: string;
}

export const Image: FC<IProps> = ({ src }) => <StyledImage src={src} />;
