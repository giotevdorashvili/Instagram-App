import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';

import useFetchUser from '../../../hooks/services/useFetchUser';
import StatusBar from '../../../components/statusBar/StatusBar';
import {ProfilePropTypes} from '../../../navigators/tabNavigator/TabNavigatorTyps';
import ProfilePicture from './profilePicture/ProfilePicture';
import ProfileCounter from './profileCounter/ProfileCounter';
import {renderProfileTabIcon} from '../../../utils/services/utils';
import {renderHeaderLeft} from '../../../utils/tabNavigator/utils';
import {FIREBASE_AUTH} from '../../../services/FirebaseConfig';
import useAppTheme from '../../../hooks/theme/useApptheme';

const Profile: React.FC<ProfilePropTypes> = ({navigation}) => {
  const {paperTheme} = useAppTheme();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const {data: profileData, isLoading} = useFetchUser(userId!);

  const username = profileData?.username;
  const imageUri = profileData?.profilePictureUri;
  const backgroundColor = paperTheme.colors.main;

  useEffect(() => {
    if (!imageUri || !username) return;

    navigation.setOptions({
      tabBarIcon: () => renderProfileTabIcon(imageUri),
      headerLeft: () => renderHeaderLeft(username),
    });
  }, [navigation, imageUri, username]);

  if (isLoading) return <ActivityIndicator style={styles.container} />;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar />

      <View style={styles.avatarCountersContainer}>
        <ProfilePicture imageUri={imageUri} />
        <ProfileCounter />
      </View>

      <Text style={styles.text}>{profileData?.fullName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
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
