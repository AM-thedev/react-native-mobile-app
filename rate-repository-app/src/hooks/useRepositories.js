import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();
  const [getRepositories, { data, called, loading, fetchMore }] = useLazyQuery(GET_REPOSITORIES, {
    variables,
    onCompleted: data => setRepositories(data.repositories),
    fetchPolicy: 'cache-and-network'
  });
  const currentlyLoading = !called || loading

  const fetchRepositories = ( searchKeyword = "", orderBy = "CREATED_AT", orderDirection = "ASC" ) => {
    getRepositories({ variables: { searchKeyword: searchKeyword, orderBy, orderDirection } });
  };

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    });
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories,
    loading: currentlyLoading,
    refetch: fetchRepositories,
    fetchMore: handleFetchMore
  };
};


export default useRepositories;