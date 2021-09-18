import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/general/GlobalStyles.style';
import Home from './components/pages/Home';
import { lightTheme, darkTheme } from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Switch>
        <Route path="/" children={<Home />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
