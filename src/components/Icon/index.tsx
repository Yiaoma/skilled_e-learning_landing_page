import { FC } from 'react';
import { StyledIcon } from './style';

interface IProps {
  src: string;
  className: string;
}

export const Icon: FC<IProps> = ({ className, src }) => (
  <StyledIcon src={src} className={className} />
);
