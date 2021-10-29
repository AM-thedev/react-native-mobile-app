import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import SignInContainer from '../../components/signIn/SignInContainer';


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { debug, getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      const username = getByTestId('usernameField');
      const password = getByTestId('passwordField');
      const submit = getByTestId('submitButton');

      fireEvent.changeText(username, 'user');
      fireEvent.changeText(password, 'password');
      fireEvent.press(submit);

      debug();

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'user',
          password: 'password'
        });
      });
    });
  });
});