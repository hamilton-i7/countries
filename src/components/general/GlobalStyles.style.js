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
    display: inline-block;
    text-decoration: none;    
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const SHADOW = '1.2rem 0 1.5rem rgba(0, 0, 0, 0.05)';

export default GlobalStyles;
