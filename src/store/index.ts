import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '@store/counter/counterReducer';
import snackbarReducer from './counter/snackbarReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    snackbar: snackbarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
