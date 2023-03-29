function ShowMoreBtn({ onShowMore }) {
  return (
    <button
      className="mx-auto mt-2 block rounded-lg bg-gray-600 px-2 py-1.5"
      onClick={onShowMore}
    >
      Show more
    </button>
  );
}

export default ShowMoreBtn;
