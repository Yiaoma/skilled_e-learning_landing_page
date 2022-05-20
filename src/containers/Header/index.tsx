import {
  StyledHeader,
  StyledContent,
  StyledH1,
  StyledP,
  StyledImg,
  StyledButton,
} from './style';
import heroImageUrl from 'assets/image-hero-mobile.webp';

export const Header = () => (
  <StyledHeader>
    <StyledContent>
      <StyledH1>Maximize skill, minimize budget</StyledH1>
      <StyledP>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </StyledP>
      <StyledButton>Get Started</StyledButton>
    </StyledContent>
    <StyledImg
      src={heroImageUrl}
      alt="Lady working on her laptop while having hot beverage."
    />
  </StyledHeader>
);
