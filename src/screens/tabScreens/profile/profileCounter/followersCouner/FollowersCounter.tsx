import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const FollowersCounter = () => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.text}>0</Text>
      <Text style={styles.text}>Followers</Text>
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

export default FollowersCounter;
