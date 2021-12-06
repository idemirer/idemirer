import styles from './layout.module.css';
import Navbar from './navbar';
import Footer from './footer';
import Meta from './meta';

export const siteTitle = 'Ilhan Demirer Personal Website';

export default function Layout({ children, home, post }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main id='root'>
          <section>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  );
}
