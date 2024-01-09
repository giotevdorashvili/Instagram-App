import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {TabScreenProps} from '../../../navigators/tabNavigator/TabNavigatorTypes';

const Search: React.FC<TabScreenProps<'Search'>> = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
