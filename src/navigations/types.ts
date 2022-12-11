import {NavigatorScreenParams} from '@react-navigation/native';

export type TParentNavigator = {
  AuthRoute: NavigatorScreenParams<AuthStackParamList>;
  PageRoute: NavigatorScreenParams<PageStackParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type PageStackParamList = {
  Home: undefined;
};
