import {child, get, ref, set} from 'firebase/database';

import {FIREBASE_DATABASE} from './FirebaseConfig';
import {CreatePostTypes} from './ServiceTypes';

export const createPost = async ({
  userId,
  postTitle,
  postImageUri,
  timeStamp,
}: CreatePostTypes) => {
  await set(ref(FIREBASE_DATABASE, `posts/${userId}/${timeStamp}`), {
    postTitle,
    postImageUri,
    timeStamp,
  });
};

export const fetchUserPosts = async (userId: string) => {
  const snapshot = await get(child(ref(FIREBASE_DATABASE), `posts/${userId}`));

  return snapshot.val();
};
