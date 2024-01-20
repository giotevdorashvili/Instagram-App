import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootStack from './rootStack/RootStack';
import useApptheme from '../hooks/theme/useApptheme';

const Router = () => {
  const {navigationTheme} = useApptheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
