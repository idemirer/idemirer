import { Html, Head, Main, NextScript, Script } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        /> */}
        <script src='https://kit.fontawesome.com/ab5e2af120.js' crossorigin='anonymous'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
