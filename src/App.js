import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/Theme';

function App() {
  return <ThemeProvider theme={lightTheme}></ThemeProvider>;
}

export default App;
