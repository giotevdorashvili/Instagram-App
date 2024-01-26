import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Home from '../../screens/tabScreens/home/Home';
import Profile from '../../screens/tabScreens/profile/Profile';
import {RootScreenProps} from '../rootStackNavigator/RootStackTypes';
import {TabParamList} from './TabNavigatorTypes';
import useAppTheme from '../../hooks/theme/useApptheme';
import {renderHeaderRight, renderTabIcon} from '../../utils/tabNavigator/utils';
import SearchStackNavigator from '../searchStackNavigator/SearchStackNavigator';

export const useTabNavigation = () => {
  return useNavigation<NativeStackNavigationProp<TabParamList>>();
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC<RootScreenProps<'TabNavigator'>> = () => {
  const {paperTheme} = useAppTheme();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: paperTheme.colors.main,
        },
        title: '',
        tabBarStyle: {
          backgroundColor: paperTheme.colors.main,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => renderTabIcon('home-outline', color),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="SearchStackNavigator"
        component={SearchStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => renderTabIcon('magnify', color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => renderHeaderRight(),
          tabBarIcon: ({color}) =>
            renderTabIcon('account-circle-outline', color),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
