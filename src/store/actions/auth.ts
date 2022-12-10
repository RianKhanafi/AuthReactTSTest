import {ILoginResponse, IUserCredential} from '../../modules/auth/dto';

export const USER_TODO = 'USER_TODO';

export const SET_USER_LOGIN = 'auth/SET_USER_LOGIN';
export const SET_LOGIN_FORM = 'auth/SET_LOGIN_FORM';
export const SET_SIGNIN_FORM = 'auth/SET_SIGNIN_FORM';
export const SET_LOADING_LOGIN = 'auth/SET_LOADING_LOGIN';
export const SET_LOADING_SIGNIN = 'auth/SET_LOADING_SIGNIN';

const setLoadingLogin = (payload: boolean) => ({
  type: SET_LOADING_LOGIN,
  payload,
});

const setLoadingSignin = (payload: boolean) => ({
  type: SET_LOADING_SIGNIN,
  payload,
});

const setUserLogin = (payload: ILoginResponse) => ({
  type: SET_USER_LOGIN,
  payload,
});

const setLoginForm = (payload: IUserCredential) => ({
  type: SET_LOGIN_FORM,
  payload,
});

const setSignUpForm = (payload: IUserCredential) => ({
  type: SET_SIGNIN_FORM,
  payload,
});

export {
  setUserLogin,
  setLoginForm,
  setSignUpForm,
  setLoadingLogin,
  setLoadingSignin,
};
