import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './rootNavigator/RootNavigator';
import useApptheme from '../hooks/theme/useApptheme';

const Router = () => {
  const {navigationTheme} = useApptheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Router;
