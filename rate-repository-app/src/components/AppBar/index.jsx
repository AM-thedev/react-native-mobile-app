import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';

import theme from '../../theme';
import Tab from './AppBarTab';
import { GET_USER } from '../../graphql/queries';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight+5,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.barBackground
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_USER);
  const signedIn = data && data.authorizedUser;

  return (
    <View style={styles.container}>
    <ScrollView horizontal>
      <Tab title="Repositories" link="/" show="true" />
      <Tab title="Create a Review" link="/review" show={signedIn} />
      <Tab title="My Reviews" link="/myreviews" show={signedIn} />
      <Tab title="Sign-out" link="/signout" show={signedIn} />
      <Tab title="Sign-in" link="/signin" show={!signedIn} />
      <Tab title="Sign-up" link="/signup" show={!signedIn} />
    </ScrollView>
  </View>
  );
}

export default AppBar;