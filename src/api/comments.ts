import { AxiosRequestConfig } from 'axios';

import { requestFromApi } from '@api/apiTransport';

import { Comment } from '@interface/Comment';

export const fetchCommentList = async (postId: number) => {
  const requestConfig: AxiosRequestConfig = {
    url: `posts/${postId}/comments`,
    method: 'get',
  };

  return requestFromApi<Comment[]>(requestConfig);
};
