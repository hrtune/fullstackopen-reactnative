import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy = "CREATED_AT", orderDirection = "DESC") => {
  if (orderBy !== "CREATED_AT" && orderBy !== "RATING_AVERAGE") {
    throw new Error("the value assigned to orderBy is invalid");
  }
  if (orderDirection !== "DESC" && orderDirection !== "ASC") {
    throw new Error("the value assigned to orderDirection is invalid");
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy,
      orderDirection,
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
  };
};

export default useRepositories;
