import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GradientBackground from '../../components/gradientBackground/GradientBackground';
import {ScreenProps} from '../../navigators/StackNavigator';
import StatusBar from '../../components/statusBar/StatusBar';
import InstagramLogo from './logos/InstagramLogo';
import MetaLogo from './logos/MetaLogo';
import Inputs from './inputs/Inputs';
import {
  LogInButton,
  ForgotPasswordButton,
  CreateAccountButton,
} from './buttons/Buttons';

const LogIn: React.FC<ScreenProps<'LogIn'>> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <InstagramLogo />

        <Inputs {...{email, password, setEmail, setPassword}} />

        <LogInButton {...{email, password}} />

        <ForgotPasswordButton />

        <View style={styles.createButtonMetaContainer}>
          <CreateAccountButton />
          <MetaLogo />
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  createButtonMetaContainer: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
});

export default LogIn;
