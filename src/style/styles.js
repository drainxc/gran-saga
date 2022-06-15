import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }

  main {
    width: 1920px;
    height: 937px;
    margin: 0;
    overflow: auto;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
    -ms-overflow-style: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  main > div {
    scroll-snap-align: start; /* 자식 적용 */
    width: 1920px;
    height: 937px;
  }
`;

export default GlobalStyle;
