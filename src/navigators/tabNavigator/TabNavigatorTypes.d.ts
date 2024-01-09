import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type ScreenProps<T extends keyof TabStackParamList> =
  BottomTabScreenProps<TabStackParamList, T>;

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type HomePropTypes = ScreenProps<'Home'>;
export type SearchPropTypes = ScreenProps<'Search'>;
export type ProfilePropTypes = ScreenProps<'Profile'>;

export type ProfilePictureProps = {
  imageUri: string;
};
