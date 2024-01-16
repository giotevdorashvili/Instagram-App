import {View, Pressable, Image} from 'react-native';
import {IconButton, TextInput, Text} from 'react-native-paper';

import useFetchUser from '../../../../hooks/services/useFetchUser';
import useAppTheme from '../../../../hooks/theme/useApptheme';
import {calculatePostAge} from '../../../../utils/home/utils';
import {useTabNavigation} from '../../../../navigators/tabStack/TabStack';
import {PostTypes} from '../HomeTypes';
import styles from './RenderItemStyles';

const RenderItem = ({item}: {item: PostTypes}) => {
  const {data} = useFetchUser();

  const profilePictureUri = data?.profilePictureUri;
  const username = data?.username;

  const navigation = useTabNavigation();

  const {
    paperTheme: {
      colors: {main},
    },
  } = useAppTheme();

  const postAge = calculatePostAge(item.timeStamp);

  const handleImagePress = () => {
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
        <Pressable onPress={handleImagePress}>
          <Image style={styles.avatar} source={source} />
        </Pressable>
        <Text style={styles.username}>{username}</Text>
      </View>

      <Image style={styles.postImage} source={{uri: item.postImageUri}} />

      <View style={styles.iconsContainer}>
        <IconButton
          icon="cards-heart-outline"
          size={30}
          onPress={() => console.log('Pressed')}
          style={styles.iconButton}
        />
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
        <Pressable onPress={handleImagePress}>
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
