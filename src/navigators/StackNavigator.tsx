import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import LogIn from '../screens/logIn/LogIn';
import SignUp from '../screens/signUp/SignUp';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: '',
          headerTransparent: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

export const useGetNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
