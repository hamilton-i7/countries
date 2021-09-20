import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;

    @media (min-width: 1600px) {
      font-size: 70%;
    }
  }

  body, #root, main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  body {
    background-color: ${props => props.theme.background};
    box-sizing: border-box;
    color: ${props => props.theme.onBackground};    
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;

    @media (min-width: 650px) {
      font-size: 1.4rem;
    }
  }
  
  a {
    text-decoration: none;
  }
`;

export const SHADOW = '1.2rem 0 1.5rem rgba(0, 0, 0, 0.05)';

export default GlobalStyles;
