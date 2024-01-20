import {View, Pressable, Image} from 'react-native';
import {IconButton, TextInput, Text, Icon} from 'react-native-paper';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import useFetchUser from '../../../../hooks/services/useFetchUser';
import useAppTheme from '../../../../hooks/theme/useApptheme';
import {calculatePostAge} from '../../../../utils/home/utils';
import {useTabNavigation} from '../../../../navigators/tabStack/TabStack';
import {PostTypes} from '../HomeTypes';
import styles from './RenderItemStyles';
import useAnimatePostLikes from '../../../../hooks/posts/useAnimatePostLikes';

const RenderItem = ({item}: {item: PostTypes}) => {
  const {
    postLiked,
    handleLikePostFromImage,
    handleLikePostFromIcon,
    likeImageHeartStyle,
    likeIconStyle,
  } = useAnimatePostLikes();

  const {data} = useFetchUser();

  const profilePictureUri = data?.profilePictureUri;
  const username = data?.username;

  const navigation = useTabNavigation();

  const {
    paperTheme: {
      colors: {main, likedPost},
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

      <TapGestureHandler numberOfTaps={2} onActivated={handleLikePostFromImage}>
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
            icon={postLiked ? 'cards-heart' : 'cards-heart-outline'}
            size={30}
            iconColor={postLiked ? likedPost : undefined}
            onPress={handleLikePostFromIcon}
            style={styles.iconButton}
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
