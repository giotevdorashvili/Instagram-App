import {useRef} from 'react';
import LottieView from 'lottie-react-native';

import useLikePosts from '../services/useLikePosts';
import {PostTypes} from '../../services/ServiceTypes';
import useFetchUser from '../services/useFetchUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useAnimateLikeIcons = () => {
  const iconAnimationRef = useRef<LottieView>(null);
  const heartAnimationRef = useRef<LottieView>(null);

  const {isPending, variables, mutate} = useLikePosts();

  const {data} = useFetchUser();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const handleLikePostFromImage = (timeStamp: number, isPostLiked: boolean) => {
    iconAnimationRef.current?.play(15, 45);
    heartAnimationRef.current?.play();

    if (isPostLiked) return;

    mutate({
      liked: true,
      postUserUid: userId!,
      timeStamp: timeStamp,
      updatedPostLikesData: data,
    });
  };

  const handleLikePostFromIcon = (item: PostTypes, isPostLiked: boolean) => {
    if (!isPostLiked) iconAnimationRef.current?.play(0, 45);
    else iconAnimationRef.current?.play(45);

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
    iconAnimationRef,
    heartAnimationRef,
    handleLikePostFromImage,
    handleLikePostFromIcon,
  };
};

export default useAnimateLikeIcons;
