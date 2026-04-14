import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';

function TopNav() {
  return (
    <header className="flex h-28 flex-col items-center justify-end bg-white px-4 pb-2 pt-[env(safe-area-inset-top)]">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={logo}
          alt="caminoteLogo"
          width={40}
          height={40}
          priority
          className="h-10 w-10 object-contain"
        />
      </Link>
    </header>
  );
}

export default TopNav;