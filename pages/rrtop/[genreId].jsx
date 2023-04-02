import MediaCardsList from "@/components/contentLists/MediaCards/MediaCardsList";
import HeadingLink from "@/components/UI/HeadingLink";
import Message from "@/components/UI/Message";
import { genres } from "@/utils/config/all-genres";

function GenrePlaylistPage({ mediaList, title, error }) {
  return (
    <div className="px-3">
      {error && <Message message="Error loading media" />}
      {!error && (
        <>
          <HeadingLink title={`${title} movies`} />
          <MediaCardsList mediaList={mediaList} />
        </>
      )}
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
      props: { mediaList: rrList.content, title: rrList.title },
    };
  } catch (err) {
    return {
      props: { error: err.message },
    };
  }
}
export default GenrePlaylistPage;
