import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import Footer from './footer';

const name = 'Ilhan Demirer';
export const siteTitle = 'Ilhan Demirer Personal Website';

export default function Layout({ children, home, post }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='manifest' href='/images/site.webmanifest' />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
        <meta name='description' content='Ilhan Demirer personal website.' />
        <meta itemProp='name' content='Ilhan Demirer Personal Website' />
        <meta itemProp='description' content='Ilhan Demirer personal website.' />
        <meta itemProp='image' content='./images/wide-card.png' />
        <meta property='og:url' content='https://idemirer.vercel.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ilhan Demirer Personal Website' />
        <meta property='og:description' content='Ilhan Demirer personal website.' />
        <meta property='og:image' content='./images/wide-card.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ilhan Demirer Personal Website' />
        <meta name='twitter:description' content='Ilhan Demirer personal website.' />
        <meta name='twitter:image' content='./images/wide-card.png' />
      </Head>
      <Navbar />
      <header className={styles.header}>
        {home ? (
          <>
            <div className={utilStyles.profileImg}>
              <Image
                priority
                src='/images/IlhanDemirer.jpg'
                className={utilStyles.borderCircle}
                height={170}
                width={170}
                alt={name}
              />
            </div>
            <h1 className={utilStyles.headingXl}>{name}</h1>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {post && (
        <div className={styles.backToHome}>
          <Link href='/posts'>
            <a>&#8592; Back to Posts</a>
          </Link>
        </div>
      )}
      {!home && !post && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>&#8592; Back to Home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
