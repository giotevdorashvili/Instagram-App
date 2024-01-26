import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabParamList} from '../tabNavigator/TabNavigatorTypes';

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  TabNavigator: {screen: keyof TabParamList};
  NewPost: {imageUri: string | undefined};
};
