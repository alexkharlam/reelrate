import { useDispatch } from "react-redux";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { collectionsActions } from "@/store/collections-slice";
import SideBar from "../Navigation/DekstopNavigation/SideBar";
import MobileMenu from "../Navigation/MobileNavigation/MobileMenu";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

function AppLayout({ children }) {
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
    <div
      className={`${poppins.variable} font-sans md:flex`}
      mode="wait"
      initial={false}
    >
      <SideBar />
      <main className="relative h-screen w-full overflow-x-hidden pt-3 pb-5 md:pb-3">
        <AnimatePresence>{children}</AnimatePresence>
      </main>
      <MobileMenu />
    </div>
  );
}

export default AppLayout;