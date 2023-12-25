import {Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, IconButton, Avatar} from 'react-native-paper';

import useFetchUser from '../../../hooks/services/useFetchUser';
import StatusBar from '../../../components/statusBar/StatusBar';
import {signOutUser} from '../../../services/authentication';
import {StyleSheet, View} from 'react-native';
import {ProfilePropTypes} from '../../../navigators/tabNavigator/TabNavigatorTyps';

const Profile: React.FC<ProfilePropTypes> = ({route}) => {
  const {data, isLoading} = useFetchUser(route.params.userId);

  const handleSignOutPress = () => {
    signOutUser();
  };

  if (isLoading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={styles.usernameButtonsContainer}>
        <Text style={styles.username}>{data?.username}</Text>

        <View style={styles.buttonsContainer}>
          <IconButton
            icon="plus-box-outline"
            size={32}
            onPress={() => console.log('Pressed')}
            style={styles.iconButtons}
          />

          <IconButton
            icon="logout-variant"
            size={32}
            onPress={handleSignOutPress}
            style={styles.iconButtons}
          />
        </View>
      </View>

      <View style={styles.avatarCountersContainer}>
        <Pressable onPress={() => console.log('Avatar Pressed')}>
          <Avatar.Image
            size={80}
            source={require('../../../assets/instagram-avatar.jpeg')}
          />
        </Pressable>

        <View style={styles.countersContainer}>
          <View style={styles.counterContainer}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>posts</Text>
          </View>

          <View style={styles.counterContainer}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>followers</Text>
          </View>

          <View style={styles.counterContainer}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>following</Text>
          </View>
        </View>
      </View>

      <Text style={styles.text}>{data?.fullName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    // gap: 20,
  },
  usernameButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  username: {
    fontSize: 20,
    fontWeight: '700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  iconButtons: {
    margin: 0,
  },
  avatarCountersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  countersContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  counterContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Profile;
