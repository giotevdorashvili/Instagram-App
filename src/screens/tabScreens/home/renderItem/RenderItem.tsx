import {View, Pressable, Image} from 'react-native';
import {IconButton, TextInput, Text, Icon} from 'react-native-paper';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import styles from './RenderItemStyles';
import useFetchUser from '../../../../hooks/services/useFetchUser';
import useAppTheme from '../../../../hooks/theme/useApptheme';
import {calculatePostAge} from '../../../../utils/home/utils';
import {useTabNavigation} from '../../../../navigators/tabNavigator/TabNavigator';
import useAnimatePostLikes from '../../../../hooks/posts/useAnimatePostLikes';
import {FIREBASE_AUTH} from '../../../../services/FirebaseConfig';
import {PostTypes} from '../../../../services/ServiceTypes';

const RenderItem = ({item}: {item: PostTypes}) => {
  const {
    isPending,
    optimisticallyLiked,
    likeIconStyle,
    likeImageHeartStyle,
    handleLikePostFromIcon,
    handleLikePostFromImage,
  } = useAnimatePostLikes();

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
      colors: {main, likedPostColor},
    },
  } = useAppTheme();

  const postAge = calculatePostAge(item.timeStamp);

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

      <TapGestureHandler
        numberOfTaps={2}
        onActivated={() =>
          handleLikePostFromImage(item.timeStamp, isPostLiked)
        }>
        <View>
          <Image style={styles.postImage} source={{uri: item.postImageUri}} />
          <Animated.View style={likeImageHeartStyle}>
            <Icon source="cards-heart" size={100} color="white" />
          </Animated.View>
        </View>
      </TapGestureHandler>

      <View style={styles.iconsContainer}>
        <Animated.View style={likeIconStyle}>
          <IconButton
            size={30}
            style={styles.iconButton}
            icon={isPostLiked ? 'cards-heart' : 'cards-heart-outline'}
            iconColor={isPostLiked ? likedPostColor : undefined}
            onPress={() => handleLikePostFromIcon(item, isPostLiked)}
          />
        </Animated.View>
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
