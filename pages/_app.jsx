import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import Favicon from "@/components/Seo/Favicon";
import { useRouteLoading } from "@/utils/hooks/useRouteLoading";
import TopLoadingBar from "@/components/UI/TopLoadingBar";
import AppLayout from "@/components/AppLayout/AppLayout";
import Seo from "@/components/Seo/Seo";

export default function App({ Component, pageProps }) {
  const isLoading = useRouteLoading();

  return (
    <Provider store={store}>
      {isLoading && <TopLoadingBar />}
      <Seo />

      <Favicon />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
