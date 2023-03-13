import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useDebounce } from "use-debounce";

const useRepositories = (variables) => {
  const [sorting, setSorting] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const [lazyKeyword] = useDebounce(keyword, 500);
  if (
    sorting !== "latest" &&
    sorting !== "highestRated" &&
    sorting !== "lowestRated"
  ) {
    throw new Error("the value assigned to orderBy is invalid");
  }

  const orderBy = sorting === "latest" ? "CREATED_AT" : "RATING_AVERAGE";
  const orderDirection = sorting === "lowestRated" ? "ASC" : "DESC";

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...variables,
      orderBy,
      orderDirection,
      searchKeyword: lazyKeyword,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (!loading) {
    console.log(data);
  }

  if (error) {
    console.log("error:", error);
  }

  return {
    repositories: data?.repositories,
    error,
    loading,
    fetchMore: handleFetchMore,
    useKeyword: [keyword, setKeyword],
    useSorting: [sorting, setSorting],
  };
};

export default useRepositories;
