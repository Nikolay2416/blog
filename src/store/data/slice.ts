import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { makeRequestSliceStateProperty, RequestSliceStateProperty } from '@store/helpers';

import { Post } from '@interface/Posts';
import { Comment } from '@interface/Comment';
import { User } from '@interface/User';
import { SLICE_NAME } from './types';

interface InitialState {
  postListRequest: RequestSliceStateProperty<Post[]>;
  postCommentRequest: RequestSliceStateProperty<Record<number, Comment[]>>;
  userRequest: RequestSliceStateProperty<User>;
}

const initialState: InitialState = {
  postListRequest: makeRequestSliceStateProperty<Post[]>(),
  postCommentRequest: makeRequestSliceStateProperty<Record<number, Comment[]>>(),
  userRequest: makeRequestSliceStateProperty<User>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    reset: () => initialState,
    setPostListRequest: (state, action: PayloadAction<Partial<RequestSliceStateProperty<Post[]>>>) => {
      state.postListRequest = { ...state.postListRequest, ...action.payload };
    },

    setCommentListRequest: (
      state,
      action: PayloadAction<Partial<RequestSliceStateProperty<Record<number, Comment[]>>>>,
    ) => {
      state.postCommentRequest = {
        ...state.postCommentRequest,
        ...action.payload,
        data: { ...state.postCommentRequest.data, ...action.payload.data },
      };
    },

    clearPostCommentList: (state, action: PayloadAction<{ postId: number }>) => {
      if (state.postCommentRequest.data) {
        delete state.postCommentRequest.data[action.payload.postId];
      }
    },

    setUserData: (state, action: PayloadAction<Partial<RequestSliceStateProperty<User>>>) => {
      state.userRequest = { ...state.userRequest, ...action.payload };
    },
  },
});
