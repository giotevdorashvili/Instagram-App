import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const NoPostsTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTitle}>Welcome to Instagram</Text>
      <Text style={styles.secondTitle}>
        Follow people to start seeing the photos and videos they share.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 35,
    gap: 10,
  },
  firstTitle: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '700',
  },
  secondTitle: {
    textAlign: 'center',
  },
});

export default NoPostsTitle;
