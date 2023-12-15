import {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GradientBackground from '../../components/gradientBackground/GradientBackground';
import {ScreenProps} from '../../navigators/StackNavigator';
import StatusBar from '../../components/statusBar/StatusBar';
import InstagramLogo from '../../components/logos/InstagramLogo';
import MetaLogo from '../../components/logos/MetaLogo';
import SignUpInputs from './inputs/SignUpInputs';
import {SignUpButton} from './buttons/SignUpButtons';
import {InputValuTypes} from './SignUpTypes';

const initialState = {
  username: '',
  fullName: '',
  email: '',
  password: '',
};

const SignUp: React.FC<ScreenProps<'SignUp'>> = () => {
  const [inputValues, setInputValues] = useState<InputValuTypes>(initialState);

  const onSignUpValuesChange = (val: string, type: string) => {
    setInputValues(prevState => ({...prevState, [type]: val}));
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InstagramLogo />

          <SignUpInputs {...{...inputValues, onSignUpValuesChange}} />

          <SignUpButton {...{...inputValues}} />
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
