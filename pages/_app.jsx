import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import Favicon from "@/components/seo/Favicon";
import Seo from "@/components/seo/Seo";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Seo />
      <Favicon />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
