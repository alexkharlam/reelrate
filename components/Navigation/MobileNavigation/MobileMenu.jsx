import { Star } from "react-feather";
import { Eye } from "react-feather";
import { Search } from "react-feather";
import { Home } from "react-feather";
import Image from "next/image";
import Link from "next/link";

function MobileMenu() {
  const iconSize = 24;
  return (
    <nav className="fixed bottom-1 left-1/2 z-50 flex h-3.5 w-11/12 -translate-x-1/2 items-center justify-around rounded-lg bg-gray-600 bg-opacity-90 md:hidden">
      <Link href="/">
        <Home size={iconSize} />
      </Link>
      <Link href="/search">
        <Search size={iconSize} />
      </Link>
      <Image
        className=""
        src="/R.svg"
        width="25"
        height="25"
        alt="ReelRate logo"
        priority
      />
      <Link href="/collections/rates">
        <Star size={iconSize} />
      </Link>
      <Link href="/collections/watch-list">
        <Eye size={iconSize} />
      </Link>
    </nav>
  );
}

export default MobileMenu;
