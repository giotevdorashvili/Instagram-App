import {StyleSheet} from 'react-native';

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
