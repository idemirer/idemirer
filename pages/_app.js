import '../styles/global.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`} />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_TRACKING_ID}', {page_path: window.location.pathname,});`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
