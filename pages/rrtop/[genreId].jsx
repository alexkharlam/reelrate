import ContentList from "@/components/contentLists/content/ContentList";
import HeadingLink from "@/components/UI/HeadingLink";
import ErrorLoading from "@/components/UI/loadingStates/ErrorLoading";
import ListWarning from "@/components/UI/messages/ListWarning";
import { genres } from "@/utils/config/all-genres";

function GenrePlaylistPage({ rrList, error }) {
  if (error) {
    return (
      <ErrorLoading
        message={`Failed getting content. Check your internet connection. (${error})`}
      />
    );
  }

  return (
    <div className="px-3">
      <ListWarning />
      <HeadingLink title={`${rrList.title} movies`} />
      <ContentList listItems={rrList.content} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = genres.map((genre) => ({ params: { genreId: `${genre.id}` } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.genreId;
  try {
    const response = await fetch(
      `https://react-http-8cc7e-default-rtdb.firebaseio.com/genreCollections/${id}.json`
    );

    if (!response.ok) throw new Error("Error failed content");
    const data = await response.json();

    const key = Object.keys(data);
    const rrList = data[key];

    return {
      props: { rrList },
    };
  } catch (err) {
    return {
      props: { error: err.message },
    };
  }
}
export default GenrePlaylistPage;
