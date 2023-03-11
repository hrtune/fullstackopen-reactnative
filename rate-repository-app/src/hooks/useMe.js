import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
const useMe = (includeReviews = false) => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews,
    },
  });
  return {
    me: data ? data.me : undefined,
    error,
    loading,
  };
};

export default useMe;
