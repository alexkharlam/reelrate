import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/index";
import HiMessage from "@/components/UI/messages/HiMessage";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
