import React from 'react';
import {StyleSheet} from 'react-native';
import {HelperText} from 'react-native-paper';

const Error = ({error}: {error: string}) => {
  return (
    <HelperText type="error" style={styles.error}>
      {error}
    </HelperText>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Error;
