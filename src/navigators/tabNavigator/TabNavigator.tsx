import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/tabScreens/home/Home';
import Search from '../../screens/tabScreens/search/Search';
import Profile from '../../screens/tabScreens/profile/Profile';
import {TabNavigatorPropTypes} from '../rootNavigator/RootNavigatorTypes';
import {TabStackParamList} from './TabNavigatorTyps';
import {Icon, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {signOutUser} from '../../services/authentication';

const Tab = createBottomTabNavigator<TabStackParamList>();

const renderTabIcon = (iconName: string, color: string) => {
  return <Icon source={iconName} color={color} size={30} />;
};

const renderHeaderLeft = (username: string) => {
  return <Text style={styles.username}>{username}</Text>;
};

const renderHeaderRight = () => {
  const handleSignOutPress = () => {
    signOutUser();
  };

  return (
    <View style={styles.buttonsContainer}>
      <IconButton
        icon="plus-box-outline"
        size={32}
        onPress={() => console.log('Pressed+++++++')}
        style={styles.iconButtons}
      />

      <IconButton
        icon="logout-variant"
        size={32}
        onPress={handleSignOutPress}
        style={styles.iconButtons}
      />
    </View>
  );
};

const TabNavigator: React.FC<TabNavigatorPropTypes> = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Profile">
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
        initialParams={{userId: route.params.userId}}
        options={props => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => renderHeaderLeft(props.route.params.username),
          headerRight: () => renderHeaderRight(),
          tabBarIcon: ({color}) => renderTabIcon('magnify', color),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  iconButtons: {
    margin: 0,
  },
});

export default TabNavigator;
