import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../components/Home/Home';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job Search</title>
        <meta name="description" content="Find your dream jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
