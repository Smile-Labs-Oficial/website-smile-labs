import Head from 'next/head';
import MainContent from '../components/MainContent';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Smile Labs</title>
        <meta name="description" content="smile labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent />
    </Layout>
  );
}
