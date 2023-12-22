import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import useApptheme from '../hooks/theme/useApptheme';

const Router = () => {
  const {navigationTheme} = useApptheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
