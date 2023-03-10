import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useDebounce } from "use-debounce";

const useRepositories = () => {
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

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy,
      orderDirection,
      searchKeyword: lazyKeyword,
    },
  });

  if (!loading) {
    console.log(data);
  }

  if (error) {
    console.log("error:", error);
  }

  return {
    repositories: data ? data.repositories : undefined,
    error,
    loading,
    useKeyword: [keyword, setKeyword],
    useSorting: [sorting, setSorting],
  };
};

export default useRepositories;
