import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {FirebaseError} from '@firebase/util';

import {FIREBASE_AUTH} from './FirebaseConfig';

export const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );

    console.log('-----userCredential in sign up------', userCredential);

    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log('-----userCredential in sign up------', error.message);
    }
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );
    console.log('-----userCredential in sign in------', userCredential);

    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log('-----userCredential in sign in------', error.message);
    }
  }
};
