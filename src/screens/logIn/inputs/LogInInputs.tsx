import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import useAppTheme from '../../../hooks/theme/useApptheme';
import {InputProps} from '../LoginTypes';

const LogInInputs = ({email, password, setEmail, setPassword}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const {paperTheme} = useAppTheme();

  const inputSharedProps = {
    style: [styles.input, {backgroundColor: paperTheme.colors.inputBackgroud}],
    outlineStyle: styles.inputOutlineStyle,
    mode: 'outlined' as 'outlined' | 'flat' | undefined,
  };

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        {...inputSharedProps}
        label="Email"
        value={email}
        onChangeText={setEmail}
        right={
          email.length ? (
            <TextInput.Icon
              icon="close"
              onPress={() => setEmail('')}
              style={styles.emailIcon}
            />
          ) : null
        }
      />

      <TextInput
        {...inputSharedProps}
        label="Password"
        value={password}
        onChangeText={setPassword}
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

export default LogInInputs;
