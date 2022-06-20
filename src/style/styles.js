import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
