import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  TabNavigator: {userId: string};
};

export type LogInPropTypes = ScreenProps<'LogIn'>;
export type SignUpPropTypes = ScreenProps<'SignUp'>;
export type TabNavigatorPropTypes = ScreenProps<'TabNavigator'>;