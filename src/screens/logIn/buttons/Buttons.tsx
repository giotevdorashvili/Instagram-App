import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import useAppTheme from '../../../hooks/theme/useApptheme';

interface LoginButtonprops {
  email: string;
  password: string;
}

export const LogInButton = ({email, password}: LoginButtonprops) => {
  const {paperTheme} = useAppTheme();

  console.log(email, password, '...............');

  return (
    <Button
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode="contained"
      buttonColor={paperTheme.colors.blue}
      textColor="white"
      onPress={() => console.log('Pressed')}>
      Log in
    </Button>
  );
};

export const ForgotPasswordButton = () => {
  const {paperTheme} = useAppTheme();

  return (
    <Button
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode="text"
      textColor={paperTheme.colors.logoText}
      onPress={() => console.log('Pressed')}>
      Forgot password?
    </Button>
  );
};

export const CreateAccountButton = () => {
  const {paperTheme} = useAppTheme();

  return (
    <Button
      style={[styles.button, {borderColor: paperTheme.colors.lightBlue}]}
      labelStyle={styles.buttonLabel}
      mode="outlined"
      textColor={paperTheme.colors.lightBlue}
      onPress={() => console.log('Pressed')}>
      Create new account
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 30,
    textAlign: 'center',
    marginTop: 5,
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 3,
  },
});
