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
import {CreateUserTypes, UpdateUSerTypes} from './ServiceTypes';

export const createUser = async ({
  userId,
  username,
  fullName,
}: CreateUserTypes) => {
  await set(ref(FIREBASE_DATABASE, `users/${userId}`), {
    username,
    fullName,
  });
};

export const fetchUser = async (userId: string) => {
  const snapshot = await get(child(ref(FIREBASE_DATABASE), `users/${userId}`));

  return snapshot.val();
};

export const updateUser = async (
  userUid: string,
  updatedUserProfiledata: UpdateUSerTypes,
) => {
  await update(
    ref(FIREBASE_DATABASE, `users/${userUid}`),
    updatedUserProfiledata,
  );
};

export const findUserByUsername = async (username: string) => {
  const snapshot = await get(
    query(
      ref(FIREBASE_DATABASE, 'users'),
      orderByChild('username'),
      equalTo(username),
    ),
  );

  return snapshot.exists();
};
