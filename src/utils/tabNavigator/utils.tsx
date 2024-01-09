import {StyleSheet, Image} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import ProfileRightHeader from '../../screens/tabScreens/profile/profileRightHeader/ProfileRightHeader';

export const renderTabIcon = (iconName: string, color: string) => {
  return <Icon source={iconName} color={color} size={30} />;
};

export const renderProfileTabIcon = (uri: string) => {
  return <Image style={styles.avatarIcon} source={{uri}} />;
};

export const renderHeaderLeft = (username: string) => {
  return <Text style={styles.username}>{username}</Text>;
};

export const renderHeaderRight = () => {
  return <ProfileRightHeader />;
};

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  avatarIcon: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
});
