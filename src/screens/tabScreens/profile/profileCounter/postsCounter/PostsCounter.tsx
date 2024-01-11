import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

// import {ActivityIndicator} from 'react-native-paper';
// import useFetchPosts from '../../../../../hooks/services/useFetchUserPosts';

const PostsCounter = () => {
  // const {data: posts, isLoading} = useFetchPosts();

  // console.log('xxxxxxxxx', posts?.pages[0].data.length);

  // if (isLoading) return <ActivityIndicator />;

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.text}>
        {/* {posts ? Object?.keys?.(posts)?.length : 0} */}
        100000
      </Text>
      <Text style={styles.text}>Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default PostsCounter;
