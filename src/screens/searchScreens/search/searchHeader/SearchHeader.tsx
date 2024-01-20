import {StyleSheet, View} from 'react-native';
import {IconButton, Searchbar} from 'react-native-paper';
import useAppTheme from '../../../../hooks/theme/useApptheme';
import {useTabNavigation} from '../../../../navigators/tabNavigator/TabNavigator';
import {SearchHeaderProps} from './SearchHeaderTypes';

const SearchHeader = ({searchQuery, setSearchQuery}: SearchHeaderProps) => {
  const navigation = useTabNavigation();

  const {paperTheme} = useAppTheme();

  const backgroundColor = paperTheme.colors.elementBackround;

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        size={28}
        onPress={handlePress}
        style={styles.button}
      />

      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={[styles.searchInput, {backgroundColor}]}
        inputStyle={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    height: 45,
  },
  inputStyle: {
    minHeight: '100%',
  },
  button: {
    margin: 0,
  },
});

export default SearchHeader;
