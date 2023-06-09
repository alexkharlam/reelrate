import { useDispatch } from "react-redux";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { collectionsActions } from "@/store/collections-slice";
import SideBar from "../Navigation/DekstopNavigation/SideBar";
import MobileMenu from "../Navigation/MobileNavigation/MobileMenu";
import { useScrollOnRoute } from "@/utils/hooks/useScrollOnRoute";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

function AppLayout({ children }) {
  const elementRef = useScrollOnRoute();

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
      className={`${poppins.variable} flex h-screen overflow-hidden font-sans`}
    >
      <SideBar />
      <main
        ref={elementRef}
        className="relative h-full w-full overflow-x-hidden overflow-y-scroll pt-3 pb-4 md:pb-3"
      >
        <AnimatePresence>{children}</AnimatePresence>
      </main>
      <MobileMenu />
    </div>
  );
}

export default AppLayout;
