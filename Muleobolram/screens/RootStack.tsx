import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import CommunityScreen from './CommunityScreen';
import {NavigationContainer} from '@react-navigation/native';

export enum RootScreens {
  Login = 'Login',
  Community = 'Communty',
  Signup = 'Signup',
}

export type RootStackList = {
  Login: undefined;
  Community: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
