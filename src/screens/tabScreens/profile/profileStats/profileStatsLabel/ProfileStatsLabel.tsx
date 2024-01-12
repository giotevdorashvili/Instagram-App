import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const ProfileStatsLabel = ({
  label,
  value = 0,
}: {
  label: string;
  value: number | string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProfileStatsLabel;
