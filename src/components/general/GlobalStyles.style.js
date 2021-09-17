import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.background};
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2rem;
  }
`;

export default GlobalStyles;
