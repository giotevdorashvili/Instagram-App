import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {useFormik} from 'formik';

import useAppTheme from '../../../hooks/theme/useApptheme';
import {getSharedInputprops} from '../../../utils/generic/utils';
import Error from '../../../components/error/Error';
import useSignInUser from '../../../hooks/services/useSignInUser';
import {useGetNavigation} from '../../../navigators/StackNavigator';
import {
  logInValidationSchema,
  LogInInputsInitialState,
} from '../../../utils/logIn/utils';

const LogInInputs = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useGetNavigation();

  const {paperTheme} = useAppTheme();

  const sharedInputProps = getSharedInputprops(
    paperTheme.colors.inputBackgroud,
  );

  const formik = useFormik({
    initialValues: LogInInputsInitialState,
    validationSchema: logInValidationSchema,
    onSubmit: handleLogInPress,
  });

  const {data, status, mutate, error} = useSignInUser();

  useEffect(() => {
    if (data?.uid) {
      navigation.navigate('Profile', {userId: data?.uid});
    }
  }, [data?.uid, navigation]);

  function handleLogInPress(values: {email: string; password: string}) {
    mutate(values);
  }

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        {...sharedInputProps}
        label="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={formik.touched.email && !!formik.errors.email}
        right={
          formik.values.email.length ? (
            <TextInput.Icon
              icon="close"
              onPress={() => formik.handleChange('email')('')}
              style={styles.emailIcon}
            />
          ) : null
        }
      />
      {formik.touched.email && formik.errors.email && (
        <HelperText type="error">{formik.errors.email}</HelperText>
      )}

      <TextInput
        {...sharedInputProps}
        label="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry={hidePassword}
        error={formik.touched.password && !!formik.errors.password}
        right={
          formik.values.password.length ? (
            <TextInput.Icon
              icon={hidePassword ? 'eye-off' : 'eye'}
              onPress={() => setHidePassword(prev => !prev)}
              style={styles.emailIcon}
            />
          ) : null
        }
      />
      {formik.touched.password && formik.errors.password && (
        <HelperText type="error">{formik.errors.password}</HelperText>
      )}

      {error && <Error error={error.message} />}

      <Button
        disabled={!formik.isValid || !formik.dirty}
        loading={status === 'pending'}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        mode="contained"
        buttonColor={paperTheme.colors.blue}
        textColor="white"
        onPress={() => handleLogInPress(formik.values)}>
        Log in
      </Button>
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

export default LogInInputs;
