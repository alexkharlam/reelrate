import Head from "next/head";

function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default Seo;
