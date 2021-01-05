import type { AppProps } from "next/app";
import "../styles/theme.css";
// import "../styles/custom.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;