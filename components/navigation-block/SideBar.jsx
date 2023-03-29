import Image from "next/image";
import Link from "next/link";

import SideNav from "./SideNav";

function SideBar() {
  return (
    <aside className="hidden h-screen shrink-0 flex-col bg-black p-2.5 md:flex">
      <Link href="/">
        <Image
          className="mb-3.5"
          src="/rrlogo.svg"
          width="156"
          height="51"
          alt="ReelRate logo"
          priority
        />
      </Link>
      <SideNav />
    </aside>
  );
}

export default SideBar;
