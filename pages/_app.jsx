import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import Favicon from "@/components/Seo/Favicon";
import Seo from "@/components/Seo/Seo";
import { usePageLoading } from "@/utils/hooks/use-page-loading";
import TopLoadingBar from "@/components/UI/TopLoadingBar";
import AppLayout from "@/components/AppLayout/AppLayout";

export default function App({ Component, pageProps }) {
  const isLoading = usePageLoading();

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
