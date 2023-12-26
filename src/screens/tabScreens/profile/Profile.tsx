import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';

import useFetchUser from '../../../hooks/services/useFetchUser';
import StatusBar from '../../../components/statusBar/StatusBar';
import {ProfilePropTypes} from '../../../navigators/tabNavigator/TabNavigatorTyps';
import ProfilePicture from './profilePicture/ProfilePicture';
import ProfileCounter from './profileCounter/ProfileCounter';

const Profile: React.FC<ProfilePropTypes> = ({route, navigation}) => {
  const {data: profileData, isLoading} = useFetchUser(route.params.userId);

  useEffect(() => {
    navigation.setParams({username: profileData?.username});
  }, [navigation, profileData?.username]);

  if (isLoading) return <ActivityIndicator style={styles.container} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={styles.avatarCountersContainer}>
        <ProfilePicture />
        <ProfileCounter />
      </View>

      <Text style={styles.text}>{profileData?.fullName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  avatarCountersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  avatarStyle: {
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Profile;
