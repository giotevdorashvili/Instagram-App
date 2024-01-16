import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Home from '../../screens/tabScreens/home/Home';
import Profile from '../../screens/tabScreens/profile/Profile';
import {RootScreenProps} from '../rootStack/RootStackTypes';
import {TabParamList} from './TabStackTypes';
import useAppTheme from '../../hooks/theme/useApptheme';
import {renderHeaderRight, renderTabIcon} from '../../utils/tabNavigator/utils';
import SearchStack from '../searchStack/SearchStack';

export const useTabNavigation = () => {
  return useNavigation<NativeStackNavigationProp<TabParamList>>();
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC<RootScreenProps<'TabStack'>> = () => {
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
        name="SearchStack"
        component={SearchStack}
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
