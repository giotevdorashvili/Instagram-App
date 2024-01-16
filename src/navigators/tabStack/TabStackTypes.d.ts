import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {SearchStackParamList} from '../searchStack/SearchStackTypes';

export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;

export type TabParamList = {
  Home: undefined;
  SearchStack: {screen: keyof SearchStackParamList};
  Profile: undefined;
};

export type ProfilePictureProps = {
  imageUri: string;
};
