import React from "react";

function PosterGrid({ children }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}

export default PosterGrid;
