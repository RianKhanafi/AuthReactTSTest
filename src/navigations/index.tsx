import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoute from './AuthRoute';
import {TParentNavigator} from './types';
import PageRoute from './PageRoute';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<TParentNavigator>();

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthRoute"
            component={AuthRoute}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PageRoute"
            component={PageRoute}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
