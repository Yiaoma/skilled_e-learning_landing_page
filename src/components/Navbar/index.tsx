import { Button, Logo } from 'components';
import { useTheme } from 'styled-components';
import { ThemeType } from 'themes';
import { StyledNavbar } from './style';
import logoDarkUrl from 'assets/logo-dark.svg';

export const NavBar = () => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledNavbar>
      <Logo src={logoDarkUrl} />
      <Button styles={theme.button1}>Get Starter</Button>
    </StyledNavbar>
  );
};
