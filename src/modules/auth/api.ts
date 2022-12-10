import {axiosApp} from '../../middleware/axios';
import {ILoginResponse, IUserCredential} from './dto';

export const loginServices = async (
  data: IUserCredential,
): Promise<ILoginResponse> => {
  const result = await axiosApp.post('/auth/login', data);
  return result.data;
};

export const addUserService = async (
  data: IUserCredential,
): Promise<ILoginResponse> => {
  const result = await axiosApp.post('/users/add', data);
  return result.data;
};
