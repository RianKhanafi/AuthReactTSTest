// In App.js in a new project

import React, {useEffect} from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import LoginScreen from '../screen/Auth/Login';
import SignUpScreen from '../screen/Auth/SignUp';
import {AuthStackParamList, TParentNavigator} from './types';
import {storage} from '../modules/auth/hook';
import {ILoginResponse} from '../modules/auth/dto';
import {useDispatch} from 'react-redux';
import {setUserLogin} from '../store/actions/auth';

const Stack = createNativeStackNavigator<AuthStackParamList>();

type Props = NativeStackScreenProps<TParentNavigator>;

function AuthRoute({navigation}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogin: string | undefined = storage.getString('user');
    if (userLogin) {
      const user: ILoginResponse = JSON.parse(userLogin);
      if (user.token) {
        dispatch(setUserLogin(user));
        navigation.navigate('PageRoute' as never);
      }
    }
  }, [dispatch, navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthRoute;
