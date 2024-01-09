import {View, StyleSheet} from 'react-native';

import PostsCounter from './postsCounter/PostsCounter';
import FollowersCounter from './followersCouner/FollowersCounter';
import FollowingCounter from './followingCounter/FollowingCounter';

const ProfileCounter = () => {
  return (
    <View style={styles.container}>
      <PostsCounter />
      <FollowersCounter />
      <FollowingCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default ProfileCounter;
