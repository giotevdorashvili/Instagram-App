import {
  child,
  get,
  ref,
  set,
  query,
  orderByKey,
  startAt,
  limitToFirst,
} from 'firebase/database';

import {FIREBASE_DATABASE} from './FirebaseConfig';
import {CreatePostTypes} from './ServiceTypes';
import {PostTypes} from '../screens/tabScreens/home/HomeTypes';

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

const itemFetchLimit = 4;

export const fetchUserPosts = async (userId: string, pageParam: number) => {
  const dbQuery = query(
    child(ref(FIREBASE_DATABASE), `posts/${userId}`),
    orderByKey(),
    startAt(pageParam.toString()),
    limitToFirst(itemFetchLimit),
  );

  const snapshot = await get(dbQuery);

  const data: PostTypes[] = Object.values(snapshot.val());

  if (data.length < itemFetchLimit) {
    return {data, nextPointer: null};
  }

  return {data, nextPointer: data?.pop()?.timeStamp};
};
