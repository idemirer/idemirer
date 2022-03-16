import styles from './layout.module.css';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

export const siteTitle = 'Ilhan Demirer Personal Website';

export default function Layout({ children, home, post }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='manifest' href='/images/site.webmanifest' />
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
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main>
          <section>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  );
}
