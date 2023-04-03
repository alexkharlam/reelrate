import { Home } from "react-feather";
import { Search } from "react-feather";
import { Star } from "react-feather";
import { Eye } from "react-feather";
import NavLink from "./NavLink";

function SideNav() {
  return (
    <nav className="flex flex-col gap-3 text-gray-400">
      <NavLink title="Home" url="/" Icon={Home} />
      <NavLink title="Search" url="/search" Icon={Search} />
      <div className="h-[0.5px] bg-gray-600" />
      <NavLink title="My rates" url="/collections/rates" Icon={Star} />
      <NavLink title="My watch list" url="/collections/watch-list" Icon={Eye} />
    </nav>
  );
}

export default SideNav;
