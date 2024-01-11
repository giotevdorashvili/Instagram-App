import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchUserPosts} from '../../services/crudPosts';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

// const useFetchUserPosts = () => {
//   const userId = FIREBASE_AUTH.currentUser?.uid;

//   const queryData = useQuery({
//     queryKey: ['posts', userId],
//     queryFn: async () => await fetchUserPosts(userId!),
//   });

//   return queryData;
// };

// export default useFetchUserPosts;

const useFetchUserPosts = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useInfiniteQuery({
    queryKey: ['posts', userId],
    queryFn: async ({pageParam}) => {
      return await fetchUserPosts(userId!, pageParam);
    },
    getNextPageParam: lastPage => {
      console.log('runssss', lastPage.nextPointer);

      return lastPage.nextPointer;
    },
    initialPageParam: 0,
  });
};

export default useFetchUserPosts;
