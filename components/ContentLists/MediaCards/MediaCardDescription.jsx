function MediaCardDescription({ mediaItem }) {
  return (
    <div
      className={`absolute left-[0px] top-[0px] z-30 p-2 text-base font-semibold transition-opacity duration-100 group-hover:opacity-100 ${
        mediaItem.posterPath && "opacity-0"
      }`}
    >
      <h3 className="">{mediaItem.title}</h3>
      {mediaItem.releaseDate && (
        <p className="text-lg text-gray-300">
          {mediaItem.releaseDate.slice(0, 4)}
        </p>
      )}
    </div>
  );
}

export default MediaCardDescription;
