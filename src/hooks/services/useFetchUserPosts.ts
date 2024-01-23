import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchUserPosts} from '../../services/crudPosts';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useFetchUserPosts = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useInfiniteQuery({
    queryKey: ['posts', userId],
    queryFn: async ({pageParam}) => await fetchUserPosts(userId!, pageParam),
    getNextPageParam: lastPage => lastPage.nextPointer,
    initialPageParam: 0,
  });
};

export default useFetchUserPosts;
