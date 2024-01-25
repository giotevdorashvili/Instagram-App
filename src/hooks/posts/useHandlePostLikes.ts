import useLikePosts from '../services/useLikePosts';
import {PostTypes} from '../../services/ServiceTypes';
import useFetchUser from '../services/useFetchUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useHandlePostLikes = () => {
  const {isPending, variables, mutate} = useLikePosts();

  const {data} = useFetchUser();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const handleLikePostFromImage = (timeStamp: number, isPostLiked: boolean) => {
    if (isPostLiked) return true;

    mutate({
      liked: true,
      postUserUid: userId!,
      timeStamp: timeStamp,
      updatedPostLikesData: data,
    });
  };

  const handleLikePostFromIcon = (item: PostTypes, isPostLiked: boolean) => {
    let updatedData = null;

    if (isPostLiked) {
      const filtered = Object.entries(item.likes || {}).filter(
        ([key]) => key !== userId,
      );

      updatedData = Object.fromEntries(filtered).likes || {};
    } else {
      updatedData = item?.likes ? {...item.likes, data} : data;
    }

    mutate({
      liked: !isPostLiked,
      postUserUid: userId!,
      timeStamp: item?.timeStamp,
      updatedPostLikesData: updatedData,
    });
  };

  return {
    isPending,
    optimisticallyLiked: variables?.liked,
    handleLikePostFromImage,
    handleLikePostFromIcon,
  };
};

export default useHandlePostLikes;
