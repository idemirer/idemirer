import styles from './layout.module.css';
import Navbar from './navbar';
import Footer from './footer';

export const siteTitle = 'Ilhan Demirer Personal Website';

export default function Layout({ children, home, post }) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main className={styles.main}>
          <section>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  );
}
