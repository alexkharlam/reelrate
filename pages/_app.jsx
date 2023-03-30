import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import Favicon from "@/components/seo/Favicon";
import Seo from "@/components/seo/Seo";
import { usePageLoading } from "@/utils/hooks/use-page-loading";
import PageLoadingBar from "@/components/UI/PageLoadingBar";

export default function App({ Component, pageProps }) {
  const isLoading = usePageLoading();

  return (
    <Provider store={store}>
      {isLoading && <PageLoadingBar />}
      <Seo />
      <Favicon />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
