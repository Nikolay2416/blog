import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL, DEFAULT_HEADERS } from '@config/api';
import { delay } from '@utils/delay';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { ...DEFAULT_HEADERS },
});

export const requestFromApi = async <T>(requestConfig: AxiosRequestConfig) => {
  await delay(500);

  const response = await axiosInstance<T>(requestConfig);

  return response.data;
};
