import { StyledNav, StyledLogo, StyledButton } from './style';
import logoUrl from 'assets/logo-dark.svg';

export const Navbar = () => (
  <StyledNav>
    <StyledLogo src={logoUrl} alt="Skilled logo" />
    <StyledButton>Get Started</StyledButton>
  </StyledNav>
);
