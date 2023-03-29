import { Search } from "react-feather";

function Input({ inputHandler, value }) {
  return (
    <div className="relative mx-auto mb-3 w-full text-base font-semibold text-gray-900 lg:w-1/2">
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-1xl "
        strokeWidth={2}
      />
      <input
        placeholder="Search for movies, tv shows"
        className="w-full rounded-lg py-1 pl-3.5 pr-2"
        onChange={inputHandler}
        value={value}
      />
    </div>
  );
}

export default Input;
