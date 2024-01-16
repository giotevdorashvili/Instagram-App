import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

import {useRootNavigation} from '../../../../navigators/rootStack/RootStack';
import {signOutUser} from '../../../../services/authentication';
import {getLocalImageUriFromDevice} from '../../../../utils/services/utils';

const ProfileRightHeader = () => {
  const navigation = useRootNavigation();

  const handleSignOutPress = () => {
    signOutUser();
  };

  const handleAddPostPress = async () => {
    const imageUri = await getLocalImageUriFromDevice();

    if (!imageUri) return;

    navigation.navigate('NewPost', {imageUri});
  };

  return (
    <View style={styles.buttonsContainer}>
      <IconButton
        icon="plus-box-outline"
        size={32}
        onPress={handleAddPostPress}
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
  buttonsContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  iconButtons: {
    margin: 0,
  },
});

export default ProfileRightHeader;
