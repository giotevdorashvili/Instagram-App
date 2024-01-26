import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import useAppTheme from '../../../../hooks/theme/useApptheme';
import {useRootNavigation} from '../../../../navigators/rootStackNavigator/RootStackNavigator';

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

  const navigation = useRootNavigation();

  return (
    <Button
      style={[styles.button, {borderColor: paperTheme.colors.lightBlue}]}
      labelStyle={styles.buttonLabel}
      mode="outlined"
      textColor={paperTheme.colors.lightBlue}
      onPress={() => navigation.navigate('SignUp')}>
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
