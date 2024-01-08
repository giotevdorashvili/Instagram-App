import {child, get, ref, set} from 'firebase/database';

import {FIREBASE_DATABASE} from './FirebaseConfig';
import {CreatePostTypes} from './ServiceTypes';

export const createPost = async ({
  userId,
  postTitle,
  postImageUri,
  timeStamp,
}: CreatePostTypes) => {
  try {
    await set(ref(FIREBASE_DATABASE, `posts/${userId}/${timeStamp}`), {
      postTitle,
      postImageUri,
      timeStamp,
    });
  } catch (error) {
    throw error;
  }
};

export const fetchPosts = async (userId: string) => {
  try {
    const snapshot = await get(
      child(ref(FIREBASE_DATABASE), `posts/${userId}`),
    );

    return snapshot.val();
  } catch (error) {
    throw error;
  }
};
