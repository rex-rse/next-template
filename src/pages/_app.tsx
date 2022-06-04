// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon.ico"
          /> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
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
