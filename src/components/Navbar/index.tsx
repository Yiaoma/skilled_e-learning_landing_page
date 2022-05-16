import { Logo, Button } from 'components';
import { StyledNavbar } from './style';
import logoDarkUrl from 'assets/logo-dark.svg';
import { useTheme } from 'styled-components';
import { ThemeType } from 'themes';

export const Navbar = () => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledNavbar>
      <Logo src={logoDarkUrl} />
      <Button styles={theme.button1}>Get Started</Button>
    </StyledNavbar>
  );
};
