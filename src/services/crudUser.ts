import {ref, set, child, get} from 'firebase/database';
import {FIREBASE_DATABASE} from './FirebaseConfig';

export const createUser = async (
  userId: string,
  name: string,
  username: string,
) => {
  try {
    await set(ref(FIREBASE_DATABASE, `users/${userId}`), {
      name,
      username,
    });
    console.log('User data saved!');
  } catch (error) {
    console.error('Error writing user data:', error);
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const snapshot = await get(
      child(ref(FIREBASE_DATABASE), `users/${userId}`),
    );

    console.log('user in in fetchUser', snapshot.val());
    return snapshot.val();
  } catch (error) {
    console.error('error in fetchUser', error);
  }
};
