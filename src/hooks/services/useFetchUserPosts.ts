import {useQuery} from '@tanstack/react-query';
import {fetchUserPosts} from '../../services/crudPosts';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useFetchUserPosts = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useQuery({
    queryKey: ['posts', userId],
    queryFn: async () => await fetchUserPosts(userId!),
  });
};

export default useFetchUserPosts;
