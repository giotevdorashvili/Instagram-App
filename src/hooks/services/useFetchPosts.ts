import {useQuery} from '@tanstack/react-query';
import {fetchPosts} from '../../services/crudPosts';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useFetchPosts = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useQuery({
    queryKey: ['posts', userId],
    queryFn: async () => await fetchPosts(userId!),
  });
};

export default useFetchPosts;
