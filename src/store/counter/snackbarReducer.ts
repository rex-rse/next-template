import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// declaring the types for our state
export type SnackbarState = {
  open: boolean;
};

const initialState: SnackbarState = {
  open: false,
};

export const counterSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = counterSlice.actions;

export const snackbar = (state: RootState) => state.snackbar;

export default counterSlice.reducer;
