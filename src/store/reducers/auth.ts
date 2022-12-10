// import {USER_TODO} from '../types';

import {ILoginResponse, IUserCredential} from '../../modules/auth/dto';
import {
  SET_SIGNIN_FORM,
  SET_USER_LOGIN,
  SET_LOGIN_FORM,
  SET_LOADING_SIGNIN,
  SET_LOADING_LOGIN,
} from '../actions/auth';

export interface AuthState {
  userLogin?: ILoginResponse | null;
  loginForm: IUserCredential | null;
  signUpForm?: IUserCredential | null;
  isLoadingLogin: boolean;
  isLoadingSignin: boolean;
}

const initialstate: AuthState = {
  userLogin: null,
  loginForm: {username: 'kminchelle', password: '0lelplR'},
  signUpForm: {username: '', email: '', password: ''},
  isLoadingLogin: false,
  isLoadingSignin: false,
};

type Action<T> = {
  type: string;
  payload?: T;
};

export default <T>(state: AuthState = initialstate, action: Action<T>) => {
  switch (action.type) {
    case SET_SIGNIN_FORM:
      return {
        ...initialstate,
        signUpForm: action.payload,
      };
    case SET_LOGIN_FORM:
      return {
        ...initialstate,
        loginForm: action.payload,
      };
    case SET_USER_LOGIN:
      return {
        ...initialstate,
        userLogin: action.payload,
      };

    case SET_LOADING_SIGNIN:
      return {
        ...initialstate,
        isLoadingSignin: action.payload,
      };
    case SET_LOADING_LOGIN: {
      return {
        ...initialstate,
        isLoadingLogin: action.payload,
      };
    }
    default:
      return state;
  }
};
