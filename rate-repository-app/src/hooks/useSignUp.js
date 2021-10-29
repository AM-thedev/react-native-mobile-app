import { useMutation } from '@apollo/client';

import { SIGNUP } from '../graphql/mutations';


const useSignUp = () => {
  const [signup, result] = useMutation(SIGNUP);

  const signUp = async ({ username, password }) => {
    const { data } = await signup({ variables: { username, password } });
    return data;
  };

  return [signUp, result];
};

export default useSignUp;