import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/styled";
import TodoContextProvider from "../hooks/store";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <GlobalStyle />
      <TodoContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Layout />
            <Component {...pageProps} />
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </TodoContextProvider>
    </>
  );
}
