import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --main-bg-color: #184053;
    --main-text-color: #FFFFFF;
    --main-contrast-color: #C68D3C;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    padding: 2rem;
  }
  h1 {font-weight: 100}
`;
