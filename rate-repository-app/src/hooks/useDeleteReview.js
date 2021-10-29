import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { DELETEREVIEW } from '../graphql/mutations';


const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW);
  const apolloClient = useApolloClient();

  const deleteReview = async (id) => {
    const deleteResult = await mutate({ variables: { id } });
    apolloClient.resetStore();
    return deleteResult;
  };

  return [deleteReview, result];
};

export default useDeleteReview;