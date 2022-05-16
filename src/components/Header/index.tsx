import { Heading1, Paragraph, Button, Image } from 'components';
import { useTheme } from 'styled-components';
import { ThemeType } from 'themes';
import { StyledHeader, StyledGroup } from './style';
import imageMobileUrl from 'assets/image-hero-mobile.png';

export const Header = () => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledHeader>
      <StyledGroup>
        <Heading1>Maximize skill, minimize budget</Heading1>
        <Paragraph>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </Paragraph>
        <Button styles={theme.button2}>Get started</Button>
      </StyledGroup>
      <Image src={imageMobileUrl} />
    </StyledHeader>
  );
};
