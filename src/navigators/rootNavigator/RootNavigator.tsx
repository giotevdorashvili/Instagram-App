import React, {useEffect, useState} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {User, onAuthStateChanged} from 'firebase/auth';
import {ActivityIndicator} from 'react-native-paper';

import LogIn from '../../screens/authScreens/logIn/LogIn';
import SignUp from '../../screens/authScreens/signUp/SignUp';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';
import TabNavigator from '../tabNavigator/TabNavigator';
import {RootStackParamList} from './RootNavigatorTypes';

export const useGetNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
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
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
          initialParams={{userId: userLoggedIn.uid}}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
