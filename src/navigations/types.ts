import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TParentNavigator = {
  AuthRoute: NativeStackScreenProps<AuthStackParamList>;
  PageRoute: NativeStackScreenProps<PageStackParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type PageStackParamList = {
  Home: undefined;
};
