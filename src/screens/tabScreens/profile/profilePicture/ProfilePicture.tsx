import {useEffect, useState} from 'react';
import {
  Pressable,
  View,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {Icon} from 'react-native-paper';

import {FIREBASE_SRORAGE} from '../../../../services/FirebaseConfig';

const options: ImagePicker.ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
};

const fetchProfilePicUri = async () => {
  return await getDownloadURL(ref(FIREBASE_SRORAGE, 'images-avatar.jpg'));
};

const ProfilePicture = () => {
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setImage(await fetchProfilePicUri());
    })();
  }, []);

  const handleUploadImage = async () => {
    try {
      const storageRef = ref(FIREBASE_SRORAGE, 'images-avatar.jpg');

      const results = await ImagePicker.launchImageLibrary(options);
      const response = await fetch(results?.assets?.[0].uri!);
      const blob = await response.blob();
      const snapshot = await uploadBytes(storageRef, blob);

      if (snapshot.metadata.name) {
        setImage(await fetchProfilePicUri());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {image ? (
        <Pressable onPress={handleUploadImage}>
          <Image
            style={styles.avatar}
            source={{
              uri: image,
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
