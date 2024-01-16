import {NavigationContainer} from '@react-navigation/native';

import RootStack from './rootStack/RootStack';
import useApptheme from '../hooks/theme/useApptheme';

const Router = () => {
  const {navigationTheme} = useApptheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Router;
