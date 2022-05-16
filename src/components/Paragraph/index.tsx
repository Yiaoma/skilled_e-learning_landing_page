import { FC } from 'react';
import { StyledParagraph } from './style';

interface IProps {
  children: string;
}

export const Paragraph: FC<IProps> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);
