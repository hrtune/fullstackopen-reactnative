import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

/*
const serverUrl = process.env.SERVER;
const uri = serverUrl + "/api/repositories";
*/

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (!loading) {
    console.log(data);
  }

  return {
    repositories: data.repositories,
    error,
    loading,
  };
};

export default useRepositories;
