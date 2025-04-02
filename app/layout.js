import '@/styles/global.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Ilhan Demirer, Ph.D.</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='manifest' href='/images/site.webmanifest' />
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
      </head>
      {/* <body className='antialiased w-full mt-1 md:mt-4 md:max-w-screen-lg lg:mx-auto light' data-theme='light'> */}
      <body className='w-full mt-1 antialiased md:mt-4 md:w-full' data-theme='light'>
        <div className='w-screen-lg mt-1 md:w-5xl lg:mx-auto'>
          <ThemeProvider>
            <Navbar />
            <main className='min-h-96 mx-4'>{children}</main>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
      <GoogleAnalytics gaId='G-JP5LKKYL7V' />
    </html>
  );
}
