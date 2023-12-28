import {Image, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';

import {FIREBASE_SRORAGE} from '../../services/FirebaseConfig';

export const options: ImagePicker.ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
};

export const renderProfileTabIcon = (uri: string) => {
  return <Image style={styles.avatarIcon} source={{uri}} />;
};

export const getImageFromDevice = async () => {
  const results = await ImagePicker.launchImageLibrary(options);

  if (results.didCancel) return;

  const uri = results?.assets?.[0].uri;

  const response = await fetch(uri!);

  const BlobFile = await response.blob();

  return {uri, BlobFile};
};

export const uploadImageToFirebase = async (BlobFile: Blob, uid: string) => {
  const storageRef = ref(FIREBASE_SRORAGE, `images-avatar-${uid}`);

  return await uploadBytes(storageRef, BlobFile);
};

export const getImageFromFirebase = async (uid: string) => {
  return await getDownloadURL(ref(FIREBASE_SRORAGE, `images-avatar-${uid}`));
};

const styles = StyleSheet.create({
  avatarIcon: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
});
