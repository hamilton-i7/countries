import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/general/GlobalStyles.style';
import StyledNav from './components/general/Nav.style';
import { StyledNotFound } from './components/general/NotFound.style';
import Detail from './components/pages/Detail';
import Home from './components/pages/Home';
import { lightTheme, darkTheme } from './theme/Theme';

const THEME = 'theme';
const LIGHT_THEME = 'light theme';
const DARK_THEME = 'dark theme';

export const HOME_PATH = '/';
export const DETAIL_PATH = '/detail';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem(THEME)) {
      setIsLightTheme(true);
      localStorage.setItem(THEME, LIGHT_THEME);
      return;
    }

    localStorage.getItem(THEME) === LIGHT_THEME
      ? setIsLightTheme(true)
      : setIsLightTheme(false);
  }, []);

  const handleThemeToggle = () => {
    setIsLightTheme(prevState => {
      localStorage.setItem(THEME, !prevState ? LIGHT_THEME : DARK_THEME);
      return !prevState;
    });
  };

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledNav lightMode={isLightTheme} onThemeToggle={handleThemeToggle} />
      <Switch>
        <Route exact path={HOME_PATH} children={<Home />} />
        <Route path={DETAIL_PATH + '/:code'} children={<Detail />} />
        <Route children={<StyledNotFound />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
