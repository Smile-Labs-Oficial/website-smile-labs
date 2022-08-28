import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import smileLogo from '../public/assets/logo.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smile Labs</title>
        <meta name="description" content="smile labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a className="text-yellow-400" href="https://github.com/Smile-Labs-Oficial"
          target="_blank"
          rel="noopener noreferrer">Smile Labs!</a>
        </h1>
        <Image className="rounded-full mt-2.5" src={smileLogo} alt="smile logo" width={250} height={250}/>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
