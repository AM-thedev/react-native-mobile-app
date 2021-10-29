import React, { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router';
import useAuthStorage from '../hooks/useAuthStorage';


const signOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  const logout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push("/");
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <></>
  );
};

export default signOut;