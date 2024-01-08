import {useQuery} from '@tanstack/react-query';
import {fetchUser} from '../../services/crudUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useFetchUser = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useQuery({
    queryKey: [userId],
    queryFn: async () => await fetchUser(userId!),
  });
};

export default useFetchUser;
