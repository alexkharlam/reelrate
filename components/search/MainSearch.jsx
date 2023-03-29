import Genres from "../contentLists/genres/Genres";
import Input from "./Input";

import { useSearchInput } from "@/utils/hooks/use-search-input";
import { useEffect, useState } from "react";
import { useHttp } from "@/utils/hooks/use-http";
import SearchFilter from "./SearchFilter";
import ErrorLoading from "../UI/loadingStates/ErrorLoading";
import LoadingResults from "../UI/loadingStates/LoadingResults";
import { transformContent } from "@/utils/helpers/transformContent";
import ContentList from "../contentLists/content/ContentList";

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
      <Input value={inputValue} inputHandler={inputHandler} />
      {inputValue.length === 0 && <Genres />}
      {results.length > 0 && (
        <SearchFilter filter={filter} updateFilter={setFilter} />
      )}

      {isLoading && <LoadingResults />}
      {error && <ErrorLoading message={error} />}
      {results.length > 0 && !isLoading && <ContentList listItems={results} />}
    </>
  );
}

export default MainSearch;
