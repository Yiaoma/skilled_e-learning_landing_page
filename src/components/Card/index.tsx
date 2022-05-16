import { Heading3, Paragraph, Anchor } from 'components';
import { StyledCard, StyledIcon } from './style';
import iconUrl from 'assets/icon-animation.svg';

export const Card = () => (
  <StyledCard>
    <StyledIcon src={iconUrl} />
    <Heading3>Animation</Heading3>
    <Paragraph>
      Learn the latest animation techniques to create stunning motion design and
      captivate your audience.
    </Paragraph>
    <Anchor href="#">Get started</Anchor>
  </StyledCard>
);
