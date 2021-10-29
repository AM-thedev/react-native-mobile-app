import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../Text';


const tabStyle = StyleSheet.create({
  marginHorizontal: 5
});

const Tab = ({ title, link, show }) => {
  if (!show) return null;
  return (
    <Pressable style={tabStyle} >
      <Link to={link}>
        <Text color="textTab" fontWeight="bold" fontSize="subheading">{title}</Text>
      </Link>
    </Pressable>
  )
};

export default Tab;