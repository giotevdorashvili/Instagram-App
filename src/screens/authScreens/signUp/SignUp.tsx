import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GradientBackground from '../../../components/gradientBackground/GradientBackground';
import StatusBar from '../../../components/statusBar/StatusBar';
import InstagramLogo from '../../../components/logos/InstagramLogo';
import MetaLogo from '../../../components/logos/MetaLogo';
import SignUpInputs from './inputs/SignUpInputs';
import {SignUpPropTypes} from '../../../navigators/rootNavigator/RootNavigatorTypes';

const SignUp: React.FC<SignUpPropTypes> = () => {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InstagramLogo />

          <SignUpInputs />
        </KeyboardAvoidingView>

        <View style={styles.createButtonMetaContainer}>
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

export default SignUp;
