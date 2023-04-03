import { transformContent } from "@/utils/helpers/transformContent";
import { memo } from "react";
import Link from "next/link";
import SliderImage from "./SliderImage";

const SliderItem = memo(function SliderItem({ rawContent }) {
  const content = transformContent(rawContent);

  return (
    <Link
      href={`/${content.mediaType}/${content.id}`}
      className="group h-full w-7.5 shrink-0 snap-start rounded-sm object-cover transition-colors duration-100"
    >
      <SliderImage content={content} />
      <p className="h-4 overflow-hidden text-base transition duration-150 group-hover:text-gray-300">
        {content.title}
      </p>
    </Link>
  );
});

export default SliderItem;
