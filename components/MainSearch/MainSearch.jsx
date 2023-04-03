import GenreCardsList from "../contentLists/GenreCards/GenreCardsList";
import SearchInput from "./SearchInput";

import { useSearchInput } from "@/utils/hooks/useSearchInput";
import { useEffect, useState } from "react";
import { useHttp } from "@/utils/hooks/useHttp";
import MediaFilterDropdown from "./MediaFilterDropdown";
import Message from "../UI/Message";
import { transformContent } from "@/utils/helpers/transformContent";
import MediaCardsList from "../contentLists/MediaCards/MediaCardsList";
import LoadingSpinner from "../UI/LoadingSpinner";

function MainSearch() {
  const { inputValue, inputHandler } = useSearchInput();
  const { makeRequest, isLoading, error, setError } = useHttp();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState({ name: "All", value: "multi" });

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!inputValue.length > 0) {
        setResults([]);
        return;
      }
      makeRequest(
        `/api/search?type=${filter.value}&query=${inputValue}&page=1`,
        (data) => {
          if (data.results.length === 0)
            setError(`Can't find any results. Try again!`);
          const transformedResults = data.results.map((res) =>
            transformContent(res)
          );
          setResults(transformedResults);
        }
      );
    }, 1000);
    return () => clearTimeout(identifier);
  }, [inputValue, filter]);

  return (
    <>
      <SearchInput value={inputValue} inputHandler={inputHandler} />
      {inputValue.length === 0 && <GenreCardsList />}
      {results.length > 0 && (
        <MediaFilterDropdown filter={filter} updateFilter={setFilter} />
      )}

      {isLoading && <LoadingSpinner />}
      {error && <Message message={error} />}
      {results.length > 0 && !isLoading && (
        <MediaCardsList mediaList={results} />
      )}
    </>
  );
}

export default MainSearch;
