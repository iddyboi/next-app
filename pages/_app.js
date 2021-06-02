import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles/styled';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
