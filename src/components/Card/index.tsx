import { FC } from 'react';
import { StyledCard, StyledIcon, StyledH3, StyledP, StyledA } from './style';

interface CardProps {
  iconUrl: string;
  title: string;
  text: string;
}

export const Card: FC<CardProps> = ({ iconUrl, title, text }) => (
  <StyledCard>
    <StyledIcon src={iconUrl} alt="Animation icon." />
    <StyledH3>{title}</StyledH3>
    <StyledP>{text}</StyledP>
    <StyledA href="#">Get Started</StyledA>
  </StyledCard>
);
