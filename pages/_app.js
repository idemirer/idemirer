import '../styles/global.css';
import Script from 'next/script';
import 'inter-ui/inter.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <link rel='mask-icon' href='/images/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='manifest' href='/images/site.webmanifest' />
        <meta name='msapplication-config' content='/images/browserconfig.xml' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#dddddd' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#222222' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='description' content='Management faculty, share news and data on this site.' />
        <meta itemProp='name' content='Ilhan Demirer Personal Website' />
        <meta itemProp='description' content='Management faculty, share news and data on this site.' />
        <meta itemProp='image' content='https://www.ilhandemirer.com/images/wide-card.png' />
        <meta property='og:url' content='https://www.ilhandemirer.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ilhan Demirer Personal Website' />
        <meta property='og:description' content='Management faculty, share news and data on this site.' />
        <meta property='og:image' content='https://www.ilhandemirer.com/images/wide-card.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ilhan Demirer Personal Website' />
        <meta name='twitter:description' content='Management faculty, share news and data on this site.' />
        <meta name='twitter:image' content='https://www.ilhandemirer.com/images/wide-card.png' />
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-JP5LKKYL7V' />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-JP5LKKYL7V', {page_path: window.location.pathname,});`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
