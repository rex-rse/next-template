import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@store/counter/counterReducer';
import snackbarReducer from './counter/snackbarReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    snackbar: snackbarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
