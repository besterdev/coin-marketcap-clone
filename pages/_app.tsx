import "../styles/globals.css";
import type { AppProps } from "next/app";

import getConfig from "next/config";
import { MoralisProvider } from "react-moralis";

const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="pUiprdUmbRhqNfGRgD3tyUiIyvPzNX7ZycntGcVz"
      serverUrl="https://5g8kwxw23sxd.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
