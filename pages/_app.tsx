import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../src/ga";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />;
    </>
  );
}
