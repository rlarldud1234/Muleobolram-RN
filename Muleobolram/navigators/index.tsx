import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth';
import {SignupScreen} from '../screens/auth';
import CommunityScreen from '../screens/community';
import {NavigationContainer} from '@react-navigation/native';

export enum RootScreens {
  Login = 'Login',
  Signup = 'Signup',
  Community = 'Community',
}

export type RootStackList = {
  Login: undefined;
  Community: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RootStack: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootScreens.Login}>
        <Stack.Screen name={RootScreens.Login} component={LoginScreen} />
        <Stack.Screen
          name={RootScreens.Community}
          component={CommunityScreen}
        />
        <Stack.Screen name={RootScreens.Signup} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
