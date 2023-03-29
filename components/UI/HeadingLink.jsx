import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";

function HeadingLink({ title, url, link }) {
  return (
    <div className="inline-block">
      <Link
        className="group mb-2.5 flex items-center gap-1.5 text-1xl font-bold transition-colors duration-100 hover:text-gray-300"
        href={url ? url : "#"}
      >
        <h3 className="">{title}</h3>
        {link && (
          <ArrowRight className="translate-y-1 -rotate-45 text-gray-400 transition-transform group-hover:-rotate-0" />
        )}
      </Link>
    </div>
  );
}

export default HeadingLink;
