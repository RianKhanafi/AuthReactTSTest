// In App.js in a new project

import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/Home';
import {PageStackParamList} from './types';

const Stack = createNativeStackNavigator<PageStackParamList>();

function PageRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default PageRoute;
