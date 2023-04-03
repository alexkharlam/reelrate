import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import { useRouteLoading } from "@/utils/hooks/useRouteLoading";
import TopLoadingBar from "@/components/UI/TopLoadingBar";
import AppLayout from "@/components/AppLayout/AppLayout";
import PageSeo from "@/components/Seo/PageSeo";

export default function App({ Component, pageProps }) {
  const isLoading = useRouteLoading();

  return (
    <Provider store={store}>
      {isLoading && <TopLoadingBar />}
      <PageSeo />

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
