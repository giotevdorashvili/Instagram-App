import {useSharedValue, withTiming, Easing} from 'react-native-reanimated';

const useAnimateLikeIcon = () => {
  const likeImageIconScale = useSharedValue(1);

  const animateLikeIcon = () => {
    likeImageIconScale.value = withTiming(
      1.2,
      {
        duration: 200,
        easing: Easing.ease,
      },
      () => {
        likeImageIconScale.value = withTiming(1, {
          duration: 200,
          easing: Easing.ease,
        });
      },
    );
  };

  return {likeImageIconScale, animateLikeIcon};
};

export default useAnimateLikeIcon;
