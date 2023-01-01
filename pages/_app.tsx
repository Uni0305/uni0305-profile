import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

const GoogleAnalytics = () => {
  const { GA_MEASUREMENT_ID } = process.env;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', ${GA_MEASUREMENT_ID});
      `}</Script>
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />;
    </>
  );
}
