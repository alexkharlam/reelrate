import { transformContent } from "@/utils/helpers/transformContent";
import BgImg from "./BgImg";
import CollectionBtns from "./collectionBtns/CollectionBtns";
import InfoBlock from "./InfoBlock/InfoBlock";

function ContentPage({ rawContent }) {
  const content = transformContent(rawContent);

  return (
    <section className="px-3">
      <h1 className="mb-3 text-2xl font-bold md:text-4xl lg:text-6xl">
        {content.title}
      </h1>
      <CollectionBtns content={content} />
      <p className="mb-3 max-w-3xl text-base text-white">{content.overview}</p>
      <BgImg backdropPath={content.backdropPath} />
      <InfoBlock content={content} />
    </section>
  );
}

export default ContentPage;
