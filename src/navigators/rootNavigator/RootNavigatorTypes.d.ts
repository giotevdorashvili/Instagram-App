import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabStackParamList} from '../tabNavigator/TabNavigatorTypes';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  TabNavigator: {screen: keyof TabStackParamList};
  NewPost: {imageUri: string | undefined};
};

export type LogInPropTypes = ScreenProps<'LogIn'>;
export type SignUpPropTypes = ScreenProps<'SignUp'>;
export type TabNavigatorPropTypes = ScreenProps<'TabNavigator'>;
export type NewPostPropTypes = ScreenProps<'NewPost'>;
