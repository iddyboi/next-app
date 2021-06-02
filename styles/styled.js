import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}
  body {

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #001514;
    color: #fff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    list-style: none;
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
    white: '#fff',
  },
  fonts: {
    sm: '1.5rem',
    md: '2rem',
  },
};
