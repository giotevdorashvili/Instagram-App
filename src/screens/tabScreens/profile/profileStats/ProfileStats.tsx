import {View, StyleSheet} from 'react-native';
import ProfileStatsLabel from './profileStatsLabel/ProfileStatsLabel';

const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <ProfileStatsLabel label="Posts" value={0} />
      <ProfileStatsLabel label="Followers" value={0} />
      <ProfileStatsLabel label="Following" value={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default ProfileStats;
