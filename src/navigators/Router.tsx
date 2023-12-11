import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import useScheme from '../hooks/theme/useScheme';

const Router = () => {
  const {navigationTheme} = useScheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
