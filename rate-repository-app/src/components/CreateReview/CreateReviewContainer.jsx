import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';


const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('    Repository owner name is required.'),
  repositoryName: yup
    .string()
    .required('    Repository name is required.'),
  rating: yup
    .number('    Rating must be a whole number.')
    .integer('    Rating must be a whole number.')
    .min(0).max(100)
    .required('    Rating is required.'),
  text: yup
    .string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingVertical: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  }
});

const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <View style={styles.view}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput 
                name="ownerName"
                placeholder="Repository owner name"
                testID="repoOwnerField"
              />
              <FormikTextInput 
                name="repositoryName"
                placeholder="Repository name"
                testID="repoNameField"
              />
              <FormikTextInput 
                name="rating"
                placeholder="Rating between 0 and 100"
                testID="repoRatingField"
              />
              <FormikTextInput 
                name="text"
                placeholder="Review"
                testID="repoReviewField"
                multiline
              />
              <Pressable
                style={styles.button}
                onPress={handleSubmit}
                testID="submitButton"
              >
                <Text color="textTab">Create a review</Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default CreateReviewContainer;