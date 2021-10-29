import React from 'react';
import { useHistory } from 'react-router';

import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password })
      const data = await signIn({ username, password });
      console.log(data.authorize.accessToken);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
}


export default SignUp;