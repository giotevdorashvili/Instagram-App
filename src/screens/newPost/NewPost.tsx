import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {NewPostPropTypes} from '../../navigators/rootNavigator/RootNavigatorTypes';
import StatusBar from '../../components/statusBar/StatusBar';
import {Button, TextInput} from 'react-native-paper';
import useAppTheme from '../../hooks/theme/useApptheme';
import {useState} from 'react';

const NewPost: React.FC<NewPostPropTypes> = ({route}) => {
  const [postTitle, setPostTitle] = useState<string>('');

  const {
    paperTheme: {
      colors: {main, lightBlue},
    },
  } = useAppTheme();

  const styles = getStyles(main, lightBlue);

  const handleSharePostPress = () => {
    console.log(postTitle);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Image
        source={{uri: route.params.imageUri}}
        style={styles.imagePreview}
      />

      <TextInput
        mode="outlined"
        placeholder="Write a caption..."
        outlineStyle={styles.inputOutline}
        onChangeText={setPostTitle}
      />

      <Button
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
