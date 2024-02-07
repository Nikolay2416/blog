import { AxiosRequestConfig } from 'axios';

import { requestFromApi } from '@api/apiTransport';

import { Post } from '@interface/Posts';

export const fetchPostList = async (userId: number | null) => {
  const requestConfig: AxiosRequestConfig = {
    url: userId === null ? '/posts' : `/users/${userId}/posts`,
    method: 'get',
  };

  return requestFromApi<Post[]>(requestConfig);
};
