import {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchStackScreenProps} from '../../../navigators/searchStack/SearchStackTypes';
import useAppTheme from '../../../hooks/theme/useApptheme';
import SearchHeader from './searchHeader/SearchHeader';
import StatusBar from '../../../components/statusBar/StatusBar';

const Search: React.FC<SearchStackScreenProps<'Search'>> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {paperTheme} = useAppTheme();

  const backgroundColor = paperTheme.colors.main;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar />
      <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});

export default Search;
