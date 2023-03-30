import Head from "next/head";

function Seo({ title, description }) {
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
    </Head>
  );
}

export default Seo;
