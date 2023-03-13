import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, variables) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...variables,
      repositoryId: id,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        reviewsAfter: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    error,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;
