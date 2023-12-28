import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/tabScreens/home/Home';
import Search from '../../screens/tabScreens/search/Search';
import Profile from '../../screens/tabScreens/profile/Profile';
import {TabNavigatorPropTypes} from '../rootNavigator/RootNavigatorTypes';
import {TabStackParamList} from './TabNavigatorTyps';
import {renderHeaderRight, renderTabIcon} from '../../utils/tabNavigator/utils';
import useAppTheme from '../../hooks/theme/useApptheme';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC<TabNavigatorPropTypes> = () => {
  const {paperTheme} = useAppTheme();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitle: '',
        title: '',
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: paperTheme.colors.main,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => renderTabIcon('home-outline', color),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => renderTabIcon('magnify', color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTransparent: true,
          headerRight: () => renderHeaderRight(),
          tabBarIcon: ({color}) =>
            renderTabIcon('account-circle-outline', color),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
