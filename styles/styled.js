import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}
  body {

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #fff;
    color: #001514;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    list-style: none;
  }
  img{
    max-width: 100%;
  }
`;

export const theme = {
  colors: {
    primary: "#022650",
    white: "#fff",
    grey: "#a5a5a5",
    orange: "#f25c54",
  },
  fonts: {
    sm: "1.5rem",
    md: "2rem",
  },
};
