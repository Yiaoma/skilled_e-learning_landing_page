import { Nav, Footer, Header } from 'containers';
import { Card } from 'components/Card';
import animationIcon from 'assets/icon-animation.svg';

export const Home = () => (
  <>
    <Nav />
    <Header />
    <Card
      iconUrl={animationIcon}
      title="Animation"
      text="Learn the latest animation techniques to create stunning motion design and captivate your audience."
    />
    <Footer />
  </>
);
