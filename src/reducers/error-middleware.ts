import Toast from 'react-native-toast-message';
import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

export const ErrorMiddleware: Middleware = () => next => (action: unknown) => {
  if (isRejectedWithValue(action)) {
    Toast.show({
      type: 'error',
      text1: (action.payload as {error?: string})?.error,
    });
  }

  return next(action);
};
