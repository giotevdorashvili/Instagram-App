import * as yup from 'yup';

const emailValidation = yup
  .string()
  .required('Email is required')
  .matches(/^\S+@\S+\.\S+$/, 'Enter valid email');
const passwordValidation = yup
  .string()
  .required('Password is required')
  .matches(/^.{6,}$/, 'Password should be at least 6 characters');

export const logInValidationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const LogInInputsInitialState = {
  email: '',
  password: '',
};
