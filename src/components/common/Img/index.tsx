import { FC } from 'react';

interface ImgProps {
  src: string;
  alt: string;
}

export const Img: FC<ImgProps> = ({ src, alt }) => (
  <picture>
    <img src={src} alt={alt} />
  </picture>
);
