import {axiosApp} from '../../middleware/axios';
import {ILoginResponse} from '../auth/dto';
import {ResponseData} from '../types';

export const usersServices = async (): Promise<
  ResponseData<ILoginResponse[]>
> => {
  const result = await axiosApp.get('/users?limit=20&skip=10');
  return result.data;
};
