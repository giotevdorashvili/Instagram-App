import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createPost} from '../../services/crudPosts';
import {useRootNavigation} from '../../navigators/rootNavigator/RootNavigator';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useCreatePost = () => {
  const navigation = useRootNavigation();

  const queryClient = useQueryClient();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const mutationData = useMutation({
    mutationFn: createPost,
    onSuccess: async () => {
      navigation.navigate('TabNavigator', {screen: 'Home'});

      queryClient.invalidateQueries({queryKey: ['posts', userId]});
    },
  });

  return {...mutationData, uidExists: !!userId};
};

export default useCreatePost;
