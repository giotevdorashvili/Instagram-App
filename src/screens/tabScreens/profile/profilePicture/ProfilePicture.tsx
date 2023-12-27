import {
  Pressable,
  View,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-paper';

import {ProfilePictureProps} from '../../../../navigators/tabNavigator/TabNavigatorTyps';
import useUploadImage from '../../../../hooks/services/useUploadImage';
import {getImageFromDevice} from '../../../../utils/services/utils';

const ProfilePicture: React.FC<ProfilePictureProps> = ({imageUri}) => {
  const {mutate} = useUploadImage();

  const handleUploadImage = async () => {
    try {
      const BlobFile = await getImageFromDevice();

      mutate(BlobFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {imageUri ? (
        <Pressable onPress={handleUploadImage}>
          <Image
            style={styles.avatar}
            source={{
              uri: imageUri,
            }}
          />
        </Pressable>
      ) : (
        <Pressable onPress={handleUploadImage}>
          <ImageBackground
            source={require('../../../../assets/instagram-avatar.png')}
            imageStyle={styles.avatarStyle}
            style={styles.avatar}>
            <View style={styles.overlay} />

            <Icon source="camera" color="white" size={30} />
          </ImageBackground>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    borderRadius: 100,
  },
  avatar: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 100,
  },
});

export default ProfilePicture;
