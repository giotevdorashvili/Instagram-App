import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabStackParamList} from '../tabNavigator/TabNavigatorTypes';

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  TabNavigator: {screen: keyof TabStackParamList};
  NewPost: {imageUri: string | undefined};
};
