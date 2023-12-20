import * as yup from 'yup';

const usernameValidation = yup.string().required('Username is required');
const fullNameValidation = yup.string().required('Full name is required');
const emailValidation = yup
  .string()
  .required('Email is required')
  .matches(/^\S+@\S+\.\S+$/, 'Enter valid email');
const passwordValidation = yup
  .string()
  .required('Password is required')
  .matches(/^.{6,}$/, 'Password should be at least 6 characters');

export const signUpValidationSchema = yup.object().shape({
  username: usernameValidation,
  fullName: fullNameValidation,
  email: emailValidation,
  password: passwordValidation,
});

export const signUpInputsInitialState = {
  username: '',
  fullName: '',
  email: '',
  password: '',
};
