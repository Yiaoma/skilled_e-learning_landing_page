import { StyledFooter, StyledLogo, StyledButton } from './style';
import logoUrl from 'assets/logo-light.svg';

export const Footer = () => (
  <StyledFooter>
    <StyledLogo src={logoUrl} alt="Skilled logo." />
    <StyledButton>Get Started</StyledButton>
  </StyledFooter>
);
