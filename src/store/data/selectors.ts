import { RootState } from '@store/types';

export const getPostListRequest = (state: RootState) => state.postsPageData.postListRequest;

export const getPostCommentRequest = (state: RootState) => state.postsPageData.postCommentRequest;

export const getPostCommentList = (postId: number) => (state: RootState) =>
  state.postsPageData.postCommentRequest.data ? state.postsPageData.postCommentRequest.data[postId] : null;

export const getUserRequest = (state: RootState) => state.postsPageData.userRequest;

export const isLoading = (state: RootState) =>
  state.postsPageData.postListRequest.isLoading ||
  state.postsPageData.postCommentRequest.isLoading ||
  state.postsPageData.userRequest.isLoading;
