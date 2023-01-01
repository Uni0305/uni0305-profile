import Script from "next/script";

export default function GoogleAnalytics() {
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', ${trackingId});
      `}</Script>
    </>
  );
}