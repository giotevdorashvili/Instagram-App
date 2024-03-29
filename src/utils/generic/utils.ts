import {Alert, StyleSheet} from 'react-native';
import {signOutUser} from '../../services/authentication';

export const getSharedInputprops = (backgroundColor: string) => {
  return {
    style: [styles.input, {backgroundColor}],
    outlineStyle: styles.inputOutlineStyle,
    mode: 'outlined' as 'outlined' | 'flat' | undefined,
  };
};

export const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    fontWeight: '500',
    height: 60,
  },
  inputOutlineStyle: {
    borderRadius: 15,
    borderWidth: 1,
  },
});

export const alertUidError = () => {
  Alert.alert('', 'Something went wrong, try later.', [
    {
      text: 'Ok',
      onPress: signOutUser,
      style: 'cancel',
    },
  ]);
};

export const alert = (messsage: string) => {
  Alert.alert('', messsage, [
    {
      text: 'Ok',
      onPress: () => console.log(''),
      style: 'cancel',
    },
  ]);
};
