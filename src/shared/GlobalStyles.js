import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Kumbh Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: var(--lineHeight);
    background: var(--white);
    color: var(--black);
  }

  html {
    --black: #000;
    --white: #fff;
    --violet: #bd10e0;
    --blue: #2caab7ab;
    --turquoise: #50e3c2;
    --lightGreen: #b8e986;
    --green: #7ed321;
    --greenLeaf: #417505;
    --yellow: #f8e71c;
    --orange: #f5a623;
    --grey: #9b9b9b;
    --gray: var(--grey);
    --bs: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    --maxWidth: 90vw;
    --lineHeight: 1rem;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    &:hover {
      text-decoration: underline;
    }
  }

  li {
    line-height: 1.5rem;
  }

  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
