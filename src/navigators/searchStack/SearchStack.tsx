import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {SearchStackParamList} from './SearchStackTypes';
import SearchGrid from '../../screens/searchScreens/searchGrid/SearchGrid';
import Search from '../../screens/searchScreens/search/Search';
import {TabScreenProps} from '../tabStack/TabStackTypes';
import {renderSearchGridHeader} from '../../utils/search/utils';

export const useTabStackNavigation = () => {
  return useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
};

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigator: React.FC<TabScreenProps<'SearchStack'>> = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchGrid"
        component={SearchGrid}
        options={{
          header: renderSearchGridHeader,
        }}
      />
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
