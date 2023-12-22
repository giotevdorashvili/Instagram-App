import {useQuery} from '@tanstack/react-query';
import {fetchUser} from '../../services/crudUser';

const useFetchUser = (userId: string) => {
  return useQuery({
    queryKey: [userId],
    queryFn: async () => await fetchUser(userId),
  });
};

export default useFetchUser;
