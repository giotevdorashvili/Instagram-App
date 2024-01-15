import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Home from '../../screens/tabScreens/home/Home';
import Search from '../../screens/tabScreens/search/Search';
import Profile from '../../screens/tabScreens/profile/Profile';
import {RootScreenProps} from '../rootNavigator/RootNavigatorTypes';
import {TabStackParamList} from './TabNavigatorTypes';
import useAppTheme from '../../hooks/theme/useApptheme';
import {renderHeaderRight, renderTabIcon} from '../../utils/tabNavigator/utils';

export const useTabNavigation = () => {
  return useNavigation<NativeStackNavigationProp<TabStackParamList>>();
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC<RootScreenProps<'TabNavigator'>> = () => {
  const {paperTheme} = useAppTheme();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitle: '',
        title: '',
        tabBarStyle: {
          backgroundColor: paperTheme.colors.main,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTransparent: true,
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
