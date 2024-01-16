import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SearchStackScreenProps<T extends keyof SearchStackParamList> =
  NativeStackScreenProps<SearchStackParamList, T>;

export type SearchStackParamList = {
  SearchGrid: undefined;
  Search: undefined;
};
