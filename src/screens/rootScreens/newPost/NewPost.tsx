import {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootScreenProps} from '../../../navigators/rootStackNavigator/RootStackTypes';
import StatusBar from '../../../components/statusBar/StatusBar';
import {Button, Text, TextInput} from 'react-native-paper';
import useAppTheme from '../../../hooks/theme/useApptheme';
import useCreatePost from '../../../hooks/services/useCreatePost';
import {FIREBASE_AUTH} from '../../../services/FirebaseConfig';
import {alertUidError} from '../../../utils/generic/utils';
import {
  getImageFromFirebaseStorage,
  transformLocalUriToBlob,
  uploadImageToFirebaseStorage,
} from '../../../utils/services/utils';

const NewPost: React.FC<RootScreenProps<'NewPost'>> = ({route}) => {
  const [postTitle, setPostTitle] = useState<string>('');

  const {mutate, error, status} = useCreatePost();

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const {
    paperTheme: {
      colors: {main, lightBlue},
    },
  } = useAppTheme();

  const styles = getStyles(main, lightBlue);

  const imageUri = route.params.imageUri;

  const handleSharePostPress = async () => {
    const timeStamp = Date.now();

    const blobFile = await transformLocalUriToBlob(imageUri!);

    if (!userId) return alertUidError();

    const storageImageName = `images-post-${userId}-${timeStamp}`;

    const res = await uploadImageToFirebaseStorage(storageImageName, blobFile);

    if (!res.ref) return;

    const postImageUri = await getImageFromFirebaseStorage(storageImageName);

    mutate({
      userId: userId!,
      postTitle,
      postImageUri,
      timeStamp,
    });
  };

  if (error) {
    return <Text style={styles.container}>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Image source={{uri: imageUri}} style={styles.imagePreview} />

      <TextInput
        mode="outlined"
        placeholder="Write a caption..."
        outlineStyle={styles.inputOutline}
        onChangeText={setPostTitle}
      />

      <Button
        loading={status === 'pending'}
        textColor="white"
        mode="contained"
        style={styles.button}
        onPress={handleSharePostPress}
        contentStyle={styles.buttonContent}>
        Share
      </Button>
    </SafeAreaView>
  );
};

const getStyles = (main: string, lightBlue: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: main,
    },
    imagePreview: {
      width: 300,
      height: 300,
      alignSelf: 'center',
    },
    inputOutline: {
      borderWidth: 0,
      backgroundColor: main,
    },
    button: {
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: lightBlue,
    },
    buttonContent: {
      paddingVertical: 3,
    },
  });
};

export default NewPost;
