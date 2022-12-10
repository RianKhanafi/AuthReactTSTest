import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ILoginResponse} from '../modules/auth/dto';
import {storage} from '../modules/auth/hook';

const axiosApp = axios.create({
  baseURL: 'https://dummyjson.com',
});

axiosApp.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

axiosApp.interceptors.request.use((config: AxiosRequestConfig) => {
  const userLogin: string | undefined = storage.getString('user');

  if (userLogin && config.headers) {
    const user: ILoginResponse = JSON.parse(userLogin);
    config.headers.Authorization = user.token;
  }

  return config;
});

export {axiosApp};
