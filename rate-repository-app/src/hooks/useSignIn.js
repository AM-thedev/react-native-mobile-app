import { useMutation, useApolloClient } from '@apollo/client';

import useAuthStorage from './useAuthStorage';
import { SIGNIN } from '../graphql/mutations';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [signin, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const { data } = await signin({ variables: { username, password } });
    await authStorage.setAccessToken(data.authorize.accessToken)
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;