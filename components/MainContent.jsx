import Image from 'next/image';
import styles from '../styles/Home.module.css';
import smileLogo from '../public/assets/logo.png';

const MainContent = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to{' '}
        <a
          className="text-yellow-400"
          href="https://github.com/Smile-Labs-Oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smile Labs!
        </a>
      </h1>
      <Image
        className="rounded-full mt-2.5"
        src={smileLogo}
        alt="smile logo"
        width={250}
        height={250}
      />
    </>
  );
};

export default MainContent;
