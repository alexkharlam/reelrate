import GenresItem from "./GenresItem";
import { genres } from "@/utils/config/all-genres";
import HeadingLink from "../../UI/HeadingLink";

function Genres() {
  return (
    <>
      <HeadingLink link={false} title="ReelRate's playlists by genre" url="" />
      <section className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {genres.map((genre) => (
          <GenresItem key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </section>
    </>
  );
}

export default Genres;
