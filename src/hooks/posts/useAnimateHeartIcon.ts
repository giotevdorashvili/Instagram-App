import {useSharedValue, withTiming, Easing} from 'react-native-reanimated';

const useAnimateHeartIcon = () => {
  const likeImageOpacity = useSharedValue(0);
  const likeImageScale = useSharedValue(1);

  const animateHeartIcon = (likePostFromImage: () => void) => {
    likePostFromImage();

    likeImageOpacity.value = withTiming(
      1,
      {
        duration: 1000,
        easing: Easing.ease,
      },
      () => {
        likeImageOpacity.value = withTiming(0, {
          duration: 200,
          easing: Easing.ease,
        });
      },
    );

    likeImageScale.value = withTiming(
      1.25,
      {
        duration: 200,
        easing: Easing.ease,
      },
      () => {
        likeImageScale.value = withTiming(1, {
          duration: 200,
          easing: Easing.ease,
        });
      },
    );
  };

  return {likeImageOpacity, likeImageScale, animateHeartIcon};
};

export default useAnimateHeartIcon;
