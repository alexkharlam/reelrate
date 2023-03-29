// getting font
import { Poppins } from "next/font/google";
import SideBar from "../navigation-block/SideBar";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

import { collectionsActions } from "@/store/collections-slice";
import MobileNav from "../navigation-block/mobileNav/MobileNav";

function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const localRates = JSON.parse(localStorage.getItem("rates"));
    const localWatchList = JSON.parse(localStorage.getItem("watchList"));

    dispatch(
      collectionsActions.initCollections({
        rates: localRates ? localRates : [],
        watchList: localWatchList ? localWatchList : [],
      })
    );
  }, []);

  return (
    <div className={`${poppins.variable} font-sans md:flex`}>
      <SideBar />
      <main className="relative h-screen w-full overflow-x-hidden pt-3 pb-5 md:pb-3">
        {children}
      </main>
      <MobileNav />
    </div>
  );
}

export default Layout;
