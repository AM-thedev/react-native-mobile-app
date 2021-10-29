import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10
  },
  errorContainer: {
    borderColor: 'red',
  }
});

const TextInput = ({ error, ...props }) => {
const textInputStyle = [
  styles.container,
  error && styles.errorContainer
];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;