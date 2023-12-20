import React, {useEffect, useState} from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {User, onAuthStateChanged} from 'firebase/auth';

import LogIn from '../screens/logIn/LogIn';
import SignUp from '../screens/signUp/SignUp';
import Profile from '../screens/profile/Profile';
import {FIREBASE_AUTH} from '../services/FirebaseConfig';
import {ActivityIndicator} from 'react-native-paper';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: {};
  Profile: {userId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      setLoading(false);
      setUserLoggedIn(user);
    });
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <Stack.Navigator>
      {!userLoggedIn ? (
        <>
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
        </>
      ) : (
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}
          initialParams={{userId: userLoggedIn.uid}}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

export const useGetNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
