import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    font-weight: 300;
    padding: 1rem;
    background-color: lightblue;
  }
  h1{font-weight: 100;}

  h4 {
font-weight: 500;
    background-color: orangered;
    width: fit-content;
    padding: .5rem 1rem;
    border-radius: .4rem;
    color: white;
  }

  ul { list-style: none;}

  li {margin-top: .5rem}
`;
