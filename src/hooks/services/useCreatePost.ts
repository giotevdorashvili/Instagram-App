import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createPost} from '../../services/crudPosts';
import {useRootNavigation} from '../../navigators/rootStack/RootStack';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useCreatePost = () => {
  const navigation = useRootNavigation();

  const queryClient = useQueryClient();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  return useMutation({
    mutationFn: createPost,
    onSuccess: async () => {
      navigation.navigate('TabStack', {screen: 'Home'});

      queryClient.invalidateQueries({queryKey: ['posts', userId]});
    },
  });
};

export default useCreatePost;
