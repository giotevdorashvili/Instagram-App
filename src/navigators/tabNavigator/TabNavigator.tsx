import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/tabScreens/home/Home';
import Search from '../../screens/tabScreens/search/Search';
import Profile from '../../screens/tabScreens/profile/Profile';
import {TabNavigatorPropTypes} from '../rootNavigator/RootNavigatorTypes';
import {TabStackParamList} from './TabNavigatorTyps';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC<TabNavigatorPropTypes> = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{userId: route.params.userId}}
        options={{headerTransparent: true, title: ''}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
