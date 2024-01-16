import {Platform, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import useAppTheme from '../../../../hooks/theme/useApptheme';
import {useTabStackNavigation} from '../../../../navigators/searchStack/SearchStack';

const SearchGridHeader = () => {
  const navigation = useTabStackNavigation();

  const {paperTheme} = useAppTheme();

  const {main, elementBackround} = paperTheme.colors;

  const handlePressIn = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, {backgroundColor: main}]}>
      <Searchbar
        placeholder=""
        onPressIn={handlePressIn}
        value=""
        style={[styles.searchInput, {backgroundColor: elementBackround}]}
        inputStyle={[styles.inputStyle]}
        selectionColor="transparent"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  searchInput: {
    borderRadius: 15,
    marginHorizontal: 10,
    height: 45,
  },
  inputStyle: {
    paddingBottom: 10,
  },
});

export default SearchGridHeader;
