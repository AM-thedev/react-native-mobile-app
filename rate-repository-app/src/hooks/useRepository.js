import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import { GET_REPOSITORY } from '../graphql/queries';


const useRepositories = (variables) => {
  const [repository, setRepository] = useState();
  const [getRepository, { data, called, loading, fetchMore }] = useLazyQuery(GET_REPOSITORY, {
    variables,
    onCompleted: data => setRepository(data.repository),
    fetchPolicy: 'cache-and-network'
  });
  const currentlyLoading = !called || loading

  const fetchRepository = () => {
    getRepository();
  };

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  useEffect(() => {
    fetchRepository();
  }, []);

  return {
    repository,
    loading: currentlyLoading,
    refetch: fetchRepository,
    fetchMore: handleFetchMore
  };
};


export default useRepositories;