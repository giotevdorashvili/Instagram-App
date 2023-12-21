import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {TextInput, HelperText, Button} from 'react-native-paper';
import {useFormik} from 'formik';

import {styles} from './InputStyles';
import {getSharedInputprops} from '../../../utils/generic/utils';
import useAppTheme from '../../../hooks/theme/useApptheme';
import {InputValuTypes} from '../SignUpTypes';
import {useGetNavigation} from '../../../navigators/StackNavigator';
import useSignUpUser from '../../../hooks/services/useSignUpUser';
import {
  signUpInputsInitialState,
  signUpValidationSchema,
} from '../../../utils/signUp/utils';

const SignUpInputs = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useGetNavigation();

  const {paperTheme} = useAppTheme();

  const sharedInputProps = getSharedInputprops(
    paperTheme.colors.inputBackgroud,
  );

  const formik = useFormik({
    initialValues: signUpInputsInitialState,
    validationSchema: signUpValidationSchema,
    onSubmit: handleSubmit,
  });

  const {data: userId, status, mutate, error} = useSignUpUser();

  useEffect(() => {
    if (userId) navigation.navigate('Profile', {userId});
  }, [userId, navigation]);

  function handleSubmit(values: InputValuTypes) {
    mutate(values);
  }
  useEffect(() => {
    if (!error) return;

    const errorMessage = error.message.startsWith('Firebase')
      ? 'Email already in use'
      : error.message;

    formik.setFieldError('password', errorMessage);
    formik.touched.password = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const getInputClearButton = (type: string) => {
    return (
      <TextInput.Icon
        icon="close"
        onPress={() => formik.handleChange(type)('')}
        style={styles.emailIcon}
      />
    );
  };

  return (
    <ScrollView
      style={styles.inputsContainer}
      contentContainerStyle={styles.containerStyle}>
      <TextInput
        {...sharedInputProps}
        label="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        error={formik.touched.username && !!formik.errors.username}
        right={
          formik.values.username.length ? getInputClearButton('username') : null
        }
      />
      {formik.touched.username && formik.errors.username && (
        <HelperText type="error">{formik.errors.username}</HelperText>
      )}

      <TextInput
        {...sharedInputProps}
        label="Full name"
        value={formik.values.fullName}
        onChangeText={formik.handleChange('fullName')}
        onBlur={formik.handleBlur('fullName')}
        error={formik.touched.fullName && !!formik.errors.fullName}
        right={
          formik.values.fullName.length ? getInputClearButton('fullName') : null
        }
      />
      {formik.touched.fullName && formik.errors.fullName && (
        <HelperText type="error">{formik.errors.fullName}</HelperText>
      )}

      <TextInput
        {...sharedInputProps}
        label="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={formik.touched.email && !!formik.errors.email}
        right={formik.values.email.length ? getInputClearButton('email') : null}
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

      <Button
        loading={status === 'pending'}
        disabled={!formik.isValid || !formik.dirty}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        mode="contained"
        buttonColor={paperTheme.colors.blue}
        textColor="white"
        onPress={() => handleSubmit(formik.values)}>
        Sign up
      </Button>
    </ScrollView>
  );
};

export default SignUpInputs;
