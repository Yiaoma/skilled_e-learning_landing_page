import { Home } from 'views';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';
import Style from './style';

const App = () => (
  <ThemeProvider theme={theme}>
    <Style />
    <Home />
  </ThemeProvider>
);

export default App;
