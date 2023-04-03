import Head from "next/head";

function PageSeo({ title, description }) {
  return (
    <Head>
      <title>{title ? title : "ReelRate - movies and TV shows library"}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "ReelRate - search for millions of movies and keep the rates about them in a simple way"
        }
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
    </Head>
  );
}

export default PageSeo;
