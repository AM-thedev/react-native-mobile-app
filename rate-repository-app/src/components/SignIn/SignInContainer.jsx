import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Please enter a username.'),
  password: yup
    .string()
    .required('Please enter a password.')
});

const initialValues = {
  username: '',
  password: ''
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

const SignInContainer = ({ onSubmit }) => {
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
                name="username"
                placeholder="Username"
                testID="usernameField"
              />
              <FormikTextInput 
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                testID="passwordField"
              />
              <Pressable
                style={styles.button}
                onPress={handleSubmit}
                testID="submitButton"
              >
                <Text color="textTab">Sign in</Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default SignInContainer;