import { AxiosRequestConfig } from 'axios';

import { requestFromApi } from '@api/apiTransport';

import { User } from '@interface/User';

export const fetchUser = (userId: number) => {
  const requestConfig: AxiosRequestConfig = { url: `/users/${userId}` };

  return requestFromApi<User>(requestConfig);
};
