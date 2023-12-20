import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {FIREBASE_AUTH} from './FirebaseConfig';
import {createUser, findUserByUsername} from './crudUser';
import {SignUpUserTypes, SignInUserTypes} from './ServiceTypes';

export const signUpUser = async ({
  email,
  password,
  fullName,
  username,
}: SignUpUserTypes) => {
  try {
    const usernameExists = await findUserByUsername(username);

    if (usernameExists) {
      throw new Error('Username already exists');
    }

    const userCredential = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );

    const userId = userCredential.user.uid;

    if (!userId) {
      throw new Error('Error while signing up user');
    }

    await createUser({
      userId,
      fullName,
      username,
    });

    return userId;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async ({email, password}: SignInUserTypes) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(FIREBASE_AUTH);
  } catch (error) {
    throw error;
  }
};
