import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';


const cardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
  ratingContainer: {
    marginRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1
  }
});

const ReviewItem = ({ props }) => {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.ratingContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          color="primary"
          review="true"
          >{props.rating}</Text>
      </View>
      <View style={cardStyles.infoContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          >{props.user.username}</Text>
        <Text
          color="textSecondary"
          >{format(new Date(props.createdAt), 'dd.MM.yyyy')}</Text>
        <Text
          >{props.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;