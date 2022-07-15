// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';

import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { store } from '@store/index';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Snackbar from '@components/Snackbar';

export type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ReduxProvider store={store}>
        {/* <ThemeProvider> */}
        <Head>
          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon.ico"
          /> */}
        </Head>
        {getLayout(<Component {...pageProps} />)}
        <Snackbar />
        <ReactQueryDevtools initialIsOpen={false} />
        {/* </ThemeProvider> */}
      </ReduxProvider>
    </QueryClientProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
