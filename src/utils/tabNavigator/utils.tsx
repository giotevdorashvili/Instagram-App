import {StyleSheet, View} from 'react-native';
import {Icon, IconButton, Text} from 'react-native-paper';
import {signOutUser} from '../../services/authentication';

export const renderTabIcon = (iconName: string, color: string) => {
  return <Icon source={iconName} color={color} size={30} />;
};

export const renderHeaderLeft = (username: string) => {
  return <Text style={styles.username}>{username}</Text>;
};

export const renderHeaderRight = () => {
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
  avatar: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
