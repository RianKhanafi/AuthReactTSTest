import {AxiosError} from 'axios';
import {MMKV} from 'react-native-mmkv';
import {useMutation} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {
  setLoadingLogin,
  setLoadingSignin,
  setUserLogin,
} from '../../store/actions/auth';
import {RootState} from '../../store/reducers';
import {AuthState} from '../../store/reducers/auth';
import {addUserService, loginServices} from './api';

export const storage = new MMKV();

const useAuth = () => {
  const {loginForm, signUpForm}: AuthState = useSelector(
    (ev: RootState) => ev.auth,
  );
  const dispatch = useDispatch();

  const mutateLogin = useMutation(loginServices, {
    onError: (err: AxiosError) => {
      console.log('error', err);
    },
  });

  const mutateSign = useMutation(addUserService, {
    onError: (err: AxiosError) => {
      console.log('error', err);
    },
  });

  const login = async (callback: () => void) => {
    dispatch(setLoadingLogin(true));
    try {
      const response = await mutateLogin.mutateAsync(loginForm!);
      dispatch(setLoadingLogin(false));
      if (response) {
        storage.set('user', JSON.stringify(response));
        dispatch(setUserLogin(response));
        callback();
      }
    } catch (err) {
      console.log(err);
      dispatch(setLoadingLogin(false));
    }
  };

  const signIn = async (callback: () => void) => {
    dispatch(setLoadingSignin(true));
    try {
      const response = await mutateSign.mutateAsync(signUpForm!);
      dispatch(setLoadingSignin(false));
      if (response) {
        callback();
      }
    } catch (err) {
      console.log(err);
      dispatch(setLoadingSignin(false));
    }
  };

  const logout = (callback: () => void) => {
    storage.delete('user');
    callback();
  };

  return {login, logout, signIn};
};

export default useAuth;
