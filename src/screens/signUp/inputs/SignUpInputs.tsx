import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import useAppTheme from '../../../hooks/theme/useApptheme';
import {InputProps} from '../SignUpTypes';

const SignUpInputs = (props: InputProps) => {
  const {username, fullName, email, password, onSignUpValuesChange} = props;

  const [hidePassword, setHidePassword] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const {paperTheme} = useAppTheme();

  const inputSharedProps = {
    style: [styles.input, {backgroundColor: paperTheme.colors.inputBackgroud}],
    outlineStyle: styles.inputOutlineStyle,
    mode: 'outlined' as 'outlined' | 'flat' | undefined,
  };

  const getInputClearButton = (type: string) => {
    return (
      <TextInput.Icon
        icon="close"
        onPress={() => onSignUpValuesChange('', type)}
        style={styles.emailIcon}
      />
    );
  };

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        {...inputSharedProps}
        label="Username"
        value={username}
        onChangeText={val => onSignUpValuesChange(val, 'username')}
        right={username.length ? getInputClearButton('username') : null}
      />
      <TextInput
        {...inputSharedProps}
        label="Full name"
        value={fullName}
        onChangeText={val => onSignUpValuesChange(val, 'fullName')}
        right={fullName.length ? getInputClearButton('fullName') : null}
      />
      <TextInput
        {...inputSharedProps}
        label="Email"
        value={email}
        onChangeText={val => onSignUpValuesChange(val, 'email')}
        right={email.length ? getInputClearButton('email') : null}
      />
      <TextInput
        {...inputSharedProps}
        label="Password"
        value={password}
        onChangeText={val => onSignUpValuesChange(val, 'password')}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
        secureTextEntry={hidePassword}
        right={
          isPasswordFocused || password.length ? (
            <TextInput.Icon
              icon={hidePassword ? 'eye-off' : 'eye'}
              onPress={() => setHidePassword(prev => !prev)}
              style={styles.emailIcon}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 15,
  },
  input: {
    borderRadius: 15,
    fontWeight: '500',
    height: 60,
  },
  inputOutlineStyle: {
    borderRadius: 15,
    borderWidth: 1,
  },
  emailIcon: {
    marginTop: 15,
  },
});

export default SignUpInputs;
