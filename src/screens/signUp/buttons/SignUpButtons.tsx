import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import useAppTheme from '../../../hooks/theme/useApptheme';
import {InputValuTypes} from '../SignUpTypes';

export const SignUpButton = (props: InputValuTypes) => {
  const {username, fullName, email, password} = props;
  const {paperTheme} = useAppTheme();

  const handleSignUpPress = () => {
    console.log(username, fullName, email, password, '//////');
  };

  return (
    <Button
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode="contained"
      buttonColor={paperTheme.colors.blue}
      textColor="white"
      onPress={handleSignUpPress}>
      Sign up
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
