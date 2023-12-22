import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Button, Text} from 'react-native-paper';

import {ScreenProps} from '../../navigators/StackNavigator';
import useFetchUser from '../../hooks/services/useFetchUser';
import GradientBackground from '../../components/gradientBackground/GradientBackground';
import StatusBar from '../../components/statusBar/StatusBar';
import {signOutUser} from '../../services/authentication';

const Profile: React.FC<ScreenProps<'Profile'>> = ({route}) => {
  const {data, isLoading} = useFetchUser(route.params.userId);

  const handleSignOutPress = () => {
    signOutUser();
  };

  if (isLoading) return <ActivityIndicator />;

  return (
    <GradientBackground>
      <SafeAreaView>
        <StatusBar />
        <Text>{data?.username}</Text>
        <Text>{data?.fullName}</Text>
        <Button onPress={handleSignOutPress}>Sign oput</Button>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Profile;
