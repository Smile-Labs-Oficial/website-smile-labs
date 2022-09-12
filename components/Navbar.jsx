import Link from 'next/link';
import Image from 'next/image';
import smileLogo from '../public/assets/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap p-3 justify-between">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image
              className="rounded-full mt-2.5"
              src={smileLogo}
              alt="smile logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <div>
          <Link href="/galery">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-yellow-400 tracking-wide hover:underline">
                Galery
              </span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-yellow-400 tracking-wide hover:underline">
                Contact
              </span>
            </a>
          </Link>
        </div>
        <div>
          <ConnectButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
