import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/wordcloud.css";
import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/z_round.png" type="image/x-icon" />
        <title>{"StroupZ's Portfolio"}</title>
        <meta name="title" content="StroupZ's Portfolio" />
        <meta name="description" content="StroupZ's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StroupZ's Portfolio" />
        <meta property="og:description" content="StroupZ's Portfolio" />
        <meta property="og:image" content="/z_round.png" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;
