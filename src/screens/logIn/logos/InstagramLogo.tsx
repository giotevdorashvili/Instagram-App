import {Image, StyleSheet} from 'react-native';

const InstagramLogo = () => {
  return (
    <Image
      style={styles.instaLogo}
      source={require('../../../assets/instagram-logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  instaLogo: {
    width: 65,
    height: 65,
    marginVertical: '20%',
  },
});

export default InstagramLogo;
