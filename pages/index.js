import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.scss'
import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFTLaunchKit Test - Aisen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Landing />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}