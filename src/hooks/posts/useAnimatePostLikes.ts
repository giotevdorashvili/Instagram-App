import {useAnimatedStyle} from 'react-native-reanimated';

import useAnimateLikeIcon from './useAnimateLikeIcon';
import useAnimateHeartIcon from './useAnimateHeartIcon';
import useFetchUser from '../services/useFetchUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';
import useLikePosts from '../services/useLikePosts';
import {PostTypes} from '../../services/ServiceTypes';

const useAnimatePostLikes = () => {
  const {likeImageIconScale, animateLikeIcon} = useAnimateLikeIcon();
  const {likeImageOpacity, likeImageScale, animateHeartIcon} =
    useAnimateHeartIcon();

  const {data} = useFetchUser();

  const {isPending, variables, mutate} = useLikePosts();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const handleLikePostFromImage = async (
    timeStamp: number,
    isPostLiked: boolean,
  ) => {
    animateHeartIcon();
    animateLikeIcon();

    if (isPostLiked) return;

    mutate({
      liked: true,
      postUserUid: userId!,
      timeStamp,
      updatedPostLikesData: data,
    });
  };

  const handleLikePostFromIcon = (item: PostTypes, isPostLiked: boolean) => {
    animateLikeIcon();

    let updatedData = null;

    if (isPostLiked) {
      const filtered = Object.entries(item.likes || {}).filter(
        ([key]) => key !== userId,
      );

      updatedData = Object.fromEntries(filtered).likes || {};
    } else {
      updatedData = item.likes ? {...item.likes, data} : data;
    }

    mutate({
      liked: !isPostLiked,
      postUserUid: userId!,
      timeStamp: item.timeStamp,
      updatedPostLikesData: updatedData,
    });
  };

  const likeImageHeartStyle = useAnimatedStyle(() => {
    return {
      opacity: likeImageOpacity.value,
      transform: [{scale: likeImageScale.value}],
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      position: 'absolute',
    };
  });

  const likeIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: likeImageIconScale.value}],
    };
  });

  return {
    isPending,
    optimisticallyLiked: variables?.liked,
    handleLikePostFromImage,
    handleLikePostFromIcon,
    likeImageHeartStyle,
    likeIconStyle,
  };
};

export default useAnimatePostLikes;
