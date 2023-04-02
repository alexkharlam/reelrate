import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ title, url, Icon }) {
  const router = useRouter();
  const isActive = router.pathname === url ? true : false;

  return (
    <Link
      className={`flex items-center gap-1.5 text-md font-bold transition-colors duration-100 hover:text-white ${
        isActive && "text-white"
      }`}
      href={url}
    >
      <Icon />
      <span>{title}</span>
    </Link>
  );
}

export default NavLink;
