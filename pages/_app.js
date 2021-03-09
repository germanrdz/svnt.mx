import Head from "next/head";
import { globalStyles } from "../shared/styles";

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Head>
      <title>SVNT (Savant)</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="google-site-verification"
        content="hu6OYTLC1K459qiNH4jym90ueRe3eAfjQ2ES4Ouvo4A"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
