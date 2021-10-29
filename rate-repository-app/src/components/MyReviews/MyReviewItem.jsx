import React from 'react';
import { StyleSheet, View, Pressable, Alert } from 'react-native';
import { format } from 'date-fns';
import { useHistory } from 'react-router';


import theme from '../../theme';
import Text from '../Text';
import useDeleteReview from "../../hooks/useDeleteReview";


const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  reviewContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  ratingContainer: {
    marginRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonPrimary: {
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    backgroundColor: theme.colors.primary
  },
  buttonDanger: {
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    backgroundColor: theme.colors.danger
  }
});

const ReviewItem = ({ props }) => {
  const [deleteReview] = useDeleteReview();
  const history = useHistory();

  const handleViewRepository = () => {
    history.push(`/${props.repository.id}`);
  };

  const deleteAlert = () =>
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "DELETE",
          onPress: () => handleDeleteReview()
        }
      ]
    );

  const handleDeleteReview = async () => {
    try {
      await deleteReview(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.reviewContainer}>
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
            >{props.repository.fullName}</Text>
          <Text
            color="textSecondary"
            >{format(new Date(props.createdAt), 'dd.MM.yyyy')}</Text>
          <Text
            >{props.text}</Text>
        </View>
      </View>
        <View style={cardStyles.buttonsContainer}>
          <Pressable
            style={cardStyles.buttonPrimary}
            onPress={() => handleViewRepository()}
          >
            <Text color="textTab">View Repository</Text>
          </Pressable>
          <Pressable
            style={cardStyles.buttonDanger}
            onPress={() => deleteAlert()}
          >
            <Text color="textTab">Delete Review</Text>
          </Pressable>
        </View>
    </View>
  );
};

export default ReviewItem;