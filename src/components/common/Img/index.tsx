import { FC } from 'react';

interface ImgProps {
  className?: string;
  src: string;
  alt: string;
}

export const Img: FC<ImgProps> = ({ className, src, alt }) => (
  <picture>
    <img className={className} src={src} alt={alt} />
  </picture>
);
