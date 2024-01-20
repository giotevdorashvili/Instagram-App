import {useState} from 'react';
import {useAnimatedStyle} from 'react-native-reanimated';

import useAnimateLikeIcon from './useAnimateLikeIcon';
import useAnimateHeartIcon from './useAnimateHeartIcon';

const useAnimatePostLikes = () => {
  const [postLikedFromImage, setPostlikedFromImage] = useState(false);
  const [postLikedFromIcon, setPostLikedFromIcon] = useState(false);

  const {likeImageIconScale, animateLikeIcon} = useAnimateLikeIcon();
  const {likeImageOpacity, likeImageScale, animateHeartIcon} =
    useAnimateHeartIcon();

  const likePostFromImage = () => {
    setPostlikedFromImage(true);
    setPostLikedFromIcon(true);

    animateLikeIcon();
  };

  const handleLikePostFromImage = () => {
    animateHeartIcon(likePostFromImage);
  };

  const handleLikePostFromIcon = () => {
    if (!postLikedFromImage) setPostlikedFromImage(true);

    animateLikeIcon();

    setPostLikedFromIcon(prev => !prev);
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

  const postLiked = postLikedFromImage && postLikedFromIcon;

  return {
    postLiked,
    handleLikePostFromImage,
    handleLikePostFromIcon,
    likeImageHeartStyle,
    likeIconStyle,
  };
};

export default useAnimatePostLikes;
