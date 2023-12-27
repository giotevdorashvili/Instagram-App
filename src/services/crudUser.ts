import {
  ref,
  set,
  child,
  get,
  query,
  orderByChild,
  equalTo,
  update,
} from 'firebase/database';

import {FIREBASE_DATABASE} from './FirebaseConfig';
import {CreateUserTypes} from './ServiceTypes';

export const createUser = async ({
  userId,
  username,
  fullName,
}: CreateUserTypes) => {
  try {
    await set(ref(FIREBASE_DATABASE, `users/${userId}`), {
      username,
      fullName,
    });
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const snapshot = await get(
      child(ref(FIREBASE_DATABASE), `users/${userId}`),
    );

    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userUid: string, uri: string) => {
  try {
    await update(ref(FIREBASE_DATABASE, `users/${userUid}`), {
      profilePictureUri: uri,
    });
  } catch (error) {
    throw error;
  }
};

export const findUserByUsername = async (username: string) => {
  try {
    const snapshot = await get(
      query(
        ref(FIREBASE_DATABASE, 'users'),
        orderByChild('username'),
        equalTo(username),
      ),
    );

    return snapshot.exists();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
