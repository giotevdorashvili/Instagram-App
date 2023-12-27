import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/tabScreens/home/Home';
import Search from '../../screens/tabScreens/search/Search';
import Profile from '../../screens/tabScreens/profile/Profile';
import {TabNavigatorPropTypes} from '../rootNavigator/RootNavigatorTypes';
import {TabStackParamList} from './TabNavigatorTyps';
import {renderHeaderRight, renderTabIcon} from '../../utils/tabNavigator/utils';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC<TabNavigatorPropTypes> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitle: '',
        title: '',
        tabBarStyle: {
          paddingTop: 10,
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
