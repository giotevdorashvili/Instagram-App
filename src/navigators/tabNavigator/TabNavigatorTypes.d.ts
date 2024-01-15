import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabScreenProps<T extends keyof TabStackParamList> =
  BottomTabScreenProps<TabStackParamList, T>;

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type ProfilePictureProps = {
  imageUri: string;
};
