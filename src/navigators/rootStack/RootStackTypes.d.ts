import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabParamList} from '../tabStack/TabStackTypes';

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  TabStack: {screen: keyof TabParamList};
  NewPost: {imageUri: string | undefined};
};
