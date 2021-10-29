import React from 'react';
import { useHistory } from 'react-router';

import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data.authorize.accessToken);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
}


export default SignIn;