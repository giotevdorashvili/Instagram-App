import React, {useEffect, useState} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {User, onAuthStateChanged} from 'firebase/auth';
import {ActivityIndicator} from 'react-native-paper';

import LogIn from '../../screens/rootScreens/logIn/LogIn';
import SignUp from '../../screens/rootScreens/signUp/SignUp';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';
import TabNavigator from '../tabNavigator/TabNavigator';
import {RootStackParamList} from './RootNavigatorTypes';
import NewPost from '../../screens/rootScreens/newPost/NewPost';

export const useRootNavigation = () => {
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

  if (loading) return <ActivityIndicator style={{flex: 1}} />;

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
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPost"
            component={NewPost}
            options={{
              title: '',
              headerTransparent: true,
              headerBackTitle: 'New Post',
              headerBackTitleStyle: {
                fontSize: 20,
              },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
