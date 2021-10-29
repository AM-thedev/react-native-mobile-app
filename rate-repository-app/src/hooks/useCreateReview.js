import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { CREATEREVIEW } from '../graphql/mutations';


const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);
  const apolloClient = useApolloClient();

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({ variables: { repositoryName, ownerName, rating: parseInt(rating), text } });
    apolloClient.resetStore();
    return data.createReview.repositoryId;
  };

  return [createReview, result];
};

export default useCreateReview;