import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #ffffff;
    --ligthGrey: #eeeeee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 3rem;
    --fontBig: 2.5rem;
    --fontMed: 2rem;
    --fontSmall: 1.4rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
