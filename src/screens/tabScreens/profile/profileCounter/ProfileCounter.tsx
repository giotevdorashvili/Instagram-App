import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const ProfileCounter = () => {
  return (
    <View style={styles.countersContainer}>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>Posts</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>Followers</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countersContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  counterContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProfileCounter;
