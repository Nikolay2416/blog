import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppRedirectUrl } from './types';

export interface InitialState {
  redirectUrl: AppRedirectUrl | null;
}

const initialState: InitialState = {
  redirectUrl: null,
};

export const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectUrl = {
        path: action.payload,
      };
    },
  },
});
