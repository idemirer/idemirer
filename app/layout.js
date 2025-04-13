import '@/styles/global.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { baseUrl } from './sitemap';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ilhan Demirer, Ph.D.',
    template: '%s | Ilhan Demirer',
  },
  description: 'SUNY Plattsburgh Management faculty, I share hospitality news and data on this site.',
  images: [{ url: 'https://www.ilhandemirer.com/images/wide-card.png' }],
  authors: [{ name: 'Ilhan Demirer', url: 'https://www.ilhandemirer.com/' }],
  keywords: ['Ilhan Demirer', 'hospitality', 'hospitality data', 'hospitality news', 'hospitality education'],
  openGraph: {
    title: 'Ilhan Demirer Personal Website',
    description: 'SUNY Plattsburgh Management faculty, I share hospitality news and data on this site.',
    url: baseUrl,
    siteName: 'Ilhan Demirer Personal Website',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.ilhandemirer.com/images/wide-card.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='manifest' href='/images/site.webmanifest' />
        <meta itemProp='name' content='Ilhan Demirer Personal Website' />
        <meta
          itemProp='description'
          content='SUNY Plattsburgh Management faculty. I  share hospitality news and data on this site.'
        />
        <meta itemProp='image' content='https://www.ilhandemirer.com/images/wide-card.png' />
      </head>
      <body className='w-full antialiased md:w-full' data-theme='light'>
        <div className='w-screen-lg mt-1 md:w-5xl lg:mx-auto'>
          <ThemeProvider>
            <Navbar />
            <main className='min-h-96 mx-4'>{children}</main>
            <Footer />
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-JP5LKKYL7V' />
    </html>
  );
}
