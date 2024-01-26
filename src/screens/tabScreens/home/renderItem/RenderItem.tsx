import {useEffect, useRef} from 'react';
import {View, Pressable, Image} from 'react-native';
import {IconButton, TextInput, Text} from 'react-native-paper';
import {TapGestureHandler} from 'react-native-gesture-handler';

import styles from './RenderItemStyles';
import useFetchUser from '../../../../hooks/services/useFetchUser';
import useAppTheme from '../../../../hooks/theme/useApptheme';
import {calculatePostAge} from '../../../../utils/home/utils';
import {useTabNavigation} from '../../../../navigators/tabNavigator/TabNavigator';
import {FIREBASE_AUTH} from '../../../../services/FirebaseConfig';
import {PostTypes} from '../../../../services/ServiceTypes';
import LottieView from 'lottie-react-native';
import useHandlePostLikes from '../../../../hooks/posts/useHandlePostLikes';

const RenderItem = ({item}: {item: PostTypes}) => {
  const {
    isPending,
    optimisticallyLiked,
    handleLikePostFromImage,
    handleLikePostFromIcon,
  } = useHandlePostLikes();

  const iconAnimationRef = useRef<LottieView>(null);
  const heartAnimationRef = useRef<LottieView>(null);

  const didMount = useRef(true);

  const {data} = useFetchUser();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const isPostLiked =
    (isPending && optimisticallyLiked) ||
    Object.keys(item.likes || {}).some(id => id === userId);

  const profilePictureUri = data?.profilePictureUri;
  const username = data?.username;

  const navigation = useTabNavigation();

  const {
    paperTheme: {
      colors: {main},
    },
  } = useAppTheme();

  const postAge = calculatePostAge(item.timeStamp);

  useEffect(() => {
    if (didMount.current) {
      if (isPostLiked) iconAnimationRef.current?.play(30, 30);
      else iconAnimationRef.current?.play(0, 0);
      didMount.current = false;
    } else if (isPostLiked) {
      iconAnimationRef.current?.play(0, 45);
    } else {
      iconAnimationRef.current?.play(45);
    }
  }, [iconAnimationRef, isPostLiked]);

  const onPostImagePress = () => {
    heartAnimationRef.current?.play();
    iconAnimationRef.current?.play(15, 45);

    handleLikePostFromImage(item.timeStamp, isPostLiked);
  };

  const handleProfilePicPress = () => {
    navigation.navigate('Profile');
  };

  const source = profilePictureUri
    ? {
        uri: profilePictureUri,
      }
    : require('../../../../assets/instagram-avatar.png');

  return (
    <View style={styles.container}>
      <View style={styles.pairContainer}>
        <Pressable onPress={handleProfilePicPress}>
          <Image style={styles.avatar} source={source} />
        </Pressable>
        <Text style={styles.username}>{username}</Text>
      </View>

      <TapGestureHandler numberOfTaps={2} onActivated={onPostImagePress}>
        <View>
          <Image style={styles.postImage} source={{uri: item.postImageUri}} />

          <View style={styles.heartIconContainer}>
            <LottieView
              ref={heartAnimationRef}
              source={require('../../../../assets/heart-animation.json')}
              style={styles.heartIcon}
              loop={false}
            />
          </View>
        </View>
      </TapGestureHandler>

      <View style={styles.iconsContainer}>
        <Pressable onPress={() => handleLikePostFromIcon(item, isPostLiked)}>
          <LottieView
            ref={iconAnimationRef}
            source={require('../../../../assets/like-animation.json')}
            style={{width: 45, height: 45}}
            loop={false}
          />
        </Pressable>
        <IconButton
          icon="chat-outline"
          size={30}
          onPress={() => console.log('Pressed')}
          style={styles.iconButton}
        />
      </View>

      <View style={styles.pairContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.postText}>{item.postTitle}</Text>
      </View>

      <View style={styles.pairContainer}>
        <Pressable onPress={handleProfilePicPress}>
          <Image style={styles.commentAvatar} source={source} />
        </Pressable>

        <TextInput
          mode="outlined"
          placeholder="Add a comment..."
          outlineStyle={[styles.inputOutline, {backgroundColor: main}]}
          contentStyle={styles.inputContent}
          // onChangeText={}
        />
      </View>
      <View style={styles.pairContainer}>
        <Text>{postAge}</Text>
      </View>
    </View>
  );
};

export default RenderItem;
