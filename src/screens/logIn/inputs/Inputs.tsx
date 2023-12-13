import {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import useAppTheme from '../../../hooks/theme/useApptheme';

interface InputProps {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

const Inputs = ({email, password, setEmail, setPassword}: InputProps) => {
  const {paperTheme} = useAppTheme();

  const backgroundColor = paperTheme.colors.inputBackgroud;

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        style={[styles.input, {backgroundColor}]}
        outlineStyle={styles.inputOutlineStyle}
        contentStyle={styles.inputContentStyle}
        label="Email"
        mode="outlined"
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
        style={[styles.input, {backgroundColor}]}
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        outlineStyle={styles.inputOutlineStyle}
        keyboardType="numeric"
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
  inputContentStyle: {
    width: '90%',
  },
  emailIcon: {
    marginTop: 15,
  },
});

export default Inputs;
