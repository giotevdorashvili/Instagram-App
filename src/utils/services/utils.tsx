import * as ImagePicker from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';

import {FIREBASE_SRORAGE} from '../../services/FirebaseConfig';

export const options: ImagePicker.ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
};

export const getLocalImageUriFromDevice = async () => {
  const results = await ImagePicker.launchImageLibrary(options);

  if (results.didCancel) return;

  return results?.assets?.[0].uri;
};

export const transformLocalUriToBlob = async (uri: string) => {
  const response = await fetch(uri!);

  return await response.blob();
};

export const uploadImageToFirebaseStorage = async (
  storageImageName: string,
  BlobFile: Blob,
) => {
  const storageRef = ref(FIREBASE_SRORAGE, storageImageName);

  storageRef.bucket;
  return await uploadBytes(storageRef, BlobFile);
};

export const getImageFromFirebaseStorage = async (storageImageName: string) => {
  return await getDownloadURL(ref(FIREBASE_SRORAGE, storageImageName));
};
