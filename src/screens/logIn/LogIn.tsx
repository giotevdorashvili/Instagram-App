import {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GradientBackground from '../../components/gradientBackground/GradientBackground';
import {ScreenProps} from '../../navigators/StackNavigator';
import StatusBar from '../../components/statusBar/StatusBar';
import InstagramLogo from '../../components/logos/InstagramLogo';
import MetaLogo from '../../components/logos/MetaLogo';
import LogInInputs from './inputs/LogInInputs';
import {
  LogInButton,
  ForgotPasswordButton,
  CreateAccountButton,
} from './buttons/LogInButtons';

const LogIn: React.FC<ScreenProps<'LogIn'>> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InstagramLogo />

          <LogInInputs {...{email, password, setEmail, setPassword}} />

          <LogInButton {...{email, password}} />

          <ForgotPasswordButton />
        </KeyboardAvoidingView>

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
    bottom: Platform.OS === 'ios' ? 0 : 20,
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  KeyboardAvoidingView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 90,
  },
});

export default LogIn;
