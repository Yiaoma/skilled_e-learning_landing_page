import { StyledMain } from './style';
import { Card } from 'components/Card';
import { MainCard } from 'components/MainCard';
import animationIconUrl from 'assets/icon-animation.svg';
import designIconUrl from 'assets/icon-design.svg';
import photographyIconUrl from 'assets/icon-photography.svg';
import cryptoIconUrl from 'assets/icon-crypto.svg';
import businessIconUrl from 'assets/icon-business.svg';

export const Main = () => (
  <StyledMain>
    <MainCard />
    <Card
      iconUrl={animationIconUrl}
      title="Animation"
      text="Learn the latest animation techniques to create stunning motion design and captivate your audience."
    />
    <Card
      iconUrl={designIconUrl}
      title="Design"
      text="Create beautiful, usable interfaces to help shape the future of how the web looks."
    />
    <Card
      iconUrl={photographyIconUrl}
      title="Photography"
      text="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
    />
    <Card
      iconUrl={cryptoIconUrl}
      title="Crypto"
      text="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
    />
    <Card
      iconUrl={businessIconUrl}
      title="Business"
      text="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
    />
  </StyledMain>
);
