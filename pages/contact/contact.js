import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
// import { getTwitchStatus } from '../../lib/twitch';

export default function Contact(twitchStatus) {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Contact Information:</h2>
      <div className={utilStyles.contact}>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='far fa-envelope'></i>
        </div>
        <div className={utilStyles.rowname}>
          <a href='mailto:idemirer@gmail.com' target='_blank'>
            idemirer@gmail.com
          </a>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-linkedin-in'></i>
        </div>
        <div className={utilStyles.rowname}>
          <a href='https://www.linkedin.com/in/ilhan-demirer-3230642a/' target='_blank'>
            Ilhan Demirer
          </a>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-twitter'></i>
        </div>
        <div className={utilStyles.rowname}>
          <a href='https://twitter.com/idemirer' target='_blank'>
            @idemirer
          </a>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-github'></i>
        </div>
        <div className={utilStyles.rowname}>
          <a href='https://github.com/idemirer' target='_blank'>
            Ilhan Demirer
          </a>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const twitchStatus = await getTwitchStatus();
//   return {
//     props: {
//       twitchStatus,
//     },
//   };
// }
