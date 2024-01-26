import {useMutation, useQueryClient} from '@tanstack/react-query';

import {updatePostlikes} from '../../services/crudPosts';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useLikePosts = () => {
  const queryClient = useQueryClient();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useMutation({
    mutationFn: updatePostlikes,

    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ['posts', userId],
      });
    },
  });
};

export default useLikePosts;
