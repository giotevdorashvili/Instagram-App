import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const FollowingCounter = () => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.text}>0</Text>
      <Text style={styles.text}>Following</Text>
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

export default FollowingCounter;
