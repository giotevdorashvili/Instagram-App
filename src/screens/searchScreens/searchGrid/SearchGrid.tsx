import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from 'react-native-paper';
import {SearchStackScreenProps} from '../../../navigators/searchStackNavigator/SearchStackTypes';
import useAppTheme from '../../../hooks/theme/useApptheme';
import StatusBar from '../../../components/statusBar/StatusBar';

const SearchGrid: React.FC<SearchStackScreenProps<'SearchGrid'>> = () => {
  const {paperTheme} = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: paperTheme.colors.main}]}
      edges={['left', 'right']}>
      <StatusBar />

      <Text>Search grid</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchGrid;
