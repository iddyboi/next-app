import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";

import { store } from "../redux/index";
import { GlobalStyle, theme } from "../styles/styled";
import TodoContextProvider from "../hooks/store";
import Layout from "../src/components/Layout";

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
            <Provider store={store}>
              <Layout />
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </TodoContextProvider>
    </>
  );
}
